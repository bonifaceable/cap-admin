"use client";
import React, { useEffect, useState } from "react";
import { formatAmount, parseFormattedAmount } from "@/hooks/helpers";
import { useDispatch, useSelector } from "react-redux";
import { PaymentMethods } from "@/datas/PaymentMethods";
import {
  CreateTransaction,
  PurchasePlan,
} from "@/redux/features/transactions/transaction_services_syn";
import WalletInfoModal from "../Modals/WalletInfoModal";
import { toast } from "react-toastify";
import {
  getProfile,
  getWallet,
  getPlans,
} from "@/redux/features/profile/profile_service_syn";
import { CirclesWithBar, LineWave, RotatingLines } from "react-loader-spinner";

const PurchasePlanComp = ({ plan }) => {
  const [walletAddress, setWalletAddress] = useState(
    "bc1qea32qkhj79j9ya05vtla7zefw4482t7525a37g"
  );

  console.log(plan, "plan");
  const [walletInfo, setWalletInfo] = useState(PaymentMethods?.Bitcoin);
  const [showQrCode, setShowQrCode] = useState("");
  const dispatch = useDispatch();
  const [paymentMethod, setPaymentMethod] = useState("Bitcoin");
  const [amount, setAmount] = useState(1000);
  const [planOptions, setPlanOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState({});
  const [selectedAmount, setSelectedAmount] = useState(selectedOption?.amount);
  const { plans, gettingPlans, getPlansSuccess, getPlansError, wallet } =
    useSelector((state) => state.profile);

  const {
    create_transaction_success,
    create_transaction_failure,
    create_transaction_message,
    purchasing_plan,
    purchase_plan_success,
    purchase_plan_failure,
  } = useSelector((state) => state.transaction);

  const handleBlur = () => {
    const numericValue = parseFloat(amount.replace(/,/g, ""));
    if (!isNaN(numericValue)) {
      const formattedValue = formatAmount(numericValue);
      setAmount(formattedValue);
      //   handleAmountChange(numericValue > 1000000 ? 1000000 : numericValue);
    }
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setPaymentMethod(value);
  };

  useEffect(() => {
    dispatch(getPlans());
  }, []);

  useEffect(() => {
    setPlanOptions(plans);
  }, [plans]);

  useEffect(() => {
    setSelectedOption(plan);
  }, [plan]);
  const handleSelectedPlan = (e) => {
    const value = JSON.parse(e.target.value);
    setSelectedOption(value);
    console.log(selectedOption, "value");
    // setSelectedAmount(selectedOption?.amount)
  };

  const handleRangeChange = (event) => {
    setSelectedAmount(event.target.value);
  };

  console.log(wallet, "wallet");

  useEffect(() => {
    setSelectedAmount(selectedOption?.amount);
  }, [selectedOption]);

  //   const normalAmount = parseFormattedAmount(amount);

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
      paymentMethod: paymentMethod,
      requiredId: selectedOption.plan,
      amount: amount,
      walletAddress: walletAddress,
    };

    dispatch(PurchasePlan(data));
  };

  const handleValidateAmount = () => {
    if (paymentMethod === "wallet" && wallet?.balance >= selectedAmount) {
      const data = {
        paymentMethod: paymentMethod,
        requiredId: selectedOption.plan,
        amount: amount,
        walletAddress: walletAddress,
      };

      dispatch(PurchasePlan(data));
      toast("accurate");
    }
    if (paymentMethod !== "wallet" && amount >= 1000) {
      setShowQrCode("block");
    }
    if (amount < 1000) {
      toast("Amount must be $1000 or above");
    }
  };

  console.log(selectedOption, "selected option");

  return (
    <>
      <div className="col-lg-8">
        <div className="row justify-content-center">
          <div className="col-lg-8 card">
            <div className="card-header">
              <h5 className="modal-title" id="exampleModalCenterTitle">
                Purchase Plan
              </h5>
            </div>
            <div className="card-body">
              <form className="d-grid gap-card">
                <div className="form-group mb-2">
                  <label class="form-label">Select Plan</label>
                  <select
                    onChange={handleSelectedPlan}
                    class="form-select mb-3 shadow-none form-control-white-border"
                  >
                    <option value="Bitcoin">Pick a plan</option>
                    {planOptions?.map((plan, index) => (
                      <option
                        key={index}
                        value={JSON.stringify(plan)}
                      >{`${plan?.plan} (${plan?.amount} - ${plan?.max > 50000 ? "Unlimited" : plan?.max})`}</option>
                    ))}
                  </select>
                  <>
                    <label class="form-label">Payment Method</label>
                    <select
                      onChange={handleChange}
                      class="form-select mb-3 shadow-none form-control-white-border"
                    >
                      <option value="Bitcoin">Bitcoin</option>
                      <option value="USDT">USDT</option>
                      <option value="ETH">Ethereum </option>
                      <option value="BNB">BNB</option>
                      {wallet?.balance >= selectedAmount && (
                        <option value="wallet">Wallet Balance</option>
                      )}
                    </select>
                  </>
                  <label class="form-label">Amount</label>
                  <div className="input-group">
                    <input
                      type="range"
                      // value={selectedOption?.amount}
                      min={selectedOption?.amount}
                      max={selectedOption?.max}
                      // className="form-control form-control-white-border"
                      value={selectedAmount}
                      onChange={handleRangeChange}
                      onBlur={handleBlur}
                      style={{ width: "100%" }}
                      placeholder={"Enter"}
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon3"
                    />
                  </div>
                  <div className="input-group">
                    <input
                      type="text"
                      value={selectedAmount}
                      className="form-control form-control-white-border"
                      placeholder={"Enter"}
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon3"
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
                      className="form-control form-control-white-border"
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
                    onClick={handleValidateAmount}
                    className="btn btn-success"
                    type="button"
                  >
                    {purchasing_plan ? (
                      <RotatingLines
                        visible={true}
                        height="20"
                        width="20"
                        color="grey"
                        strokeWidth="5"
                        animationDuration="0.75"
                        ariaLabel="rotating-lines-loading"
                        wrapperStyle={{}}
                        wrapperClass=""
                      />
                    ) : (
                      <span>Purchase Plan</span>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <WalletInfoModal
        handleConfirm={handleDepositFund}
        confirming={purchasing_plan}
        handleHide={() => setShowQrCode("none")}
        walletInfo={walletInfo}
        show={showQrCode}
      />
    </>
  );
};

export default PurchasePlanComp;
