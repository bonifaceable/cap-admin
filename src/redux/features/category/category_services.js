import APIs from '@/redux/Apis';
import { toast } from 'react-toastify';

const CreateCategory = async (payload) => {
  try {
    const response = await APIs.post('/create_categroy', payload);
    console.log(response, 'response');

    if (response?.data?.message === 'success') {
      toast('Created Successfully');
      return response?.data;
    }
  } catch (error) {
    throw error;
  }
};

const getAllCategory = async () => {
  try {
    const response = await APIs.get(`/get_all_category`);

    if (response?.data?.message === 'success') {
      toast('successfully');
      return response?.data;
    }
  } catch (error) {
    throw error;
  }
};

const uploadCategoryImage = async (payload) => {
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

const uploadCategoryIcon = async (payload) => {
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

const DeleteCategory = async (payload) => {
  try {
    const response = await APIs.post(`/delete_category`, payload);

    if (response?.data?.message === 'success') {
      toast('successfully');
      return response?.data;
    }
  } catch (error) {
    throw error;
  }
};

const getSingleCategoryDetails = async (payload) => {
  try {
    const response = await APIs.get(`/get_single_category/${payload?.Id}`);

    if (response?.data?.message === 'success') {
      toast('successfully');
      return response?.data;
    }
  } catch (error) {
    throw error;
  }
};

const EditCategory = async (payload) => {
  try {
    const response = await APIs.patch(
      `/edit_category/${payload?._id}`,
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

const CategoryServices = {
  CreateCategory,
  getAllCategory,
  uploadCategoryImage,
  uploadCategoryIcon,
  DeleteCategory,
  getSingleCategoryDetails,
  EditCategory,
};

export default CategoryServices;
