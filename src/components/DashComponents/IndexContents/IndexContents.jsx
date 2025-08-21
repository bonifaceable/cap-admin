"use client";
import React, { useEffect, useState } from "react";
import FirstRow from "./FirstRow";
import SecondRow from "./SecondRow";
import UserDisplay from "./UserDisplay";
import DespositModal from "../Modals/DespositModal";
import { useDispatch, useSelector } from "react-redux";
import {
  ApproveDeposit,
  depositHistory,
  getTansactions,
  getUsers,
} from "@/redux/features/profile/profile_service_syn";
import { formatAmount, formatDate } from "@/hooks/helpers";
import APIs from "@/redux/Apis";

const IndexContents = () => {
  const [updatingItem, setUpdatingItem] = useState("");
  const [stats, setStats] = useState(null);
  const dispatch = useDispatch();
  const {
    wallet,
    deposits,
    editLoader,
    transactions,
    profile,
    approvingDeposit,
    depositsApproveSuccess,
    depositApproveMessage,
    depositApproveError,
    users,
  } = useSelector((state) => state.profile);

  useEffect(() => {
    dispatch(depositHistory());
    dispatch(getTansactions());
    dispatch(getUsers());
  }, []);

  const approveDeposit = (id) => {
    setUpdatingItem(id);
    const payload = { id: id, data: { status: "received" } };
    dispatch(ApproveDeposit(payload));
  };

  const declineDeposit = (id) => {
    const payload = { id: id, data: { status: "pending" } };
    dispatch(ApproveDeposit(payload));
  };

  useEffect(() => {
    if (depositsApproveSuccess) {
      dispatch(depositHistory());
      dispatch(getTansactions());
      setUpdatingItem("");
    }
  }, [depositsApproveSuccess]);

  const fetchStats = async () => {
    try {
      console.log("entered here");
      // this is exactly what you asked for:
      const { data } = await APIs.get("/admin/stats");
      console.log(data, "data stats");
      // if (!mounted) return;
      setStats(data);
    } catch (e) {
      console.log(e, "error stats");
      // setError(e?.message || "Failed to load stats");
    }
  };

  useEffect(() => {
    // let mounted = true;
    fetchStats();
  }, []);

  return (
    <>
      <div className="container-fluid content-inner pb-0">
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="card bg-primary-subtle">
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="bg-primary-subtle rounded p-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20px"
                      height="20px"
                      viewBox="0 0 20 20"
                      fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="text-end">
                    <h2 className="counter">{users?.length}</h2>
                    Total Users
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="card bg-warning-subtle">
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="bg-warning-subtle rounded p-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20px"
                      height="20px"
                      viewBox="0 0 20 20"
                      fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="text-end">
                    <h2 className="counter">{stats?.verifiedUsers}</h2>
                    Verified Users
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="card bg-danger-subtle">
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="bg-danger-subtle rounded p-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20px"
                      height="20px"
                      viewBox="0 0 20 20"
                      fill="currentColor">
                      <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                    </svg>
                  </div>
                  <div className="text-end">
                    <h2 className="counter">{stats?.unverifiedUsers}</h2>
                    Unverified Users
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="card bg-info-subtle">
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="bg-info-subtle rounded p-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20px"
                      height="20px"
                      viewBox="0 0 20 20"
                      fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="text-end">
                    <h2 className="counter">{stats?.totalTransactions}</h2>
                    All Transactions
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-12">
            <h3>All Transactions</h3>
          </div>

          {/* transact */}
          <div className="col-lg-12">
            <div className="table-responsive">
              <table className="table data-table list-table">
                <thead>
                  <tr className>
                    <th scope="col">
                      <span className="ms-5 me-3"># </span> User Name
                    </th>
                    <th scope="col">Amount</th>
                    <th scope="col">Status</th>
                    <th scope="col">Payment Method</th>
                    <th scope="col">Transaction Type</th>
                    <th scope="col">Wallet Address</th>
                    <th scope="col">Transaction Id</th>
                    <th scope="col">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {transactions?.map((item, index) => (
                    <>
                      {updatingItem === item?._id ? (
                        <p>updating..</p>
                      ) : (
                        <tr>
                          <td>
                            <div className="d-flex align-items-center">
                              <svg
                                width={35}
                                viewBox="0 0 35 25"
                                className="stars"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                  d="M12 4.11804L13.7696 9.56434L13.8819 9.90983H14.2451H19.9717L15.3388 13.2758L15.0449 13.4894L15.1572 13.8348L16.9268 19.2812L12.2939 15.9152L12 15.7016L11.7061 15.9152L7.0732 19.2812L8.84282 13.8348L8.95507 13.4894L8.66118 13.2758L4.02828 9.90983H9.75486H10.1181L10.2304 9.56434L12 4.11804Z"
                                  stroke="currentColor"
                                />
                              </svg>
                              <span className="ms-3 me-3">{index + 1}</span>
                              <div className="d-flex align-items-center ms-2">
                                {item?.user_name}
                                {/* <p className="ms-2 mb-0 text-body-secondary">BTC</p>
                            <button
                              type="button"
                              className="btn btn-sm btn-primary ms-2"
                            >
                              Buy
                            </button> */}
                              </div>
                            </div>
                          </td>
                          <td>$ {formatAmount(item?.amount)}</td>
                          <td
                            className={
                              item?.status === "received"
                                ? "text-success"
                                : "text-danger"
                            }>
                            {item?.status}
                          </td>
                          <td>{item?.paymentMethod}</td>
                          <td>{item?.transactionType}</td>
                          <td>
                            <div className="d-flex flex-column">
                              <span>{item?.walletAddress}</span>
                            </div>
                          </td>
                          <td>
                            <div className="d-flex align-items-center mb-1">
                              <h6 className="heading-title">{item?._id}</h6>
                            </div>
                          </td>
                          <td className="row d-flex align-items-center">
                            <div className="d-flex align-items-center justify-content-between">
                              <span className="">
                                {formatDate(item?.createdAt)}
                              </span>
                              <div
                                id="table-chart-1"
                                className="table-chart"
                                data-color="#1AA053"
                              />
                              <div className="dropdown">
                                <svg
                                  width={20}
                                  viewBox="0 0 24 24"
                                  id="dropdownMenuLink1"
                                  data-bs-toggle="dropdown"
                                  className="list-rotate"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg">
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M12 2.75C17.108 2.75 21.25 6.891 21.25 12C21.25 17.108 17.108 21.25 12 21.25C6.891 21.25 2.75 17.108 2.75 12C2.75 6.892 6.892 2.75 12 2.75Z"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M15.9393 12.0129H15.9483"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M11.9301 12.0129H11.9391"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M7.92128 12.0129H7.93028"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                                <ul
                                  className="dropdown-menu"
                                  aria-labelledby="dropdownMenuLink1">
                                  <li>
                                    <a
                                      onClick={() => approveDeposit(item?._id)}
                                      className="dropdown-item"
                                      href="#">
                                      Approved
                                    </a>
                                  </li>
                                  {/* <li>
                                <a className="dropdown-item" href="#">
                                  Decline
                                </a>
                              </li> */}
                                  <li>
                                    <a
                                      className="dropdown-item"
                                      href={`/dashboard/deposit/${item?._id}`}>
                                      View
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </td>
                        </tr>
                      )}
                    </>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid content-inner pb-0">
        {/* <UserDisplay userName={profile?.name} /> */}
        {/* <FirstRow /> */}
        {/* <SecondRow
          balance={formatAmount(wallet?.balance)}
          invested={formatAmount(wallet?.investmentBalance)}
          profit={formatAmount(wallet?.profits)}
          pendingBalance={formatAmount(wallet?.pendingBalance)}
          deposits={deposits}
        /> */}
        {/* <DespositModal /> */}
      </div>
    </>
  );
};

export default IndexContents;
