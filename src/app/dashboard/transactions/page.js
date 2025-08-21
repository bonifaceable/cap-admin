"use client";
import React, { useEffect, useMemo, useState } from "react";
import { toast } from "react-toastify";
import {
  approveTransaction,
  fetchTransactions,
} from "@/redux/services/adminTransactions";
import ConfirmApproveModal from "@/components/DashComponents/Modals/ConfirmApproveModal";
import TransactionDetailsModal from "@/components/DashComponents/Modals/TransactionDetailsModal";
import AdminOfflineTransactionModal from "@/components/DashComponents/Modals/AdminOfflineTransactionModal";

const formatAmount = (v) => Number(v || 0).toLocaleString();
const formatDate = (d) => (d ? new Date(d).toLocaleString() : "—");

const Filters = ({ values, onChange, onRefresh, loading }) => {
  return (
    <div className="row g-2 align-items-end mb-3">
      <div className="col-md-2">
        <label className="form-label">Status</label>
        <select
          className="form-select"
          value={values.status}
          onChange={(e) => onChange({ ...values, status: e.target.value })}>
          <option value="all">All</option>
          <option value="pending">Pending</option>
          <option value="received">Received</option>
          <option value="failed">Failed</option>
        </select>
      </div>

      <div className="col-md-2">
        <label className="form-label">Type</label>
        <select
          className="form-select"
          value={values.type}
          onChange={(e) => onChange({ ...values, type: e.target.value })}>
          <option value="all">All</option>
          <option value="fund-deposit">Fund Deposit</option>
          <option value="plan-purchase">Plan Purchase</option>
        </select>
      </div>

      <div className="col-md-2">
        <label className="form-label">Method</label>
        <select
          className="form-select"
          value={values.method}
          onChange={(e) => onChange({ ...values, method: e.target.value })}>
          <option value="all">All</option>
          <option value="wallet">Wallet</option>
          <option value="Bitcoin">Bitcoin</option>
          <option value="USDT">USDT</option>
          <option value="Eth">Ethereum</option>
          <option value="Bnb">Bnb</option>
        </select>
      </div>

      <div className="col-md-3">
        <label className="form-label">Search (user, email, id)</label>
        <input
          className="form-control"
          placeholder="Search…"
          value={values.q}
          onChange={(e) => onChange({ ...values, q: e.target.value })}
        />
      </div>

      <div className="col-md-3 d-flex gap-2">
        <button
          className="btn btn-outline-secondary w-50"
          onClick={onRefresh}
          disabled={loading}>
          {loading ? "Loading..." : "Refresh"}
        </button>
        <button
          className="btn btn-outline-dark w-50"
          onClick={() =>
            onChange({ status: "all", type: "all", method: "all", q: "" })
          }
          disabled={loading}>
          Reset
        </button>
      </div>
    </div>
  );
};

