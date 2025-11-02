import { WithdrawalRepository } from "../repository/withdrawalRepo";
import { WalletRepository } from "../repository/walletRepo";
import { sendEmail } from "../utils";
import { APIError, STATUS_CODES, BadRequestError } from "../utils/app-errors";
import { WithdrawalApprovedTemplate } from "../message-template/alert-template";

export default class WithdrawalController {
  constructor() {
    this.withdrawalRepository = new WithdrawalRepository();
    this.walletRepository = new WalletRepository();
  }

  // user requests withdrawal
  async RequestWithdrawal({ user_id, amount, walletAddress, paymentMethod }) {
    try {
      const wallet = await this.walletRepository.getUserWithWallet(user_id);
      if (!wallet) throw new BadRequestError("Wallet not found");
      //   if (wallet.balance < amount)
      //     throw new BadRequestError("Insufficient balance");

      const withdrawal = await this.withdrawalRepository.CreateWithdrawal({
        user_id,
        amount,
        walletAddress,
        paymentMethod,
      });

      return withdrawal;
    } catch (err) {
      throw new APIError(
        err.name || "API Error",
        err.statusCode || STATUS_CODES.INTERNAL_ERROR,
        err.message
      );
    }
  }

  // admin fetch all
  async GetWithdrawals() {
    try {
      return await this.withdrawalRepository.GetAllWithdrawals();
    } catch (err) {
      throw new APIError(
        err.name || "API Error",
        err.statusCode || STATUS_CODES.INTERNAL_ERROR,
        err.message
      );
    }
  }

  // admin approve
  async ApproveWithdrawal({ withdrawalId }) {
    try {
      console.log(withdrawalId, "withdrawal id");
      const withdrawal = await this.withdrawalRepository.UpdateWithdrawalStatus(
        {
          withdrawalId,
          status: "approved",
        }
      );

      console.log(withdrawal, "withdrawal ,msd");

      if (!withdrawal) throw new BadRequestError("Withdrawal not found");

      // Debit wallet
      const wallet = await this.walletRepository.ExistingWallet(
        withdrawal.user_id
      );
      const walletUser = await this.walletRepository.getUserWithWallet(
        withdrawal.user_id
      );
      console.log(wallet, "wallet ...");
      if (!wallet) throw new BadRequestError("Wallet not found");

      wallet.pendingWithdrawal =
        Number(wallet.pendingWithdrawal) - Number(withdrawal.amount);
      await wallet.save();

      // Notify user
      const message = `
        <p>Hi ${walletUser?.name},</p>
        <p>Your withdrawal request of <b>$${withdrawal.amount}</b> has been approved.</p>
        <p>The amount has been debited from your wallet.</p>
        <p>Thank you for using Capital Plus!</p>
      `;
      const withdrawalMessage = WithdrawalApprovedTemplate({
        userName: walletUser?.name,
        amount: withdrawal.amount,
      });

      sendEmail([walletUser.email], "Withdrawal Approved", withdrawalMessage);

      return withdrawal;
    } catch (err) {
      throw new APIError(
        err.name || "API Error",
        err.statusCode || STATUS_CODES.INTERNAL_ERROR,
        err.message
      );
    }
  }

  // withdrawals summary for user
  // get user withdrawals summary
  async GetUserWithdrawalsSummary(userId) {
    try {
      console.log(userId, "user id in service...");
      const wallet = await this.withdrawalRepository.getUserWithdrawalsSummary(
        userId,
        "approved"
      );
      console.log(wallet, "withdrawals summary in service...");
      return wallet;
    } catch (err) {
      throw new APIError(
        err.name || "API Error",
        err.statusCode || STATUS_CODES.INTERNAL_ERROR,
        err.message
      );
    }
  }

  // withdrawal service (controller)
  async GetAllUsersWithdrawalsSummary() {
    try {
      const withdrawals = await this.withdrawalRepository.GetAllWithdrawals();

      // Group totals per user
      const summary = {};
      withdrawals.forEach((w) => {
        const userId = w.user_id?._id?.toString();
        if (!summary[userId]) {
          summary[userId] = {
            user: w.user_id,
            totalAmount: 0,
          };
        }
        if (w.status === "approved") {
          summary[userId].totalAmount += Number(w.amount) || 0;
        }
      });

      // Convert to array for easy use on frontend
      return Object.values(summary);
    } catch (err) {
      throw new APIError(
        err.name || "API Error",
        err.statusCode || STATUS_CODES.INTERNAL_ERROR,
        err.message
      );
    }
  }
}
