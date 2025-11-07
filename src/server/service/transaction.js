import mongoose from "mongoose";
import {
  APIError,
  BadRequestError,
  STATUS_CODES,
} from "@/server/utils/app-errors";
import UserRepository from "../repository/userRepository";
import TransactionRepository from "../repository/transactionRepository";
import { WalletRepository } from "../repository/walletRepo";
import PlanRepository from "../repository/planRepo";
import { Investment } from "../models/investment";
import { ReferralBonusTemplate } from "../message-template/alert-template";
import { sendEmail } from "../utils";
import { get } from "jquery";
import { ReferralPayout } from "../models/referralPayout";

function toNumber(n, fallback = 0) {
  const num = typeof n === "string" ? parseFloat(n) : Number(n);
  return Number.isFinite(num) ? num : fallback;
}
export default class TransactionService {
  constructor() {
    this.userRepository = new UserRepository();
    this.txRepository = new TransactionRepository();
    this.planRepository = new PlanRepository();
    this.walletRepository = new WalletRepository();
  }

  // Admin: list all tx
  async AdminGetAllTransactions() {
    return await this.txRepository.findAll();
  }

  // User: create deposit or plan-purchase (status starts 'pending')
  async CreateTransaction({
    user_id,
    transactionType,
    amount,
    walletAddress,
    paymentMethod,
    plan,
  }) {
    const user = await this.userRepository.GetUserProfile({ id: user_id });
    if (!user) return { msg: "user not found" };

    const tx = await this.txRepository.create({
      user_id,
      user_email: user.email,
      user_name: user.name,
      transactionType,
      amount,
      walletAddress,
      paymentMethod,
      status: "pending",
      plan: plan || undefined,
    });

    // For deposits or plan-purchase paid externally, reflect pending
    if (
      transactionType === "fund-deposit" ||
      transactionType === "plan-purchase"
    ) {
      await this.walletRepository.updatePendingBalance(user_id, Number(amount));
    }

    return tx;
  }

  // Admin: approve deposit -> move pending -> balance

  // async UpdateTransactionStatus({ transactionId, status }) {
  //   console.log(transactionId, status, "transact status");
  //   try {
  //     const tx = await this.txRepository.findById(transactionId);
  //     console.log(tx, "transact status");
  //     if (!tx) {
  //       return { msg: "transaction not found" };
  //     }
  //     if (tx.status === "received") {
  //       return { msg: "transaction received already" };
  //     }

  //     const updated = await this.txRepository.updateStatus(
  //       transactionId,
  //       status
  //     );

  //     if (status === "received" && tx.transactionType === "fund-deposit") {
  //       // move pending -> balance atomically
  //       const userWallet = await this.walletRepository.CheckwalletExist(
  //         tx.user_id
  //       );
  //       console.log(userWallet);
  //       // const currentBalance = Number(userWallet.balance) + Number(tx.amount);
  //       const currentPendBalance =
  //         Number(userWallet.pendingBalance) - Number(tx.amount);
  //       await this.walletRepository.updateWalletBalance(tx.user_id, tx.amount);
  //       await this.walletRepository.UpdatePendingBalance(
  //         tx.user_id,
  //         currentPendBalance
  //       );
  //     } else if (
  //       status === "received" &&
  //       tx.transactionType == "plan-purchase"
  //     ) {
  //       const userWallet = await this.walletRepository.CheckwalletExist(
  //         tx.user_id
  //       );
  //       userWallet.investmentBalance =
  //         Number(userWallet.investmentBalance) + Number(tx.amount);

  //       await userWallet.save();
  //     }

  //     return updated;
  //   } catch (err) {
  //     throw new APIError(
  //       err.name || "Data Not found",
  //       STATUS_CODES.INTERNAL_ERROR,
  //       err.message
  //     );
  //   } finally {
  //   }
  // }

