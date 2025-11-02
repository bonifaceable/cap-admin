"use client";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import {
  depositHistory,
  getTansactions,
  getUsers,
} from "@/redux/features/profile/profile_service_syn";
import { formatAmount, formatDate } from "@/hooks/helpers";

const UserList = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.profile);

  const [withdrawalsSummary, setWithdrawalsSummary] = useState([]);

  // Fetch all users
  useEffect(() => {
    dispatch(getUsers());
    fetchWithdrawalsSummary();
  }, [dispatch]);

  // Fetch total withdrawals summary for all users
  const fetchWithdrawalsSummary = async () => {
    try {
      const res = await axios.get("/api/admin/withdrawal-summary");
      setWithdrawalsSummary(res.data);
    } catch (error) {
      console.error("Error fetching withdrawal summary:", error);
    }
  };

  // Get total withdrawn for each user
  const getTotalWithdrawn = (userId) => {
    const record = withdrawalsSummary.find((item) => item.user?.id === userId);
    return record ? record.totalAmount : 0;
  };

  console.log(users, "users data...");

  return (
    <div className="container-fluid content-inner pb-0">
      <div className="row">
        <div className="col-sm-12">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title text-white">Users Info</h4>
            </div>

            <div className="d-flex mt-3 mx-4 justify-content-between gap-2 flex-wrap">
              <div className="d-inline-block">
                <select
                  className="form-select form-select-sm"
                  id="validationDefault04"
                  required>
                  <option selected disabled value>
                    10
                  </option>
                  <option>20</option>
                  <option>30</option>
                  <option>40</option>
                </select>
              </div>
              <div className="form-outline">
                <input
                  type="search"
                  id="form1"
                  className="form-control ms-1"
                  placeholder="Search.."
                  aria-label="Search"
                />
              </div>
            </div>

            <div className="card-body">
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Last Updated</th>
                      <th>Email</th>
                      <th>Balance</th>
                      <th>Investment</th>
                      <th>Profit</th>
                      <th>Total Withdrawn</th> {/* ✅ New column */}
                      <th>Pending Withdrawal</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((user) => (
                      <tr key={user._id}>
                        <td>{user?.name}</td>
                        <td>{formatDate(user?.wallet?.updatedAt)}</td>
                        <td>{user?.email}</td>
                        <td>{formatAmount(user?.wallet?.balance)}</td>
                        <td>{formatAmount(user?.wallet?.investmentBalance)}</td>
                        <td>{formatAmount(user?.wallet?.profits)}</td>
                        <td>
                          {formatAmount(getTotalWithdrawn(user._id))}
                        </td>{" "}
                        {/* ✅ Display total withdrawn */}
                        <td>{formatAmount(user?.wallet?.pendingWithdrawal)}</td>
                        <td>
                          <a href={`/dashboard/users/${user?._id}`}>
                            View Details
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                <div className="d-flex justify-content-between flex-wrap">
                  <div
                    className="dataTables_info"
                    id="example_info"
                    role="status"
                    aria-live="polite">
                    Showing 1 to 10 of 57 entries
                  </div>
                  <nav aria-label="Page navigation example">
                    <ul className="pagination">
                      <li className="page-item">
                        <a className="page-link" href="#" aria-label="Previous">
                          <span aria-hidden="true">
                            <svg
                              width={15}
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg">
                              <path
                                d="M15.5 19L8.5 12L15.5 5"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </span>
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          1
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          2
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          3
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#" aria-label="Next">
                          <span aria-hidden="true">
                            <svg
                              width={15}
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg">
                              <path
                                d="M8.5 5L15.5 12L8.5 19"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </span>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserList;
