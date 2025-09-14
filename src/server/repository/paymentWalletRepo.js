import { PaymentWalletAddress } from "@/server/models/paymentWalletAddress";
import { APIError, STATUS_CODES } from "@/server/utils/app-errors";

export class PaymentWalletRepository {
  async Create(data) {
    try {
      const created = await PaymentWalletAddress.create(data);
      return await created.save();
    } catch (err) {
      throw new APIError("API Error", STATUS_CODES.INTERNAL_ERROR, err.message);
    }
  }

  async List({ activeOnly = false } = {}) {
    try {
      const q = activeOnly ? { isActive: true } : {};
      return await PaymentWalletAddress.find(q).sort({ sortOrder: 1 });
    } catch (err) {
      throw new APIError("API Error", STATUS_CODES.INTERNAL_ERROR, err.message);
    }
  }

  async Update(id, payload) {
    try {
      return await PaymentWalletAddress.findByIdAndUpdate(id, payload, {
        new: true,
      });
    } catch (err) {
      throw new APIError("API Error", STATUS_CODES.INTERNAL_ERROR, err.message);
    }
  }

  async Delete(id) {
    try {
      return await PaymentWalletAddress.findByIdAndDelete(id);
    } catch (err) {
      throw new APIError("API Error", STATUS_CODES.INTERNAL_ERROR, err.message);
    }
  }

  async FindByCurrencyNetwork(label) {
    try {
      return await PaymentWalletAddress.findOne({ label });
    } catch (err) {
      throw new APIError("API Error", STATUS_CODES.INTERNAL_ERROR, err.message);
    }
  }
}
