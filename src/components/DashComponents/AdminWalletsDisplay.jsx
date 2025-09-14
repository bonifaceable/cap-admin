"use client";
import React, { useEffect, useState } from "react";
import APIs from "@/redux/Apis";
import { toast } from "react-toastify";
import AdminPaymentWalletModal from "./Modals/AdminPaymentWalletModal";
// import AdminPaymentWalletModal from "./DashComponents/Modals/AdminPaymentWalletModal";

const AdminPaymentWalletsDisplay = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState(null);

  // modal state
  const [showModal, setShowModal] = useState("none");
  const [mode, setMode] = useState("create"); // create | edit
  const [editing, setEditing] = useState(null); // item being edited

  const load = async () => {
    setLoading(true);
    try {
      const res = await APIs.get("/admin/payment-wallets");
      const list = Array.isArray(res.data) ? res.data : res.data?.data || [];
      setItems(list);
    } catch (e) {
      toast(
        e?.response?.data?.message || e?.message || "Failed to load wallets"
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, []);

  const openCreate = () => {
    setMode("create");
    setEditing(null);
    setShowModal("block");
  };

  const openEdit = (item) => {
    setMode("edit");
    setEditing(item);
    setShowModal("block");
  };

  const onCloseModal = (refreshFlag) => {
    setShowModal("none");
    if (refreshFlag === "refresh") load();
  };

  const remove = async (id) => {
    if (!confirm("Delete this wallet?")) return;
    setDeleting(id);
    try {
      const res = await APIs.delete(`/admin/payment-wallets/${id}`);
      toast("Wallet deleted");
      setItems((arr) => arr.filter((x) => x._id !== id));
    } catch (e) {
      toast(e?.response?.data?.message || e?.message || "Delete failed");
    } finally {
      setDeleting(null);
    }
  };

  return (
    <>
      <div className="rounded-3 border border-gray-200">
        <div className="d-flex justify-content-between align-items-center px-4 py-3 border-bottom">
          <h2 className="h5 m-0">Wallets</h2>
          <button className="btn btn-primary" onClick={openCreate}>
            Create Wallet
          </button>
        </div>

        {loading ? (
          <div className="p-4 text-muted">Loading…</div>
        ) : items.length === 0 ? (
          <div className="p-4 text-muted">No wallets yet.</div>
        ) : (
          <div className="table-responsive">
            <table className="table align-middle mb-0">
              <thead className="table-light">
                <tr>
                  <th>Label</th>
                  <th style={{ minWidth: 260 }}>Address</th>
                  <th>QR</th>
                  <th>Active</th>
                  <th>Sort</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {items.map((it) => (
                  <tr key={it._id}>
                    <td>{it.label}</td>
                    <td className="text-truncate" style={{ maxWidth: 320 }}>
                      {it.walletAddress}
                    </td>
                    <td>
                      {it.qrCode ? (
                        <img
                          src={it.qrCode}
                          alt=""
                          style={{ width: 40, height: 40, objectFit: "cover" }}
                          className="rounded border"
                        />
                      ) : (
                        "-"
                      )}
                    </td>
                    <td>
                      <span
                        className={`badge ${it.isActive ? "bg-success" : "bg-secondary"}`}>
                        {it.isActive ? "Yes" : "No"}
                      </span>
                    </td>
                    <td>{it.sortOrder ?? 0}</td>
                    <td className="text-end">
                      <div className="btn-group">
                        <button
                          className="btn btn-sm btn-outline-primary"
                          onClick={() => openEdit(it)}>
                          Edit
                        </button>
                        <button
                          className="btn btn-sm btn-outline-danger"
                          onClick={() => remove(it._id)}
                          disabled={deleting === it._id}>
                          {deleting === it._id ? "Deleting…" : "Delete"}
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      <AdminPaymentWalletModal
        show={showModal}
        handleHide={onCloseModal}
        mode={mode}
        initial={editing}
      />
    </>
  );
};

export default AdminPaymentWalletsDisplay;