  async UpdatePlanPurchase({ transactionId, status }) {
    try {
      const tx = await this.txRepository.findById(transactionId);
      if (!tx) {
        return { msg: "transaction not found" };
      }
      if (tx.status === "received") {
        return { msg: "transaction received already" };
      }

      const updated = await this.txRepository.updateStatus(
        transactionId,
        status
      );

      if (status !== "received") {
        return updated;
      }

      // 1) Load user and plan
      const user = await this.userRepository.GetUserProfile({ id: tx.user_id });
      if (!user) return { msg: "user not found" };

      // NOTE: tx.plan is a plan name (string) in your code
      const plan = await this.planRepository.FindExistingPlan(tx.plan, "plan");
      if (!plan) return { msg: "plan not found" };

      // 2) Wallet: pending -> investmentBalance
      const principal = toNumber(tx.amount, 0);
      if (principal <= 0) return { msg: "invalid principal amount" };

      await this.walletRepository.incMany(tx.user_id, {
        investmentBalance: principal,
        pendingBalance: -principal,
      });

      // 3) User: add purchased plan
      user.purchasedPlans.addToSet(plan._id);
      await user.save();

      // 4) Create Investment (idempotent)
      const approvedAt = new Date();
      const percentAtPurchase = toNumber(plan.percent, 0); // plan.percent is string in your schema
      const duplicateFilterWithTxId = { sourceTxId: String(tx._id) };

      // If your Investment schema has sourceTxId, use that for a strict idempotent check:
      let existingInvestment = null;
      if ("sourceTxId" in Investment.schema.paths) {
        existingInvestment = await Investment.findOne(
          duplicateFilterWithTxId
        ).lean();
      } else {
        // Fallback duplicate check without sourceTxId:
        existingInvestment = await Investment.findOne({
          userId: tx.user_id,
          planId: plan._id,
          principal,
          status: "active",
        }).lean();
      }

      if (!existingInvestment) {
        // Create the investment record used by the daily accrual cron
        await Investment.create({
          userId: tx.user_id,
          planId: plan._id,
          principal,
          percentAtPurchase, // freeze today’s rate
          terms: plan.terms,
          approvedAt, // profits start counting now
          lastAccruedAt: approvedAt, // first accrual after a full 24h
          status: "active",
          ...(Investment.schema.paths.sourceTxId
            ? { sourceTxId: String(tx._id) }
            : {}),
        });
      }

      return updated;
    } catch (err) {
      throw new APIError(
        err.name || "Data Not found",
        STATUS_CODES.INTERNAL_ERROR,
        err.message
      );
    } finally {
    }
  }

  // Admin: approve plan purchase -> move pending -> investmentBalance and attach plan
  async UpdatePlanPurchase({ transactionId, status }) {
    try {
      const tx = await this.txRepository.findById(transactionId);
      if (!tx) {
        return { msg: "transaction not found" };
      }
      if (tx.status === "received") {
        return { msg: "transaction received already" };
      }

      const updated = await this.txRepository.updateStatus(
        transactionId,
        status
      );

      if (status === "received") {
        const user = await this.userRepository.GetUserProfile({
          id: tx.user_id,
        });
        if (!user) {
          return { msg: "user not found" };
        }

        const plan = await this.planRepository.FindExistingPlan(
          tx.plan,
          "plan"
        );
        if (!plan) {
          return { msg: "plan not found" };
        }

        // wallet: pending -> investmentBalance
        await this.walletRepository.incMany(tx.user_id, {
          investmentBalance: Number(tx.amount),
          pendingBalance: -Number(tx.amount),
        });

        // user: add purchased plan
        user.purchasedPlans.addToSet(plan._id);
        await user.save();
      }

      return updated;
    } catch (err) {
      throw new APIError(
        err.name || "Data Not found",
        STATUS_CODES.INTERNAL_ERROR,
        err.message
      );
    } finally {
    }
  }

