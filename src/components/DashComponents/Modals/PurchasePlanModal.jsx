"use client";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getProfile,
  getWallet, getPlans
} from "@/redux/features/profile/profile_service_syn";

const PurchasePlanModal = ({ show, handleHide }) => {
  const dispatch = useDispatch();
  const [paymentMethod, setPaymentMethod] = useState("Bitcoin");
  const [amount, setAmount] = useState(1000);
  const [planOptions, setPlanOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState({});
  const [selectedAmount, setSelectedAmount] = useState(selectedOption?.amount);
  const { plans,
    gettingPlans,
    getPlansSuccess,
    getPlansError, wallet } = useSelector((state) => state.profile);

  const handleChange = (e) => {
    const value = e.target.value;
    setPaymentMethod(value);
  };

  useEffect(() => {
    dispatch(getPlans());
  }, [])

  useEffect(() => {
    setPlanOptions(plans)
  }, [plans])
  const handleSelectedPlan = (e) => {
    const value = JSON.parse(e.target.value);
    setSelectedOption(value);
    console.log(selectedOption, "value");
    // setSelectedAmount(selectedOption?.amount)
  }

  const handleRangeChange = (event) => {
    setSelectedAmount(event.target.value);
  };

  console.log(wallet, "wallet")

  useEffect(() => {
    setSelectedAmount(selectedOption?.amount)
  }, [selectedOption])

  return (
    <div
      className={show === "block" ? "modal fade show" : "modal fade"}
      id="investmentModal"
      tabIndex={-1}
      role="dialog"
      aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true"
      style={{ display: show }}
    >
      <div className="modal-dialog modal-dialog-centered show" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalCenterTitle">
              Purchase Plan
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={handleHide}
            ></button>
          </div>
          <div className="modal-body">
            <form className="d-grid gap-card">
              <div className="form-group mb-2">
                <label class="form-label">Select Plan</label>
                <select
                  onChange={handleSelectedPlan}
                  class="form-select mb-3 shadow-none"
                >
                  <option value="Bitcoin">Pick a plan</option>
                  {planOptions?.map((plan, index) => (<option key={index} value={JSON.stringify(plan)}>{`${plan.plan} (${plan.amount} - ${plan.max})`}</option>))}
                </select>
                <>
                  <label class="form-label">Payment Method</label>
                  <select
                    onChange={handleChange}
                    class="form-select mb-3 shadow-none"
                  >
                    <option value="Bitcoin">Bitcoin</option>
                    <option value="USDT">USDT</option>s
                    <option value="Eth">Etheruem </option>
                    <option value="Bnb">Bnb</option>
                    {wallet?.balance >= selectedAmount && <option value="wallet">Wallet Balance</option>}

                  </select>
                </>
                <label class="form-label">Amount</label>
                <div className="input-group">
                  <input
                    type="range"
                    // value={selectedOption?.amount}
                    min={selectedOption?.amount}
                    max={selectedOption.max}
                    // className="form-control"
                    value={selectedAmount}
                    onChange={handleRangeChange}
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
                    className="form-control"
                    placeholder={"Enter"}
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon3"
                  />
                  <span className="input-group-text" id="basic-addon3">
                    {paymentMethod}
                  </span>
                </div>
              </div>


              <div className="form-group mb-3">
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
                  <span className="input-group-text" id="basic-addon45">
                    USD
                  </span>
                </div>
              </div>

              <div className="d-grid gap-card grid-cols-2">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                  onClick={handleHide}
                >
                  Close
                </button>
                <button className="btn btn-success" type="button">
                  <span>Purchase Plan</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PurchasePlanModal;
