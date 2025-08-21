// src/components/ConfirmActionModal.jsx
"use client";
import React from "react";

const ConfirmActionModal = ({
  show,
  onClose,
  onConfirm,
  title = "Confirm Action",
  body = "Are you sure?",
  confirmLabel = "Confirm",
  confirmClass = "btn-danger",
  loading = false,
  children,
}) => {
  return (
    <div
      className={show ? "modal fade show" : "modal fade"}
      style={{ display: show ? "block" : "none" }}>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{title}</h5>
            <button type="button" className="btn-close" onClick={onClose} />
          </div>
          <div className="modal-body">
            <p className="mb-3">{body}</p>
            {children}
          </div>
          <div className="modal-footer">
            <button
              className="btn btn-secondary"
              onClick={onClose}
              disabled={loading}>
              Cancel
            </button>
            <button
              className={`btn ${confirmClass}`}
              onClick={onConfirm}
              disabled={loading}>
              {loading ? "Working..." : confirmLabel}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmActionModal;
