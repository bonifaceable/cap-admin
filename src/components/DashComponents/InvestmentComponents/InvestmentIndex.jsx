"use client";
import React from "react";
import PricePlan from "./Pricing";
import PricePlanTwo from "./PricePlanTwo";
import PurchasePlanModal from "../Modals/PurchasePlanModal";
import PlansComponent from "@/components/PlansComponent";
import { useState } from "react";
import Depositors from "../DepositContents/Depositors";
import PlansDisplay from "./PlansDisplay";
// import PlansComponent from "./PlansComponent";

const InvestmentIndex = () => {
  const [show, setShow] = useState("none");

  const handleShow = () => {
    setShow("block");
  };
  const handleHide = () => {
    setShow("none");
  };
  return (
    <>
      <div class="container-fluid content-inner pb-0">
        <PlansDisplay />
      </div>
      {/* <PlansComponent purchase={handleShow} /> */}
      {/* <Depositors title="Top  Earners" /> */}
      {/* <PurchasePlanModal handleHide={handleHide} show={show} /> */}
    </>
  );
};

export default InvestmentIndex;
