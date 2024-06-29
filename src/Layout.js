import React from "react";
import App from "./App";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Catalog from "./components/Catalog/Catalog";

function Layout() {
  return (
    <App>
      <Catalog />
    </App>
  );
}

export default Layout;
