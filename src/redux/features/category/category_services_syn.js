import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import CategoryServices from './category_services';

export const CreateCategory = createAsyncThunk(
  'category/create_category',
  async (requestData, thunkAPI) => {
    try {
      const delivered = await CategoryServices.CreateCategory(requestData);

      window.location.href = '/dashboard/category';

      return delivered;
    } catch (e) {
      toast(e.message);
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export const UploadCategoryImage = createAsyncThunk(
  'category/category_image',
  async (requestData, thunkAPI) => {
    try {
      const delivered = await CategoryServices.uploadCategoryImage(requestData);

      return delivered;
    } catch (e) {
      toast(e.message);
      console.log('Error', e);
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export const UploadCategoryIcon = createAsyncThunk(
  'category/category_icon',
  async (requestData, thunkAPI) => {
    try {
      const delivered = await CategoryServices.uploadCategoryImage(requestData);

      return delivered;
    } catch (e) {
      toast(e.message);
      console.log('Error', e);
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export const GetAllCategory = createAsyncThunk(
  'category/get_all_category',
  async (payload) => {
    try {
      let response = await CategoryServices.getAllCategory();

      return response;
    } catch (error) {
      toast(error.message);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const DeleteCategory = createAsyncThunk(
  'category/deleteCategory',
  async (payload) => {
    try {
      let response = await CategoryServices.DeleteCategory(payload);

      return response;
    } catch (error) {
      toast(error.message);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const GetSingleCategoryDetails = createAsyncThunk(
  'category/get_single_category',
  async (payload) => {
    try {
      let response = await CategoryServices.getSingleCategoryDetails(payload);

      return response;
    } catch (error) {
      toast(error.message);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const EditCategoryDetail = createAsyncThunk(
  'category/edit_category',
  async (requestData, thunkAPI) => {
    try {
      const delivered = await CategoryServices.EditCategory(requestData);

      window.location.href = '/dashboard/category';

      return delivered;
    } catch (e) {
      toast(e.message);
      console.log('Error', e);
      return thunkAPI.rejectWithValue(e);
    }
  }
);
