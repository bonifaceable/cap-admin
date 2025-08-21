import React from "react";

const SecondRowRightContents = () => {
  return (
    <div className="col-lg-4">
      <div className="row">
        <div className="col-lg-12">
          <div className="d-grid grid-3-auto gap-card">
            <div className="dropdown">
              <a
                className="btn btn-primary w-100"
                href="/dashboard/investment-plans"
              >
                Invest Now
              </a>
            </div>
            <div className="dropdown">
              <a
                className="btn btn-primary w-100"
                href="/dashboard/deposit"
              >
                + Add Crypto
              </a>
            </div>
          </div>
          <div className="card">
            <div className="card-body d-flex align-items-center justify-content-center">
              <img
                src="assets/images/coins/14.png"
                className="img-fluid p-0 img-right-banner-top"
                alt="img60"
              />
            </div>
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default SecondRowRightContents;
