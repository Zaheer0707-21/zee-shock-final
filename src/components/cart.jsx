import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Cart = () => {
  const { cartItems, removeFromCart } = useContext(GlobalContext);

  return (

    <>
     <Navbar></Navbar>
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold text-center mb-6">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p className="text-center text-gray-600">Your cart is empty.</p>
      ) : (
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {cartItems.map((item) => (
            <li key={item.id} className="border p-4 rounded shadow-md">
              <img src={item.image} alt={item.name} className="w-full h-48 object-cover mb-4 rounded" />
              <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
              <p className="text-gray-600">{item.price}</p>
              <button
                onClick={() => removeFromCart(item.id)}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
    <Footer></Footer>

  
    </>
  );
};

export default Cart;
