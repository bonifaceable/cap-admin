"use client";
import React from "react";

const Row = ({ label, children }) => (
  <div className="d-flex justify-content-between align-items-center py-1 border-bottom">
    <span className="text-muted small">{label}</span>
    <span className="fw-semibold">{children}</span>
  </div>
);

const TransactionDetailsModal = ({
  show,
  onClose,
  item,
  onApprove,
  approving,
}) => {
  const copy = (text) => navigator.clipboard?.writeText(text);

  return (
    <>
      {/* Backdrop must be a sibling, not a child */}
      {show && <div className="modal-backdrop fade show" />}

      <div
        className={`modal fade ${show ? "show" : ""}`}
        tabIndex="-1"
        role="dialog"
        aria-modal="true"
        aria-hidden={!show}
        style={{
          display: show ? "block" : "none",
          zIndex: 1065, // higher than backdrop
          pointerEvents: "auto", // ensure clicks pass through to content
        }}>
        <div
          className="modal-dialog modal-dialog-centered modal-lg"
          role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Transaction Details</h5>
              <button className="btn-close" onClick={onClose} />
            </div>

            <div className="modal-body">
              {item ? (
                <div className="row g-3">
                  <div className="col-md-6">
                    <Row label="User">{item.user_name}</Row>
                    <Row label="Email">{item.user_email}</Row>
                    <Row label="Type">{item.transactionType}</Row>
                    <Row label="Method">{item.paymentMethod}</Row>
                    <Row label="Status">
                      <span
                        className={`badge ${
                          item.status === "received"
                            ? "bg-success"
                            : item.status === "pending"
                              ? "bg-warning"
                              : "bg-danger"
                        }`}>
                        {item.status}
                      </span>
                    </Row>
                  </div>
                  <div className="col-md-6">
                    <Row label="Amount">
                      ${Number(item.amount || 0).toLocaleString()}
                    </Row>
                    <Row label="Created">
                      {item.createdAt
                        ? new Date(item.createdAt).toLocaleString()
                        : "—"}
                    </Row>
                    <Row label="Wallet">
                      <span className="d-inline-flex align-items-center gap-2">
                        <span className="text-break">{item.walletAddress}</span>
                        <button
                          className="btn btn-sm btn-outline-secondary"
                          onClick={() => copy(item.walletAddress)}>
                          Copy
                        </button>
                      </span>
                    </Row>
                    <Row label="Transaction ID">
                      <span className="d-inline-flex align-items-center gap-2">
                        <span className="text-break">{item._id}</span>
                        <button
                          className="btn btn-sm btn-outline-secondary"
                          onClick={() => copy(item._id)}>
                          Copy
                        </button>
                      </span>
                    </Row>
                    {item.plan && <Row label="Plan">{item.plan}</Row>}
                  </div>
                </div>
              ) : (
                <p className="mb-0">No data</p>
              )}
            </div>

            <div className="modal-footer">
              <button className="btn btn-outline-secondary" onClick={onClose}>
                Close
              </button>
              {item?.status !== "received" && (
                <button
                  className="btn btn-success"
                  onClick={onApprove}
                  disabled={approving}>
                  {approving ? "Approving..." : "Approve"}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TransactionDetailsModal;
