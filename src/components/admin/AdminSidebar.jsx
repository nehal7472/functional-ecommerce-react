import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ThemeToggle from "../Theme/ThemeToggle";

const AdminSidebar = ({ navItems }) => {
  const mode = useSelector((state) => state.theme.mode);

  return (
    <aside
      className={`p-4 shadow-md min-h-screen transition-colors duration-300 ${
        mode === "dark" ? "bg-gray-800 text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      <h2 className="text-xl font-bold mb-6">Admin Panel</h2>
      <nav className="space-y-2 flex flex-col">
        {navItems.map(({ to, label, icon }) => (
          <NavLink
            key={to}
            to={to}
            end
            className={({ isActive }) =>
              `flex items-center gap-2 p-2 rounded-lg font-medium transition-colors duration-200 ${
                isActive
                  ? "bg-pink-600 text-white"
                  : mode === "dark"
                  ? "hover:bg-gray-700 text-gray-300"
                  : "hover:bg-pink-100 text-gray-800"
              }`
            }
          >
            {icon}
            {label}
          </NavLink>
        ))}
        <div className="mt-6">
          <ThemeToggle />
        </div>
      </nav>
    </aside>
  );
};

export default AdminSidebar;
