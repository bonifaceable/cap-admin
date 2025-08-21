"use client";
import { useState, useEffect } from "react";
import CustomInvestmentTable from "../shared/CustomInvestmentTables";
import DepositForm from "../DepositContents/DepositForm";
// import ApexCharts from "apexcharts";

const SecondRowLeftContent = ({
  balance,
  invested,
  profit,
  pendingBalance,
  deposits,
}) => {
  const [btcEquivalent, setBtcEquivalent] = useState(null); // BTC equivalent of the balance
  const currency = "USD";

  useEffect(() => {
    const fetchBtcEquivalent = async () => {
      try {
        // Fetch the conversion rate from USD (or other currency) to BTC
        const apiUrl = `https://min-api.cryptocompare.com/data/price?fsym=${currency}&tsyms=BTC`;
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.BTC) {
          // Calculate the equivalent in BTC
          setBtcEquivalent((balance * data.BTC).toFixed(8)); // Bitcoin equivalent
        } else {
          console.error("Error fetching Bitcoin equivalent:", data);
        }
      } catch (error) {
        console.error("Error fetching conversion data:", error);
      }
    };

    // Fetch the Bitcoin equivalent of the user balance
    fetchBtcEquivalent();
  }, [balance, currency]);

  return (
    <div className="col-lg-8">
      <div className="row">
        <div className="col-lg-12">
          <div className="row">
            <div className="col-lg-6">
              <div className="card shining-card">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center flex-wrap">
                    <div className="d-flex align-items-center gap-2">
                      <img
                        src="assets/images/coins/01.png"
                        className="img-fluid avatar avatar-30 avatar-rounded"
                        alt="img60"
                      />
                      <span className="fs-5 me-2">Available Balance</span>
                    </div>
                  </div>
                  <div className="pt-3">
                    <h4 className="counter" style={{ visibility: "visible" }}>
                      ${balance}
                    </h4>
                    <div className="pt-3">
                      <small className="text-success"> {btcEquivalent}</small>
                      <small className="ms-2">(BTC Equivalent)</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="card shining-card">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center flex-wrap">
                    <div className="d-flex align-items-center gap-2">
                      <img
                        src="assets/images/coins/06.png"
                        className="img-fluid avatar avatar-30 avatar-rounded"
                        alt="img60"
                      />
                      <span className="fs-5 me-2">Pending Deposits</span>
                    </div>
                  </div>
                  <div className="progress-detail pt-3">
                    <h4 className="counter" style={{ visibility: "visible" }}>
                      ${pendingBalance}
                    </h4>
                    {/* <div className="pt-3">
                      <small className="text-success">+ 0.8%</small>
                      <small className="ms-2">(LTC/USDT)</small>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="card shining-card">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center flex-wrap">
                    <div className="d-flex align-items-center gap-2">
                      <img
                        src="assets/images/coins/06.png"
                        className="img-fluid avatar avatar-30 avatar-rounded"
                        alt="img60"
                      />
                      <span className="fs-5 me-2">Total Invested</span>
                    </div>
                  </div>
                  <div className="progress-detail pt-3">
                    <h4 className="counter" style={{ visibility: "visible" }}>
                      ${invested}
                    </h4>
                    {/* <div className="pt-3">
                      <small className="text-success">+ 0.8%</small>
                      <small className="ms-2">(LTC/USDT)</small>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="card shining-card">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center flex-wrap">
                    <div className="d-flex align-items-center gap-2">
                      <img
                        src="assets/images/coins/03.png"
                        className="img-fluid avatar avatar-30 avatar-rounded"
                        alt="img60"
                      />
                      <span className="fs-5 me-2">Total Profit</span>
                    </div>
                  </div>
                  <div className="progress-detail pt-3">
                    <h4 className="counter" style={{ visibility: "visible" }}>
                      ${profit}
                    </h4>
                    {/* <div className="pt-3">
                      <small className="text-success">+ 0.8%</small>
                      <small className="ms-2">(ETH/USDT)</small>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-12">
          {/* <div className="card"> */}
          <div className="card-header mb-15">
            <h4 className="px-3">Recent Deposits</h4>
          </div>
          {/* </div> */}
          <CustomInvestmentTable investments={deposits} />
        </div>
        <div className="col-lg-12">
          <DepositForm />
          <div className="row">
            <div className="col-lg-6">
              <div className="card">
                <div className="card-header d-flex justify-content-between flex-wrap gap-3">
                  <div className="header-title">
                    <h4 className="card-title">Running Investments</h4>
                  </div>
                  <div className="d-flex">
                    <div className="dropdown p-0">
                      <button
                        className="btn bg-secondary btn-sm dropdown-toggle border-0 text-white"
                        type="button"
                        id="dropdownMenuButton5"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <img
                          src="assets/images/coins/01.png"
                          className="img-fluid avatar avatar-30 avatar-rounded"
                          alt="img5"
                        />
                        561,511 btc
                      </button>
                      <ul
                        className="dropdown-menu w-100"
                        aria-labelledby="dropdownMenuButton5"
                      >
                        <li>
                          <a href="#" className="dropdown-item">
                            <img
                              src="assets/images/coins/01.png"
                              className="img-fluid avatar avatar-30 avatar-rounded"
                              alt="img75"
                            />
                            561,511 Btc
                          </a>
                        </li>
                        <li>
                          <a href="#" className="dropdown-item">
                            <img
                              src="assets/images/coins/06.png"
                              className="img-fluid avatar avatar-30 avatar-rounded"
                              alt="img76"
                            />
                            561,511 Ltc
                          </a>
                        </li>
                        <li>
                          <a href="#" className="dropdown-item">
                            <img
                              src="assets/images/coins/03.png"
                              className="img-fluid avatar avatar-30 avatar-rounded"
                              alt="img77"
                            />
                            561,511 Eth
                          </a>
                        </li>
                        <li>
                          <a href="#" className="dropdown-item">
                            <img
                              src="assets/images/coins/08.png"
                              className="img-fluid avatar avatar-30 avatar-rounded"
                              alt="img78"
                            />
                            561,511 Xmr
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <form className="col-lg-12">
                    <div className="form-group mb-3">
                      <div className="input-group pt-1">
                        <span className="input-group-text" id="basic-addon3">
                          BTC
                        </span>
                        <input
                          type="text"
                          className="form-control col-lg-8"
                          placeholder="0,000000"
                          aria-label="Recipient's username"
                          aria-describedby="basic-addon3"
                        />
                      </div>
                    </div>
                    <div className="form-group mb-3">
                      <div className="input-group pt-2">
                        <span className="input-group-text" id="basic-addon4">
                          BPL
                        </span>
                        <input
                          type="text"
                          className="form-control col-lg-8"
                          placeholder="0,000000"
                          aria-label="Recipient's username"
                          aria-describedby="basic-addon3"
                        />
                      </div>
                    </div>
                    <div className="form-group mb-3">
                      <div className="input-group pt-2">
                        <span className="input-group-text" id="basic-addon6">
                          Total
                        </span>
                        <input
                          type="text"
                          className="form-control col-lg-8"
                          placeholder="0,000000"
                          aria-label="Recipient's username"
                          aria-describedby="basic-addon3"
                        />
                      </div>
                    </div>
                    <div className>
                      <div className="d-grid gap-card grid-cols-2">
                        <button className="btn btn-success" type="button">
                          <span>BUY</span>
                          <svg
                            className="rotate-45"
                            width={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M19.75 11.7256L4.75 11.7256"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M13.7002 5.70124L19.7502 11.7252L13.7002 17.7502"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </button>
                        <button className="btn btn-danger" type="button">
                          <span>SELL</span>
                          <svg
                            className="rotate-45"
                            width={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M4.25 12.2744L19.25 12.2744"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M10.2998 18.2988L4.2498 12.2748L10.2998 6.24976"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondRowLeftContent;
