"use client";
import React from "react";

const ConfirmDeleteModal = ({ show, handleClose, handleConfirm, deleting }) => {
  return (
    <div
      className={show === "block" ? "modal fade show" : "modal fade"}
      style={{ display: show }}
      tabIndex={-1}
      role="dialog"
      aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Confirm Delete</h5>
            <button
              type="button"
              className="btn-close"
              aria-label="Close"
              onClick={handleClose}
              disabled={deleting}
            />
          </div>
          <div className="modal-body">
            <p>
              Are you sure you want to delete this plan? This action cannot be
              undone.
            </p>
          </div>
          <div className="modal-footer d-grid gap-2">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={handleClose}
              disabled={deleting}>
              Cancel
            </button>
            <button
              type="button"
              className="btn btn-danger"
              onClick={handleConfirm}
              disabled={deleting}>
              {deleting ? "Deleting..." : "Delete"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDeleteModal;
