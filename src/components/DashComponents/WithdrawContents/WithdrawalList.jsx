import React from "react";

const WithdrawalList = () => {
  return (
    <div className="container-fluid content-inner pb-0">
      <div className="row">
        <div className="col-lg-12">
          <div className="card">
            <div className="card-body">
              <h5 className="mt-4">Withdrawal History</h5>
              <div className="d-flex justify-content-between align-items-center flex-wrap py-4">
                <div className="d-flex flex-column">
                  <span>52 withdrawals</span>
                  <span>updated 02/08/2021 at 02:45 PM</span>
                </div>
                <div className="iq-add-symbol">
                  <a
                    href="/dashboard/withdraw"
                    type="button"
                    className="btn btn-primary d-flex align-items-center"
                  >
                    Make withdrawal
                  </a>
                </div>
              </div>
              <div className="table-responsive">
                <table
                  id="datatable"
                  className="table mb-0"
                  data-toggle="data-table"
                >
                  <thead className>
                    <tr>
                      <th></th>
                      <th>Transaction ID</th>
                      <th>Amount</th>
                      <th>Wallet address</th>
                      <th>Status</th>
                      <th>Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <img
                          src="../assets/images/coins/01.png"
                          className="img-fluid avatar-30 ms-3 avatar-rounded"
                          alt="img10"
                        />
                      </td>
                      <td className="text-primary">Bitcoin</td>
                      <td>147.00</td>
                      <td>
                        <div className="badge bg-success-subtle text-light p-2">
                          +58.62%
                        </div>
                      </td>
                      <td>2.22</td>
                      <td>2.32</td>
                      <td>32.15B</td>
                    </tr>
                    <tr>
                      <td>
                        <img
                          src="../assets/images/coins/01.png"
                          className="img-fluid avatar-30 ms-3 avatar-rounded"
                          alt="img10"
                        />
                      </td>
                      <td className="text-primary">Ethereum</td>
                      <td>147.00</td>
                      <td>
                        <div className="badge bg-danger-subtle text-light p-2">
                          -58.62%
                        </div>
                      </td>
                      <td>2.22</td>
                      <td>2.32</td>
                      <td>32.15B</td>
                    </tr>
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

export default WithdrawalList;
