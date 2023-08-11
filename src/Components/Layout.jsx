import React from "react";
import Router from "../routers/Router";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  return (
    <>
      <Header />
      <div>
        <Router />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
