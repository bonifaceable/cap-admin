import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import SubCategoryServices from './sub_category_services';

export const CreateSubCategory = createAsyncThunk(
  'sub_category/create_sub_category',
  async (requestData, thunkAPI) => {
    try {
      const delivered = await SubCategoryServices.CreateSubCategory(
        requestData
      );

      window.location.href = `/dashboard/category/${requestData?.category_id}`;

      return delivered;
    } catch (e) {
      toast(e.message);
      console.log('Error', e);
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export const UploadSubCategoryImage = createAsyncThunk(
  'sub_category/sub_category_image',
  async (requestData, thunkAPI) => {
    try {
      const delivered = await SubCategoryServices.uploadSubCategoryImage(
        requestData
      );

      return delivered;
    } catch (e) {
      toast(e.message);
      console.log('Error', e);
      //   return thunkAPI.rejectWithValue(e.response.data);
      throw e;
    }
  }
);

export const UploadSubCategoryIcon = createAsyncThunk(
  'sub_category/sub_category_icon',
  async (requestData, thunkAPI) => {
    try {
      const delivered = await SubCategoryServices.uploadSubCategoryImage(
        requestData
      );

      return delivered;
    } catch (e) {
      toast(e.message);
      console.log('Error', e);
      //   return thunkAPI.rejectWithValue(e.response.data);
      throw e;
    }
  }
);

export const GetAllSubCategory = createAsyncThunk(
  'sub_category/get_all_sub_category',
  async (payload) => {
    try {
      let response = await SubCategoryServices.getAllSubCategory(payload);

      return response;
    } catch (error) {
      toast(error.message);
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export const DeleteSubCategory = createAsyncThunk(
  'sub_category/deleteSubCategory',
  async (payload) => {
    try {
      let response = await SubCategoryServices.DeleteSubCategory(payload);

      return response;
    } catch (error) {
      toast(error.message);
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export const GetSingleSubCategoryDetails = createAsyncThunk(
  'sub_category/get_single_sub_category',
  async (payload) => {
    try {
      let response = await SubCategoryServices.getSingleSubCategoryDetails(
        payload
      );

      return response;
    } catch (error) {
      toast(error.message);
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export const EditSubCategoryDetail = createAsyncThunk(
  'sub_category/edit_sub_category',
  async (requestData, thunkAPI) => {
    try {
      const delivered = await SubCategoryServices.EditSubCategory(requestData);

      window.location.href = `/dashboard/category/${requestData?._id}`;

      return delivered;
    } catch (e) {
      toast(e.message);
      console.log('Error', e);
      return thunkAPI.rejectWithValue(e);
    }
  }
);
