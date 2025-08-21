import Depositors from "@/components/DashComponents/DepositContents/Depositors";
import PurchasePlanComp from "@/components/DashComponents/InvestmentComponents/PurchasePlanComp";
import React from "react";

const page = () => {
  return (
    <div className="row pt-2">
      <PurchasePlanComp />
      <Depositors title="Top  Earners" />
    </div>
  );
};

export default page;