const TransactionsPage = () => {
  // const dispatch = useDispatch();

  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [updatingItem, setUpdatingItem] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const [filters, setFilters] = useState({
    status: "all",
    type: "all",
    method: "all",
    q: "",
  });

  const [details, setDetails] = useState({ open: false, item: null });
  const [confirm, setConfirm] = useState({ open: false, item: null });
  const [confirmLoading, setConfirmLoading] = useState(false);

  const load = async () => {
    setLoading(true);
    try {
      const data = await fetchTransactions();
      setTransactions(Array.isArray(data) ? data : []);
    } catch (e) {
      toast(e?.message || "Failed to load transactions");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, []);

  const filtered = useMemo(() => {
    return transactions.filter((t) => {
      if (filters.status !== "all" && t.status !== filters.status) return false;
      if (filters.type !== "all" && t.transactionType !== filters.type)
        return false;
      if (filters.method !== "all" && t.paymentMethod !== filters.method)
        return false;

      if (filters.q) {
        const q = filters.q.toLowerCase();
        const hay =
          `${t.user_name || ""} ${t.user_email || ""} ${t._id || ""}`.toLowerCase();
        if (!hay.includes(q)) return false;
      }
      return true;
    });
  }, [transactions, filters]);

  const openDetails = (item) => setDetails({ open: true, item });
  const closeDetails = () => setDetails({ open: false, item: null });

  const openConfirm = (item) => setConfirm({ open: true, item });
  const closeConfirm = () => {
    setConfirm({ open: false, item: null });
    setConfirmLoading(false);
  };

  const approve = async (id) => {
    setConfirmLoading(true);
    setUpdatingItem(id);
    try {
      // If you want Redux instead, keep your original:
      // dispatch(ApproveDeposit({ id, data: { status: "received" } }));

      await approveTransaction(id);
      toast("Transaction approved");
      await load();
    } catch (e) {
      toast(e?.message || "Approval failed");
    } finally {
      setUpdatingItem(null);
      setConfirmLoading(false);
      closeConfirm();
      closeDetails();
    }
  };

  return (
    <>
      {/* <h4 className="mb-3">Transactions</h4> */}
      <div className="mt-3">
        <div>
          <h1>Transactions</h1>
          <p>Manage transactions</p>
        </div>
        <div>
          <button
            onClick={() => setShowModal(true)}
            className="btn btn-primary">
            Create Transaction
          </button>
        </div>
      </div>
      <br />
      <br />

      <Filters
        values={filters}
        onChange={setFilters}
        onRefresh={load}
        loading={loading}
      />

      <div className="table-responsive">
        <table className="table data-table list-table">
          <thead>
            <tr>
              <th>
                <span className="ms-5 me-3">#</span> User Name
              </th>
              <th>Amount</th>
              <th>Status</th>
              <th>Payment Method</th>
              <th>Transaction Type</th>
              <th>Wallet Address</th>
              <th>Transaction Id</th>
              <th>Date</th>
              <th className="text-end">Actions</th>
            </tr>
          </thead>

          <tbody>
            {filtered.map((item, index) => (
              <tr key={item._id}>
                <td>
                  <div className="d-flex align-items-center">
                    <span className="ms-3 me-3">{index + 1}</span>
                    <div className="d-flex align-items-center ms-2">
                      {item?.user_name}
                    </div>
                  </div>
                </td>
                <td>$ {formatAmount(item?.amount)}</td>
                <td
                  className={
                    item?.status === "received"
                      ? "text-success"
                      : item?.status === "pending"
                        ? "text-warning"
                        : "text-danger"
                  }>
                  {item?.status}
                </td>
                <td>{item?.paymentMethod}</td>
                <td>{item?.transactionType}</td>
                <td className="text-break">{item?.walletAddress}</td>
                <td className="text-break">{item?._id}</td>
                <td>{formatDate(item?.createdAt)}</td>

                <td className="text-end">
                  <div className="dropdown position-static">
                    <button
                      className="btn btn-sm btn-light dropdown-toggle"
                      data-bs-toggle="dropdown"
                      data-bs-display="static">
                      {updatingItem === item._id ? "Updating…" : "Actions"}
                    </button>
                    <ul className="dropdown-menu dropdown-menu-end">
                      <li>
                        <a
                          className="dropdown-item"
                          onClick={() => openDetails(item)}>
                          View details
                        </a>
                      </li>
                      {item.status !== "received" && (
                        <li>
                          <a
                            className="dropdown-item text-success"
                            onClick={() => openConfirm(item)}>
                            Approve
                          </a>
                        </li>
                      )}
                    </ul>
                  </div>
                </td>
              </tr>
            ))}

            {filtered.length === 0 && !loading && (
              <tr>
                <td colSpan={9} className="text-center py-4">
                  No transactions.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Confirm approve modal */}
      <ConfirmApproveModal
        show={confirm.open}
        onClose={closeConfirm}
        onConfirm={() => approve(confirm.item?._id)}
        item={confirm.item}
        loading={confirmLoading}
      />

      {/* Details modal (also includes Approve button) */}
      <TransactionDetailsModal
        show={details.open}
        onClose={closeDetails}
        item={details.item}
        onApprove={() => approve(details.item?._id)}
        approving={confirmLoading && updatingItem === details.item?._id}
      />

      <AdminOfflineTransactionModal
        show={showModal ? "block" : "none"}
        onClose={() => setShowModal(false)}
      />
    </>
  );
};

export default TransactionsPage;
