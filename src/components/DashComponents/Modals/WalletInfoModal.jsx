"use client";
import { useState } from "react";
import { toast } from "react-toastify";
import { CirclesWithBar, LineWave, RotatingLines } from "react-loader-spinner";

const WalletInfoModal = ({
  show,
  handleHide,
  walletInfo,
  handleConfirm,
  confirming,
}) => {
  const [copySuccess, setCopySuccess] = useState("");

  console.log(walletInfo, "wallet info");

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(
      () => {
        toast("copied to clipboard!");
      },
      (err) => {
        toast("Failed to copy text.");
      }
    );
  };
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
              Scan to pay
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
            <div className="card">
              <img src={walletInfo?.qrCode} className="card-img-top" alt="#" />
              <div className="card-body">
                <h4 className="card-title">Wallet Address</h4>
                <div className="row">
                  <span className="card-text md-col-9">
                    {walletInfo?.walletAddress}
                  </span>
                  <span
                    className="btn btn-secondary md-col-3"
                    onClick={() =>
                      copyToClipboard(`${walletInfo?.walletAddress}`)
                    }
                  >
                    copy
                  </span>
                </div>
              </div>
              <div className="d-grid gap-card grid-cols-2 mt-10">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                  onClick={handleHide}
                >
                  Close
                </button>
                <button
                  onClick={handleConfirm}
                  className="btn btn-success"
                  type="button"
                >
                  {confirming ? (
                    <RotatingLines
                      visible={true}
                      height="26"
                      width="26"
                      color="grey"
                      strokeWidth="5"
                      animationDuration="0.75"
                      ariaLabel="rotating-lines-loading"
                      wrapperStyle={{}}
                      wrapperClass=""
                    />
                  ) : (
                    <span>Confirm Payment</span>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WalletInfoModal;
