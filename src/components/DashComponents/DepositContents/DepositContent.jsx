import React from "react";
import DepositForm from "./DepositForm";
import Depositors from "./Depositors";

const DepositContent = () => {
  return (
    <div className="row pt-2">
      <DepositForm />
      {/* <Depositors /> */}
    </div>
  );
};

export default DepositContent;
