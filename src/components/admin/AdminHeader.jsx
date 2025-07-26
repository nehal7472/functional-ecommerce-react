import React from "react";
import { useSelector } from "react-redux";
import { Menu, Bell, UserCircle2 } from "lucide-react";

const AdminHeader = () => {
  const mode = useSelector((state) => state.theme.mode);

  const hoverClass =
    mode === "dark"
      ? "hover:bg-gray-800 text-white"
      : "hover:bg-gray-100 text-black";

  return (
    <header
      className={`flex items-center justify-between p-4 border-b transition-colors duration-300 ${
        mode === "dark"
          ? "bg-gray-900 border-gray-700 text-white"
          : "bg-white border-gray-200 text-gray-900"
      }`}
    >
      {/* Left: Sidebar toggle and title */}
      <div className="flex items-center gap-2">
        <button className="md:hidden btn btn-square btn-ghost">
          <Menu className="w-5 h-5" />
        </button>
        <h1 className="text-xl font-semibold hidden md:block">
          Admin Dashboard
        </h1>
      </div>

      {/* Right: Notifications and profile */}
      <div className="flex items-center gap-4">
        <button className={`btn btn-ghost btn-circle ${hoverClass}`}>
          <div className="indicator">
            <Bell className="w-5 h-5" />
            <span className="w-5 h-5 badge badge-sm indicator-item badge-error rounded-full">
              3
            </span>
          </div>
        </button>

        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <UserCircle2 className="w-6 h-6" />
          </label>
          <ul
            tabIndex={0}
            className={`mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content rounded-box w-40 transition-colors duration-300 ${
              mode === "dark"
                ? "bg-gray-800 text-white"
                : "bg-gray-200 text-black"
            }`}
          >
            <li>
              <a className="hover:bg-primary hover:text-white">Profile</a>
            </li>
            <li>
              <a className="hover:bg-primary hover:text-white">Settings</a>
            </li>
            <li>
              <a className="text-red-500 hover:bg-red-100 dark:hover:bg-red-900">
                Logout
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;
