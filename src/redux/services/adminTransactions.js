// import APIs from "@/redux/Apis";

import APIs from "../Apis";

export const fetchTransactions = async () => {
  const res = await APIs.get("/admin/get-transactions");
  return res.data; // array of transactions
};

export const approveTransaction = async (id) => {
  const res = await APIs.patch(`/approve-deposit/${id}`, {
    status: "received",
  });
  return res.data; // { msg: ... }
};
