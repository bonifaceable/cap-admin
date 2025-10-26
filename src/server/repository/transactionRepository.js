// import { Transaction } from "@/server/models/transaction";
import { APIError, STATUS_CODES } from "@/server/utils/app-errors";
import { TransactionModel } from "@/server/models/transaction";

export class TransactionRepository {
  async create(transaction) {
    try {
      const doc = await TransactionModel.create(transaction);
      return await doc.save();
    } catch (err) {
      throw new APIError("API Error", STATUS_CODES.INTERNAL_ERROR, err.message);
    }
  }

  // async findAll(
  //   filter = {},
  //   { sort = { createdAt: -1 }, limit = 100, skip = 0 } = {}
  // ) {
  async findAll() {
    try {
      // const data = await TransactionModel.find(filter)
      //   .sort(sort)
      //   .limit(limit)
      //   .skip(skip);
      const data = await TransactionModel.find();
      // console.log(data, "transactions data");
      return data;
    } catch (err) {
      console.log(err, "error transactions");
      throw new APIError("API Error", STATUS_CODES.INTERNAL_ERROR, err.message);
    }
  }

  async findById(id) {
    try {
      return await TransactionModel.findById(id);
    } catch (err) {
      throw new APIError("API Error", STATUS_CODES.INTERNAL_ERROR, err.message);
    }
  }

  async updateStatus(id, status) {
    try {
      const trans = await TransactionModel.findByIdAndUpdate(
        id,
        { status },
        { new: true }
      );
      console.log(trans, "trans");
      return trans;
    } catch (err) {
      throw new APIError("API Error", STATUS_CODES.INTERNAL_ERROR, err.message);
    }
  }

  async findFirstApprovedDepositForUser(userId, { session } = {}) {
    return await TransactionModel.findOne({
      user_id: userId,
      transactionType: "fund-deposit",
      status: "received",
    })
      .sort({ createdAt: 1 })
      .session(session || null)
      .lean();
  }
}

export default TransactionRepository;
