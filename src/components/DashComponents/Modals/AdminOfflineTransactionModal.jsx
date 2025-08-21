// src/components/AdminOfflineTransactionModal.jsx
"use client";
import React, { useEffect, useState } from "react";
import APIs from "@/redux/Apis";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const AdminOfflineTransactionModal = ({ show, onClose }) => {
  const [users, setUsers] = useState([]);
  const [plans, setPlans] = useState([]);
  const [creating, setCreating] = useState(false);
  const router = useRouter();

  const [form, setForm] = useState({
    user_id: "",
    transactionType: "fund-deposit",
    plan: "",
    amount: "",
    paymentMethod: "cash", // cash | bank-transfer | pos | offline
    status: "received", // pending | received
    walletAddress: "", // optional note/reference
  });

  // Load users & plans
  useEffect(() => {
    if (show === "block") {
      (async () => {
        try {
          const [u, p] = await Promise.all([
            APIs.get("/admin-get-users"),
            APIs.get("/plans"),
          ]);
          setUsers(Array.isArray(u.data) ? u.data : []);
          setPlans(Array.isArray(p.data) ? p.data : []);
        } catch (err) {
          toast(err?.message || "Failed to load users/plans");
        }
      })();
    }
  }, [show]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  };

  const handleSubmit = async () => {
    try {
      setCreating(true);
      if (!form.user_id || !form.transactionType || !form.amount) {
        toast("Please fill all required fields");
        return;
      }
      if (form.transactionType === "plan-purchase" && !form.plan) {
        toast("Please select a plan for plan purchase");
        return;
      }

      const payload = {
        user_id: form.user_id,
        transactionType: form.transactionType,
        amount: Number(form.amount),
        paymentMethod: form.paymentMethod || "offline",
        status: form.status,
        walletAddress: form.walletAddress,
        plan: form.transactionType === "plan-purchase" ? form.plan : undefined,
      };

      const { data } = await APIs.post("/create-offline-transaction", payload);
      setCreating(false);
      toast(data?.msg || "Offline transaction created");
      onClose?.();
      // reset
      setForm({
        user_id: "",
        transactionType: "fund-deposit",
        plan: "",
        amount: "",
        paymentMethod: "cash",
        status: "received",
        walletAddress: "",
      });
      router.push("/dashboard/transactions");
    } catch (err) {
      setCreating(false);
      toast(err?.message || "Failed to create offline transaction");
    }
  };

  console.log(users, "users");

  return (
    <div
      className={show === "block" ? "modal fade show" : "modal fade"}
      style={{ display: show }}
      tabIndex={-1}
      role="dialog"
      aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered show" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Create Offline Transaction</h5>
            <button
              type="button"
              className="btn-close"
              aria-label="Close"
              onClick={onClose}></button>
          </div>

          <div className="modal-body">
            <form className="d-grid gap-3">
              {/* User */}
              <div className="form-group">
                <label className="form-label">Select User</label>
                <select
                  name="user_id"
                  value={form.user_id}
                  onChange={handleChange}
                  className="form-select shadow-none">
                  <option value="">Pick a user</option>
                  {users.map((u) => (
                    <option key={u.id} value={u.id}>
                      {u.name} — {u.email}
                    </option>
                  ))}
                </select>
              </div>

              {/* Transaction Type */}
              <div className="form-group">
                <label className="form-label">Transaction Type</label>
                <select
                  name="transactionType"
                  value={form.transactionType}
                  onChange={handleChange}
                  className="form-select shadow-none">
                  <option value="fund-deposit">Fund Deposit</option>
                  <option value="plan-purchase">Plan Purchase</option>
                </select>
              </div>

              {/* Plan (conditional) */}
              {form.transactionType === "plan-purchase" && (
                <div className="form-group">
                  <label className="form-label">Plan</label>
                  <select
                    name="plan"
                    value={form.plan}
                    onChange={handleChange}
                    className="form-select shadow-none">
                    <option value="">Pick a plan</option>
                    {plans.map((pl) => (
                      <option key={pl._id} value={pl.plan}>
                        {pl.plan} ({pl.amount} - {pl.max})
                      </option>
                    ))}
                  </select>
                </div>
              )}

              {/* Amount */}
              <div className="form-group">
                <label className="form-label">Amount</label>
                <div className="input-group">
                  <input
                    type="number"
                    name="amount"
                    value={form.amount}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Enter amount"
                    min="0"
                  />
                  <span className="input-group-text">USD</span>
                </div>
              </div>

              {/* Payment Method */}
              <div className="form-group">
                <label className="form-label">Payment Method</label>
                <select
                  name="paymentMethod"
                  value={form.paymentMethod}
                  onChange={handleChange}
                  className="form-select shadow-none">
                  <option value="cash">Cash</option>
                  <option value="bank-transfer">Bank Transfer</option>
                  <option value="pos">POS</option>
                  <option value="offline">Other Offline</option>
                </select>
              </div>

              {/* Status */}
              <div className="form-group">
                <label className="form-label">Status</label>
                <select
                  name="status"
                  value={form.status}
                  onChange={handleChange}
                  className="form-select shadow-none">
                  <option value="received">Received (credit now)</option>
                  <option value="pending">Pending</option>
                </select>
              </div>

              {/* Wallet Address / Reference (optional note) */}
              <div className="form-group">
                <label className="form-label">
                  Reference / Wallet Address
                </label>
                <input
                  type="text"
                  name="walletAddress"
                  value={form.walletAddress}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="e.g. bank reference, receipt no., wallet tag"
                />
              </div>

              {/* Actions */}
              <div className="d-grid gap-2 grid-cols-2">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={onClose}>
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-success"
                  onClick={handleSubmit}>
                  {creating ? "creating...." : "Create Transaction"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminOfflineTransactionModal;