  // plan purchase
  async PurchasePlan({ user_id, plan, paymentMethod, amount, walletAddress }) {
    try {
      // checking if user already exists
      const checkUserExist = await this.userRepository.GetUserProfile({
        id: user_id,
      });
      if (!checkUserExist) {
        const message = { msg: "user not found" };
        return message;
      }

      // console.log(plan, "plan");

      const existingPlan = await this.planRepository.FindExistingPlan(
        plan,
        "plan"
      );

      if (!existingPlan) {
        const message = { msg: "plan not found" };
        return message;
      }

      if (paymentMethod === "wallet") {
        const walletCheck =
          await this.walletRepository.CheckwalletExist(user_id);
        console.log(walletCheck, "wallet check");
        // return walletCheck;
        if (walletCheck.balance >= amount) {
          walletCheck.balance = walletCheck.balance - amount;
          walletCheck.investmentBalance =
            walletCheck.investmentBalance + amount;
          checkUserExist.purchasedPlans.push(existingPlan._id);
          checkUserExist.save();
          walletCheck.save();

          const message = { msg: "plan purchase successful" };
          return message;
        }
      } else {
        const createTransaction = await this.txRepository.create({
          user_id,
          user_email: checkUserExist?.email,
          user_name: checkUserExist?.name,
          transactionType: "plan-purchase",
          amount,
          walletAddress,
          paymentMethod,
          plan: plan,
        });

        // if (createTransaction.transactionType === "fund-deposit") {
        const getExistingWallet =
          await this.walletRepository.ExistingWallet(user_id);

        getExistingWallet.pendingBalance =
          Number(getExistingWallet.pendingBalance) + Number(amount);
        getExistingWallet.save();

        const message = { msg: "plan purchase successful" };
        return message;
      }

      // console.log(checkUserExist, "user exist");
    } catch (err) {
      throw new APIError(
        err.name ? err.name : "Data Not found",
        err.statusCode ? err.statusCode : STATUS_CODES.INTERNAL_ERROR,
        err.message
      );
    }
  }

  async GetSingleTransaction(id) {
    return await this.txRepository.findById(id);
  }

  async GetAllTransactions(userId) {
    const transactions = await this.txRepository.findAll({ user_id: userId });
    // console.log(transactions, "transactions");
    return { message: "All transactions gotten successfully", transactions };
  }

  async GetTransactionsByType(userId, type) {
    const transactions = await this.txRepository.findAll({
      user_id: userId,
      transactionType: type,
    });
    return {
      message: "All transactions gotten successfully based on",
      transactions,
    };
  }

  // Profit credit helper (admin)
  async UpdateUserInvestBalance({ user_id, amount }) {
    console.log(user_id, "user id");
    const wallet = await this.walletRepository.CheckwalletExist(user_id);
    console.log(wallet, "wallet");
    if (!wallet) return { msg: "user not found" };
    wallet.profits += amount;
    wallet.balance += amount;
    await wallet.save();
    return { msg: "user wallet balance updated successfully" };
  }

  // Admin override wallet numbers
  async UpdateUserWallet({
    user_id,
    balance,
    profits,
    investmentBalance,
    pendingBalance,
  }) {
    const wallet = await this.walletRepository.CheckwalletExist(user_id);
    if (!wallet) return { msg: "user not found" };

    wallet.profits = typeof profits === "number" ? profits : wallet.profits;
    wallet.balance = typeof balance === "number" ? balance : wallet.balance;
    wallet.investmentBalance =
      typeof investmentBalance === "number"
        ? investmentBalance
        : wallet.investmentBalance;
    wallet.pendingBalance =
      typeof pendingBalance === "number"
        ? pendingBalance
        : wallet.pendingBalance;
    await wallet.save();

    return { msg: "user wallet balance updated successfully" };
  }

  // Optional: scheduled returns
  async CalculateReturns() {
    const users = await this.userRepository.GetUsers();
    for (const user of users) {
      for (const planId of user.purchasedPlans) {
        const plan = await this.planRepository.FindExistingPlan(planId, "id");
        if (!plan) continue;
        const returnAmount = Number(plan.amount) * (Number(plan.percent) / 100);
        const wallet = await this.walletRepository.CheckwalletExist(user._id);
        if (!wallet) continue;
        wallet.profits += returnAmount;
        wallet.balance += returnAmount;
        await wallet.save();
      }
    }
  }

  // src/server/service/transaction.js  (add inside the TransactionController class)

