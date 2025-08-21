import { User } from "@/server/models/user";
import { TransactionModel } from "@/server/models/transaction";

export default class StatsService {
  async getAdminOverview() {
    // Some code paths set status to "verified" while the schema uses "Active".
    const verifiedStatuses = ["Active", "verified"];

    const [totalUsers, verifiedUsers, totalTransactions, pendingTransactions] =
      await Promise.all([
        User.countDocuments({}),
        User.countDocuments({ status: { $in: verifiedStatuses } }),
        TransactionModel.countDocuments({}),
        TransactionModel.countDocuments({ status: "pending" }),
      ]);

    const unverifiedUsers = Math.max(totalUsers - verifiedUsers, 0);

    return {
      totalUsers,
      verifiedUsers,
      unverifiedUsers,
      totalTransactions,
      pendingTransactions,
    };
  }
}
