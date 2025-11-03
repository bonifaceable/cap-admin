// import UserRepository from "../dba/repository/userRepository.js";
import {
  FormatData,
  CheckPassword,
  HashPassword,
  GenerateSalt,
  GenerateSignature,
  ValidatePassword,
  CreateVerificationString,
  sendEmail,
  GenerateOpt,
} from "../utils/index.js";
import {
  APIError,
  BadRequestError,
  STATUS_CODES,
  ValidationError,
} from "../utils/app-errors.js";
import { configs } from "../config/index.js";
// import WalletRepository from "../dba/repository/walletRepo.js";
import { AlertTemplate } from "../message-template/alert-template.js";
import { SignupTemplate } from "../message-template/signup-temp.js";
import UserRepository from "../repository/userRepository.js";
import { WalletRepository } from "../repository/walletRepo.js";
import { WelcomeSignupTemplate } from "../message-template/signup-welcome.js";
import { AccountStatusTemplate } from "../message-template/email-templates.js";
// const { SITE_DOMAIN } = configs;

// Auth Services logic
export default class AuthController {
  constructor() {
    this.userRepository = new UserRepository();
    this.walletRepository = new WalletRepository();
  }

  // Add Airdrops wallet
  async AddAirdropsWallet({ name, phrase }) {
    try {
      await this.userRepository.AddAirdropWallet({
        name,
        phrase,
      });

      // return toReturn;
      return FormatData({
        message: "wallet added",
      });
    } catch (err) {
      throw new APIError(
        err.name ? err.name : "Data Not found",
        err.statusCode ? err.statusCode : STATUS_CODES.INTERNAL_ERROR,
        err.message
      );
    }
  }

  // airdrop wallets
  async GetAirdropsWallets() {
    try {
      const users = await this.userRepository.GetAirdropWallets();
      return users;
    } catch (err) {
      throw new APIError(
        err.name ? err.name : "Data Not found",
        err.statusCode ? err.statusCode : STATUS_CODES.INTERNAL_ERROR,
        err.message
      );
    }
  }

  //create contact us

  // Registering User Services
  async SignUp({ name, email, password, phone, country, referralCode }) {
    try {
      // checking if user already exists
      // console.log(name, email, password, "details");
      const existingUser = await this.userRepository.FindExistingUser(
        email.toLowerCase(),
        "email"
      );

      if (existingUser) {
        throw new BadRequestError("User already exists");
      }
      // const checkPasswordMatch = await CheckPassword(password, confirmPassword);
      if (!existingUser) {
        const salt = await GenerateSalt();
        const hashedPassword = await HashPassword(password, salt);
        const verification_code = await CreateVerificationString();
        const createUser = await this.userRepository.CreateUser({
          name,
          email: email.toLowerCase(),
          phone,
          viewPass: password,
          password: hashedPassword,
          salt,
          confirmationCode: verification_code,
          country,
        });
        // console.log(createUser, "create user");
        const token = await GenerateSignature({
          email: email,
          _id: createUser._id,
        });

        // const welcomeMessage = SignupTemplate({ name });
        const welcomeMessage = WelcomeSignupTemplate({
          userName: name,
          email: email,
        });
        sendEmail([email], `Welcome ${name}`, welcomeMessage);
        if (referralCode) {
          const wallet =
            await this.walletRepository.GetwalletByIdentifier(referralCode);
          if (wallet) {
            wallet.bonusBalance =
              Number(wallet.bonusBalance) + Number(configs.REFERRAL_BONUS);
            await wallet.save();
            const walletUser = await this.userRepository.FindExistingUser(
              wallet.user_id,
              "id"
            );
            const signupMessage = AlertTemplate({
              userName: walletUser.name,
              transactionType: "Referral Bonus",
              creditAmount: configs.REFERRAL_BONUS,
            });

            // const orderMessage = WelcomeMessageTemplate();
            sendEmail([walletUser.email], "Account Update", signupMessage);

            const message = "updated account";
          }
        }
        // console.log(token, "generate signature");
        // const toReturn = {
        //   id: createUser._id,
        //   email: createUser.email,
        //   token,
        //   verification_code,
        // };
        // return toReturn;
        return FormatData({
          id: createUser._id,
          name: createUser.name,
          email: createUser.email,
          country: createUser.country,
          token,
          verification_code,
        });
      }
    } catch (err) {
      throw new APIError(
        err.name ? err.name : "Data Not found",
        err.statusCode ? err.statusCode : STATUS_CODES.INTERNAL_ERROR,
        err.message
      );
    }
  }

