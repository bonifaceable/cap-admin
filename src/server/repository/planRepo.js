import { PlanModel } from "@/server/models/plan";
import { APIError, STATUS_CODES } from "@/server/utils/app-errors";

export class PlanRepository {
  // async GetPlans(filter = {}, { sort = { amount: 1 } } = {}) {
  async GetPlans() {
    try {
      return await PlanModel.find();
    } catch (err) {
      throw new APIError("API Error", STATUS_CODES.INTERNAL_ERROR, err.message);
    }
  }

  async CreatePlan(payload) {
    try {
      const doc = await PlanModel.create(payload);
      return await doc.save();
    } catch (error) {
      throw new APIError(
        "API Error",
        STATUS_CODES.INTERNAL_ERROR,
        error.message
      );
    }
  }

  async UpdatePlan(planId, update) {
    try {
      return await PlanModel.findByIdAndUpdate(planId, update, { new: true });
    } catch (err) {
      throw new APIError("API Error", STATUS_CODES.INTERNAL_ERROR, err.message);
    }
  }

  async DeletePlan(id) {
    try {
      return await PlanModel.findByIdAndDelete(id);
    } catch (error) {
      throw new APIError(
        "API Error",
        STATUS_CODES.INTERNAL_ERROR,
        error.message
      );
    }
  }

  async FindExistingPlan(query, queryType) {
    try {
      if (queryType === "plan") return await PlanModel.findOne({ plan: query });
      if (queryType === "amount")
        return await PlanModel.findOne({ amount: query });
      if (queryType === "id") return await PlanModel.findById(query);
      if (queryType === "max") return await PlanModel.findOne({ max: query });
      return null;
    } catch (error) {
      throw new APIError(
        "API Error",
        STATUS_CODES.INTERNAL_ERROR,
        error.message
      );
    }
  }
}

export default PlanRepository;
