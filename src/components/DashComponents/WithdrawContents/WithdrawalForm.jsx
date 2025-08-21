"use client";
import React, { useState } from "react";
import { formatAmount, parseFormattedAmount } from "@/hooks/helpers";
import { toast } from "react-toastify";

const WithdrawalForm = () => {
  const [paymentMethod, setPaymentMethod] = useState("Bitcoin");
  const [amount, setAmount] = useState("");
  const [walletAddress, setWalletAddress] = useState("");

  const handleAmountChange = (e) => {
    const value = e.target.value;
    console.log(value);
    // setAmount(value);
    const numericValue = parseFloat(value.replace(/,/g, ""));
    if (!isNaN(numericValue) && numericValue <= 100000) {
      setAmount(value);
    } else if (value === "") {
      setAmount("");
      // onAmountChange("");
    }
  };

  const handleBlur = () => {
    const numericValue = parseFloat(amount.replace(/,/g, ""));
    if (!isNaN(numericValue)) {
      const formattedValue = formatAmount(numericValue);
      setAmount(formattedValue);
      handleAmountChange(numericValue > 1000000 ? 1000000 : numericValue);
    }
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setPaymentMethod(value);
  };

  const normalAmount = parseFormattedAmount(amount);

  const handleValidateAmount = () => {
    console.log("clicked", normalAmount, walletAddress);
    // window.location.href = "/dashboard/withdrawal-verify";
    if (paymentMethod === "Bitcoin") {
      window.location.href = "/dashboard/withdrawal-verify";
    } else {
      toast("Only Bitcoin is currently supported");
      window.location.href = "/dashboard/customer-support";
    }
  };
  return (
    <div className="col-lg-8 m-auto ">
      <div className="row">
        <div className="col-lg-12">
          {paymentMethod !== "Bitcoin" && (
            <div className="row justify-content-center h-100 align-items-center">
              <div className="col-md-5 mt-5">
                <div className="card bg-dark">
                  <div className="card-body">
                    <div className="auth-form">
                      <div className="text-center">
                        <a href="#">
                          <svg
                            width={50}
                            height={50}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            {" "}
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M2 11.9993C2 6.48027 6.48 1.99927 12 1.99927C17.53 1.99927 22 6.48027 22 11.9993C22 17.5203 17.53 21.9993 12 21.9993C6.48 21.9993 2 17.5203 2 11.9993ZM11.12 8.20927C11.12 7.73027 11.52 7.32927 12 7.32927C12.48 7.32927 12.87 7.73027 12.87 8.20927V12.6293C12.87 13.1103 12.48 13.4993 12 13.4993C11.52 13.4993 11.12 13.1103 11.12 12.6293V8.20927ZM12.01 16.6803C11.52 16.6803 11.13 16.2803 11.13 15.8003C11.13 15.3203 11.52 14.9303 12 14.9303C12.49 14.9303 12.88 15.3203 12.88 15.8003C12.88 16.2803 12.49 16.6803 12.01 16.6803Z"
                              fill="currentColor"
                            ></path>{" "}
                          </svg>
                        </a>
                        <h2 className="mt-3">Payment Method Unavailable</h2>
                        <p className="mt-3">
                          The payment method you selected is currently not
                          supported. Please contact our customer support team
                          for assistance and alternative payment options. We're
                          here to help!
                        </p>
                        <div className="d-inline-block mt-3">
                          <a
                            href="/dashboard/customer-support"
                            className="btn btn-primary"
                          >
                            Contact support
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {paymentMethod === "Bitcoin" && (
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="card">
                  <div className="card-header">
                    <div className="d-flex justify-content-between">
                      <div className="d-flex align-items-center">
                        <div className="p-2 rounded bg-warning disabled">
                          <svg
                            width="32"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            {" "}
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M21.9964 8.37513H17.7618C15.7911 8.37859 14.1947 9.93514 14.1911 11.8566C14.1884 13.7823 15.7867 15.3458 17.7618 15.3484H22V15.6543C22 19.0136 19.9636 21 16.5173 21H7.48356C4.03644 21 2 19.0136 2 15.6543V8.33786C2 4.97862 4.03644 3 7.48356 3H16.5138C19.96 3 21.9964 4.97862 21.9964 8.33786V8.37513ZM6.73956 8.36733H12.3796H12.3831H12.3902C12.8124 8.36559 13.1538 8.03019 13.152 7.61765C13.1502 7.20598 12.8053 6.87318 12.3831 6.87491H6.73956C6.32 6.87664 5.97956 7.20858 5.97778 7.61852C5.976 8.03019 6.31733 8.36559 6.73956 8.36733Z"
                              fill="currentColor"
                            ></path>{" "}
                            <path
                              opacity="0.4"
                              d="M16.0374 12.2966C16.2465 13.2478 17.0805 13.917 18.0326 13.8996H21.2825C21.6787 13.8996 22 13.5715 22 13.166V10.6344C21.9991 10.2297 21.6787 9.90077 21.2825 9.8999H17.9561C16.8731 9.90338 15.9983 10.8024 16 11.9102C16 12.0398 16.0128 12.1695 16.0374 12.2966Z"
                              fill="currentColor"
                            ></path>{" "}
                            <circle
                              cx="18"
                              cy="11.8999"
                              r="1"
                              fill="currentColor"
                            ></circle>{" "}
                          </svg>
                        </div>
                        <h4 className="px-3">Withdraw Fund</h4>
                      </div>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="d-grid gap-card">
                      <div className="form-group mb-2">
                        <label class="form-label">Amount</label>
                        <div className="input-group">
                          <input
                            type="text"
                            className="form-control form-control-white-border"
                            placeholder={"Enter"}
                            value={amount}
                            onChange={handleAmountChange}
                            onBlur={handleBlur}
                            // aria-label="enter amount"
                            // aria-describedby="basic-addon3"
                          />
                          <span
                            className="input-group-text form-control-white-border"
                            id="basic-addon3"
                          >
                            {paymentMethod}
                          </span>
                        </div>
                      </div>
                      <div className="form-group mb-2">
                        <label class="form-label">Withdrawal Method</label>
                        <select
                          onChange={handleChange}
                          className="form-select mb-3 shadow-none form-control-white-border"
                        >
                          <option value="Bitcoin">Bitcoin</option>
                          <option value="GRD">GRD</option>
                          <option value="USD">USD</option>
                          <option value="Euro">Euro</option>
                        </select>
                      </div>

                      <div className="form-group mb-2">
                        <label class="form-label">Wallet Address</label>
                        <div className="input-group">
                          <input
                            type="text"
                            className="form-control mb-3 shadow-none form-control-white-border"
                            placeholder={"input your wallet address"}
                            value={walletAddress}
                            onChange={(e) => setWalletAddress(e.target.value)}
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon4"
                          />
                          {/* <span className="input-group-text " id="basic-addon45">
                          USD
                        </span> */}
                        </div>
                      </div>
                      {/* <div className="form-group mb-3">
                      <label class="form-label">Withdrawal Fee (10%)</label>
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder={0}
                          value={50}
                          aria-label="Recipient's username"
                          aria-describedby="basic-addon4"
                        />
                        <span className="input-group-text" id="basic-addon45">
                          USD
                        </span>
                      </div>
                    </div> */}
                      {/* <div className="form-group mb-3">
                      <label class="form-label">Total to receive</label>
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder={0}
                          value={500}
                          aria-label="Recipient's username"
                          aria-describedby="basic-addon4"
                        />
                        <span className="input-group-text" id="basic-addon45">
                          USD
                        </span>
                      </div>
                    </div> */}
                      <div className="d-grid gap-card grid-cols-2">
                        <button
                          className="btn btn-success"
                          type="button"
                          // data-bs-toggle="modal"
                          // data-bs-target="#exampleModalCenter"
                          onClick={handleValidateAmount}
                        >
                          <span>Withdraw</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WithdrawalForm;
