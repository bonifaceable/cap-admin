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
  async UpdateTransactionStatus({ transactionId, status }) {
    console.log(transactionId, status, "transact status");
    try {
      const tx = await this.txRepository.findById(transactionId);
      console.log(tx, "transact status");
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

      if (status === "received" && tx.transactionType === "fund-deposit") {
        // move pending -> balance atomically
        const userWallet = await this.walletRepository.CheckwalletExist(
          tx.user_id
        );
        console.log(userWallet);
        // const currentBalance = Number(userWallet.balance) + Number(tx.amount);
        const currentPendBalance =
          Number(userWallet.pendingBalance) - Number(tx.amount);
        await this.walletRepository.updateWalletBalance(tx.user_id, tx.amount);
        await this.walletRepository.UpdatePendingBalance(
          tx.user_id,
          currentPendBalance
        );
      } else if (
        status === "received" &&
        tx.transactionType == "plan-purchase"
      ) {
        const userWallet = await this.walletRepository.CheckwalletExist(
          tx.user_id
        );
        userWallet.investmentBalance =
          Number(userWallet.investmentBalance) + Number(tx.amount);

        await userWallet.save();
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

      console.log(plan, "plan");

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
    console.log(transactions, "transactions");
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
}
