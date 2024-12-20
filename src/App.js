import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { GlobalProvider } from "./context/GlobalContext";

import Home from "./components/Home.jsx";
import Shop from "./components/Shop.jsx";
import Cart from "./components/cart.jsx";
import Wishlist from "./components/Wishlist.js";
import PlaceOrder from "./components/PlaceOrder.jsx";

const App = () => {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/place-order" element={<PlaceOrder />} />
          
        </Routes>
      </BrowserRouter>
    </GlobalProvider>
  );
};

export default App;
