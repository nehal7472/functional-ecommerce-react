import React from "react";
import { Menu, Bell, UserCircle2 } from "lucide-react";

const AdminHeader = () => {
  return (
    <header className="flex items-center justify-between p-4 border-b bg-base-100">
      {/* Left: Logo or Sidebar Toggle */}
      <div className="flex items-center gap-2">
        <button className="md:hidden btn btn-square btn-ghost">
          <Menu className="w-5 h-5" />
        </button>
        <h1 className="text-xl font-semibold hidden md:block">
          Admin Dashboard
        </h1>
      </div>

      {/* Right: Notification + User */}
      <div className="flex items-center gap-4">
        <button className="btn btn-ghost btn-circle">
          <div className="indicator">
            <Bell className="w-5 h-5" />
            <span className="badge badge-sm indicator-item badge-error">3</span>
          </div>
        </button>

        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <UserCircle2 className="w-6 h-6" />
          </label>
          <ul
            tabIndex={0}
            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-200 rounded-box w-40"
          >
            <li>
              <a>Profile</a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a className="text-red-500">Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;
