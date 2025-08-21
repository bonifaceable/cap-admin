"use client";
import React, { useEffect, useState } from "react";
import { formatAmount, parseFormattedAmount } from "@/hooks/helpers";
import { useDispatch, useSelector } from "react-redux";
import { PaymentMethods } from "@/datas/PaymentMethods";
import { CreateTransaction } from "@/redux/features/transactions/transaction_services_syn";
import WalletInfoModal from "../Modals/WalletInfoModal";
import { toast } from "react-toastify";

const DepositForm = () => {
  const [paymentMethod, setPaymentMethod] = useState("Bitcoin");
  const [amount, setAmount] = useState("");
  const [walletAddress, setWalletAddress] = useState(
    "bc1qea32qkhj79j9ya05vtla7zefw4482t7525a37g"
  );
  const [walletInfo, setWalletInfo] = useState(PaymentMethods?.Bitcoin);
  const [showQrCode, setShowQrCode] = useState("");
  const dispatch = useDispatch();

  const {
    creating_transaction,
    create_transaction_success,
    create_transaction_failure,
    create_transaction_message,
  } = useSelector((state) => state.transaction);

  const handleAmountChange = (e) => {
    const value = e.target.value;
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

  useEffect(() => {
    if (paymentMethod === "Bitcoin") {
      setWalletAddress(PaymentMethods.Bitcoin.walletAddress);
      setWalletInfo(PaymentMethods.Bitcoin);
    }
    if (paymentMethod === "ETH") {
      setWalletAddress(PaymentMethods.Etherum.walletAddress);
      setWalletInfo(PaymentMethods.Etherum);
    }
    if (paymentMethod === "USDT") {
      setWalletAddress(PaymentMethods.Usdt.walletAddress);
      setWalletInfo(PaymentMethods.Usdt);
    }
    if (paymentMethod === "BNB") {
      setWalletAddress(PaymentMethods.Bnb.walletAddress);
      setWalletInfo(PaymentMethods?.Bnb);
    }
  }, [paymentMethod]);

  const handleDepositFund = (e) => {
    e.preventDefault();
    const data = {
      transactionType: "fund-deposit",
      amount: normalAmount,
      walletAddress: walletAddress,
      paymentMethod: paymentMethod,
    };

    dispatch(CreateTransaction(data));
  };

  const handleValidateAmount = () => {
    if (normalAmount >= 1000) {
      setShowQrCode("block");
    } else {
      toast("Amount must be $1000 or above");
    }
  };

  useEffect(() => {
    if (create_transaction_success) {
      setShowQrCode(true);
    }
    if (create_transaction_failure) {
      setShowQrCode(false);
    }
  }, [create_transaction_success, create_transaction_failure]);

  console.log(PaymentMethods, "payment method");
  return (
    <>
      <div className="col-lg-8">
        <div className="row">
          <div className="col-lg-12">
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
                              d="M7.33 2H16.66C20.06 2 22 3.92 22 7.33V16.67C22 20.06 20.07 22 16.67 22H7.33C3.92 22 2 20.06 2 16.67V7.33C2 3.92 3.92 2 7.33 2ZM12.82 12.83H15.66C16.12 12.82 16.49 12.45 16.49 11.99C16.49 11.53 16.12 11.16 15.66 11.16H12.82V8.34C12.82 7.88 12.45 7.51 11.99 7.51C11.53 7.51 11.16 7.88 11.16 8.34V11.16H8.33C8.11 11.16 7.9 11.25 7.74 11.4C7.59 11.56 7.5 11.769 7.5 11.99C7.5 12.45 7.87 12.82 8.33 12.83H11.16V15.66C11.16 16.12 11.53 16.49 11.99 16.49C12.45 16.49 12.82 16.12 12.82 15.66V12.83Z"
                              fill="#fff"
                            ></path>{" "}
                          </svg>
                        </div>
                        <h4 className="px-3">Add Fund</h4>
                      </div>
                    </div>
                  </div>
                  <div className="card-body">
                    <form className="d-grid gap-card">
                      <div className="form-group mb-2">
                        <label class="form-label">Payment Method</label>
                        <select
                          onChange={handleChange}
                          class="form-select mb-3 shadow-none form-control-white-border"
                        >
                          <option value="Bitcoin">Bitcoin</option>
                          <option value="USDT">USDT</option>
                          <option value="ETH">Ethereum </option>
                          <option value="BNB">BNB</option>
                        </select>
                      </div>
                      <div className="form-group mb-2">
                        <label class="form-label">Amount</label>
                        <div className="input-group">
                          <input
                            type="text"
                            className="form-control form-control-white-border"
                            placeholder={"Enter"}
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon3"
                            onChange={handleAmountChange}
                            onBlur={handleBlur}
                            value={amount}
                          />
                          <span
                            className="input-group-text form-control-white-border"
                            id="basic-addon3"
                          >
                            {paymentMethod}
                          </span>
                        </div>
                      </div>

                      {/* <div className="form-group mb-3">
                        <label class="form-label">Deposit Fee</label>
                        <div className="input-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder={0}
                            value={0}
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon4"
                          />
                          <span
                            className="input-group-text form-control-white-border"
                            id="basic-addon45"
                          >
                            USD
                          </span>
                        </div>
                      </div> */}

                      <div className="d-grid gap-card grid-cols-2">
                        <button
                          className="btn btn-success"
                          type="button"
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModalCenter"
                          onClick={handleValidateAmount}
                        >
                          <span>Deposit</span>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <WalletInfoModal
        handleConfirm={handleDepositFund}
        confirming={creating_transaction}
        handleHide={() => setShowQrCode("none")}
        walletInfo={walletInfo}
        show={showQrCode}
      />
    </>
  );
};

export default DepositForm;
