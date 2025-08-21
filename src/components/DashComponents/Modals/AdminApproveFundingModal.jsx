"use client";
import React, { useState } from "react";
import APIs from "@/redux/Apis";
import { toast } from "react-toastify";

const AdminApproveFundingModal = ({ show, handleHide, tx, onUpdated }) => {
  const [saving, setSaving] = useState(false);
  const [status, setStatus] = useState("received");

  if (!tx) return null;

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      setSaving(true);
      await APIs.patch(`/admin/approve-deposit/${tx._id}`, { status });
      toast.success(`Transaction updated to ${status}`);
      onUpdated?.();
      handleHide();
    } catch (err) {
      toast.error(err?.message || "Failed to update transaction");
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
            <h5 className="modal-title">Approve Funding</h5>
            <button
              className="btn-close"
              onClick={handleHide}
              disabled={saving}
            />
          </div>
          <div className="modal-body">
            <div className="mb-3">
              <div>
                <strong>User:</strong> {tx.user_name} ({tx.user_email})
              </div>
              <div>
                <strong>Amount:</strong> {tx.amount}
              </div>
              <div>
                <strong>Method:</strong> {tx.paymentMethod}
              </div>
              <div>
                <strong>Status:</strong> {tx.status}
              </div>
              <div>
                <strong>Wallet Address:</strong> {tx.walletAddress}
              </div>
            </div>

            <form className="d-grid gap-card" onSubmit={onSubmit}>
              <div className="form-group mb-3">
                <label className="form-label">New Status</label>
                <select
                  className="form-select"
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}>
                  <option value="received">received</option>
                  <option value="failed">failed</option>
                  <option value="pending">pending</option>
                </select>
              </div>

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
                  type="submit"
                  disabled={saving}>
                  {saving ? "Updating..." : "Update"}
                </button>
              </div>
            </form>

            <small className="text-muted d-block mt-2">
              Tip: set to <strong>received</strong> to credit the user’s wallet
              and reduce pending balance.
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminApproveFundingModal;
