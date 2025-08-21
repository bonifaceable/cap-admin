"use client";
import React, { useEffect, useState } from "react";
import APIs from "@/redux/Apis";
import { toast } from "react-toastify";

const AdminFundWalletModal = ({ show, handleHide, user, onFunded }) => {
  const [loading, setLoading] = useState(false);
  const [wallet, setWallet] = useState(null);
  const [amount, setAmount] = useState("");

  useEffect(() => {
    const load = async () => {
      if (!user?._id) return;
      try {
        setLoading(true);
        const { data } = await APIs.get(
          `/admin/admin-get-user-wallet/${user._id}`
        );
        setWallet(data?.wallet || data); // your API returns the aggregation; adapt if needed
      } catch (err) {
        toast.error("Failed to load wallet");
      } finally {
        setLoading(false);
      }
    };
    if (show === "block") load();
  }, [show, user]);

  const onSubmit = async (e) => {
    e.preventDefault();
    const credit = Number(amount);
    if (!credit || credit <= 0) {
      toast.error("Enter a positive amount");
      return;
    }
    const current = Number(wallet?.wallet?.balance ?? wallet?.balance ?? 0);
    const newBalance = current + credit;

    try {
      await APIs.patch("/admin/update-user-wallet", {
        user_id: user._id,
        balance: newBalance,
      });
      toast.success("Wallet funded");
      onFunded?.();
      handleHide();
    } catch (err) {
      toast.error(err?.message || "Failed to fund wallet");
    }
  };

  if (!user) return null;

  const currentBalance = Number(
    wallet?.wallet?.balance ?? wallet?.balance ?? 0
  );

  return (
    <div
      className={show === "block" ? "modal fade show" : "modal fade"}
      style={{ display: show }}>
      <div className="modal-dialog modal-dialog-centered show">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Fund Wallet</h5>
            <button className="btn-close" onClick={handleHide} />
          </div>
          <div className="modal-body">
            {loading ? (
              <p>Loading...</p>
            ) : (
              <form className="d-grid gap-card" onSubmit={onSubmit}>
                <div className="mb-2">
                  <div>
                    <strong>User:</strong> {user.name} ({user.email})
                  </div>
                  <div>
                    <strong>Current Balance:</strong> {currentBalance}
                  </div>
                </div>

                <div className="form-group mb-3">
                  <label className="form-label">Amount to credit</label>
                  <input
                    type="number"
                    min="0"
                    step="any"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="form-control"
                    placeholder="e.g. 200"
                  />
                </div>

                <div className="d-grid gap-card grid-cols-2">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={handleHide}>
                    Cancel
                  </button>
                  <button className="btn btn-success" type="submit">
                    Fund
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminFundWalletModal;