  async AdminCreateTransaction({
    user_id,
    transactionType, // 'fund-deposit' | 'plan-purchase'
    amount,
    walletAddress = "",
    paymentMethod = "offline", // 'offline' | 'cash' | 'bank-transfer' | 'pos' etc.
    status = "received", // 'pending' | 'received'
    plan, // required if transactionType === 'plan-purchase'
  }) {
    try {
      // 1) Validate user
      console.log(user_id, "user id");
      const user = await this.userRepository.GetUserProfile({ id: user_id });
      if (!user) return { msg: "user not found" };

      // 2) Create the transaction with admin-provided status
      const tx = await this.txRepository.create({
        user_id,
        user_email: user?.email,
        user_name: user?.name,
        transactionType,
        amount,
        walletAddress,
        paymentMethod,
        status, // IMPORTANT: override default "pending"
        plan, // only used for plan-purchase
      });

      // 3) Apply wallet updates based on type/status
      const wallet = await this.walletRepository.ExistingWallet(user_id);
      if (!wallet) return { msg: "wallet not found" };

      if (transactionType === "fund-deposit") {
        if (status === "pending") {
          wallet.pendingBalance =
            Number(wallet.pendingBalance) + Number(amount);
        } else if (status === "received") {
          wallet.balance = Number(wallet.balance) + Number(amount);
        }
        await wallet.save();
        return { msg: "offline deposit recorded", txId: tx?._id };
      }

      if (transactionType === "plan-purchase") {
        // must have plan name
        if (!plan) return { msg: "plan is required for plan-purchase" };

        if (status === "pending") {
          // mirror your online flow: add to pending until approved
          wallet.pendingBalance =
            Number(wallet.pendingBalance) + Number(amount);
          await wallet.save();
          return {
            msg: "offline plan purchase recorded (pending)",
            txId: tx?._id,
          };
        }

        if (status === "received") {
          // instant approval: move funds into investment and attach plan
          const existingPlan = await this.planRepository.FindExistingPlan(
            plan,
            "plan"
          );
          if (!existingPlan) return { msg: "plan not found" };

          wallet.investmentBalance =
            Number(wallet.investmentBalance) + Number(amount);
          await wallet.save();
          user.purchasedPlans.push(existingPlan._id);
          await user.save();

          return { msg: "offline plan purchase approved", txId: tx?._id };
        }
      }

      return { msg: "unsupported transaction type" };
    } catch (err) {
      throw new APIError(
        err.name || "Data Not found",
        err.statusCode || STATUS_CODES.INTERNAL_ERROR,
        err.message
      );
    }
  }

  // async UpdateTransactionStatus({ transactionId, status }) {
  //   if (!transactionId) return { msg: "transactionId required" };
  //   if (!status) return { msg: "status required" };

  //   const session = await mongoose.startSession();
  //   session.startTransaction();

  //   try {
  //     // 1) Load tx
  //     const tx = await this.txRepository.findById(transactionId);

  //     // console.log(tx, "transaction");
  //     if (!tx) {
  //       await session.abortTransaction();
  //       return { msg: "transaction not found" };
  //     }
  //     if (tx.status === "received") {
  //       await session.commitTransaction();
  //       return { msg: "transaction already received", tx };
  //     }

  //     // 2) Update status
  //     const updated = await this.txRepository.updateStatus(
  //       transactionId,
  //       status
  //     );
  //     if (status !== "received") {
  //       await session.commitTransaction();
  //       return { msg: `Transaction updated to ${status}`, tx: updated };
  //     }

  //     // 3) Side effects on approval
  //     const amount = toNumber(tx.amount, 0);
  //     if (amount <= 0) {
  //       await session.abortTransaction();
  //       return { msg: "invalid amount" };
  //     }

  //     if (tx.transactionType === "fund-deposit") {
  //       // Move pending -> balance
  //       await this.walletRepository.incMany(
  //         tx.user_id,
  //         { balance: amount, pendingBalance: -amount },
  //         { session }
  //       );

  //       // Referral bonus
  //       // await this.#maybePayReferralBonus({ depositTx: tx, session });
  //       // First-deposit referral bonus (10%) -> bonusBalance only
  //       await this.#maybePayReferralBonusFirst({
  //         source: "deposit",
  //         amount,
  //         depositorUserId: tx.user_id,
  //         session,
  //       });
  //     } else if (tx.transactionType === "plan-purchase") {
  //       // Move pending -> investment + attach plan + create Investment

