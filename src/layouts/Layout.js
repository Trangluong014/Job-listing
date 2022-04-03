import React from "react";
import { Outlet } from "react-router-dom";
import PrimarySearchAppBar from "../component/Appbar";
import SearchContextProvider from "../contexts/SearchContext";

function Layout() {
  return (
    <>
      <SearchContextProvider>
        <PrimarySearchAppBar />
        <Outlet />
      </SearchContextProvider>
    </>
  );
}

export default Layout;
