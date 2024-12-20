import React, { createContext, useState } from "react";
//import { auth } from "../firebaseConfig";
//import { onAuthStateChanged, signOut } from "firebase/auth";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]);
  const [buyNowItem, setBuyNowItem] = useState(null);

  const addToCart = (product) => {
    setCartItems((prev) => {
      if (prev.find((item) => item.id === product.id)) return prev;
      return [...prev, product];
    });
  };

  const addToWishlist = (product) => {
    setWishlistItems((prev) => {
      if (prev.find((item) => item.id === product.id)) return prev; 
      return [...prev, product];
    });
  };

  const buyNow = (product) => {
    setBuyNowItem({ ...product, quantity: 1 }); 
  };

  return (
    <GlobalContext.Provider
      value={{
        cartItems,
        wishlistItems,
        buyNowItem,
        addToCart,
        addToWishlist,
        buyNow,
        setBuyNowItem, 
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
