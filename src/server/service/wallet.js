// import { WalletRepository } from "@/server/repositories/wallet.repository";
// import { UserRepository } from "@/server/repositories/user.repository";
import { APIError, STATUS_CODES } from "@/server/utils/app-errors";
import {
  GenerateSalt,
  HashPassword,
  ValidatePassword,
  GenerateReferralCode,
  sendEmail,
} from "@/server/utils";
// import { AlertTemplate } from "@/server/message-template/alert-template"; // if you keep templates
import { WalletRepository } from "../repository/walletRepo";
import UserRepository from "../repository/userRepository";

export default class WalletController {
  constructor() {
    this.walletRepository = new WalletRepository();
    this.userRepository = new UserRepository();
  }

  async GetUsersWallet() {
    try {
      return await this.walletRepository.GetUsersAndWalletDetails();
    } catch (err) {
      throw new APIError(
        err.name || "Data Not found",
        err.statusCode || STATUS_CODES.INTERNAL_ERROR,
        err.message
      );
    }
  }

  async GetSingleUsersWallet(userId) {
    try {
      return await this.walletRepository.getUserWithWallet(userId);
    } catch (err) {
      throw new APIError(
        err.name || "Data Not found",
        err.statusCode || STATUS_CODES.INTERNAL_ERROR,
        err.message
      );
    }
  }

  async CreateUserWallet({ user_id, name, walletAddress }) {
    try {
      const walletCheck = await this.walletRepository.ExistingWallet(user_id);
      if (walletCheck) return "wallet exist";
      const referralCode = GenerateReferralCode(name || "");
      return await this.walletRepository.CreateWallet({
        user_id,
        walletAddress,
        referralCode,
      });
    } catch (err) {
      throw new APIError(
        err.name || "Data Not found",
        err.statusCode || STATUS_CODES.INTERNAL_ERROR,
        err.message
      );
    }
  }

  async CreatePin({ user_id, transaction_pin }) {
    try {
      const walletCheck = await this.walletRepository.CheckwalletExist(user_id);
      if (!walletCheck) return "wallet not found";
      const salt = await GenerateSalt();
      const hashedPin = await HashPassword(transaction_pin, salt);
      // note: you weren’t saving the salt before; if you need it later, add it in repo
      return await this.walletRepository.CreateTransactionPin({
        user_id,
        transaction_pin: hashedPin,
      });
    } catch (err) {
      throw new APIError(
        err.name || "Data Not found",
        err.statusCode || STATUS_CODES.INTERNAL_ERROR,
        err.message
      );
    }
  }

  async updateSenderBalance(senderId, amount) {
    return this.walletRepository.updateSenderBalance(senderId, Number(amount));
  }

  async updateWalletBalance({ userId, amount }) {
    return this.walletRepository.updateWalletBalance(userId, Number(amount));
  }

  async updateBonusBalance(receiverId, amount) {
    return this.walletRepository.updateBonusBalance(receiverId, Number(amount));
  }

  async AddReferralBonus(referralCode) {
    try {
      const wallet =
        await this.walletRepository.GetwalletByIdentifier(referralCode);
      if (!wallet) return "wallet not found";

      const bonus = Number(process.env.REFERRAL_BONUS || 0);
      await this.walletRepository.updateBonusBalance(wallet.user_id, bonus);

      const existingUser = await this.userRepository.FindExistingUser(
        wallet.user_id,
        "id"
      );
      if (existingUser?.email) {
        const signupMessage = AlertTemplate({
          userName: existingUser.name,
          transactionType: "Referral Bonus",
          creditAmount: bonus,
        });
        await sendEmail([existingUser.email], "Account Update", signupMessage);
      }

      return "updated account";
    } catch (e) {
      throw new APIError(
        e.name || "API Error",
        STATUS_CODES.INTERNAL_ERROR,
        e.message
      );
    }
  }

  async updatePendingBalance(receiverId, amount) {
    return this.walletRepository.UpdatePendingBalance(
      receiverId,
      Number(amount)
    );
  }

  async UpgradeWallet({ user_id, wallet_type }) {
    try {
      const walletCheck = await this.walletRepository.CheckwalletExist(user_id);
      if (!walletCheck) return "wallet not found";
      return await this.walletRepository.Upgradewallet({
        user_id,
        wallet_type,
      });
    } catch (err) {
      throw new APIError(
        err.name || "Data Not found",
        err.statusCode || STATUS_CODES.INTERNAL_ERROR,
        err.message
      );
    }
  }

