import { createAsyncThunk } from "@reduxjs/toolkit";
import AuthServices from "./auth_services";
import { toast } from "react-toastify";

export const LoginUser = createAsyncThunk(
  "auth/login",
  async (requestData, thunkAPI) => {
    try {
      const delivered = await AuthServices.loginUser(requestData);

      console.log(delivered, "from login");

      window.location.href = "/dashboard";

      return delivered;
    } catch (e) {
      toast(e.message);
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export const RegisterUser = createAsyncThunk(
  "auth/register",
  async (requestData, thunkAPI) => {
    try {
      const delivered = await AuthServices.registerUser(requestData);

      window.location.href = "/dashboard";

      return delivered;
    } catch (e) {
      toast(e.message);
      console.log("Error", e);
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export const EditAdmin = createAsyncThunk(
  "auth/edit_admin",
  async (requestData, thunkAPI) => {
    try {
      const delivered = await AuthServices.editUserFromAdmin(requestData);

      window.location.href = "/dashboard/users";

      return delivered;
    } catch (e) {
      toast(e.message);
      console.log("Error", e);
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export const DeleteAdmin = createAsyncThunk(
  "auth/deleteUser",
  async (payload) => {
    try {
      let response = await AuthServices.DeleteAdmin(payload);

      return response;
    } catch (error) {
      toast(error.message);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const GetAllUserDetailAdvance = createAsyncThunk(
  "auth/user_details_advanced",
  async (payload) => {
    try {
      let response = await AuthServices.getAllAdminDetails(payload);

      return response;
    } catch (error) {
      toast(error.message);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const GetSingleUserDetailAdvance = createAsyncThunk(
  "auth/user_single_details_advanced",
  async (payload) => {
    try {
      let response = await AuthServices.getSingleAdminDetails(payload);

      return response;
    } catch (error) {
      toast(error.message);
      return thunkAPI.rejectWithValue(error);
    }
  }
);
