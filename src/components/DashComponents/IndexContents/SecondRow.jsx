import React from "react";
import SecondRowRightContents from "./SecondRowRightContents";
import SecondRowLeftContent from "./SecondRowLeftContent";

const SecondRow = ({ balance, invested, profit, deposits, pendingBalance }) => {
  return (
    <div className="row pt-2">
      <SecondRowLeftContent
        balance={balance}
        invested={invested}
        profit={profit}
        deposits={deposits}
        pendingBalance={pendingBalance}
      />
      <SecondRowRightContents />
    </div>
  );
};

export default SecondRow;
