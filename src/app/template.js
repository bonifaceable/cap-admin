import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-loading-skeleton/dist/skeleton.css";
import SmartsuppChat from "@/components/SmartsuppChat";

const template = ({ children }) => {
  return (
    <div>
      {children}
      <ToastContainer />
      {/* <SmartsuppChat /> */}
    </div>
  );
};

export default template;
