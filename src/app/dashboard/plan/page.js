"use client";
import PlansDisplay from "@/components/DashComponents/InvestmentComponents/PlansDisplay";
import AdminPlanModal from "@/components/DashComponents/Modals/AdminPlanModal";
import React, { useState } from "react";

const Plan = () => {
  const [showCreate, setShowCreate] = useState("none");
  return (
    <div>
      <div className="">
        <div>
          <h1>Plans</h1>
          <p>This is the About Us Plan.</p>
        </div>
        <div>
          <button
            onClick={() => setShowCreate("block")}
            className="btn btn-primary">
            Create Plan
          </button>
        </div>
      </div>

      <div class="container-fluid content-inner pb-0">
        <PlansDisplay />
      </div>
      <AdminPlanModal
        show={showCreate}
        handleHide={() => setShowCreate("none")}
        mode="create"
      />
    </div>
  );
};

export default Plan;