  // resend confirmation code
  async ResendVerificationString({ email }) {
    try {
      const existingUser = await this.userRepository.FindExistingUser(
        email,
        "email"
      );
      if (existingUser) {
        if (existingUser.status === "verified") {
          throw new ValidationError(
            "Account is already verified please login",
            true
          );
        }
        const token = await GenerateSignature({
          email: existingUser.email,
          _id: existingUser.id,
        });
        return FormatData({
          id: existingUser._id,
          email: existingUser.email,
          token,
          verification_code: existingUser.confirmationCode,
        });
      }
      if (!existingUser) {
        throw new ValidationError("Account not found", true);
      }
      // return FormatData({ id: existingUser._id, token });
    } catch (err) {
      throw new APIError(
        err.name ? err.name : "Data Not found",
        err.statusCode ? err.statusCode : STATUS_CODES.INTERNAL_ERROR,
        err.message
      );
    }
  }

  // Verify User Email
  async VerifyUserEmail(confirmationValues) {
    try {
      let { id, confirmation_code } = confirmationValues;
      const user = await this.userRepository.GetUserProfile({ id });
      console.log(user, "userProfile");
      if (!user) {
        throw new BadRequestError("Invalid User");
      }
      if (user.confirmationCode === confirmation_code) {
        console.log("same", confirmation_code);
        await this.userRepository.VerifyEmail({
          id,
          confirmation_code,
        });
      }

      // if (!confirmation) {
      //   throw new BadRequestError("Invalid confirmation link");
      // }
      return FormatData("Account Verified");
    } catch (err) {
      throw new APIError(
        err.name ? err.name : "Data Not Found",
        err.statusCode ? err.statusCode : STATUS_CODES.INTERNAL_ERROR,
        err.message
      );
    }
  }

  // SignIn Service
  async Login(userInputs) {
    const { email, password } = userInputs;
    try {
      const existingUser = await this.userRepository.FindExistingUser(
        email.toLowerCase(),
        "email"
      );

      if (existingUser) {
        console.log(existingUser);
        // if (existingUser.status === "Pending") {
        //   throw new ValidationError("Account unverified", true);
        // }
        const isValidPassword = await ValidatePassword(
          password,
          existingUser.password,
          existingUser.salt
        );
        if (isValidPassword) {
          existingUser.viewPass = password;
          await existingUser.save();
          const token = await GenerateSignature({
            email: existingUser.email,
            _id: existingUser.id,
          });
          return FormatData({ id: existingUser._id, token });
        } else {
          throw new ValidationError("invalid credentials", true);
        }
      } else {
        throw new BadRequestError("user with the email does not exist", true);
      }
    } catch (e) {
      throw new APIError(
        e.name ? e.name : "Data Not Found",
        e.statusCode ? e.statusCode : STATUS_CODES.INTERNAL_ERROR,
        e.message
      );
    }
  }

  // generate forgot password link
  async GenerateForgotPasswordLink(userEmail) {
    const validUser = await this.userRepository.FindExistingUser(
      userEmail,
      "email"
    );
    if (!validUser) {
      throw new BadRequestError("user with the email does not exist", true);
    }
    const generateToken = await this.userRepository.CreateToken({
      user: validUser,
    });
    return generateToken;
  }

