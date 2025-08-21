import DepositDetails from "@/components/DashComponents/DepositContents/DepositDetails";
import UserInfo from "@/components/DashComponents/UserContents/UserInfo";
import React from "react";

const page = ({ params }) => {
  const { id } = params;
  return (
    <div>
      <UserInfo id={id} />
    </div>
  );
};

export default page;
