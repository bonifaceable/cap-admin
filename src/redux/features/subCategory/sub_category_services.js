import APIs from '@/redux/Apis';
import { toast } from 'react-toastify';

const CreateSubCategory = async (payload) => {
  try {
    console.log(payload, 'not normal');
    const response = await APIs.post('/create_sub_categroy', payload);
    console.log(response, 'response');

    if (response?.data?.message === 'success') {
      toast('Created Successfully');
      return response?.data;
    }
  } catch (error) {
    throw error;
  }
};

const getAllSubCategory = async (payload) => {
  try {
    const response = await APIs.get(`/get_all_sub_category/${payload?.Id}`);

    if (response?.data?.message === 'success') {
      toast('successfully');
      return response?.data;
    }
  } catch (error) {
    throw error;
  }
};

const uploadSubCategoryImage = async (payload) => {
  try {
    const response = await APIs.post(`/upload_through_cloudinary`, payload);

    if (response?.data?.message === 'success') {
      toast('successfully');
      return response?.data;
    }
  } catch (error) {
    throw error;
  }
};

const uploadSubCategoryIcon = async (payload) => {
  try {
    const response = await APIs.post(`/upload_through_cloudinary`, payload);

    if (response?.data?.message === 'success') {
      toast('successfully');
      return response?.data;
    }
  } catch (error) {
    throw error;
  }
};

const DeleteSubCategory = async (payload) => {
  try {
    const response = await APIs.post(`/delete_sub_category`, payload);

    if (response?.data?.message === 'success') {
      toast('successfully');
      return response?.data;
    }
  } catch (error) {
    throw error;
  }
};

const getSingleSubCategoryDetails = async (payload) => {
  try {
    const response = await APIs.get(
      `/get_single_sub_category/${payload?.Id}/${payload?.name}`
    );

    if (response?.data?.message === 'success') {
      toast('successfully');
      return response?.data;
    }
  } catch (error) {
    throw error;
  }
};

const EditSubCategory = async (payload) => {
  try {
    console.log(payload, 'season o work');
    const response = await APIs.patch(
      `/edit_sub_category/${payload?._id}`,
      payload
    );

    if (response?.data?.message === 'success') {
      toast('successfully');
      return response?.data;
    }
  } catch (error) {
    throw error;
  }
};

const SubCategoryServices = {
  CreateSubCategory,
  getAllSubCategory,
  uploadSubCategoryImage,
  uploadSubCategoryIcon,
  DeleteSubCategory,
  getSingleSubCategoryDetails,
  EditSubCategory,
};

export default SubCategoryServices;