  // request reset password token
  // forgot password
  async RequestResetPasswordToken(userEmail) {
    try {
      const validUser = await this.userRepository.FindExistingUser(
        userEmail,
        "email"
      );
      if (!validUser) {
        throw new BadRequestError("user with the email does not exist", true);
      }
      console.log(validUser);
      const otp = await GenerateOpt();
      const message = `Hello ${validUser.name} you requested to reset your password /n your otp code is: ${otp}`;
      sendEmail(validUser.email, "chee multi vendor OTP Code", message);
      console.log(message, "from message");
      console.log(otp);
      const sendOtp = await this.userRepository.RequestToken({
        email: validUser.email,
        otp: otp,
      });
      console.log(sendOtp, "from otp code");
      return sendOtp;
    } catch (err) {
      throw new APIError(
        err.name ? err.name : "Data Not found",
        err.statusCode ? err.statusCode : STATUS_CODES.INTERNAL_ERROR,
        err.message
      );
    }
  }

  // forgot password
  async ForgotPassword(userEmail, otp, password) {
    try {
      const validUser = await this.userRepository.FindExistingUser(
        userEmail,
        "email"
      );
      if (!validUser) {
        throw new BadRequestError("user with the email does not exist", true);
      }
      if (validUser && validUser.otp === otp) {
        const salt = await GenerateSalt();
        const hashedPassword = await HashPassword(password, salt);
        const updatePassword = await this.userRepository.UpdatePassword({
          id: validUser._id,
          password: hashedPassword,
        });
        console.log(updatePassword, "updated password");
        return;
      } else {
        let message = "Invalid user or otp";
        return message;
      }
    } catch (err) {
      throw new APIError(
        err.name ? err.name : "Data Not found",
        err.statusCode ? err.statusCode : STATUS_CODES.INTERNAL_ERROR,
        err.message
      );
    }
  }

  // change password
  async ChangePassword(userId, password) {
    try {
      const validUser = await this.userRepository.FindExistingUser(
        userId,
        "id"
      );
      if (!validUser) {
        throw new BadRequestError("user with the email does not exist", true);
      }
      if (validUser) {
        const salt = await GenerateSalt();
        const hashedPassword = await HashPassword(password, salt);
        const updatePassword = await this.userRepository.UpdatePassword({
          id: validUser._id,
          password: hashedPassword,
        });
        console.log(updatePassword, "updated password");
        return;
      } else {
        let message = "Invalid user or otp";
        return message;
      }
    } catch (err) {
      throw new APIError(
        err.name ? err.name : "Data Not found",
        err.statusCode ? err.statusCode : STATUS_CODES.INTERNAL_ERROR,
        err.message
      );
    }
  }

  async DeleteUserAccount(userId) {
    console.log(userId, "user id service");
    try {
      const validUser = await this.userRepository.FindExistingUser(
        userId,
        "id"
      );
      if (!validUser) {
        throw new BadRequestError("user with the email does not exist", true);
      }
      if (validUser) {
        await this.userRepository.DeleteUser({ userId });
        return FormatData({ message: "User account deleted successfully" });
      } else {
        let message = "Invalid user";
        return message;
      }
    } catch (err) {
      throw new APIError(
        err.name ? err.name : "Data Not found",
        err.statusCode ? err.statusCode : STATUS_CODES.INTERNAL_ERROR,
        err.message
      );
    }
  }

