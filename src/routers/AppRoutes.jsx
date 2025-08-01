import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

// Layouts
import FrontendLayout from "../layout/FrontendLayout";
import AdminLayout from "../layout/AdminLayout";

// Frontend Pages
import Home from "../pages/frontend/Home";
import ShopNow from "../pages/frontend/ShopNow";
import About from "../pages/frontend/About";
import DeliveryTeam from "../pages/frontend/DeliveryTeam";
import Sellers from "../pages/frontend/Sellers";
import Cart from "../pages/frontend/Cart";
import SingleCardDetails from "../pages/frontend/SingleCardDetails";

// Admin Pages
import Admin from "../pages/admin/Admin";
import Products from "../pages/admin/Products";
import Customers from "../pages/admin/Customers";
import Reports from "../pages/admin/Reports";
import Geography from "../pages/admin/Geography";
import Conversations from "../pages/admin/Conversations";
import Export from "../pages/admin/Export";
import ErrorPage from "../pages/frontend/ErrorPage";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Frontend Routes */}
        <Route path="/" element={<FrontendLayout />}>
          <Route index element={<Home />} />
          <Route path="shop-now" element={<ShopNow />} />
          <Route path="about" element={<About />} />
          <Route path="delivery-team" element={<DeliveryTeam />} />
          <Route path="sellers" element={<Sellers />} />
          <Route path="cart" element={<Cart />} />
          <Route path="/product/:id" element={<SingleCardDetails />} />
          <Route path="*" element={<ErrorPage />} />

        </Route>

        {/* Admin Routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Admin />} />
          <Route path="products" element={<Products />} />
          <Route path="customers" element={<Customers />} />
          <Route path="reports" element={<Reports />} />
          <Route path="geography" element={<Geography />} />
          <Route path="conversations" element={<Conversations />} />
          <Route path="export" element={<Export />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
