// import { Withdrawal } from "@/server/models/withdrawal";
import { APIError, STATUS_CODES } from "@/server/utils/app-errors";
import { Withdrawal } from "../models/withdrawal";

export class WithdrawalRepository {
  async CreateWithdrawal({ user_id, amount, walletAddress, paymentMethod }) {
    try {
      const withdrawal = await Withdrawal.create({
        user_id,
        amount,
        walletAddress,
        paymentMethod,
      });
      return withdrawal;
    } catch (err) {
      throw new APIError(
        "API Error",
        STATUS_CODES.INTERNAL_ERROR,
        `Unable to create withdrawal: ${err.message}`
      );
    }
  }

  async GetAllWithdrawals() {
    try {
      // return await Withdrawal.find({})
      //   .populate("user_id", "name email")
      //   .sort({ createdAt: -1 });
      const withdrawal = await Withdrawal.find({})
        .populate("user_id", "name email")
        .sort({ createdAt: -1 });

      console.log(withdrawal, "withdrawal");

      return withdrawal;
    } catch (err) {
      throw new APIError(
        "API Error",
        STATUS_CODES.INTERNAL_ERROR,
        `Unable to fetch withdrawals: ${err.message}`
      );
    }
  }

  async UpdateWithdrawalStatus({ withdrawalId, status }) {
    try {
      return await Withdrawal.findByIdAndUpdate(
        withdrawalId,
        { status },
        { new: true }
      );
    } catch (err) {
      throw new APIError(
        "API Error",
        STATUS_CODES.INTERNAL_ERROR,
        `Unable to update withdrawal: ${err.message}`
      );
    }
  }
}
