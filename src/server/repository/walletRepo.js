import mongoose from "mongoose";
import { Wallet } from "@/server/models/wallet";
import { User } from "@/server/models/user"; // your existing user model
import {
  APIError,
  STATUS_CODES,
  BadRequestError,
} from "@/server/utils/app-errors";

const { Types } = mongoose;

export class WalletRepository {
  async CreateWallet({ user_id, referralCode, walletAddress }) {
    try {
      const doc = await Wallet.create({
        user_id,
        referralCode,
        walletAddress,
        balance: 0,
        bonusBalance: 0,
        pendingBalance: 0,
        profits: 0,
        investmentBalance: 0,
      });
      return await doc.save();
    } catch (error) {
      throw new APIError(
        "API Error",
        STATUS_CODES.INTERNAL_ERROR,
        `Unable to create wallet ${error.message}`
      );
    }
  }

  async GetUsersAndWalletDetails() {
    try {
      const data = await User.aggregate([
        {
          $lookup: {
            from: "wallets",
            localField: "_id",
            foreignField: "user_id",
            as: "wallet",
          },
        },
        { $unwind: { path: "$wallet", preserveNullAndEmptyArrays: true } },
      ]);
      // console.log(data, "data users");
      return data;
    } catch (error) {
      throw new APIError(
        "API Error",
        STATUS_CODES.INTERNAL_ERROR,
        `something went wrong ${error.message}`
      );
    }
  }

  async getUserWithWallet(userId) {
    try {
      const result = await User.aggregate([
        { $match: { _id: Types.ObjectId.createFromHexString(String(userId)) } },
        {
          $lookup: {
            from: "wallets",
            localField: "_id",
            foreignField: "user_id",
            as: "wallet",
          },
        },
        { $unwind: { path: "$wallet", preserveNullAndEmptyArrays: true } },
      ]);
      return result[0] || null;
    } catch (error) {
      throw new APIError(
        "API Error",
        STATUS_CODES.INTERNAL_ERROR,
        `Error fetching user with wallet: ${error.message}`
      );
    }
  }

  async ExistingWallet(user_id) {
    return Wallet.findOne({ user_id });
  }

  async FormerExistingWallet(id) {
    return Wallet.findById(id);
  }

  async GetwalletByIdentifier(identifier) {
    return Wallet.findOne({
      $or: [
        { wallet_number: identifier },
        { referralCode: identifier },
        { walletAddress: identifier },
      ],
    });
  }

  async FindExistingWallet(query, queryType) {
    try {
      if (queryType === "wallet_number")
        return Wallet.findOne({ wallet_number: query });
      if (queryType === "email") return Wallet.findOne({ email: query }); // only if you store email on wallet
      if (queryType === "hex") return Wallet.findOne({ hex: query }); // only if stored
      if (queryType === "phone") return Wallet.findOne({ phone: query }); // only if stored
      return null;
    } catch (error) {
      throw new APIError(
        "API Error",
        STATUS_CODES.INTERNAL_ERROR,
        `something went wrong ${error.message}`
      );
    }
  }

  async GetwalletBywalletNumber(wallet_number) {
    return Wallet.findOne({ wallet_number });
  }

  async CheckwalletExist(user_id) {
    return Wallet.findOne({ user_id });
  }

  async CreateTransactionPin({ user_id, transaction_pin }) {
    try {
      return Wallet.findOneAndUpdate(
        { user_id },
        { transaction_pin },
        { new: true }
      );
    } catch (error) {
      throw new APIError(
        "API Error",
        STATUS_CODES.INTERNAL_ERROR,
        `Unable to Create pin ${error.message}`
      );
    }
  }

  async updateSenderBalance(senderId, amount) {
    const w = await Wallet.findOne({
      user_id: Types.ObjectId.createFromHexString(String(senderId)),
    });
    if (!w) throw new BadRequestError("Not Found");
    if (Number(w.balance) < Number(amount))
      throw new BadRequestError("Insufficient Funds");

    return Wallet.findOneAndUpdate(
      { user_id: senderId },
      { $inc: { balance: -Number(amount) }, $set: { lastUpdated: new Date() } },
      { new: true }
    );
  }

  async updateWalletBalance(userId, amount) {
    const w = await Wallet.findOne({
      user_id: Types.ObjectId.createFromHexString(String(userId)),
    });
    if (!w) throw new BadRequestError("Not Found");

    return Wallet.findOneAndUpdate(
      { user_id: userId },
      { $inc: { balance: Number(amount) }, $set: { lastUpdated: new Date() } },
      { new: true }
    );
  }

  async updateBonusBalance(receiverId, amount) {
    const w = await Wallet.findOne({
      user_id: Types.ObjectId.createFromHexString(String(receiverId)),
    });
    if (!w) throw new BadRequestError("Not Found");

    return Wallet.findOneAndUpdate(
      { user_id: receiverId },
      {
        $inc: { bonusBalance: Number(amount) },
        $set: { lastUpdated: new Date() },
      },
      { new: true }
    );
  }

  async UpdatePendingBalance(receiverId, amount) {
    const w = await Wallet.findOne({
      user_id: Types.ObjectId.createFromHexString(String(receiverId)),
    });
    if (!w) throw new BadRequestError("Not Found");

    return Wallet.findOneAndUpdate(
      { user_id: receiverId },
      { $set: { pendingBalance: Number(amount), lastUpdated: new Date() } },
      { new: true }
    );
  }

  async Upgradewallet({ wallet_type, user_id }) {
    try {
      return Wallet.findOneAndUpdate(
        { user_id },
        { wallet_type },
        { new: true }
      );
    } catch (error) {
      throw new APIError(
        "API Error",
        STATUS_CODES.INTERNAL_ERROR,
        `Unable to Create pin ${error.message}`
      );
    }
  }

  async UpdateBalance({ balance, user_id }) {
    try {
      return Wallet.findOneAndUpdate(
        { user_id },
        { balance: Number(balance), lastUpdated: new Date() },
        { new: true }
      );
    } catch (error) {
      throw new APIError(
        "API Error",
        STATUS_CODES.INTERNAL_ERROR,
        `Unable to Create pin ${error.message}`
      );
    }
  }

  async incMany(userId, incMap, { session } = {}) {
    return await Wallet.updateOne(
      { user_id: userId },
      { $inc: incMap, $set: { lastUpdated: new Date() } },
      { session }
    );
  }
}
