import React from "react";
import {  Outlet } from "react-router-dom";
import {
  LayoutDashboard,
  Package,
  Users,
  FileText,
  Globe,
  MessagesSquare,
  UploadCloud,
} from "lucide-react";
import AdminHeader from "../components/admin/AdminHeader";
import AdminSidebar from "../components/admin/AdminSidebar";
import ThemeToggle from "../components/Theme/ThemeToggle";

const AdminLayout = () => {
  const navItems = [
    {
      label: "Dashboard",
      to: "/admin",
      icon: <LayoutDashboard className="w-5 h-5" />,
    },
    {
      label: "Products",
      to: "/admin/products",
      icon: <Package className="w-5 h-5" />,
    },
    {
      label: "Customers",
      to: "/admin/customers",
      icon: <Users className="w-5 h-5" />,
    },
    {
      label: "Reports",
      to: "/admin/reports",
      icon: <FileText className="w-5 h-5" />,
    },
    {
      label: "Geography",
      to: "/admin/geography",
      icon: <Globe className="w-5 h-5" />,
    },
    {
      label: "Conversations",
      to: "/admin/conversations",
      icon: <MessagesSquare className="w-5 h-5" />,
    },
    {
      label: "Export",
      to: "/admin/export",
      icon: <UploadCloud className="w-5 h-5" />,
    },

  ];

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-[240px_1fr] bg-base-100">
      {/* Sidebar */}
      <AdminSidebar navItems={navItems} />

      {/* Main Content */}
      <main className="p-6">
        <AdminHeader />
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
