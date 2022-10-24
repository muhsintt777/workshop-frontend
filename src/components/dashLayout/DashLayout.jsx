import React from "react";
import "./DashLayout.css";
import { Outlet } from "react-router-dom";
import DashHeader from "./dashHeader/DashHeader";
import DashFooter from "./dashFooter/DashFooter";

const DashLayout = () => {
  return (
    <>
      <DashHeader />
      <div className="dash-container">
        <Outlet />
      </div>
      <DashFooter />
    </>
  );
};

export default DashLayout;
