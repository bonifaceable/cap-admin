"use client";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { format } from "date-fns";
import ConfirmActionModal from "@/components/DashComponents/Modals/ConfirmActionModal";
import APIs from "@/redux/Apis";
import { formatAmount } from "@/hooks/helpers";

const AdminWithdrawalsPage = () => {
  const [withdrawals, setWithdrawals] = useState([]);
  const [loading, setLoading] = useState(false);
  const [approving, setApproving] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // Fetch withdrawal requests
  const fetchWithdrawals = async () => {
    try {
      setLoading(true);
      const res = await APIs.get("/admin/withdrawals");
      console.log(res, "res ..");
      setWithdrawals(res?.data?.withdrawals || []);
    } catch (err) {
      toast.error(
        err?.response?.data?.message || "Failed to fetch withdrawals"
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWithdrawals();
  }, []);

  // Approve a withdrawal request
  const handleApprove = async () => {
    if (!selectedItem) return;
    try {
      setApproving(true);
      await APIs.put(`/admin/withdrawals/${selectedItem._id}/approve`);
      toast.success("Withdrawal approved and user notified");
      setShowModal(false);
      fetchWithdrawals();
    } catch (err) {
      toast.error(
        err?.response?.data?.message || "Failed to approve withdrawal"
      );
    } finally {
      setApproving(false);
    }
  };

  return (
    <div className="col-lg-12">
      <div className="card">
        <div className="card-header d-flex justify-content-between align-items-center">
          <h4>Withdrawal Requests</h4>
          <button
            className="btn btn-sm btn-outline-primary"
            onClick={fetchWithdrawals}>
            {loading ? "Refreshing..." : "Refresh"}
          </button>
        </div>

        <div className="table-responsive">
          <table className="table data-table list-table">
            <thead>
              <tr>
                <th scope="col">
                  <span className="ms-5 me-3">#</span> User Name
                </th>
                <th scope="col">Amount</th>
                <th scope="col">Status</th>
                <th scope="col">Payment Method</th>
                <th scope="col">Wallet Address</th>
                <th scope="col">Transaction Id</th>
                <th scope="col">Date</th>
              </tr>
            </thead>
            <tbody>
              {withdrawals.length === 0 && !loading ? (
                <tr>
                  <td colSpan="7" className="text-center py-4 text-muted">
                    No withdrawal requests found
                  </td>
                </tr>
              ) : (
                withdrawals.map((item, index) => (
                  <tr key={item._id}>
                    <td>
                      <div className="d-flex align-items-center">
                        <span className="ms-3 me-3">{index + 1}</span>
                        <span>{item?.user_name || "N/A"}</span>
                      </div>
                    </td>
                    <td>${formatAmount(item?.amount)}</td>
                    <td
                      className={
                        item?.status === "approved"
                          ? "text-success"
                          : item?.status === "pending"
                            ? "text-warning"
                            : "text-danger"
                      }>
                      {item?.status}
                    </td>
                    <td>{item?.paymentMethod}</td>
                    <td>{item?.walletAddress}</td>
                    <td>{item?._id}</td>
                    <td>{format(new Date(item?.createdAt), "PPpp")}</td>
                    <td>
                      {item?.status === "pending" && (
                        <button
                          className="btn btn-sm btn-success"
                          onClick={() => {
                            setSelectedItem(item);
                            setShowModal(true);
                          }}>
                          Approve
                        </button>
                      )}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Confirm Approval Modal */}
      <ConfirmActionModal
        show={showModal}
        onClose={() => setShowModal(false)}
        onConfirm={handleApprove}
        title="Approve Withdrawal"
        body={
          selectedItem ? (
            <>
              You’re about to approve a withdrawal of{" "}
              <strong>${formatAmount(selectedItem.amount)}</strong> for user{" "}
              <strong>{selectedItem.user_name}</strong>.
              <br />
              This action will:
              <ul className="mt-2">
                <li>Debit user’s wallet balance</li>
                <li>Send an email confirmation to the user</li>
                <li>Mark this withdrawal as approved</li>
              </ul>
            </>
          ) : (
            "No item selected."
          )
        }
        confirmLabel="Approve"
        confirmClass="btn-success"
        loading={approving}
      />
    </div>
  );
};

export default AdminWithdrawalsPage;
