import InvestmentsTable from "@/components/DashComponents/InvestmentComponents/InvestmentsTable";
import KeepAnEye from "@/components/DashComponents/InvestmentComponents/KeepAnEye";
import React from "react";

const Investments = () => {
  return (
    <div>
      <KeepAnEye />
      <InvestmentsTable />
    </div>
  );
};

export default Investments;
