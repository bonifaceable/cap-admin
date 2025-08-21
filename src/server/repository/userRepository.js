import crypto from "crypto";
import { APIError, STATUS_CODES } from "@/server/utils/app-errors";
import { User } from "@/server/models/user"; // your existing user model

export class UserRepository {
  // Users
  async CreateUser({
    name,
    email,
    phone,
    password,
    otp,
    country,
    referredBy,
    viewPass,
  }) {
    try {
      const doc = await User.create({
        name,
        email,
        phone,
        password,
        otp,
        country,
        referredBy,
        viewPass,
      });
      return await doc.save();
    } catch (error) {
      throw new APIError(
        "API Error",
        STATUS_CODES.INTERNAL_ERROR,
        `Unable to create user ${error.message}`
      );
    }
  }

  async GetUsers() {
    try {
      return await User.find({}).sort({ createdAt: -1 });
    } catch (err) {
      throw new APIError("API Error", STATUS_CODES.INTERNAL_ERROR, err.message);
    }
  }

  async GetUserProfile({ id }) {
    try {
      return await User.findById(id);
    } catch (err) {
      throw new APIError("API Error", STATUS_CODES.INTERNAL_ERROR, err.message);
    }
  }

  async UpdateUserProfile({
    userId,
    phone,
    address,
    state,
    gender,
    birthday,
    salt,
  }) {
    try {
      return await User.findByIdAndUpdate(
        userId,
        { phone, address, state, gender, birthday, salt },
        { new: true }
      );
    } catch (err) {
      throw new APIError(
        "API Error",
        STATUS_CODES.INTERNAL_ERROR,
        `Unable to update user ${err.message}`
      );
    }
  }

  async UpdateProfilePics({ profileImage, userId }) {
    try {
      return await User.updateOne(
        { _id: userId },
        { profileImage },
        { new: true }
      );
    } catch (err) {
      throw new APIError(
        "API Error",
        STATUS_CODES.INTERNAL_ERROR,
        `Unable to update profile image ${err.message}`
      );
    }
  }

  // OTP / verification
  async RequestToken({ email, otp }) {
    try {
      return await User.findOneAndUpdate({ email }, { otp }, { new: true });
    } catch (error) {
      throw new APIError(
        "API Error",
        STATUS_CODES.INTERNAL_ERROR,
        `Unable to set OTP ${error.message}`
      );
    }
  }

  // Verify email using OTP and activate account
  async VerifyEmail({ id, otp }) {
    try {
      const user = await User.findOne({ _id: id, otp });
      if (!user) return null;
      await User.findByIdAndUpdate(id, { status: "Active", otp: "" });
      return true;
    } catch (error) {
      throw new APIError(
        "API Error",
        STATUS_CODES.INTERNAL_ERROR,
        `Unable to verify email ${error.message}`
      );
    }
  }

  // Password changes (hash in your service layer before calling these)
  async UpdatePassword({ id, password }) {
    try {
      await User.findByIdAndUpdate(id, { password });
      return;
    } catch (err) {
      throw new APIError(
        "API Error",
        STATUS_CODES.INTERNAL_ERROR,
        `Unable to update password ${err.message}`
      );
    }
  }

  async ChangePassword({ id, password }) {
    try {
      const user = await this.FindExistingUser(id, "id");
      if (!user) return null;
      user.password = password;
      await user.save();
      return;
    } catch (err) {
      throw new APIError(
        "API Error",
        STATUS_CODES.INTERNAL_ERROR,
        `Unable to change password ${err.message}`
      );
    }
  }

  // Lookup helpers
  async FindExistingUser(query, queryType) {
    try {
      if (queryType === "id") return await User.findById(query);
      if (queryType === "email") return await User.findOne({ email: query });
      if (queryType === "otp") return await User.findOne({ otp: query });
      return null;
    } catch (error) {
      throw new APIError(
        "API Error",
        STATUS_CODES.INTERNAL_ERROR,
        `Lookup failed ${error.message}`
      );
    }
  }

  async GetUsersByStatus({ status }) {
    let filter = {};
    switch ((status || "all").toLowerCase()) {
      case "verified":
        filter = { status: { $in: ["verified", "Active"] } };
        break;
      case "unverified":
        filter = { status: { $nin: ["verified", "Active"] } }; // e.g. Pending
        break;
      case "blocked":
        filter = { blocked: true };
        break;
      case "unblocked":
        filter = { $or: [{ blocked: false }, { blocked: { $exists: false } }] };
        break;
      default:
        filter = {};
    }
    return User.find(filter).sort({ createdAt: -1 });
  }

  async UpdateUserStatus({ userId, status }) {
    return User.findByIdAndUpdate(userId, { status }, { new: true });
  }

  async SetBlocked({ userId, blocked }) {
    return User.findByIdAndUpdate(userId, { blocked }, { new: true });
  }
}

export default UserRepository;
