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

  // get user withdrawals summary
  async getUserWithdrawalsSummary(userId, status) {
    try {
      // 1) Validate ObjectId
      const isValid = mongoose.Types.ObjectId.isValid(userId);
      if (!isValid) {
        return { totalAmount: 0, count: 0, lastWithdrawalAt: null };
      }

      const match = { user_id: new mongoose.Types.ObjectId(userId) };
      if (status) {
        // allow single string or array of statuses
        if (Array.isArray(status)) {
          match.status = { $in: status };
        } else {
          match.status = status;
        }
      }

      // 2) Coerce amount to number so $sum won't throw
      const rows = await Withdrawal.aggregate([
        { $match: match },
        // add a numeric field from `amount`, tolerating strings/null
        {
          $addFields: {
            amountNum: {
              $cond: [
                { $ne: ["$amount", null] },
                { $toDouble: "$amount" }, // works for numbers and numeric strings
                0,
              ],
            },
          },
        },
        {
          $group: {
            _id: null,
            totalAmount: { $sum: "$amountNum" },
            count: { $sum: 1 },
            lastWithdrawalAt: { $max: "$createdAt" }, // if your schema uses `date`, change to "$date"
          },
        },
      ]);

      const row = rows && rows.length ? rows[0] : null;

      return {
        totalAmount: row ? row.totalAmount : 0,
        count: row ? row.count : 0,
        lastWithdrawalAt: row ? row.lastWithdrawalAt : null,
      };
    } catch (err) {
      // helpful log, then safe fallback
      console.error("getUserWithdrawalsSummary error:", err);
      return { totalAmount: 0, count: 0, lastWithdrawalAt: null };
    }
  }
}
