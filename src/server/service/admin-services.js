// import { AdminRepository } from '@/server/repositories/admin.repository'
import {
  FormatData,
  HashPassword,
  GenerateSalt,
  GenerateAdminSignature,
  ValidatePassword,
} from "@/server/utils";
import {
  APIError,
  BadRequestError,
  STATUS_CODES,
  ValidationError,
} from "@/server/utils/app-errors";
import { AdminRepository } from "../repository/adminRepo";

export default class AdminController {
  constructor() {
    this.adminRepository = new AdminRepository();
  }

  async GetAdmins() {
    try {
      const admins = await this.adminRepository.GetAdmins();
      return admins;
    } catch (err) {
      throw new APIError(
        err.name || "Data Not found",
        err.statusCode || STATUS_CODES.INTERNAL_ERROR,
        err.message
      );
    }
  }

  async GetAdminProfile(id) {
    try {
      const adminProfile = await this.adminRepository.GetAdminProfile(id);
      return FormatData({ adminProfile });
    } catch (err) {
      throw new APIError(
        err.name || "Data Not found",
        err.statusCode || STATUS_CODES.INTERNAL_ERROR,
        err.message
      );
    }
  }

  async DeleteAdmin(id) {
    try {
      const adminProfile = await this.adminRepository.DeleteAdmin(id);
      return FormatData({ adminProfile });
    } catch (err) {
      throw new APIError(
        err.name || "Data Not found",
        err.statusCode || STATUS_CODES.INTERNAL_ERROR,
        err.message
      );
    }
  }

  async BlockAdmin({ adminId }) {
    try {
      const adminProfile = await this.adminRepository.BlockAdmin({ adminId });
      return FormatData({ adminProfile });
    } catch (err) {
      throw new APIError(
        err.name || "Data Not found",
        err.statusCode || STATUS_CODES.INTERNAL_ERROR,
        err.message
      );
    }
  }

  async UnBlockAdmin({ adminId }) {
    try {
      const adminProfile = await this.adminRepository.UnBlockAdmin({ adminId });
      return FormatData({ adminProfile });
    } catch (err) {
      throw new APIError(
        err.name || "Data Not found",
        err.statusCode || STATUS_CODES.INTERNAL_ERROR,
        err.message
      );
    }
  }

  async SignUp({ name, email, password, adminType }) {
    try {
      const existingUser = await this.adminRepository.FindExistingAdmin(
        email,
        "email"
      );
      if (existingUser) throw new BadRequestError("Admin already exists");

      const salt = await GenerateSalt();
      const hashedPassword = await HashPassword(password, salt);

      const createUser = await this.adminRepository.CreateAdmin({
        name,
        email,
        adminType,
        password: hashedPassword,
        salt,
      });

      const token = await GenerateAdminSignature({
        email,
        _id: createUser._id,
      });
      return FormatData({ id: createUser._id, email: createUser.email, token });
    } catch (err) {
      throw new APIError(
        err.name || "Data Not found",
        err.statusCode || STATUS_CODES.INTERNAL_ERROR,
        err.message
      );
    }
  }

  async Login({ email, password }) {
    try {
      const existingUser = await this.adminRepository.FindExistingAdmin(
        email,
        "email"
      );
      console.log(existingUser, "existing user");
      if (!existingUser)
        throw new BadRequestError("user with the email does not exist", true);

      const isValidPassword = await ValidatePassword(
        password,
        existingUser.password,
        existingUser.salt
      );
      if (!isValidPassword)
        throw new ValidationError("invalid credentials", true);

      const token = await GenerateAdminSignature({
        email: existingUser.email,
        _id: existingUser.id,
      });
      return FormatData({
        id: existingUser._id,
        token,
        status: existingUser.status,
      });
    } catch (e) {
      throw new APIError(
        e.name || "Data Not Found",
        e.statusCode || STATUS_CODES.INTERNAL_ERROR,
        e.message
      );
    }
  }

  async ChangePasswordOnLogin({ id, password }) {
    try {
      const existingUser = await this.adminRepository.FindExistingAdmin(
        id,
        "id"
      );
      if (!existingUser)
        throw new BadRequestError("user with the email does not exist", true);

      const salt = await GenerateSalt();
      const hashedPassword = await HashPassword(password, salt);
      const updated = await this.adminRepository.UpdatePassword({
        id,
        password: hashedPassword,
      });
      return updated;
    } catch (e) {
      throw new APIError(
        e.name || "Data Not Found",
        e.statusCode || STATUS_CODES.INTERNAL_ERROR,
        e.message
      );
    }
  }

  async UpdateAdmin({ adminId, role, adminType }) {
    try {
      const existingUser = await this.adminRepository.FindExistingAdmin(
        adminId,
        "id"
      );
      if (!existingUser)
        throw new BadRequestError("user with the email does not exist", true);

      return await this.adminRepository.UpdateAdminProfile({
        adminId,
        role,
        adminType,
      });
    } catch (e) {
      throw new APIError(
        e.name || "Data Not Found",
        e.statusCode || STATUS_CODES.INTERNAL_ERROR,
        e.message
      );
    }
  }
}
