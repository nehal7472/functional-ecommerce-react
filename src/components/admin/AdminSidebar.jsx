import React from "react";
import { NavLink } from "react-router-dom";
import ThemeToggle from "../Theme/ThemeToggle";

const AdminSidebar = ({ navItems }) => {
  return (
    <aside className="bg-base-200 p-4 shadow-md">
      <h2 className="text-xl font-bold mb-6">Admin Panel</h2>
      <nav className="space-y-2 flex flex-col">
        {navItems.map(({ to, label, icon }) => (
          <NavLink
            key={to}
            to={to}
            end
            className={({ isActive }) =>
              `flex items-center gap-2 p-2 rounded-lg font-medium ${
                isActive
                  ? "bg-primary text-white"
                  : "hover:bg-primary/10 text-base-content"
              }`
            }
          >
            {icon}
            {label}
          </NavLink>
        ))}
        <ThemeToggle />
      </nav>
    </aside>
  );
};

export default AdminSidebar;
