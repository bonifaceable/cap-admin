import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import transactionsServices from "./transaction_services";

export const CreateTransaction = createAsyncThunk(
  "transaction/create_transaction",
  async (requestData, thunkAPI) => {
    try {
      const delivered = await transactionsServices.CreateTransaction(
        requestData
      );

      window.location.href = "/dashboard";

      return delivered;
    } catch (e) {
      toast(e.message);
      console.log("Error", e);
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export const UploadtransactionImages = createAsyncThunk(
  "transaction/transaction_images",
  async (requestData, thunkAPI) => {
    try {
      const delivered = await transactionsServices.uploadtransactionImages(
        requestData
      );

      return delivered;
    } catch (e) {
      toast(e.message);
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export const UploadtransactionThu = createAsyncThunk(
  "transaction/transaction_thu",
  async (requestData, thunkAPI) => {
    try {
      const delivered = await transactionsServices.uploadtransactionThu(
        requestData
      );

      return delivered;
    } catch (e) {
      toast(e.message);
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export const GetAllTransaction = createAsyncThunk(
  "transaction/get_all_transaction",
  async (payload) => {
    try {
      let response = await transactionsServices.GetAllTransaction(payload);

      return response;
    } catch (error) {
      toast(error.message);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const Deposits = createAsyncThunk(
  "transaction/deposits",
  async (payload) => {
    try {
      let response = await transactionsServices.Deposits(payload);

      return response;
    } catch (error) {
      toast(error.message);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const GetSingleTransactionDetails = createAsyncThunk(
  "transaction/get_single_transaction",
  async (payload) => {
    try {
      let response = await transactionsServices.GetSingleTransactionDetails(
        payload
      );

      return response;
    } catch (error) {
      toast(error.message);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const PurchasePlan = createAsyncThunk(
  "transaction/purchase_plan",
  async (requestData, thunkAPI) => {
    try {
      const delivered = await transactionsServices.PurchasePlan(requestData);

      window.location.href = "/dashboard";

      return delivered;
    } catch (e) {
      toast(e.message);
      console.log("Error", e);
      return thunkAPI.rejectWithValue(e);
    }
  }
);
