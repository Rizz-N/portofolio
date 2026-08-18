import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
const Layout = () => {
  return (
    <div>
      <Navbar />
      <div>
        <Outlet />
      </div>
      <footer className="bg-linear-to-r from-black to-primary-300 text-white font-light text-center py-3">
        <p>&copy; 2025 | Alfarizi Ishaq</p>
      </footer>
    </div>
  );
};

export default Layout;
