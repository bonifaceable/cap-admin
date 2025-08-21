import { createSlice } from '@reduxjs/toolkit';
import {
  DeleteAdmin,
  EditAdmin,
  GetAllUserDetailAdvance,
  GetSingleUserDetailAdvance,
  LoginUser,
  RegisterUser,
} from './auth_services_syn';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    loader: false,
    allAdminLoader: true,
    adminDeleteLoader: false,
    message: '',
    completeAdminUser: [],
    authLimit: 10,
    authSkip: 0,
    AdminDetails: {},
  },
  reducers: {
    clearState: (state) => {
      state.loader = false;
      state.message = '';
      state.completeAdminUser = [];
      state.authLimit = 10;
      state.authSkip = 0;
      state.allAdminLoader = true;
      state.adminDeleteLoader = false;
      state.AdminDetails = {};

      return state;
    },

    updateAllAdminSkip: (state, { payload }) => {
      state.authSkip = payload;

      return { ...state };
    },

    updateAllAdminLimit: (state, { payload }) => {
      state.authLimit = payload;

      return { ...state };
    },

    updateAdminsDetails: (state, action) => {
      state.completeAdminUser = action.payload;
    },

    updateAdmiinPrefillDetails: (state, action) => {
      state.AdminDetails = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(LoginUser.pending, (state) => {
        state.loader = true;
      })
      .addCase(LoginUser.fulfilled, (state, { payload }) => {
        state.loader = false;
        state.message = payload.message;
      })
      .addCase(LoginUser.rejected, (state, { payload }) => {
        state.loader = false;
        state.message = payload.message;
      })
      .addCase(RegisterUser.pending, (state) => {
        state.loader = true;
      })
      .addCase(RegisterUser.fulfilled, (state, { payload }) => {
        state.loader = false;
        state.message = payload.message;
      })
      .addCase(RegisterUser.rejected, (state, { payload }) => {
        state.loader = false;
        state.message = payload.message;
      })
      .addCase(EditAdmin.pending, (state) => {
        state.loader = true;
      })
      .addCase(EditAdmin.fulfilled, (state, { payload }) => {
        state.loader = false;
        state.message = payload.message;
      })
      .addCase(EditAdmin.rejected, (state, { payload }) => {
        state.loader = false;
        state.message = payload.message;
      })
      .addCase(DeleteAdmin.pending, (state) => {
        state.adminDeleteLoader = true;
      })
      .addCase(DeleteAdmin.fulfilled, (state, { payload }) => {
        state.adminDeleteLoader = false;
        state.message = payload.message;
      })
      .addCase(DeleteAdmin.rejected, (state, { payload }) => {
        state.adminDeleteLoader = false;
        state.message = payload.message;
      })
      .addCase(GetAllUserDetailAdvance.pending, (state) => {
        state.allAdminLoader = true;
      })
      .addCase(GetAllUserDetailAdvance.fulfilled, (state, { payload }) => {
        state.allAdminLoader = false;
        state.message = payload.message;
        state.completeAdminUser = payload.data;
      })
      .addCase(GetAllUserDetailAdvance.rejected, (state, { payload }) => {
        state.allAdminLoader = false;
        state.message = payload.message;
      })
      .addCase(GetSingleUserDetailAdvance.pending, (state) => {
        state.allAdminLoader = true;
      })
      .addCase(GetSingleUserDetailAdvance.fulfilled, (state, { payload }) => {
        state.allAdminLoader = false;
        state.message = payload.message;
        state.AdminDetails = payload.data;
      })
      .addCase(GetSingleUserDetailAdvance.rejected, (state, { payload }) => {
        state.allAdminLoader = false;
        state.message = payload.message;
      });
  },
});

export const {
  clearState,
  updateAllAdminSkip,
  updateAllAdminLimit,
  updateAdminsDetails,
  updateAdmiinPrefillDetails,
} = authSlice.actions;
export const authSelector = (state) => state.auth;