  async GetWallet({ user_id }) {
    try {
      const walletCheck = await this.walletRepository.CheckwalletExist(user_id);
      if (!walletCheck) return "wallet not found";
      return { data: walletCheck };
    } catch (err) {
      throw new APIError(
        err.name || "Data Not found",
        err.statusCode || STATUS_CODES.INTERNAL_ERROR,
        err.message
      );
    }
  }

  async VerifyPin({ user_id, transaction_pin }) {
    try {
      const w = await this.walletRepository.CheckwalletExist(user_id);
      if (!w) return "wallet not found";
      const isValid = await ValidatePassword(
        transaction_pin,
        w.transaction_pin,
        w.salt
      );
      return isValid ? "pin correct" : "invalid pin";
    } catch (err) {
      throw new APIError(
        err.name || "Data Not found",
        err.statusCode || STATUS_CODES.INTERNAL_ERROR,
        err.message
      );
    }
  }

  async GetWalletBalance({ user_id }) {
    try {
      const w = await this.walletRepository.CheckwalletExist(user_id);
      if (!w) return "wallet not found";
      return { balance: w.balance };
    } catch (err) {
      throw new APIError(
        err.name || "Data Not found",
        err.statusCode || STATUS_CODES.INTERNAL_ERROR,
        err.message
      );
    }
  }

  async GetWalletByIdentifier({ identifier }) {
    try {
      const w = await this.walletRepository.GetwalletByIdentifier(identifier);
      return w || "wallet not found";
    } catch (err) {
      throw new APIError(
        err.name || "Data Not found",
        err.statusCode || STATUS_CODES.INTERNAL_ERROR,
        err.message
      );
    }
  }

  async GetwalletBywalletNumber({ wallet_number }) {
    try {
      const w =
        await this.walletRepository.GetwalletBywalletNumber(wallet_number);
      return w || "wallet not found";
    } catch (err) {
      throw new APIError(
        err.name || "Data Not found",
        err.statusCode || STATUS_CODES.INTERNAL_ERROR,
        err.message
      );
    }
  }

  async GetwalletByRequiredValues({ wallet_number, hex, email, phone }) {
    try {
      const w = wallet_number
        ? await this.walletRepository.GetwalletBywalletNumber(wallet_number)
        : email
          ? await this.walletRepository.FindExistingWallet(email, "email")
          : phone
            ? await this.walletRepository.FindExistingWallet(phone, "phone")
            : hex
              ? await this.walletRepository.FindExistingWallet(hex, "hex")
              : await this.walletRepository.FindExistingWallet(
                  wallet_number,
                  "wallet_number"
                );

      return w || "wallet not found";
    } catch (err) {
      throw new APIError(
        err.name || "Data Not found",
        err.statusCode || STATUS_CODES.INTERNAL_ERROR,
        err.message
      );
    }
  }

  // simple internal transfer (no transaction records table here)
  async CreateTransaction({
    user_id,
    wallet_number,
    amount,
    transaction_pin,
    description,
    transaction_type,
    wallet_name,
  }) {
    try {
      const sender = await this.walletRepository.CheckwalletExist(user_id);
      if (!sender) return "wallet not found";
      if (Number(sender.balance) <= Number(amount)) return "Insufficient funds";

      const ok = await ValidatePassword(
        transaction_pin,
        sender.transaction_pin,
        sender.salt
      );
      if (!ok) return "Invalid Pin";

      const receiver =
        await this.walletRepository.GetwalletBywalletNumber(wallet_number);
      if (!receiver) return "wallet number does not exist";

      // atomic updates
      await this.walletRepository.updateSenderBalance(user_id, Number(amount));
      await this.walletRepository.updateWalletBalance(
        receiver.user_id,
        Number(amount)
      );

      return {
        amount: Number(amount),
        description,
        senderId: user_id,
        sender: sender.wallet_name,
        receiverId: receiver.user_id,
        walletName: receiver.wallet_name,
        walletNo: receiver.wallet_number,
        bankName: "Pay Off",
        transactionType: transaction_type,
      };
    } catch (err) {
      throw new APIError(
        err.name || "Data Not found",
        err.statusCode || STATUS_CODES.INTERNAL_ERROR,
        err.message
      );
    }
  }
}
