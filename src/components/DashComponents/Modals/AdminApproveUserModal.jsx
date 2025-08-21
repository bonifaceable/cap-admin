"use client";
import React, { useState } from "react";
import APIs from "@/redux/Apis";
import { toast } from "react-toastify";

const AdminApproveUserModal = ({ show, handleHide, user, onApproved }) => {
  const [saving, setSaving] = useState(false);

  if (!user) return null;

  const approve = async () => {
    try {
      setSaving(true);
      await APIs.patch(`/admin/approve-user/${user._id}`, { status: "Active" });
      toast.success("User approved");
      onApproved?.();
      handleHide();
    } catch (err) {
      toast.error(err?.message || "Failed to approve user");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div
      className={show === "block" ? "modal fade show" : "modal fade"}
      style={{ display: show }}>
      <div className="modal-dialog modal-dialog-centered show">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Approve User</h5>
            <button
              className="btn-close"
              onClick={handleHide}
              disabled={saving}
            />
          </div>
          <div className="modal-body">
            <p className="mb-3">Approve the account for:</p>
            <ul className="mb-3">
              <li>
                <strong>Name:</strong> {user.name}
              </li>
              <li>
                <strong>Email:</strong> {user.email}
              </li>
              <li>
                <strong>Current Status:</strong> {user.status}
              </li>
            </ul>
            <div className="d-grid gap-card grid-cols-2">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={handleHide}
                disabled={saving}>
                Cancel
              </button>
              <button
                className="btn btn-success"
                type="button"
                onClick={approve}
                disabled={saving}>
                {saving ? "Approving..." : "Approve"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminApproveUserModal;