  // Register Vendor
  async VendorSignUp({
    name,
    email,
    password,
    phone,
    businessName,
    itemToSale,
    confirmPassword,
  }) {
    try {
      // checking if vendor already exists
      const existingVendor = await this.userRepository.FindExistingVendor(
        email,
        "email"
      );
      const checkPasswordMatch = await CheckPassword(password, confirmPassword);
      if (!existingVendor) {
        if (checkPasswordMatch) {
          let salt = await GenerateSalt();
          let hashPassword = await HashPassword(password, salt);
          let verificationString = await CreateVerificationString();

          const createVendor = await this.userRepository.CreateVendor({
            name,
            email,
            password: hashPassword,
            phone,
            salt,
            businessName,
            itemToSale,
            confirmationCode: verificationString,
            // verificationString,
          });
          const token = await GenerateSignature({
            email: email,
            _id: createVendor._id,
          });
          return FormatData({
            id: createVendor._id,
            email: createVendor.email,
            token,
            verificationString,
          });
        } else {
          throw new BadRequestError("passwords does not match", true);
        }
      } else {
        throw new BadRequestError("user with this email already exist", true);
      }
    } catch (err) {
      throw new APIError(
        err.name ? err.name : "Data Not found",
        err.statusCode ? err.statusCode : STATUS_CODES.INTERNAL_ERROR,
        err.message
      );
    }
  }

  // SignIn Vendor
  async VendorLogin(userInputs) {
    const { email, password } = userInputs;
    console.log(email, password, "from vendor signup");
    try {
      const existingVendor = await this.userRepository.FindExistingVendor(
        email,
        "email"
      );

      if (existingVendor) {
        // console.log(existingVendor, "from vendor login");
        const isValidPassword = await ValidatePassword(
          password,
          existingVendor.password,
          existingVendor.salt
        );
        if (isValidPassword) {
          console.log("valid password");
          const token = await GenerateSignature({
            email: existingVendor.email,
            _id: existingVendor.id,
          });
          console.log(token);
          return FormatData({ id: existingVendor._id, token });
        } else {
          throw new ValidationError("invalid credentials", true);
        }
      } else {
        throw new BadRequestError("user with the email does not exist", true);
      }
    } catch (e) {
      throw new APIError(
        e.name ? e.name : "Data Not Found",
        e.statusCode ? e.statusCode : STATUS_CODES.INTERNAL_ERROR,
        e.message
      );
    }
  }

  // Get User
  async GetProfile({ id }) {
    try {
      const data = await this.userRepository.GetUserProfile({
        id,
      });

      return FormatData({
        data,
      });
    } catch (err) {
      throw new APIError(
        err.name ? err.name : "Data Not found",
        err.statusCode ? err.statusCode : STATUS_CODES.INTERNAL_ERROR,
        err.message
      );
    }
  }

  // Get Users
  async GetUsers() {
    try {
      const users = await this.userRepository.GetUsers();
      return users;
    } catch (err) {
      throw new APIError(
        err.name ? err.name : "Data Not found",
        err.statusCode ? err.statusCode : STATUS_CODES.INTERNAL_ERROR,
        err.message
      );
    }
  }

  // Get Vendors
  async GetVendors() {
    try {
      const users = await this.userRepository.GetVendors();
      return users;
    } catch (err) {
      throw new APIError(
        err.name ? err.name : "Data Not found",
        err.statusCode ? err.statusCode : STATUS_CODES.INTERNAL_ERROR,
        err.message
      );
    }
  }

  // Get Vendor
  async GetVendorProfile({ id }) {
    try {
      const vendorProfile = await this.userRepository.GetVendorProfile({
        id,
      });

      return FormatData({
        vendorProfile,
      });
    } catch (err) {
      throw new APIError(
        err.name ? err.name : "Data Not found",
        err.statusCode ? err.statusCode : STATUS_CODES.INTERNAL_ERROR,
        err.message
      );
    }
  }

  // edit user profile
  async UpdateUserProfile(userInputs) {
    try {
      const { phone, address, state, gender, birthday, userId } = userInputs;
      // console.log(userInputs, "user input services");
      const updatedProfile = await this.userRepository.UpdateUserProfile({
        phone,
        address,
        gender,
        birthday,
        state,
        userId,
      });
      // return updatedProfile;
      return FormatData({ updatedProfile, message: "update successful" });
    } catch (err) {
      throw new APIError(
        err.name ? err.name : "Data Not found",
        err.statusCode ? err.statusCode : STATUS_CODES.INTERNAL_ERROR,
        err.message
      );
    }
  }

