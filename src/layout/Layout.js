import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Pagination from "../components/Pagination/Pagination";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen justify-between">
      <Header />
      <Outlet />
      <Pagination />
    </div>
  );
};

export default Layout;
