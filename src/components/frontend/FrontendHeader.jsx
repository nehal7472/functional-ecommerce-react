import React from "react";
import { NavLink } from "react-router-dom";
import { ShoppingCart, Menu } from "lucide-react";
import ThemeToggle from "../Theme/ThemeToggle";
import { useSelector } from "react-redux";

const navItems = [
  { label: "Home", to: "/" },
  { label: "Shop Now", to: "/shop-now" },
  { label: "About", to: "/about" },
  { label: "Delivery Team", to: "/delivery-team" },
  { label: "Sellers", to: "/sellers" },
];

const FrontendHeader = () => {
  const totalItems = useSelector((state) =>
    state.cart.items.reduce((total, item) => total + item.quantity, 0)
  );

  const mode = useSelector((state) => state.theme.mode);

  return (
    <div
      className={`navbar shadow-md sticky top-0 z-50 px-4 lg:px-8 ${
        mode === "light" ? "bg-white text-black" : "bg-gray-900 text-white"
      }`}
    >
      <div className="navbar-start gap-2">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <Menu className="w-5 h-5" />
          </label>
          <ul
            tabIndex={0}
            className={`menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52 ${
              mode === "dark"
                ? "bg-gray-800 text-white"
                : "bg-gray-300 text-black"
            }`}
          >
            {navItems.map(({ label, to }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  className={({ isActive }) =>
                    isActive
                      ? "text-primary font-semibold"
                      : mode === "dark"
                      ? "hover:text-primary transition-colors duration-200 text-white"
                      : "hover:text-primary transition-colors duration-200"
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <NavLink
          to="/"
          className={`text-xl font-bold tracking-tight text-primary hover:opacity-80 ${
            mode === "dark" ? "text-white" : ""
          }`}
        >
          🛍️ ShopEase
        </NavLink>
      </div>

      {/* Center: Desktop Nav */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-2 px-1">
          {navItems.map(({ label, to }) => (
            <li key={to}>
              <NavLink
                to={to}
                className={({ isActive }) =>
                  isActive
                    ? "font-semibold text-primary"
                    : mode === "dark"
                    ? "hover:text-primary transition-colors duration-200 text-white"
                    : "hover:text-primary transition-colors duration-200"
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      {/* Right: Dark Toggle + Cart */}
      <div className="navbar-end gap-2">
        {/* Dark Mode Toggle */}
        <ThemeToggle />

        {/* Cart Icon */}
        <NavLink
          to="/cart"
          className="fixed bottom-4 right-4 z-50 btn btn-circle btn-info shadow-lg animate-bounce"
        >
          <div className="relative">
            <ShoppingCart className="w-6 h-6 text-white" />
            {totalItems > 0 && (
              <span
                className={`absolute -top-2 -right-2 w-5 h-5 text-[10px] font-bold rounded-full bg-red-500 text-white flex items-center justify-center `}
              >
                {totalItems}
              </span>
            )}
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default FrontendHeader;
