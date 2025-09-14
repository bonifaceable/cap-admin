"use client";
import AdminPaymentWalletsDisplay from "@/components/DashComponents/AdminWalletsDisplay";
import React from "react";
// import AdminPaymentWalletsDisplay from "@/components/AdminPaymentWalletsDisplay";

const PaymentWalletsPage = () => {
  return (
    <div className="container-fluid content-inner pb-0">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div>
          <h1 className="h3 mb-1">Payment Wallet Addresses</h1>
          <p className="text-muted mb-0">
            Create, edit, and manage the wallets users will pay into.
          </p>
        </div>
      </div>

      <AdminPaymentWalletsDisplay />
    </div>
  );
};

export default PaymentWalletsPage;
