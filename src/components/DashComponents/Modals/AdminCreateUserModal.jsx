"use client";
import React, { useState } from "react";
import APIs from "@/redux/Apis";
import { toast } from "react-toastify";

const AdminCreateUserModal = ({ show, handleHide, onCreated }) => {
  const [saving, setSaving] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    country: "",
    referralCode: "",
  });

  const onChange = (e) =>
    setForm((s) => ({ ...s, [e.target.name]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.password) {
      toast.error("Name, email, and password are required");
      return;
    }
    try {
      setSaving(true);
      await APIs.post("/register", {
        name: form.name.trim(),
        email: form.email.trim().toLowerCase(),
        password: form.password,
        phone: form.phone?.trim() || undefined,
        country: form.country?.trim() || undefined,
        referralCode: form.referralCode?.trim() || undefined,
      });
      toast.success("User created");
      onCreated?.(); // refresh your table/list
      handleHide();
    } catch (err) {
      toast.error(err?.message || "Failed to create user");
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
            <h5 className="modal-title">Create User</h5>
            <button
              className="btn-close"
              onClick={handleHide}
              disabled={saving}
            />
          </div>
          <div className="modal-body">
            <form className="d-grid gap-card" onSubmit={onSubmit}>
              <div className="form-group mb-2">
                <label className="form-label">Name</label>
                <input
                  name="name"
                  value={form.name}
                  onChange={onChange}
                  className="form-control"
                />
              </div>
              <div className="form-group mb-2">
                <label className="form-label">Email</label>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={onChange}
                  className="form-control"
                />
              </div>
              <div className="form-group mb-2">
                <label className="form-label">Password</label>
                <input
                  name="password"
                  type="password"
                  value={form.password}
                  onChange={onChange}
                  className="form-control"
                />
              </div>
              <div className="form-group mb-2">
                <label className="form-label">Phone (optional)</label>
                <input
                  name="phone"
                  value={form.phone}
                  onChange={onChange}
                  className="form-control"
                />
              </div>
              <div className="form-group mb-2">
                <label className="form-label">Country (optional)</label>
                <input
                  name="country"
                  value={form.country}
                  onChange={onChange}
                  className="form-control"
                />
              </div>
              <div className="form-group mb-3">
                <label className="form-label">Referral Code (optional)</label>
                <input
                  name="referralCode"
                  value={form.referralCode}
                  onChange={onChange}
                  className="form-control"
                />
              </div>

              <div className="d-grid gap-card grid-cols-2">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handleHide}
                  disabled={saving}>
                  Close
                </button>
                <button
                  className="btn btn-success"
                  type="submit"
                  disabled={saving}>
                  {saving ? "Creating..." : "Create User"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminCreateUserModal;
