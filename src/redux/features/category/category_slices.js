import { createSlice } from '@reduxjs/toolkit';
import {
  CreateCategory,
  DeleteCategory,
  EditCategoryDetail,
  GetAllCategory,
  GetSingleCategoryDetails,
  UploadCategoryIcon,
  UploadCategoryImage,
} from './category_services_syn';

export const categorySlice = createSlice({
  name: 'category',
  initialState: {
    category_loader: false,
    allCategoryLoader: true,
    categoryDeleteLoader: false,
    categoryEditLoader: false,
    catEditLoader: false,
    message: '',
    completeCategory: [],
    categoryDetails: {},
    categoryImageDetails: {},
    categoryIconDetails: {},
  },
  reducers: {
    clearState: (state) => {
      state.category_loader = false;
      state.message = '';
      state.completeCategory = [];
      state.allCategoryLoader = true;
      state.categoryDeleteLoader = false;
      state.categoryEditLoader = false;
      state.catEditLoader = false;
      state.categoryDetails = {};
      state.categoryImageDetails = {};
      state.categoryIconDetails = {};

      return state;
    },

    updateCategoryDetails: (state, action) => {
      state.categoryDetails = action.payload;
    },

    updateCompleteCategory: (state, action) => {
      state.completeCategory = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(CreateCategory.pending, (state) => {
        state.category_loader = true;
      })
      .addCase(CreateCategory.fulfilled, (state, { payload }) => {
        state.category_loader = false;
        state.message = payload.message;
      })
      .addCase(CreateCategory.rejected, (state, { payload }) => {
        state.category_loader = false;
        state.message = payload.message;
      })
      .addCase(UploadCategoryImage.pending, (state) => {
        state.categoryEditLoader = true;
      })
      .addCase(UploadCategoryImage.fulfilled, (state, { payload }) => {
        state.categoryEditLoader = false;
        state.profileMessage = payload.message;
        state.categoryImageDetails = payload.data;
      })
      .addCase(UploadCategoryImage.rejected, (state, { payload }) => {
        state.categoryEditLoader = false;
        state.profileMessage = payload?.message;
      })
      .addCase(UploadCategoryIcon.pending, (state) => {
        state.categoryEditLoader = true;
      })
      .addCase(UploadCategoryIcon.fulfilled, (state, { payload }) => {
        state.categoryEditLoader = false;
        state.profileMessage = payload.message;
        state.categoryIconDetails = payload.data;
      })
      .addCase(UploadCategoryIcon.rejected, (state, { payload }) => {
        state.categoryEditLoader = false;
        state.profileMessage = payload?.message;
      })
      .addCase(GetAllCategory.pending, (state) => {
        state.category_loader = true;
      })
      .addCase(GetAllCategory.fulfilled, (state, { payload }) => {
        state.category_loader = false;
        state.message = payload.message;
        state.completeCategory = payload.data;
      })
      .addCase(GetAllCategory.rejected, (state, { payload }) => {
        state.category_loader = false;
        state.message = payload.message;
      })
      .addCase(DeleteCategory.pending, (state) => {
        state.categoryDeleteLoader = true;
      })
      .addCase(DeleteCategory.fulfilled, (state, { payload }) => {
        state.categoryDeleteLoader = false;
        state.message = payload.message;
      })
      .addCase(DeleteCategory.rejected, (state, { payload }) => {
        state.categoryDeleteLoader = false;
        state.message = payload.message;
      })
      .addCase(GetSingleCategoryDetails.pending, (state) => {
        state.category_loader = true;
      })
      .addCase(GetSingleCategoryDetails.fulfilled, (state, { payload }) => {
        state.category_loader = false;
        state.message = payload.message;
        state.categoryDetails = payload.data;
      })
      .addCase(GetSingleCategoryDetails.rejected, (state, { payload }) => {
        state.category_loader = false;
        state.message = payload.message;
      })
      .addCase(EditCategoryDetail.pending, (state) => {
        state.catEditLoader = true;
      })
      .addCase(EditCategoryDetail.fulfilled, (state, { payload }) => {
        state.catEditLoader = false;
        state.message = payload.message;
      })
      .addCase(EditCategoryDetail.rejected, (state, { payload }) => {
        state.catEditLoader = false;
        state.message = payload.message;
      });
  },
});

export const { updateCategoryDetails, updateCompleteCategory } =
  categorySlice.actions;
export const categroySelector = (state) => state.category;
