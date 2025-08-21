"use client";
import IndexContents from "@/components/DashComponents/IndexContents/IndexContents";
import AdminCreateUserModal from "@/components/DashComponents/Modals/AdminCreateUserModal";
import React, { useState } from "react";

const Overview = () => {
  const [showCreateUser, setShowCreateUser] = useState("none");
  return (
    <div>
      <div className="">
        <div>
          <h1>Dashboard</h1>
          <p>Manage Dashboards</p>
        </div>
        <div>
          <button
            onClick={() => setShowCreateUser("block")}
            className="btn btn-primary">
            Create a User
          </button>
        </div>
      </div>
      <IndexContents />
      <AdminCreateUserModal
        show={showCreateUser}
        handleHide={() => setShowCreateUser("none")}
        onCreated={() => {
          /* reload users */
        }}
      />
    </div>
  );
};

export default Overview;
