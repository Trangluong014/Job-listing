import React from "react";
import { Outlet } from "react-router-dom";
import PrimarySearchAppBar from "../component/Appbar";

function Layout() {
  return (
    <>
      <PrimarySearchAppBar />
      <Outlet />
    </>
  );
}

export default Layout;
