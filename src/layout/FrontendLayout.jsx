import React from "react";
import { Outlet } from "react-router-dom";
import FrontendHeader from "../components/frontend/FrontendHeader";

const FrontendLayout = () => {
  return (
    <div>
      <FrontendHeader /> 
      <main className="min-h-[calc(100vh-160px)] p-4">
        <Outlet />
      </main>
      <footer className="bg-neutral text-neutral-content p-4 text-center">
        © 2025 ShopEase. All rights reserved.
      </footer>
    </div>
  );
};

export default FrontendLayout;
