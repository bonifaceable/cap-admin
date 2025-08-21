// import PlanRepository from '@/server/repositories/plan.repository'
import {
  APIError,
  BadRequestError,
  STATUS_CODES,
} from "@/server/utils/app-errors";
import PlanRepository from "../repository/planRepo";

export default class PlanService {
  constructor() {
    this.repo = new PlanRepository();
  }

  #validate({ plan, amount, max, percent }) {
    if (!plan) throw new BadRequestError("plan is required");
    if (typeof amount !== "number" || amount < 0)
      throw new BadRequestError("amount must be a non-negative number");
    if (typeof max !== "number" || max < amount)
      throw new BadRequestError("max must be >= amount");
    if (typeof percent !== "number" || percent < 0)
      throw new BadRequestError("percent must be >= 0");
  }

  //   async List({ status } = {}) {
  async List() {
    // const filter = status ? { status } : {};
    return await this.repo.GetPlans();
  }

  async Create({
    plan,
    amount,
    max,
    terms,
    percent,
    investmentReturn,
    walletAddress,
    benefits,
  }) {
    this.#validate({ plan, amount, max, percent });

    const existing = await this.repo.FindExistingPlan(plan, "plan");
    if (existing) throw new BadRequestError("plan already exists");

    return await this.repo.CreatePlan({
      plan,
      amount,
      max,
      terms,
      percent,
      investmentReturn,
      walletAddress,
      benefits: Array.isArray(benefits) ? benefits : [],
    });
  }

  async Update({
    id,
    plan,
    amount,
    max,
    terms,
    percent,
    investmentReturn,
    walletAddress,
    status,
    benefits,
  }) {
    if (
      amount !== undefined ||
      max !== undefined ||
      percent !== undefined ||
      plan !== undefined
    ) {
      this.#validate({
        plan: plan ?? "tmp",
        amount: amount ?? 0,
        max: max ?? amount ?? 0,
        percent: percent ?? 0,
      });
    }

    return await this.repo.UpdatePlan(id, {
      ...(plan !== undefined && { plan }),
      ...(amount !== undefined && { amount }),
      ...(max !== undefined && { max }),
      ...(terms !== undefined && { terms }),
      ...(percent !== undefined && { percent }),
      ...(investmentReturn !== undefined && { investmentReturn }),
      ...(walletAddress !== undefined && { walletAddress }),
      ...(status !== undefined && { status }),
      ...(benefits !== undefined && { benefits }),
    });
  }

  async Delete(id) {
    // Optional: guard against deleting plans that users already purchased
    return await this.repo.DeletePlan(id);
  }
}
