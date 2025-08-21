"use client";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { formatAmount } from "@/hooks/helpers";
import {
  depositHistory,
  getTansactions,
} from "@/redux/features/profile/profile_service_syn";

const DepositHistory = () => {
  const dispatch = useDispatch();
  const { wallet, deposits, editLoader, transactions, profile } = useSelector(
    (state) => state.profile
  );
  console.log(wallet, "wallet");

  useEffect(() => {
    dispatch(depositHistory());
    dispatch(getTansactions());
  }, []);
  return (
    <div className="container-fluid content-inner pb-0">
      <div className="row">
        <div className="col-lg-12">
          <div className="card">
            <div className="card-body">
              <h5 className="mt-4">Deposit History</h5>
              <div className="d-flex justify-content-between align-items-center flex-wrap py-4">
                <div className="d-flex flex-column">
                  <span> {deposits.length} deposits</span>
                  {/* <span>updated 02/08/2021 at 02:45 PM</span> */}
                </div>
                <div className="iq-add-symbol">
                  <a
                    href="/dashboard/deposit"
                    type="button"
                    className="btn btn-primary d-flex align-items-center"
                  >
                    Add fund
                  </a>
                </div>
              </div>
              <div className="table-responsive">
                <table className="table data-table list-table">
                  <thead>
                    <tr className>
                      <th scope="col">
                        <span className="ms-5 me-3"># </span> Deposit ID
                      </th>
                      <th scope="col">Amount</th>
                      <th scope="col">Status</th>
                      <th scope="col">Wallet Address</th>
                      <th scope="col">Transaction Type</th>
                      <th scope="col">Date</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {deposits?.length <= 0 && (
                      <div>
                        <div className="card">
                          <div className="card-header">
                            <div className="d-flex justify-content-between">
                              <div className="d-flex align-items-center">
                                <h4 className="px-3">No Transaction Yet</h4>
                              </div>
                            </div>
                          </div>
                          <div className="card-body">
                            <a
                              className="btn btn-success"
                              href="/dashboard/deposit"
                            >
                              <span>Add Funds</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    )}
                    {deposits?.map((investment, key) => (
                      <tr>
                        <td>
                          <div className="d-flex align-items-center">
                            <span className="ms-3 me-3">{key + 1}</span>
                            <div className="d-flex align-items-center ms-2">
                              {investment?._id}
                              {/* <p className="ms-2 mb-0 text-body-secondary">BTC</p> */}
                              {/* <button
                      type="button"
                      className="btn btn-sm btn-primary ms-2"
                    >
                      Buy More
                    </button> */}
                            </div>
                          </div>
                        </td>
                        <td>${formatAmount(investment?.amount)}</td>
                        <td
                          className={
                            investment?.status === "received"
                              ? "text-success"
                              : "text-danger"
                          }
                        >
                          {investment?.status}
                        </td>
                        <td>{investment?.walletAddress}</td>
                        <td>
                          <div className="d-flex flex-column">
                            <span>{investment?.transactionType}</span>
                          </div>
                        </td>
                        <td>
                          <div className="d-flex align-items-center mb-1">
                            <h6 className="heading-title">
                              {formatDate(investment?.createdAt)}
                            </h6>
                          </div>
                        </td>
                        <td>
                          <div className="d-flex align-items-center justify-content-between gap-3">
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
                                xmlns="http://www.w3.org/2000/svg"
                              >
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
                                aria-labelledby="dropdownMenuLink1"
                              >
                                <li>
                                  <a
                                    className="dropdown-item"
                                    href={`/dashboard/deposit/${investment?._id}`}
                                  >
                                    View Details
                                  </a>
                                </li>
                                <li>
                                  <a className="dropdown-item" href="#">
                                    Another action
                                  </a>
                                </li>
                                <li>
                                  <a className="dropdown-item" href="#">
                                    Something else here
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DepositHistory;
