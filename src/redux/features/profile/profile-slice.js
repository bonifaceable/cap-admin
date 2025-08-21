import { createSlice } from "@reduxjs/toolkit";
import {
  EditAdminPassword,
  EditAdminProfile,
  EditAdminProfilePic,
  getProfile,
  depositHistory,
  getTansactions,
  getWallet,
  getPlans,
  getUsers,
  getSingleUserProfile,
  UpdateUserWallet,
  UpdateUserInvestmentBalance,
  ApproveDeposit,
} from "./profile_service_syn";

export const profileSlice = createSlice({
  name: "profile",
  initialState: {
    profile: {},
    profileLoader: true,
    editLoader: false,
    profileMessage: "",

    //wallet
    wallet: {},
    walletLoader: false,
    walletMessage: "",

    // updating user wallet
    updatingUserWallet: false,
    userWalletUpdateSuccess: false,
    userWalletUpdateError: false,
    userWalletMessage: "",

    // updating user investment balance
    updatingUserInvestment: false,
    userInvestUpdateSuccess: false,
    userInvestUpdateError: false,
    userInvestMessage: "",

    // transactions
    transactions: [],
    transactionLoader: false,
    transactionsMessage: "",

    // users
    users: [],
    userLoader: false,
    usersMessage: "",

    // single user
    singleUser: {},
    singleUserLoader: false,
    singleUserMessage: "",

    // deposit history
    deposits: [],
    depositsLoader: false,
    depositsMessage: "",

    // deposit approve
    approvingDeposit: false,
    depositsApproveSuccess: false,
    depositApproveMessage: "",
    depositApproveError: false,

    // plans
    plans: [],
    gettingPlans: false,
    getPlansSuccess: false,
    getPlansError: false,
    getPlansMessage: "",
  },
  reducers: {
    clearState: (state) => {
      state.profile = {};
      // state.profileLoader = true;
      state.editLoader = false;
      state.profileMessage = "";

      return state;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProfile.pending, (state) => {
        state.profileLoader = true;
      })
      .addCase(getProfile.fulfilled, (state, { payload }) => {
        state.profileLoader = false;
        // state.profileMessage = payload.message;
        state.profileMessage = "profile fetch success";

        state.profile = payload.data;
      })
      .addCase(getProfile.rejected, (state, { payload }) => {
        state.profileLoader = false;
        state.profileMessage = payload.message;
      })
      .addCase(getSingleUserProfile.pending, (state) => {
        state.singleUserLoader = true;
      })
      .addCase(getSingleUserProfile.fulfilled, (state, { payload }) => {
        state.singleUserLoader = false;
        state.singleUser = payload;
        state.singleUserMessage = "single user profile fetch success";
      })
      .addCase(getSingleUserProfile.rejected, (state, { payload }) => {
        state.singleUserLoader = false;
        state.singleUser = {};
        state.singleUserMessage = "single user profile fetch error";
      })
      .addCase(UpdateUserWallet.pending, (state) => {
        state.updatingUserWallet = true;
      })
      .addCase(UpdateUserWallet.fulfilled, (state, { payload }) => {
        state.updatingUserWallet = false;
        state.userWalletUpdateSuccess = true;
        state.userWalletMessage = "updated wallet successfully";
      })
      .addCase(UpdateUserWallet.rejected, (state, { payload }) => {
        state.updatingUserWallet = false;
        state.userWalletUpdateSuccess = false;
        state.userWalletUpdateError = true;
        state.userWalletMessage = "update wallet error";
      })
      .addCase(UpdateUserInvestmentBalance.pending, (state) => {
        state.updatingUserInvestment = true;
      })
      .addCase(UpdateUserInvestmentBalance.fulfilled, (state, { payload }) => {
        state.updatingUserInvestment = false;
        state.userInvestUpdateSuccess = true;
        state.userInvestMessage = "update investment balance success";
      })
      .addCase(UpdateUserInvestmentBalance.rejected, (state, { payload }) => {
        state.updatingUserInvestment = false;
        state.userInvestUpdateError = true;
        state.userInvestMessage = "error updating investment";
      })
      .addCase(ApproveDeposit.pending, (state) => {
        state.approvingDeposit = true;
      })
      .addCase(ApproveDeposit.fulfilled, (state, { payload }) => {
        state.approvingDeposit = false;
        state.depositsApproveSuccess = true;
        state.depositApproveMessage = "success";
      })
      .addCase(ApproveDeposit.rejected, (state, { payload }) => {
        state.approvingDeposit = false;
        state.depositApproveMessage = "Error!";
        state.depositApproveError = true;
      })
      .addCase(getPlans.pending, (state) => {
        state.gettingPlans = true;
      })
      .addCase(getPlans.fulfilled, (state, { payload }) => {
        state.gettingPlans = false;
        state.getPlansSuccess = true;
        state.plans = payload;
      })
      .addCase(getPlans.rejected, (state, { payload }) => {
        state.gettingPlans = false;
        state.getPlansError = true;
        state.getPlansMessage = payload.message;
      })
      .addCase(getWallet.pending, (state) => {
        state.walletLoader = true;
      })
      .addCase(getWallet.fulfilled, (state, { payload }) => {
        state.walletLoader = false;
        // state.profileMessage = payload.message;
        // state.profileMessage = "profile fetch success";

        state.wallet = payload.data;
      })
      .addCase(getWallet.rejected, (state, { payload }) => {
        state.walletLoader = false;
        // state.walletMessageMessage = payload.message;
      })
      .addCase(getTansactions.pending, (state) => {
        state.transactionLoader = true;
      })
      .addCase(getTansactions.fulfilled, (state, { payload }) => {
        state.transactionLoader = false;

        state.transactions = payload;
      })
      .addCase(getTansactions.rejected, (state, { payload }) => {
        state.transactionLoader = false;
        state.transactionsMessage = payload.message;
      })
      .addCase(getUsers.pending, (state) => {
        state.userLoader = true;
      })
      .addCase(getUsers.fulfilled, (state, { payload }) => {
        state.userLoader = false;

        state.users = payload;
      })
      .addCase(getUsers.rejected, (state, { payload }) => {
        state.userLoader = false;
        state.usersMessage = payload.message;
      })
      .addCase(depositHistory.pending, (state) => {
        state.depositsLoader = true;
      })
      .addCase(depositHistory.fulfilled, (state, { payload }) => {
        state.depositsLoader = false;

        state.deposits = payload.transactions;
      })
      .addCase(depositHistory.rejected, (state, { payload }) => {
        state.depositsLoader = false;
        state.depositsMessage = payload.message;
      })
      .addCase(EditAdminProfile.pending, (state) => {
        state.editLoader = true;
      })
      .addCase(EditAdminProfile.fulfilled, (state, { payload }) => {
        state.editLoader = false;
        state.profileMessage = payload.message;
        state.profile = payload.data;
      })
      .addCase(EditAdminProfile.rejected, (state, { payload }) => {
        state.editLoader = false;
        state.profileMessage = payload.message;
      })
      .addCase(EditAdminPassword.pending, (state) => {
        state.editLoader = true;
      })
      .addCase(EditAdminPassword.fulfilled, (state, { payload }) => {
        state.editLoader = false;
        state.profileMessage = payload.message;
      })
      .addCase(EditAdminPassword.rejected, (state, { payload }) => {
        state.editLoader = false;
        state.profileMessage = payload.message;
      })
      .addCase(EditAdminProfilePic.pending, (state) => {
        state.editLoader = true;
      })
      .addCase(EditAdminProfilePic.fulfilled, (state, { payload }) => {
        state.editLoader = false;
        state.profileMessage = payload.message;
        state.profile = payload.data;
      })
      .addCase(EditAdminProfilePic.rejected, (state, { payload }) => {
        state.editLoader = false;
        state.profileMessage = payload?.message;
      });
  },
});

export const { clearState } = profileSlice.actions;
export const profileSelector = (state) => state.profile;
