"use client";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useDispatch, useSelector } from "react-redux";
import {
  getProfile,
  getWallet,
  getPlans,
} from "@/redux/features/profile/profile_service_syn";
import AdminPlanModal from "../Modals/AdminPlanModal";

const PlansDisplay = () => {
  const dispatch = useDispatch();
  const [showEdit, setShowEdit] = useState("none");
  const [selectedPlan, setSelectedPlan] = useState(null);
  const { plans, gettingPlans, getPlansSuccess, getPlansError, wallet } =
    useSelector((state) => state.profile);

  useEffect(() => {
    dispatch(getPlans());
  }, []);
  console.log(plans, "plans");
  return (
    <>
      <div className="row">
        {plans?.map((plan, key) => (
          <div className="col-lg-4 col-sm-6 col-md-6 text-center">
            <div className="card" key={key}>
              <div>
                <img
                  src="/main-assets/images/icons/BitcoinIcon4.png"
                  alt="Bitcoin Icon"
                  className="card-img mx-auto"
                  style={{ width: "50px" }}
                />
              </div>
              <div className="card-body d-grid gap-2">
                <h6
                  className="card-title"
                  style={{ textTransform: "uppercase" }}>
                  {plan?.plan} Crypto Plan
                </h6>
                <h2 className="card-title">{plan?.percent}%</h2>
                <p>Short term 6 months/Long term 1 year.</p>
                <p className="card-text">
                  {" "}
                  Enjoy your investment with Bitcoin and Ethereum growing every
                  day.
                </p>
                <h6 className="card-title">
                  From $ {plan?.amount} to ${" "}
                  {plan?.max > 50000 ? "Unlimited" : plan?.max}
                </h6>
                {/* <a href={`/dashboard/investment-plans/${plan?.plan}`} className="btn btn-primary">Invest now</a> */}
                <div className="d-grid gap-card grid-cols-2">
                  <button
                    type="button"
                    className="btn btn-danger"
                    data-bs-dismiss="modal"
                    //   onClick={handleHide}
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => {
                      setSelectedPlan(plan);
                      setShowEdit("block");
                    }}
                    className="btn btn-primary"
                    type="submit">
                    <span>Edit</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <AdminPlanModal
        show={showEdit}
        handleHide={() => setShowEdit("none")}
        mode="edit"
        initialData={selectedPlan}
      />
    </>
  );
};

export default PlansDisplay;
