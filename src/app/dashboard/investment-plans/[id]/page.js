"use client";
import React, { useEffect, useState } from "react";
import Depositors from "@/components/DashComponents/DepositContents/Depositors";
import PurchasePlanComp from "@/components/DashComponents/InvestmentComponents/PurchasePlanComp";
import { useDispatch, useSelector } from "react-redux";
import { getPlans } from "@/redux/features/profile/profile_service_syn";
const page = ({ params }) => {
  const { id } = params;
  const [selectedPlan, setSelectedPlan] = useState(null);
  const dispatch = useDispatch();
  const { plans, gettingPlans, getPlansSuccess, getPlansError, wallet } =
    useSelector((state) => state.profile);

  useEffect(() => {
    dispatch(getPlans());
  }, []);

  useEffect(() => {
    if (id) {
      const selected = plans.find((item) => item.plan === id);
      if (selected) {
        setSelectedPlan(selected);
      }
    }
  }, [id, plans]);
  return (
    <div className="row pt-2">
      <PurchasePlanComp plan={selectedPlan} />
      {/* <Depositors title="Top  Earners" /> */}
    </div>
  );
};

export default page;
