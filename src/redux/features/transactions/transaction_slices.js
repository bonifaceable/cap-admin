import { createSlice } from "@reduxjs/toolkit";
import {
  CreateTransaction,
  Deposits,
  PurchasePlan,
  GetAllTransaction,
  GetSingleTransactionDetails,
  UploadtransactionImages,
  UploadtransactionThu,
} from "./transaction_services_syn";

export const transactionSlice = createSlice({
  name: "transaction",
  initialState: {
    //creating transaction
    creating_transaction: false,
    create_transaction_success: false,
    create_transaction_failure: false,
    create_transaction_message: "",

    // get transactions
    transactions: [],
    getting_transactions: false,
    get_transactions_success: false,
    get_transactions_failure: false,
    get_transactions_message: "",

    // get fund deposits
    fund_deposit: [],
    getting_funds: false,
    get_funds_success: false,
    get_funds_failure: false,
    get_funds_message: "",

    // plan purchase
    purchasing_plan: false,
    purchase_plan_success: false,
    purchase_plan_failure: false,
    purchase_plan_message: "",

    transaction_loader: false,
    allTransactionLoader: true,
    transactionDeleteLoader: false,
    transactionEditLoader: false,
    proEditLoader: false,
    message: "",
    completetransaction: [],
    transactionDetails: {},
    transactionImagesDetails: {},
    transactionthubnailDetails: {},
    transactionLimit: 10,
    transactionSkip: 0,
  },
  reducers: {
    clearState: (state) => {
      state.transaction_loader = false;
      state.message = "";
      state.completetransaction = [];
      state.allTransactionLoader = true;
      state.transactionDeleteLoader = false;
      state.transactionEditLoader = false;
      state.proEditLoader = false;
      state.transactionDetails = {};
      state.transactionImagesDetails = {};
      state.transactionthubnailDetails = {};
      state.transactionLimit = 10;
      state.transactionSkip = 0;

      return state;
    },

    updatetransactionSkip: (state, { payload }) => {
      state.transactionSkip = payload;

      return { ...state };
    },

    updatetransactionLimit: (state, { payload }) => {
      state.transactionLimit = payload;

      return { ...state };
    },

    updatetransactionDetails: (state, action) => {
      state.transactionDetails = action.payload;

      return { ...state };
    },

    updateCompletetransaction: (state, action) => {
      state.completetransaction = action.payload;

      return { ...state };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(CreateTransaction.pending, (state) => {
        state.creating_transaction = true;
      })
      .addCase(CreateTransaction.fulfilled, (state, { payload }) => {
        state.creating_transaction = false;
        state.create_transaction_success = true;
        state.create_transaction_message = payload.message;
      })
      .addCase(CreateTransaction.rejected, (state, { payload }) => {
        state.creating_transaction = false;
        state.create_transaction_failure = true;
        state.create_transaction_message = payload.message;
      })
      .addCase(UploadtransactionImages.pending, (state) => {
        state.transactionEditLoader = true;
      })
      .addCase(UploadtransactionImages.fulfilled, (state, { payload }) => {
        state.transactionEditLoader = false;
        state.message = payload.message;
        state.transactionImagesDetails = payload.data;
      })
      .addCase(UploadtransactionImages.rejected, (state, { payload }) => {
        state.transactionEditLoader = false;
        state.message = payload.message;
      })
      .addCase(UploadtransactionThu.pending, (state) => {
        state.transactionEditLoader = true;
      })
      .addCase(UploadtransactionThu.fulfilled, (state, { payload }) => {
        state.transactionEditLoader = false;
        state.message = payload.message;
        state.transactionthubnailDetails = payload.data;
      })
      .addCase(UploadtransactionThu.rejected, (state, { payload }) => {
        state.transactionEditLoader = false;
        state.message = payload.message;
      })
      .addCase(GetAllTransaction.pending, (state) => {
        state.transaction_loader = true;
      })
      .addCase(GetAllTransaction.fulfilled, (state, { payload }) => {
        state.transaction_loader = false;
        state.message = payload?.message;
        state.completetransaction = payload?.data;
      })
      .addCase(GetAllTransaction.rejected, (state, { payload }) => {
        state.transaction_loader = false;
        state.message = payload?.message;
      })
      .addCase(Deposits.pending, (state) => {
        state.transactionDeleteLoader = true;
      })
      .addCase(Deposits.fulfilled, (state, { payload }) => {
        state.transactionDeleteLoader = false;
        state.message = payload.message;
      })
      .addCase(Deposits.rejected, (state, { payload }) => {
        state.transactionDeleteLoader = false;
        state.message = payload.message;
      })
      .addCase(GetSingleTransactionDetails.pending, (state) => {
        state.transaction_loader = true;
      })
      .addCase(GetSingleTransactionDetails.fulfilled, (state, { payload }) => {
        state.transaction_loader = false;
        // state.message = payload.message;
        console.log(payload, "payload transact details");
        state.transactionDetails = payload;
      })
      .addCase(GetSingleTransactionDetails.rejected, (state, { payload }) => {
        state.transaction_loader = false;
        state.message = payload.message;
      })
      .addCase(PurchasePlan.pending, (state) => {
        state.purchasing_plan = true;
      })
      .addCase(PurchasePlan.fulfilled, (state, { payload }) => {
        state.purchasing_plan = false;
        state.purchase_plan_success = true;
        state.purchase_plan_message = payload.message;
      })
      .addCase(PurchasePlan.rejected, (state, { payload }) => {
        state.purchasing_plan = false;
        state.purchase_plan_failure = true;
        state.purchase_plan_message = payload.message;
      });
  },
});

export const {
  updatetransactionDetails,
  updateCompletetransaction,
  updatetransactionSkip,
  updatetransactionLimit,
} = transactionSlice.actions;
export const transactionSelector = (state) => state.transaction;
