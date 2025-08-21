"use client";
import React, { useState } from "react";

const DespositModal = () => {
  const [paymentMethod, setPaymentMethod] = useState("Bitcoin");

  const handleChange = (e) => {
    const value = e.target.value;
    setPaymentMethod(value);
  };
  return (
    <div
      className="modal fade"
      id="exampleModalCenter"
      tabIndex={-1}
      role="dialog"
      aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalCenterTitle">
              Deposit Funds
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <form className="d-grid gap-card">
              <div className="form-group mb-2">
                <label class="form-label">Payment Method</label>
                <select
                  onChange={handleChange}
                  class="form-select mb-3 shadow-none"
                >
                  <option value="Bitcoin">Bitcoin</option>
                  <option value="GRD">GRD</option>
                  <option value="USD">USD</option>
                  <option value="Euro">Euro</option>
                </select>
                <div></div>
                <label class="form-label">Amount</label>
                <div className="input-group">
                  <input
                    type="text"
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
                >
                  Close
                </button>
                <button className="btn btn-success" type="button">
                  <span>Deposit</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DespositModal;