  //       const user = await this.userRepository.GetUserProfile({
  //         id: tx.user_id,
  //       });
  //       if (!user) {
  //         await session.abortTransaction();
  //         return { msg: "user not found" };
  //       }

  //       const plan = await this.planRepository.FindExistingPlan(
  //         tx.plan,
  //         "plan"
  //       );
  //       if (!plan) {
  //         await session.abortTransaction();
  //         return { msg: "plan not found" };
  //       }

  //       if (tx.paymentMethod !== "wallet") {
  //         // await this.#maybePayReferralBonus({ depositTx: tx, session });
  //         await this.#maybePayReferralBonusFirst({
  //           source: "plan",
  //           amount,
  //           depositorUserId: tx.user_id,
  //           session,
  //         });
  //       }

  //       await this.walletRepository.incMany(
  //         tx.user_id,
  //         { investmentBalance: amount, pendingBalance: -amount },
  //         { session }
  //       );

  //       user.purchasedPlans.addToSet(plan._id);
  //       await user.save({ session });

  //       // Create Investment if it doesn't exist for this source
  //       const approvedAt = new Date();
  //       const percentAtPurchase = toNumber(plan.percent, 0);
  //       const hasSourceTxId = !!(
  //         Investment.schema.paths && Investment.schema.paths.sourceTxId
  //       );

  //       const dupFilter = hasSourceTxId
  //         ? { sourceTxId: String(tx._id) }
  //         : {
  //             userId: tx.user_id,
  //             planId: plan._id,
  //             principal: amount,
  //             status: "active",
  //           };

  //       const existingInv = await Investment.findOne(dupFilter)
  //         .session(session)
  //         .lean();

  //       if (!existingInv) {
  //         await Investment.create(
  //           [
  //             {
  //               userId: tx.user_id,
  //               planId: plan._id,
  //               principal: amount,
  //               percentAtPurchase,
  //               terms: plan.terms,
  //               approvedAt,
  //               lastAccruedAt: approvedAt,
  //               status: "active",
  //               ...(hasSourceTxId ? { sourceTxId: String(tx._id) } : {}),
  //             },
  //           ],
  //           { session }
  //         );
  //       }
  //     }

  //     await session.commitTransaction();
  //     return { msg: `Transaction updated to ${status}`, tx: updated };
  //   } catch (err) {
  //     await session.abortTransaction();
  //     throw new APIError(
  //       err.name || "Update failed",
  //       STATUS_CODES.INTERNAL_ERROR,
  //       err.message
  //     );
  //   } finally {
  //     session.endSession();
  //   }
  // }

  // <<<< NEW: one-time, first-deposit referral payout (10%), idempotent via ReferralPayout

  // Admin or webhook: update tx status and apply side-effects
  
