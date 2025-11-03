import APIs from "../Apis";

export const fetchUsers = async (status = "all") => {
  const res = await APIs.get("/admin/users", { params: { status } });
  return res.data;
};

export const setUserStatus = async (id, status) => {
  const res = await APIs.patch(`/admin/users/${id}/status`, { status });
  return res.data;
};

export const blockUser = async (id, reason) => {
  const res = await APIs.patch(`/admin/users/${id}/block`, { reason });
  return res.data;
};

export const unblockUser = async (id) => {
  const res = await APIs.patch(`/admin/users/${id}/unblock`);
  return res.data;
};

export const deleteUser = async (id) => {
  const res = await APIs.patch(`/admin/users/${id}/delete`);
  return res.data;
};
