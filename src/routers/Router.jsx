import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../Pages/Home";
import Shop from "../Pages/Shop";
import Cart from "../Pages/Cart";
import ProductDetails from "../Pages/ProductDetails";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import Checkout from "../Pages/Checkout";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="Home" />} />
      <Route path="Home" element={<Home />} />
      <Route path="Shop" element={<Shop />} />
      <Route path="Cart" element={<Cart />} />
      <Route path="Shop/id:" element={<ProductDetails />} />
      <Route path="Checkout" element={<Checkout />} />
      <Route path="Login" element={<Login />} />
      <Route path="Signup" element={<Signup />} />
    </Routes>
  );
};

export default Router;
