import { createSlice } from '@reduxjs/toolkit';
import {
  CreateSubCategory,
  DeleteSubCategory,
  EditSubCategoryDetail,
  GetAllSubCategory,
  GetSingleSubCategoryDetails,
  UploadSubCategoryIcon,
  UploadSubCategoryImage,
} from './sub_category_services_syn';

export const subCategorySlice = createSlice({
  name: 'sub_category',
  initialState: {
    subcategory_loader: false,
    allSubCategoryLoader: true,
    subCategoryDeleteLoader: false,
    subCategoryEditLoader: false,
    subCatEditLoader: false,
    message: '',
    completeSubCategory: {},
    subCategoryDetails: {},
    subCategoryImageDetails: {},
    subCategoryIconDetails: {},
    CategoryDetails: {},
  },
  reducers: {
    clearState: (state) => {
      state.subcategory_loader = false;
      state.message = '';
      state.completeSubCategory = {};
      state.allSubCategoryLoader = true;
      state.subCategoryDeleteLoader = false;
      state.subCategoryEditLoader = false;
      state.subCatEditLoader = false;
      state.subCategoryDetails = {};
      state.subCategoryImageDetails = {};
      state.subCategoryIconDetails = {};
      state.CategoryDetails = {};

      return state;
    },

    updateSubCategoryDetails: (state, action) => {
      state.subCategoryDetails = action.payload;
    },

    updateCompleteSubCategory: (state, action) => {
      state.completeSubCategory = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(CreateSubCategory.pending, (state) => {
        state.subcategory_loader = true;
      })
      .addCase(CreateSubCategory.fulfilled, (state, { payload }) => {
        state.subcategory_loader = false;
        state.message = payload.message;
      })
      .addCase(CreateSubCategory.rejected, (state, { payload }) => {
        state.subcategory_loader = false;
        state.message = payload.message;
      })
      .addCase(UploadSubCategoryImage.pending, (state) => {
        state.subCategoryEditLoader = true;
      })
      .addCase(UploadSubCategoryImage.fulfilled, (state, { payload }) => {
        state.subCategoryEditLoader = false;
        state.profileMessage = payload.message;
        state.subCategoryImageDetails = payload.data;
      })
      .addCase(UploadSubCategoryImage.rejected, (state, { payload }) => {
        state.subCategoryEditLoader = false;
        state.profileMessage = payload?.message;
      })
      .addCase(UploadSubCategoryIcon.pending, (state) => {
        state.subCategoryEditLoader = true;
      })
      .addCase(UploadSubCategoryIcon.fulfilled, (state, { payload }) => {
        state.subCategoryEditLoader = false;
        state.profileMessage = payload.message;
        state.subCategoryIconDetails = payload.data;
      })
      .addCase(UploadSubCategoryIcon.rejected, (state, { payload }) => {
        state.subCategoryEditLoader = false;
        state.profileMessage = payload?.message;
      })
      .addCase(GetAllSubCategory.pending, (state) => {
        state.subcategory_loader = true;
      })
      .addCase(GetAllSubCategory.fulfilled, (state, { payload }) => {
        state.subcategory_loader = false;
        state.message = payload.message;
        state.completeSubCategory = payload.data;
      })
      .addCase(GetAllSubCategory.rejected, (state, { payload }) => {
        state.subcategory_loader = false;
        state.message = payload.message;
      })
      .addCase(DeleteSubCategory.pending, (state) => {
        state.subCategoryDeleteLoader = true;
      })
      .addCase(DeleteSubCategory.fulfilled, (state, { payload }) => {
        state.subCategoryDeleteLoader = false;
        state.message = payload.message;
      })
      .addCase(DeleteSubCategory.rejected, (state, { payload }) => {
        state.subCategoryDeleteLoader = false;
        state.message = payload.message;
      })
      .addCase(GetSingleSubCategoryDetails.pending, (state) => {
        state.subcategory_loader = true;
      })
      .addCase(GetSingleSubCategoryDetails.fulfilled, (state, { payload }) => {
        state.subcategory_loader = false;
        state.message = payload.message;
        state.subCategoryDetails = payload.data?.sub_category;
        state.CategoryDetails = payload.data?.category;
      })
      .addCase(GetSingleSubCategoryDetails.rejected, (state, { payload }) => {
        state.subcategory_loader = false;
        state.message = payload.message;
      })
      .addCase(EditSubCategoryDetail.pending, (state) => {
        state.subCatEditLoader = true;
      })
      .addCase(EditSubCategoryDetail.fulfilled, (state, { payload }) => {
        state.subCatEditLoader = false;
        state.message = payload.message;
      })
      .addCase(EditSubCategoryDetail.rejected, (state, { payload }) => {
        state.subCatEditLoader = false;
        state.message = payload.message;
      });
  },
});

export const { updateSubCategoryDetails, updateCompleteSubCategory } =
  subCategorySlice.actions;
export const subCategroySelector = (state) => state.sub_category;
