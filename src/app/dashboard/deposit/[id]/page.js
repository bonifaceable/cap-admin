import DepositDetails from "@/components/DashComponents/DepositContents/DepositDetails";
import React from "react";

const page = ({ params }) => {
  const { id } = params;
  return (
    <div>
      <DepositDetails id={id} />
    </div>
  );
};

export default page;