  async UpdateTransactionStatus({ transactionId, status }) {
    if (!transactionId) return { msg: "transactionId required" };
    if (!status) return { msg: "status required" };

    const session = await mongoose.startSession();
    session.startTransaction();

    try {
      const tx = await this.txRepository.findById(transactionId);
      if (!tx) {
        await session.abortTransaction();
        return { msg: "transaction not found" };
      }
      if (tx.status === "received") {
        await session.commitTransaction();
        return { msg: "transaction already received", tx };
      }

      const updated = await this.txRepository.updateStatus(
        transactionId,
        status
      );
      if (status !== "received") {
        await session.commitTransaction();
        return { msg: `Transaction updated to ${status}`, tx: updated };
      }

      const amount = toNumber(tx.amount, 0);
      if (amount <= 0) {
        await session.abortTransaction();
        return { msg: "invalid amount" };
      }

      if (tx.transactionType === "fund-deposit") {
        // Move pending -> balance
        await this.walletRepository.incMany(
          tx.user_id,
          { balance: amount, pendingBalance: -amount },
          { session }
        );

        // First-deposit referral bonus (10%) -> bonusBalance only
        await this.#maybePayReferralBonusFirst({
          source: "deposit",
          amount,
          depositorUserId: tx.user_id,
          session,
        });
      } else if (tx.transactionType === "plan-purchase") {
        const user = await this.userRepository.GetUserProfile({
          id: tx.user_id,
        });
        if (!user) {
          await session.abortTransaction();
          return { msg: "user not found" };
        }

        const plan = await this.planRepository.FindExistingPlan(
          tx.plan,
          "plan"
        );
        if (!plan) {
          await session.abortTransaction();
          return { msg: "plan not found" };
        }

        // If paid externally (not from wallet), this counts as deposit for referral
        if (tx.paymentMethod !== "wallet") {
          await this.#maybePayReferralBonusFirst({
            source: "plan",
            amount,
            depositorUserId: tx.user_id,
            session,
          });
        }

        await this.walletRepository.incMany(
          tx.user_id,
          { investmentBalance: amount, pendingBalance: -amount },
          { session }
        );

        user.purchasedPlans.addToSet(plan._id);
        await user.save({ session });

        const approvedAt = new Date();
        const percentAtPurchase = toNumber(plan.percent, 0);
        const hasSourceTxId = !!(
          Investment.schema.paths && Investment.schema.paths.sourceTxId
        );

        const dupFilter = hasSourceTxId
          ? { sourceTxId: String(tx._id) }
          : {
              userId: tx.user_id,
              planId: plan._id,
              principal: amount,
              status: "active",
            };

        const existingInv = await Investment.findOne(dupFilter)
          .session(session)
          .lean();

        if (!existingInv) {
          await Investment.create(
            [
              {
                userId: tx.user_id,
                planId: plan._id,
                principal: amount,
                percentAtPurchase,
                terms: plan.terms,
                approvedAt,
                lastAccruedAt: approvedAt,
                status: "active",
                ...(hasSourceTxId ? { sourceTxId: String(tx._id) } : {}),
              },
            ],
            { session }
          );
        }
      }

      await session.commitTransaction();
      return { msg: `Transaction updated to ${status}`, tx: updated };
    } catch (err) {
      await session.abortTransaction();
      throw new APIError(
        err.name || "Update failed",
        STATUS_CODES.INTERNAL_ERROR,
        err.message
      );
    } finally {
      session.endSession();
    }
  }

  async #maybePayReferralBonusFirst({
    source,
    amount,
    depositorUserId,
    session = null,
  }) {
    const depositor = await this.userRepository.GetUserProfile({
      id: depositorUserId,
    });
    if (!depositor || !depositor.referredBy) return; // no referrer

    const ratePct = 10; // per your spec
    const bonus = toNumber(amount, 0) * (ratePct / 100);
    if (bonus <= 0) return;

    // Try to insert audit row; unique index enforces one-time payout
    try {
      await ReferralPayout.create(
        [
          {
            referredUserId: depositor._id,
            referrerUserId: depositor.referredBy,
            depositAmount: toNumber(amount, 0),
            bonusAmount: bonus,
            source,
          },
        ],
        session ? { session } : {}
      );
    } catch (e) {
      const dup =
        String(e?.code) === "11000" || /duplicate key/i.test(e?.message || "");
      if (dup) return; // already paid
      throw e;
    }

    // Credit referrer's bonusBalance and balance ONLY (not main balance)
    await this.walletRepository.incMany(
      depositor.referredBy,
      { bonusBalance: bonus, balance: bonus }, // <<<< only bonusBalance per your requirement
      session ? { session } : {}
    );
    const referrer = await this.userRepository.GetUserProfile({
      id: depositor.referredBy,
    });

    // Optional: create an audit transaction for the referrer
    await this.txRepository.create(
      {
        user_id: depositor.referredBy,
        user_name: referrer?.name,
        user_email: referrer?.email,
        transactionType: "referral-bonus",
        amount: bonus,
        paymentMethod: "system",
        status: "received",
        walletAddress: "system",
      },
      session ? { session } : {}
    );

    // Email the referrer (non-blocking)
    try {
      const referrer = await this.userRepository.GetUserProfile({
        id: depositor.referredBy,
      });
      if (referrer?.email) {
        const html = ReferralBonusTemplate({
          userName: referrer.name || "Investor",
          amount: bonus.toFixed(2),
          brandName: process.env.BRAND_NAME || "Capital Plus",
          dashboardUrl:
            process.env.DASHBOARD_URL ||
            "https://www.cap-plus.online/dashboard",
          supportEmail: process.env.SUPPORT_EMAIL || "info@cap-plus.online",
          logoUrl: process.env.BRAND_LOGO_URL,
          primaryColor: process.env.BRAND_PRIMARY || "#6675F5",
        });
        await sendEmail([referrer.email], "You earned a referral bonus", html);
      }
    } catch (mailErr) {
      console.warn("Referral bonus email failed:", mailErr?.message || mailErr);
    }
  }

  // async #maybePayReferralBonus({ depositTx, session }) {
  //   // console.log(depositTx, "deposit tx in referral");
  //   const depositor = await this.userRepository.GetUserProfile({
  //     id: depositTx.user_id,
  //   });
  //   console.log(depositor, "depositor in referral");
  //   if (!depositor || !depositor.referredBy) return;
  //   console.log(depositor, "depositor in referral");

  //   // const rate = Number(REFERRAL_CFG.RATE || 10);
  //   const rate = 10;
  //   console.log(rate, "referral rate");
  //   if (!(rate > 0)) return;

  //   // const bonus = Math.max(0, toNumber(depositTx.amount, 0) * rate);
  //   const bonus = depositTx.amount * 0.1;

  //   console.log(bonus, "bonus amount");
  //   if (bonus <= 0) return;

  //   // Load referrer profile for email + name
  //   const referrer = await this.userRepository.GetUserProfile({
  //     id: depositor.referredBy,
  //   });

  //   console.log(referrer, "referrer");
  //   if (!referrer || !referrer.email) return;

  //   const getExistingWallet = await this.walletRepository.ExistingWallet(
  //     referrer._id
  //   );
  //   console.log(getExistingWallet, "referrer wallet");
  //   // if (!getExistingWallet) return;
  //   getExistingWallet.bonusBalance =
  //     Number(getExistingWallet.bonusBalance) + Number(bonus);
  //   getExistingWallet.balance =
  //     Number(getExistingWallet.balance) + Number(bonus);
  //   await getExistingWallet.save();

  //   // Credit both bonusBalance and balance
  //   // await this.walletRepository.incMany(
  //   //   referrer._id,
  //   //   { bonusBalance: bonus, balance: bonus },
  //   //   { session }
  //   // );

  //   // Optional: create audit tx
  //   // if (REFERRAL_CFG.CREATE_TX_RECORD) {
  //   // try {
  //   await this.txRepository.create(
  //     {
  //       user_id: referrer._id,
  //       user_name: referrer.name,
  //       user_email: referrer.email,
  //       transactionType: "referral-bonus",
  //       amount: bonus,
  //       paymentMethod: "system",
  //       status: "received",
  //       walletAddress: "system",
  //       // meta: { sourceDepositId: String(depositTx._id), referredUserId: String(depositor._id), rate },
  //     },
  //     { session }
  //   );
  //   // } catch (e) {
  //   //   console.warn("Referral audit transaction write failed:", e.message);
  //   // }
  //   // }

  //   // Send email to referrer (non-blocking)
  //   // try {
  //   const html = ReferralBonusTemplate({
  //     userName: referrer.name || "Investor",
  //     amount: bonus.toFixed(2),
  //     brandName: process.env.BRAND_NAME || "Capital Plus",
  //     dashboardUrl:
  //       process.env.DASHBOARD_URL || "https://www.cap-plus.online/dashboard",
  //     supportEmail: process.env.SUPPORT_EMAIL || "info@cap-plus.online",
  //     logoUrl: process.env.BRAND_LOGO_URL, // optional
  //     primaryColor: process.env.BRAND_PRIMARY || "#6675F5",
  //   });
  //   await sendEmail([referrer.email], "You earned a referral bonus", html);
  //   // await sendEmail({
  //   //   to: referrer.email,
  //   //   subject: "You earned a referral bonus",
  //   //   html,
  //   //   from: process.env.MAIL_FROM, // optional override
  //   // });
  //   // } catch (e) {
  //   // console.warn("Referral bonus email failed:", e.message);
  //   // do not throw; approval should not fail because email failed
  //   // }
  // }
}
