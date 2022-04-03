import React from "react";
import { Outlet } from "react-router-dom";
import PrimarySearchAppBar from "../component/Appbar";
import SearchContextProvider from "../contexts/SearchContext";
import useSearch from "../hooks/useSearch";

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
