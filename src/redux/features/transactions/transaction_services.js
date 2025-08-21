const { default: APIs } = require("@/redux/Apis");
const { toast } = require("react-toastify");

const CreateTransaction = async (payload) => {
  try {
    const response = await APIs.post("/deposit-fund", payload);
    console.log(response, "response");

    if (response?.status === 200) {
      toast("Created Successfully");
      return response?.data;
    }
  } catch (error) {
    throw error;
  }
};

const uploadtransactionImages = async (payload) => {
  try {
    const response = await APIs.post(
      `/cloudinary_multiple_file_upload`,
      payload
    );

    if (response?.data?.message === "success") {
      toast("successfully");
      return response?.data;
    }
  } catch (error) {
    throw error;
  }
};

const uploadtransactionThu = async (payload) => {
  try {
    const response = await APIs.post(`/cloudinary_file_upload`, payload);

    if (response?.data?.message === "success") {
      toast("successfully");
      return response?.data;
    }
  } catch (error) {
    throw error;
  }
};

const GetAllTransaction = async (payload) => {
  try {
    console.log(payload, "living work");
    const response = await APIs.get(
      `/transactions/${payload?.page}/${payload?.limit}`
    );

    if (response?.data?.message === "success") {
      toast("successfully");
      return response?.data;
    }
  } catch (error) {
    throw error;
  }
};

const GetSingleTransactionDetails = async (payload) => {
  try {
    const response = await APIs.get(`/admin-transaction/${payload}`);

    if (response?.status === 200) {
      // toast("successfully");
      return response?.data;
    }
  } catch (error) {
    throw error;
  }
};

const Deposits = async (payload) => {
  try {
    const response = await APIs.post(`/delete_transaction`, payload);

    if (response?.data?.message === "success") {
      toast("successfully");
      return response?.data;
    }
  } catch (error) {
    throw error;
  }
};

const PurchasePlan = async (payload) => {
  try {
    const response = await APIs.post(
      `/purchase-plan/${payload?.requiredId}`,
      payload
    );

    if (response?.status === 200) {
      toast("successfully");
      return response?.data;
    }
  } catch (error) {
    throw error;
  }
};

const transactionsServices = {
  CreateTransaction,
  uploadtransactionImages,
  uploadtransactionThu,
  GetAllTransaction,
  GetSingleTransactionDetails,
  Deposits,
  PurchasePlan,
};

export default transactionsServices;
