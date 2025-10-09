import { WithdrawalRepository } from "../repository/withdrawalRepo";
import { WalletRepository } from "../repository/walletRepo";
import { sendEmail } from "../utils";
import { APIError, STATUS_CODES, BadRequestError } from "../utils/app-errors";

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

      wallet.balance = Number(wallet.balance) - Number(withdrawal.amount);
      await wallet.save();

      // Notify user

      const message = `
        <p>Hi ${walletUser?.name},</p>
        <p>Your withdrawal request of <b>$${withdrawal.amount}</b> has been approved.</p>
        <p>The amount has been debited from your wallet.</p>
        <p>Thank you for using Capital Plus!</p>
      `;

      sendEmail([walletUser.email], "Withdrawal Approved", message);

      return withdrawal;
    } catch (err) {
      throw new APIError(
        err.name || "API Error",
        err.statusCode || STATUS_CODES.INTERNAL_ERROR,
        err.message
      );
    }
  }
}
