import React from "react";
import { Route, Routes } from "react-router-dom";
import Addtocart from "../Home/Addtocart";
import Checkoutpage from "../Home/Checkoutpage";
import Productpage from "../Home/Product";
import ShoppingCartPage from "../Home/Shoppingcart";
import Singleproduct from "../Home/Singleproduct";
import Login from "../Login/Login";

function Routers() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/productpage" element={<Productpage />} />
        <Route path="/products" element={<Singleproduct />} />
        <Route path="/products/:id" element={<Singleproduct />} />
        <Route path="/checkoutpage" element={<Checkoutpage />} />
        <Route path="/addtocart" element={<Addtocart />} />
        <Route path="/shoppingcartpage" element={<ShoppingCartPage />} />
      </Routes>
    </div>
  );
}

export default Routers;
