import { Admin } from "@/server/models/admin";
import { APIError, STATUS_CODES } from "@/server/utils/app-errors";

export class AdminRepository {
  async GetAdmins() {
    try {
      return await Admin.find({}).sort({ createdAt: -1 });
    } catch (err) {
      throw new APIError("API Error", STATUS_CODES.INTERNAL_ERROR, err.message);
    }
  }

  async GetAdminProfile(id) {
    try {
      return await Admin.findById(id);
    } catch (err) {
      throw new APIError("API Error", STATUS_CODES.INTERNAL_ERROR, err.message);
    }
  }

  async DeleteAdmin(id) {
    try {
      return await Admin.findByIdAndDelete(id);
    } catch (err) {
      throw new APIError(
        "API Error",
        STATUS_CODES.INTERNAL_ERROR,
        `Unable to delete admin ${err.message}`
      );
    }
  }

  async BlockAdmin({ adminId }) {
    try {
      return await Admin.findByIdAndUpdate(
        adminId,
        { blocked: true },
        { new: true }
      );
    } catch (err) {
      throw new APIError(
        "API Error",
        STATUS_CODES.INTERNAL_ERROR,
        `Unable to block admin ${err.message}`
      );
    }
  }

  async UnBlockAdmin({ adminId }) {
    try {
      return await Admin.findByIdAndUpdate(
        adminId,
        { blocked: false },
        { new: true }
      );
    } catch (err) {
      throw new APIError(
        "API Error",
        STATUS_CODES.INTERNAL_ERROR,
        `Unable to unblock admin ${err.message}`
      );
    }
  }

  async CreateAdmin({ name, email, password, adminType, salt }) {
    try {
      const created = await Admin.create({
        name,
        email,
        password,
        adminType,
        salt,
      });
      return await created.save();
    } catch (err) {
      throw new APIError(
        "API Error",
        STATUS_CODES.INTERNAL_ERROR,
        `Unable to create admin ${err.message}`
      );
    }
  }

  async UpdatePassword({ id, password }) {
    try {
      return await Admin.findByIdAndUpdate(
        id,
        { password, otp: "", status: "updated" },
        { new: true }
      );
    } catch (err) {
      throw new APIError(
        "API Error",
        STATUS_CODES.INTERNAL_ERROR,
        `Unable to update password ${err.message}`
      );
    }
  }

  async UpdateAdminProfile({ adminId, role, adminType }) {
    try {
      return await Admin.findByIdAndUpdate(
        adminId,
        { role, adminType },
        { new: true }
      );
    } catch (err) {
      throw new APIError(
        "API Error",
        STATUS_CODES.INTERNAL_ERROR,
        `Unable to update admin ${err.message}`
      );
    }
  }

  async FindExistingAdmin(query, queryType) {
    try {
      if (queryType === "id") return await Admin.findById(query);
      if (queryType === "email") return await Admin.findOne({ email: query });
      if (queryType === "verification_code")
        return await Admin.findOne({ verificationString: query });
      return null;
    } catch (err) {
      throw new APIError(
        "API Error",
        STATUS_CODES.INTERNAL_ERROR,
        `Query failed ${err.message}`
      );
    }
  }
}
