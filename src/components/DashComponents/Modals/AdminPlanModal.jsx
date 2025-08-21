"use client";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import APIs from "@/redux/Apis";
import { toast } from "react-toastify";
import { getPlans } from "@/redux/features/profile/profile_service_syn";

const AdminPlanModal = ({
  show,
  handleHide,
  mode = "create",
  initialData = null,
}) => {
  const dispatch = useDispatch();
  const isEdit = mode === "edit";

  const [saving, setSaving] = useState(false);
  const [form, setForm] = useState({
    plan: "",
    amount: "",
    max: "",
    terms: "",
    percent: "",
    investmentReturn: "",
    walletAddress: "",
    benefitsText: "", // comma-separated input -> saved as array
  });

  // Pre-fill when editing
  useEffect(() => {
    if (isEdit && initialData) {
      setForm({
        plan: initialData.plan ?? "",
        amount: initialData.amount ?? "",
        max: initialData.max ?? "",
        terms: initialData.terms ?? "",
        percent: initialData.percent ?? "",
        investmentReturn: initialData.investmentReturn ?? "",
        walletAddress: initialData.walletAddress ?? "",
        benefitsText: Array.isArray(initialData.benefits)
          ? initialData.benefits.join(", ")
          : "",
      });
    }
  }, [isEdit, initialData]);

  const onChange = (e) => {
    const { name, value } = e.target;
    // Keep numbers as strings in state; coerce on submit
    setForm((s) => ({ ...s, [name]: value }));
  };

  const validate = () => {
    if (!form.plan?.trim()) return "Plan name is required";
    if (!form.amount) return "Amount is required";
    if (!form.max) return "Max is required";
    if (!form.terms?.trim()) return "Terms are required";
    if (!form.percent?.toString().trim()) return "Percent is required";

    const amountNum = Number(form.amount);
    const maxNum = Number(form.max);
    if (Number.isNaN(amountNum) || amountNum <= 0)
      return "Amount must be a positive number";
    if (Number.isNaN(maxNum) || maxNum <= 0)
      return "Max must be a positive number";
    if (maxNum < amountNum)
      return "Max must be greater than or equal to Amount";

    if (form.investmentReturn && Number.isNaN(Number(form.investmentReturn))) {
      return "Investment return must be a number";
    }
    return null;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const errMsg = validate();
    if (errMsg) {
      toast.error(errMsg);
      return;
    }

    const payload = {
      plan: form.plan.trim(),
      amount: Number(form.amount),
      max: Number(form.max),
      terms: form.terms.trim(),
      // Your schema stores percent as String; keep it string to match backend
      percent: form.percent.toString().trim(),
      investmentReturn:
        form.investmentReturn === ""
          ? undefined
          : Number(form.investmentReturn),
      walletAddress: form.walletAddress?.trim() || undefined,
      benefits: form.benefitsText
        .split(",")
        .map((b) => b.trim())
        .filter(Boolean),
    };

    try {
      setSaving(true);
      if (isEdit) {
        await APIs.patch(`/admin/plans/${initialData?._id}`, payload);
        toast.success("Plan updated");
      } else {
        await APIs.post("/admin/plans", payload);
        toast.success("Plan created");
      }
      // Refresh plans in your store
      dispatch(getPlans());
      handleHide();
    } catch (err) {
      // Normalize error message
      const message =
        err?.message ||
        err?.error ||
        err?.response?.data?.message ||
        "Something went wrong";
      toast.error(message);
    } finally {
      setSaving(false);
    }
  };

  return (
    <div
      className={show === "block" ? "modal fade show" : "modal fade"}
      id="planModal"
      tabIndex={-1}
      role="dialog"
      aria-hidden="true"
      style={{ display: show }}>
      <div className="modal-dialog modal-dialog-centered show" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">
              {isEdit ? "Edit Plan" : "Create Plan"}
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={handleHide}
              disabled={saving}
            />
          </div>

          <div className="modal-body">
            <form className="d-grid gap-card" onSubmit={onSubmit}>
              <div className="form-group mb-2">
                <label className="form-label">Plan Name</label>
                <input
                  name="plan"
                  value={form.plan}
                  onChange={onChange}
                  className="form-control"
                  placeholder="e.g. Starter"
                />
              </div>

              <div className="form-group mb-2">
                <label className="form-label">Amount (min)</label>
                <input
                  name="amount"
                  type="number"
                  min="0"
                  value={form.amount}
                  onChange={onChange}
                  className="form-control"
                  placeholder="e.g. 100"
                />
              </div>

              <div className="form-group mb-2">
                <label className="form-label">Max</label>
                <input
                  name="max"
                  type="number"
                  min="0"
                  value={form.max}
                  onChange={onChange}
                  className="form-control"
                  placeholder="e.g. 1000"
                />
              </div>

              <div className="form-group mb-2">
                <label className="form-label">Terms</label>
                <input
                  name="terms"
                  value={form.terms}
                  onChange={onChange}
                  className="form-control"
                  placeholder="e.g. 30 days"
                />
              </div>

              <div className="form-group mb-2">
                <label className="form-label">Percent</label>
                <input
                  name="percent"
                  value={form.percent}
                  onChange={onChange}
                  className="form-control"
                  placeholder="e.g. 5%"
                />
                <small className="text-muted">
                  Stored as text on the backend. You can enter “5%” or “5”.
                </small>
              </div>

              <div className="form-group mb-2">
                <label className="form-label">
                  Investment Return (optional)
                </label>
                <input
                  name="investmentReturn"
                  type="number"
                  value={form.investmentReturn}
                  onChange={onChange}
                  className="form-control"
                  placeholder="e.g. 50"
                />
              </div>

              <div className="form-group mb-2">
                <label className="form-label">Wallet Address (optional)</label>
                <input
                  name="walletAddress"
                  value={form.walletAddress}
                  onChange={onChange}
                  className="form-control"
                  placeholder="Address to show for crypto payments"
                />
              </div>

              <div className="form-group mb-3">
                <label className="form-label">Benefits (optional)</label>
                <textarea
                  name="benefitsText"
                  value={form.benefitsText}
                  onChange={onChange}
                  className="form-control"
                  rows={2}
                  placeholder="Comma-separated. e.g. Fast payouts, Priority support"
                />
              </div>

              <div className="d-grid gap-card grid-cols-2">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                  onClick={handleHide}
                  disabled={saving}>
                  Close
                </button>
                <button
                  className="btn btn-success"
                  type="submit"
                  disabled={saving}>
                  <span>
                    {saving
                      ? "Saving..."
                      : isEdit
                        ? "Save Changes"
                        : "Create Plan"}
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPlanModal;
