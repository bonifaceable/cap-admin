// src/app/dashboard/admin-users/page.jsx  (or any component)
"use client";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import {
  fetchUsers,
  setUserStatus,
  blockUser,
  unblockUser,
  deleteUser,
} from "@/redux/services/adminUsers";
import ConfirmActionModal from "./Modals/ConfirmActionModal";
// import ConfirmActionModal from "@/components/ConfirmActionModal";

const AdminUsersTable = () => {
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState("all");
  const [loading, setLoading] = useState(false);
  const [confirm, setConfirm] = useState({
    open: false,
    user: null,
    action: null,
  });
  const [reason, setReason] = useState("");

  const load = async () => {
    setLoading(true);
    try {
      const data = await fetchUsers(filter);
      setUsers(data || []);
    } catch (e) {
      toast(e?.message || "Failed to load users");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, [filter]);

  const openConfirm = (user, action) =>
    setConfirm({ open: true, user, action });
  const closeConfirm = () => {
    setConfirm({ open: false, user: null, action: null });
    setReason("");
  };

  const doAction = async () => {
    const { user, action } = confirm;
    console.log(user, "user");
    try {
      if (action === "verify") {
        await setUserStatus(user.id, "verified");
        toast("User verified");
      } else if (action === "block") {
        await blockUser(user.id, reason);
        toast("User blocked");
      } else if (action === "unblock") {
        await unblockUser(user.id);
        toast("User unblocked");
      } else if (action === "delete") {
        await deleteUser(user.id);
        toast("User deleted successfully");
      }
      closeConfirm();
      load();
    } catch (e) {
      toast(e?.message || "Action failed");
    }
  };

  return (
    <>
      <div className="d-flex mb-3 gap-2">
        <select
          className="form-select w-auto"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}>
          <option value="all">All</option>
          <option value="verified">Verified</option>
          <option value="unverified">Unverified</option>
          <option value="blocked">Blocked</option>
          <option value="unblocked">Unblocked</option>
        </select>
        <button
          className="btn btn-outline-secondary"
          onClick={load}
          disabled={loading}>
          {loading ? "Loading..." : "Refresh"}
        </button>
      </div>

      <div className="table-responsive">
        <table className="table data-table list-table">
          <thead>
            <tr>
              <th>
                <span className="ms-5 me-3">#</span> User Name
              </th>
              <th>Email</th>
              <th>Status</th>
              <th>Blocked</th>
              <th>Joined</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {users.map((u, i) => (
              <tr key={u._id}>
                <td>
                  <div className="d-flex align-items-center">
                    <span className="ms-3 me-3">{i + 1}</span>
                    <div className="d-flex align-items-center ms-2">
                      {u.name || "-"}
                    </div>
                  </div>
                </td>
                <td>{u.email}</td>
                <td
                  className={
                    ["verified", "Active"].includes(u.status)
                      ? "text-success"
                      : "text-warning"
                  }>
                  {u.status || "—"}
                </td>
                <td className={u.blocked ? "text-danger" : "text-success"}>
                  {u.blocked ? "Yes" : "No"}
                </td>
                <td>
                  {u.createdAt ? new Date(u.createdAt).toLocaleString() : "—"}
                </td>
                <td className="text-end position-relative">
                  <div
                    className="dropdown dropup" // opens upward to avoid clipping
                    data-bs-boundary="viewport" // keep within viewport
                    data-bs-reference="parent" // position relative to this cell
                  >
                    <button
                      className="btn btn-sm btn-light dropdown-toggle"
                      type="button"
                      data-bs-toggle="dropdown"
                      data-bs-display="static" // stable in responsive tables
                      data-bs-offset="0,8">
                      Actions
                    </button>

                    <ul className="dropdown-menu dropdown-menu-end">
                      <li>
                        <a
                          className="dropdown-item"
                          onClick={() => openConfirm(u, "verify")}>
                          Verify
                        </a>
                      </li>
                      {!u.blocked && (
                        <li>
                          <a
                            className="dropdown-item text-danger"
                            onClick={() => openConfirm(u, "block")}>
                            Block
                          </a>
                        </li>
                      )}
                      {u.blocked && (
                        <li>
                          <a
                            className="dropdown-item text-success"
                            onClick={() => openConfirm(u, "unblock")}>
                            Unblock
                          </a>
                        </li>
                      )}
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <a
                          className="dropdown-item text-danger"
                          onClick={() => openConfirm(u, "delete")}>
                          Delete Account
                        </a>
                      </li>
                    </ul>
                  </div>
                </td>
                {/* <td className="text-end">
                  <div className="dropdown position-static">
                    <button
                      className="btn btn-sm btn-light"
                      data-bs-toggle="dropdown"
                      data-bs-display="static">
                      Actions
                    </button>
                    <ul className="dropdown-menu  dropdown-menu-end">
                      <li>
                        <a
                          className="dropdown-item"
                          onClick={() => openConfirm(u, "verify")}>
                          Verify
                        </a>
                      </li>
                      {!u.blocked && (
                        <li>
                          <a
                            className="dropdown-item text-danger"
                            onClick={() => openConfirm(u, "block")}>
                            Block
                          </a>
                        </li>
                      )}
                      {u.blocked && (
                        <li>
                          <a
                            className="dropdown-item text-success"
                            onClick={() => openConfirm(u, "unblock")}>
                            Unblock
                          </a>
                        </li>
                      )}
                    </ul>
                  </div>
                </td> */}
              </tr>
            ))}
            {users.length === 0 && !loading && (
              <tr>
                <td colSpan={6} className="text-center py-4">
                  No users found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <ConfirmActionModal
        show={confirm.open}
        onClose={closeConfirm}
        onConfirm={doAction}
        title={
          confirm.action === "verify"
            ? "Verify User"
            : confirm.action === "block"
              ? "Block User"
              : confirm.action === "unblock"
                ? "Unblock User"
                : "Delete User Account"
        }
        confirmLabel={
          confirm.action === "verify"
            ? "Verify"
            : confirm.action === "block"
              ? "Block"
              : confirm.action === "unblock"
                ? "Unblock"
                : "Delete"
        }
        confirmClass={
          confirm.action === "block" || confirm.action === "delete"
            ? "btn-danger"
            : "btn-primary"
        }>
        <p className="mb-3">
          {confirm.action === "verify" &&
            "This will mark the account as verified and send a notification email."}
          {confirm.action === "block" &&
            "This will block the account and send a notification email."}
          {confirm.action === "unblock" &&
            "This will unblock the account and send a notification email."}
          {confirm.action === "delete" &&
            "This will permanently delete this user account and all associated data. This action cannot be undone."}
        </p>
        {confirm.action === "block" && (
          <div className="form-group">
            <label className="form-label">Reason (optional)</label>
            <input
              className="form-control"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
            />
          </div>
        )}
      </ConfirmActionModal>
    </>
  );
};

export default AdminUsersTable;
