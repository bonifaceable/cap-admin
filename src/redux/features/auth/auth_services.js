import APIs from "@/redux/Apis";
import { toast } from "react-toastify";

const registerUser = async (payload) => {
  try {
    console.log(payload, "response");
    const response = await APIs.post("/register", payload);

    console.log(response, "response");
    if (response?.status === 200) {
      toast("Registered Successfully");
      APIs.defaults.headers["Authorization"] =
        `Bearer ${response?.data?.token}`;

      localStorage.setItem("token", response?.data?.token);
      return response?.data;
    }
  } catch (error) {
    throw error;
  }
};

const loginUser = async (payload) => {
  try {
    console.log(payload, "joshua");
    const response = await APIs.post("/admin/admin-login", payload);

    console.log(response, "response login");
    if (response?.status === 200) {
      toast("Login Successfully");

      APIs.defaults.headers["Authorization"] =
        `Bearer ${response?.data?.token}`;

      localStorage.setItem("token", response?.data?.token);
      return response?.data;
    }
  } catch (error) {
    throw error;
  }
};

const DeleteAdmin = async (payload) => {
  try {
    const response = await APIs.post(`/admin_delete_user`, payload);

    if (response?.data?.message === "success") {
      toast("successfully");
      return response?.data;
    }
  } catch (error) {
    throw error;
  }
};

const editUserFromAdmin = async (payload) => {
  try {
    const response = await APIs.patch(`/admin/admin_edit_user`, payload);

    if (response?.data?.message === "success") {
      toast("successfully");
      return response?.data;
    }
  } catch (error) {
    throw error;
  }
};

const getAllAdminDetails = async (payload) => {
  try {
    const response = await APIs.get(
      `/admin_get_all_registered_users/${payload?.page}/${payload?.limit}`
    );

    if (response?.data?.message === "success") {
      toast("successfully");
      return response?.data;
    }
  } catch (error) {
    throw error;
  }
};

const getSingleAdminDetails = async (payload) => {
  try {
    const response = await APIs.get(`/admin/get-admin/${payload?.Id}`);

    if (response?.data?.message === "success") {
      toast("successfully");
      return response?.data;
    }
  } catch (error) {
    throw error;
  }
};

const AuthServices = {
  registerUser,
  loginUser,
  getAllAdminDetails,
  DeleteAdmin,
  getSingleAdminDetails,
  editUserFromAdmin,
};

export default AuthServices;
