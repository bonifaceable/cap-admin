import APIs from "@/redux/Apis";
import { toast } from "react-toastify";

const getProfile = async () => {
  try {
    const response = await APIs.get(`/admin/get-admin`);

    if (response?.status === 200) {
      toast("User Data Successful");
      return response?.data;
    }
  } catch (error) {
    throw error;
  }
};

const UpdateUserWallet = async (payload) => {
  try {
    const response = await APIs.patch(`/update-user-wallet`, payload);

    if (response?.status === 200) {
      toast("wallet updated successfully");
      return response?.data;
    }
  } catch (error) {
    throw error;
  }
};

const approveDeposit = async (payload) => {
  try {
    const response = await APIs.patch(
      `/approve-deposit/${payload.id}`,
      payload.data
    );

    if (response?.status === 200) {
      toast("wallet updated successfully");
      return response?.data;
    }
  } catch (error) {
    throw error;
  }
};

const UpdateUserInvestmentBalance = async (payload) => {
  try {
    const response = await APIs.patch(`/update-user-invest-balance`, payload);

    if (response?.status === 200) {
      toast("wallet updated successfully");
      return response?.data;
    }
  } catch (error) {
    throw error;
  }
};

const getSingleUserProfile = async (payload) => {
  try {
    const response = await APIs.get(`/admin-get-user-wallet/${payload}`);

    if (response?.status === 200) {
      toast("User Data Successful");
      return response?.data;
    }
  } catch (error) {
    throw error;
  }
};

const getWallet = async () => {
  try {
    const response = await APIs.get(`/get-wallet`);

    if (response?.status === 200) {
      return response?.data;
    }
  } catch (error) {
    throw error;
  }
};

const transactions = async () => {
  try {
    const response = await APIs.get(`/admin/get-transactions`);
    if (response?.status === 200) {
      return response?.data;
    }
  } catch (error) {
    throw error;
  }
};

const getUsers = async () => {
  try {
    const response = await APIs.get(`/admin/get-users-wallet`);
    if (response?.status === 200) {
      return response?.data;
    }
  } catch (error) {
    throw error;
  }
};

const depositHistory = async () => {
  try {
    const response = await APIs.get(`/deposit-history`);

    if (response?.status === 200) {
      return response?.data;
    }
  } catch (error) {
    throw error;
  }
};

const getPlans = async () => {
  try {
    const response = await APIs.get(`/plans`);

    if (response?.status === 200) {
      // toast("User Data Successful");
      return response?.data;
    }
  } catch (error) {
    throw error;
  }
};

const editAdmin = async (payload) => {
  try {
    const response = await APIs.patch(`/admin_edit_user`, payload);

    if (response?.data?.message === "success") {
      toast("successfully");
      return response?.data;
    }
  } catch (error) {
    throw error;
  }
};

const editAdminPassword = async (payload) => {
  try {
    const response = await APIs.patch(`/admin_edit_user_password`, payload);

    if (response?.data?.message === "success") {
      toast("successfully");
      return response?.data;
    }
  } catch (error) {
    throw error;
  }
};

const editAdminProfilePic = async (payload) => {
  try {
    const response = await APIs.patch(`/admin_update_profile`, payload);

    if (response?.data?.message === "success") {
      toast("successfully");
      return response?.data;
    }
  } catch (error) {
    throw error;
  }
};

const profileService = {
  editAdmin,
  getProfile,
  editAdminProfilePic,
  editAdminPassword,
  getWallet,
  transactions,
  depositHistory,
  getPlans,
  getUsers,
  getSingleUserProfile,
  UpdateUserWallet,
  UpdateUserInvestmentBalance,
  approveDeposit,
};

export default profileService;
