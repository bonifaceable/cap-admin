"use client";
import React, { useEffect, useState } from "react";
import { formatAmount, formatDate } from "@/hooks/helpers";
import { useDispatch, useSelector } from "react-redux";
// import { PaymentMethods } from "@/transactionDetailss/PaymentMethods";
import {
  CreateTransaction,
  GetSingleTransactionDetails,
} from "@/redux/features/transactions/transaction_services_syn";
import Link from "next/link";   //import this

const DepositDetails = ({ id }) => {
  const dispatch = useDispatch();

  console.log(id, "details id");
  const {
    creating_transaction,
    create_transaction_success,
    create_transaction_failure,
    create_transaction_message,
    transactionDetails,
  } = useSelector((state) => state.transaction);
  // const transactionDetails = {
  //   _id: "66a0fb0837978ff5df9a9fe7",
  //   user_id: "66a0cd9d5d67939c623976db",
  //   user_email: "zealousemmy12@gmail.com",
  //   user_name: "Emmy",
  //   transactionType: "fund-deposit",
  //   amount: 3000,
  //   walletAddress: "zjskkjds90484834klsdl",
  //   status: "received",
  //   date: "2024-07-24T13:00:56.134Z",
  //   createdAt: "2024-07-24T13:00:56.138Z",
  //   updatedAt: "2024-07-24T15:03:33.218Z",
  //   __v: 0,
  // };

  useEffect(() => {
    dispatch(GetSingleTransactionDetails(id));
  }, [id]);

  console.log(transactionDetails, "transaction details");
  return (
    <div className="container-fluid content-inner pb-0">
      <div className="col-sm-12 col-lg-6 mx-auto">
        <div className="card">
          <div className="card-header d-flex justify-content-between">
            <div className="header-title">
              <h4 className="card-title">Deposit Details</h4>
            </div>
          </div>
          <div className="card-body">
            <p>
              Transaction processed with status:{" "}
              <span
                className={
                  transactionDetails?.status === "received"
                    ? "text-success"
                    : "text-danger"
                }
              >
                {transactionDetails?.status}
              </span>
              . Please check your account for updates and contact support if
              there are any discrepancies or further assistance needed.
            </p>
            <form className="form-horizontal">
              <div className="form-group row">
                <label
                  className="control-label col-sm-4 align-self-center mb-0"
                  htmlFor="email1"
                >
                  Amount:
                </label>
                <div className="col-sm-8">
                  <h5
                    className={
                      transactionDetails?.status === "received"
                        ? "text-success"
                        : "text-danger"
                    }
                  >
                    $ {formatAmount(transactionDetails?.amount)}
                  </h5>
                </div>
              </div>
              <div className="form-group row">
                <label
                  className="control-label col-sm-4 align-self-center mb-0"
                  htmlFor="email1"
                >
                  Wallet Address:
                </label>
                <div className="col-sm-8">
                  <h5 className="text-warning">
                    {transactionDetails?.walletAddress}
                  </h5>
                </div>
              </div>
              <div className="form-group row">
                <label
                  className="control-label col-sm-4 align-self-center mb-0"
                  htmlFor="email1"
                >
                  Transaction Type:
                </label>
                <div className="col-sm-8">
                  <h5>{transactionDetails?.transactionType}</h5>
                </div>
              </div>
              <div className="form-group row">
                <label
                  className="control-label col-sm-4 align-self-center mb-0"
                  htmlFor="email1"
                >
                  Transaction Status:
                </label>
                <div className="col-sm-8">
                  <h5
                    className={
                      transactionDetails?.status === "received"
                        ? "text-success"
                        : "text-danger"
                    }
                  >
                    {transactionDetails?.status}
                  </h5>
                </div>
              </div>
              <div className="form-group row">
                <label
                  className="control-label col-sm-4 align-self-center mb-0"
                  htmlFor="email1"
                >
                  Date:
                </label>
                <div className="col-sm-8">
                  <h5>{formatDate(transactionDetails?.createdAt)}</h5>
                </div>
              </div>

              <div className="d-flex align-items-center gap-2 flex-wrap">
                <button
                  type="submit"
                  className="btn btn-primary rounded text-capitalize"
                >
                  Repeat Transaction
                </button>
                <Link
                  // type="submit"
                  href="/dashboard/customer-support"
                  className="btn btn-danger rounded text-capitalize"
                >
                  Report an issue
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DepositDetails;
