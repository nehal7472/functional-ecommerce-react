import React from "react";
import { Outlet } from "react-router-dom";
import FrontendHeader from "../components/frontend/FrontendHeader";
import Footer from "../components/frontend/Footer";

const FrontendLayout = () => {
  return (
    <div>
      <FrontendHeader /> 
      <main className="min-h-[calc(100vh-160px)]">
        <Outlet />
      </main>
      <Footer/>
    </div>
  );
};

export default FrontendLayout;