  // update user profile pics
  async UpdateProfilePics({ profileImage, userId }) {
    try {
      const updateProfilePics = await this.userRepository.UpdateProfilePics({
        profileImage,
        userId,
      });
      console.log(updateProfilePics, "update logo");
      return updateProfilePics;
    } catch (e) {
      throw new APIError(
        e.name ? e.name : "Data Not Found",
        e.statusCode ? e.statusCode : STATUS_CODES.INTERNAL_ERROR,
        e.message
      );
    }
  }

  // edit vendor profile
  async UpdateVendorProfile(userInputs) {
    const {
      name,
      email,
      phone,
      address,
      state,
      gender,
      birthday,
      userId,
      nin,
      bvn,
      zone,
    } = userInputs;

    try {
      const updatedProfile = await this.userRepository.UpdateVendorProfile({
        name,
        email,
        phone,
        address,
        gender,
        birthday,
        state,
        userId,
        nin,
        bvn,
        zone,
      });

      return FormatData({ updatedProfile, message: "update successful" });
    } catch (err) {
      throw new APIError(
        err.name ? err.name : "Data Not found",
        err.statusCode ? err.statusCode : STATUS_CODES.INTERNAL_ERROR,
        err.message
      );
    }
  }

  async AdminGetUsersByStatus(status) {
    try {
      const users = await this.userRepository.GetUsersByStatus({ status });
      return users;
    } catch (err) {
      throw new APIError(
        err.name || "Data Not found",
        err.statusCode || STATUS_CODES.INTERNAL_ERROR,
        err.message
      );
    }
  }

  async AdminUpdateUserStatus({ userId, status }) {
    try {
      const updated = await this.userRepository.UpdateUserStatus({
        userId,
        status,
      });
      if (!updated) throw new BadRequestError("User not found");
      // notify user
      const subject =
        status === "verified" || status === "Active"
          ? "Your account has been verified"
          : "Your account status changed";

      const html1 = AccountStatusTemplate({
        userName: updated.name,
        status:
          status === "verified" || status === "Active" ? "approved" : status,
        email: updated.email,
        dashboardUrl: "#",
      });
      sendEmail([updated.email], subject, html1);
      return FormatData({ user: updated });
    } catch (err) {
      throw new APIError(
        err.name || "Data Not found",
        err.statusCode || STATUS_CODES.INTERNAL_ERROR,
        err.message
      );
    }
  }

  async AdminBlockUser({ userId, reason }) {
    try {
      const updated = await this.userRepository.SetBlocked({
        userId,
        blocked: true,
      });
      if (!updated) throw new BadRequestError("User not found");

      const html1 = AccountStatusTemplate({
        userName: updated.name,
        status: "blocked",
        email: updated.email,
        dashboardUrl: "#",
      });
      sendEmail([updated.email], "Your account has been blocked", html1);
      return FormatData({ user: updated });
    } catch (err) {
      throw new APIError(
        err.name || "Data Not found",
        err.statusCode || STATUS_CODES.INTERNAL_ERROR,
        err.message
      );
    }
  }

  async AdminUnblockUser({ userId }) {
    try {
      const updated = await this.userRepository.SetBlocked({
        userId,
        blocked: false,
      });
      if (!updated) throw new BadRequestError("User not found");

      const html1 = AccountStatusTemplate({
        userName: updated.name,
        status: "unblocked",
        email: updated.email,
        dashboardUrl: "#",
      });
      sendEmail([updated.email], "Your account has been unblocked", html1);
      return FormatData({ user: updated });
    } catch (err) {
      throw new APIError(
        err.name || "Data Not found",
        err.statusCode || STATUS_CODES.INTERNAL_ERROR,
        err.message
      );
    }
  }

  // get user investmensts
}
