"use client";
import React from "react";

const ConfirmApproveModal = ({ show, onClose, onConfirm, item, loading }) => {
  return (
    <>
      {show && <div className="modal-backdrop fade show" />}

      <div
        className={`modal fade ${show ? "show" : ""}`}
        tabIndex="-1"
        role="dialog"
        aria-modal="true"
        aria-hidden={!show}
        style={{
          display: show ? "block" : "none",
          zIndex: 1065,
          pointerEvents: "auto",
        }}>
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Approve Transaction</h5>
              <button className="btn-close" onClick={onClose} />
            </div>
            <div className="modal-body">
              <p className="mb-2">
                You are about to approve the following transaction. This will
                mark it as <b>received</b>.
              </p>
              {item && (
                <ul className="list-unstyled small">
                  <li>
                    <b>User:</b> {item.user_name} ({item.user_email})
                  </li>
                  <li>
                    <b>Type:</b> {item.transactionType}
                  </li>
                  <li>
                    <b>Method:</b> {item.paymentMethod}
                  </li>
                  <li>
                    <b>Amount:</b> ${Number(item.amount || 0).toLocaleString()}
                  </li>
                  <li>
                    <b>Wallet:</b> {item.walletAddress}
                  </li>
                  <li>
                    <b>ID:</b> {item._id}
                  </li>
                </ul>
              )}
            </div>
            <div className="modal-footer">
              <button
                className="btn btn-outline-secondary"
                onClick={onClose}
                disabled={loading}>
                Cancel
              </button>
              <button
                className="btn btn-success"
                onClick={onConfirm}
                disabled={loading}>
                {loading ? "Approving..." : "Approve"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConfirmApproveModal;
