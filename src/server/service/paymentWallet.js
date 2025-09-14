import { PaymentWalletRepository } from "@/server/repository/paymentWalletRepo";
import {
  APIError,
  BadRequestError,
  STATUS_CODES,
} from "@/server/utils/app-errors";
import { FormatData } from "@/server/utils";

export default class PaymentWalletController {
  constructor() {
    this.repo = new PaymentWalletRepository();
  }

  async GetPaymentWallets() {
    const wallets = await this.repo.List();
    return FormatData(wallets);
  }

  async CreateWallet({ label, walletAddress, qrCode, sortOrder }) {
    if (!label || !qrCode || !walletAddress) {
      throw new BadRequestError("Missing required fields");
    }
    console.log(label, walletAddress, qrCode, "done");
    const exists = await this.repo.FindByCurrencyNetwork(label);
    if (exists)
      throw new BadRequestError(
        "Wallet for this currency/network already exists"
      );

    const created = await this.repo.Create({
      label,
      walletAddress,
      qrCode,
      sortOrder,
    });
    return FormatData(created);
  }

  async UpdateWallet(id, payload) {
    const updated = await this.repo.Update(id, payload);
    return FormatData(updated);
  }

  async DeleteWallet(id) {
    const deleted = await this.repo.Delete(id);
    return FormatData(deleted);
  }
}
