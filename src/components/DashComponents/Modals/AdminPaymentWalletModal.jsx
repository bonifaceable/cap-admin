"use client";
import React, { useEffect, useMemo, useState } from "react";
import APIs from "@/redux/Apis";
import { toast } from "react-toastify";

// const CLOUD_NAME = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
const CLOUD_NAME = "dqbypzolx"; // dummy value to avoid build error
// const UPLOAD_PRESET = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET;
const UPLOAD_PRESET = "unsigned_qr_uploads"; // dummy value to avoid build error

async function uploadToCloudinary(file) {
  const url = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`;
  const form = new FormData();
  form.append("file", file);
  form.append("upload_preset", UPLOAD_PRESET);
  const res = await fetch(url, { method: "POST", body: form });
  if (!res.ok) throw new Error("Upload failed");
  const json = await res.json();
  return json.secure_url;
}

const EMPTY = {
  label: "",
  value: "",
  currency: "",
  network: "",
  walletAddress: "",
  qrCode: "",
  sortOrder: 0,
  isActive: true,
};

const AdminPaymentWalletModal = ({
  show,
  handleHide,
  mode = "create",
  initial,
}) => {
  const [form, setForm] = useState(EMPTY);
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);

  // hydrate form on open / mode change
  useEffect(() => {
    if (show === "block") {
      setForm(
        mode === "edit" && initial
          ? {
              label: initial.label || "",
              value: initial.value || "",
              currency: initial.currency || "",
              network: initial.network || "",
              walletAddress: initial.walletAddress || "",
              qrCode: initial.qrCode || "",
              sortOrder: initial.sortOrder || 0,
              isActive: initial.isActive ?? true,
            }
          : EMPTY
      );
    }
  }, [show, mode, initial]);

  const onChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((s) => ({ ...s, [name]: type === "checkbox" ? checked : value }));
  };

  const onUpload = async (file) => {
    if (!file) return;
    try {
      setUploading(true);
      const url = await uploadToCloudinary(file);
      setForm((s) => ({ ...s, qrCode: url }));
      toast("QR uploaded");
    } catch (e) {
      toast(e.message || "Upload failed");
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async () => {
    try {
      setSaving(true);
      if (
        !form.label ||
        // !form.value ||
        // !form.currency ||
        // !form.network ||
        !form.walletAddress ||
        !form.qrCode
      ) {
        toast("Please fill all required fields");
        setSaving(false);
        return;
      }

      const payload = {
        label: form.label.trim(),
        walletAddress: form.walletAddress.trim(),
        qrCode: form.qrCode?.trim() || "",
        sortOrder: Number(form.sortOrder || 0),
        isActive: !!form.isActive,
      };

      let res;
      if (mode === "edit" && initial?._id) {
        res = await APIs.patch(
          `/admin/payment-wallets/${initial._id}`,
          payload
        );
      } else {
        res = await APIs.post("/admin/payment-wallets", payload);
      }

      toast(mode === "edit" ? "Wallet updated" : "Wallet created");
      handleHide?.("refresh"); // signal parent to reload
    } catch (err) {
      toast(err?.response?.data?.message || err?.message || "Save failed");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div
      className={show === "block" ? "modal fade show" : "modal fade"}
      style={{ display: show }}
      tabIndex={-1}
      role="dialog"
      aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered show" role="document">
        <div className="modal-content">
          {/* Header */}
          <div className="modal-header">
            <h5 className="modal-title">
              {mode === "edit"
                ? "Edit Payment Wallet"
                : "Create Payment Wallet"}
            </h5>
            <button
              type="button"
              className="btn-close"
              aria-label="Close"
              onClick={() => handleHide?.()}
            />
          </div>

          {/* Body */}
          <div className="modal-body">
            <form className="d-grid gap-3">
              <div className="form-group">
                <label className="form-label">Label *</label>
                <input
                  name="label"
                  value={form.label}
                  onChange={onChange}
                  className="form-control"
                  placeholder="USDT (TRC20)"
                />
              </div>

             

              {/* <div className="form-group">
                <label className="form-label">Currency *</label>
                <input
                  name="currency"
                  value={form.currency}
                  onChange={onChange}
                  className="form-control"
                  placeholder="USDT"
                />
              </div> */}

              {/* <div className="form-group">
                <label className="form-label">Network *</label>
                <input
                  name="network"
                  value={form.network}
                  onChange={onChange}
                  className="form-control"
                  placeholder="TRC20"
                />
              </div> */}

              <div className="form-group">
                <label className="form-label">Wallet Address *</label>
                <input
                  name="walletAddress"
                  value={form.walletAddress}
                  onChange={onChange}
                  className="form-control"
                  placeholder="Your deposit address"
                />
              </div>

              <div className="row">
                <div className="col-md-6 form-group">
                  <label className="form-label">Sort Order</label>
                  <input
                    type="number"
                    name="sortOrder"
                    min={0}
                    value={form.sortOrder}
                    onChange={onChange}
                    className="form-control"
                  />
                </div>

                <div className="col-md-6 form-check d-flex align-items-end gap-2">
                  <input
                    id="isActive"
                    type="checkbox"
                    name="isActive"
                    checked={form.isActive}
                    onChange={onChange}
                    className="form-check-input"
                  />
                  <label htmlFor="isActive" className="form-check-label">
                    Active
                  </label>
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">QR Code (Cloudinary)</label>
                <input
                  type="file"
                  accept="image/*"
                  className="form-control"
                  onChange={(e) => onUpload(e.target.files?.[0])}
                />
                {uploading && <div className="text-muted mt-1">Uploading…</div>}
                {form.qrCode ? (
                  <div className="mt-2">
                    <img
                      src={form.qrCode}
                      alt="QR"
                      className="rounded border"
                      style={{ width: 120, height: 120, objectFit: "cover" }}
                    />
                  </div>
                ) : null}
              </div>

              <div className="d-grid gap-2 grid-cols-2 pt-2">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => handleHide?.()}>
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-success"
                  onClick={handleSubmit}
                  disabled={saving}>
                  {saving
                    ? mode === "edit"
                      ? "Updating..."
                      : "Creating..."
                    : mode === "edit"
                      ? "Update Wallet"
                      : "Create Wallet"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPaymentWalletModal;
