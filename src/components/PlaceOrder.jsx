import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

const PlaceOrder = () => {
  const { buyNowItem, setBuyNowItem } = useContext(GlobalContext);

  if (!buyNowItem) {
    return <p className="text-center mt-10">No item selected for purchase.</p>;
  }

  const increaseQuantity = () => {
    setBuyNowItem((prev) => ({ ...prev, quantity: prev.quantity + 1 }));
  };

  const decreaseQuantity = () => {
    setBuyNowItem((prev) => ({
      ...prev,
      quantity: Math.max(prev.quantity - 1, 1), // Prevent going below 1
    }));
  };

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold text-center mb-6">Place Order</h1>
      <div className="border p-4 rounded shadow-md max-w-md mx-auto">
        <img src={buyNowItem.image} alt={buyNowItem.name} className="w-full h-48 object-cover mb-4 rounded" />
        <h3 className="text-lg font-semibold mb-2">{buyNowItem.name}</h3>
        <p className="text-gray-600 mb-4">{buyNowItem.price}</p>
        <div className="flex items-center space-x-4 mb-4">
          <button
            onClick={decreaseQuantity}
            className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800"
          >
            -
          </button>
          <span className="text-lg">{buyNowItem.quantity}</span>
          <button
            onClick={increaseQuantity}
            className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800"
          >
            +
          </button>
        </div>
        <button className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600 w-full">
          Confirm Order
        </button>
      </div>
    </div>
  );
};

export default PlaceOrder;
