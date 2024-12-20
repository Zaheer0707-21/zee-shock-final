import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import product1 from "../Assets/product1.jpg";
import product2 from "../Assets/product2.jpg";
import product3 from "../Assets/product3.jpg";
import product4 from "../Assets/product4.jpg";
import product5 from "../Assets/product5.jpg";
import product6 from "../Assets/product6.jpg";
import product7 from "../Assets/product7.jpg";
import product8 from "../Assets/product8.jpg";
import product9 from "../Assets/product9.jpg";
import product10 from "../Assets/product10.jpg";
import product11 from "../Assets/product11.jpg";
import product12 from "../Assets/product12.jpg";
import product13 from "../Assets/product13.jpg";
import product14 from "../Assets/product14.jpg";
import product15 from "../Assets/product15.jpg";
import product16 from "../Assets/product16.jpg";
import product17 from "../Assets/product17.jpg";
import product18 from "../Assets/product18.jpg";
import product19 from "../Assets/product19.jpg";
import product20 from "../Assets/product20.jpg";

const products = [
  { id: 1, name: "Fossil", image: product1, price: "$100" },
  { id: 2, name: "shock", image: product2 , price: "$150" },
  { id: 3, name: "core", image:  product3, price: "$200" },
  { id: 4, name: "kiip", image:  product4, price: "$250" },
  { id: 5, name: "noise", image:  product5, price: "$300" },
  { id: 6, name: "boat", image:  product6, price: "$350" },
  { id: 7, name: "s-shark", image:  product7, price: "$400" },
  { id: 8, name: "goat", image:  product8, price: "$450" },
  { id: 9, name: "uv", image:  product9, price: "$500" },
  { id: 10, name: "tip", image:  product10, price: "$550" },
  { id: 11, name: "foxx", image:  product11, price: "$600" },
  { id: 12, name: "koou", image:  product12, price: "$650" },
  { id: 13, name: "snaper", image:  product13, price: "$700" },
  { id: 14, name: "sipe", image: product14, price: "$750" },
  { id: 15, name: "slice", image:  product15, price: "$800" },
  { id: 16, name: "redu", image:  product16, price: "$850" },
  { id: 17, name: "doxxi", image:  product17, price: "$900" },
  { id: 18, name: "choco", image:  product18, price: "$950" },
  { id: 19, name: "mahi", image:  product19, price: "$1000" },
  { id: 20, name: "goku", image: product20, price: "$1050" },
];

const Shop = () => {


  const { addToCart, addToWishlist, } = useContext(GlobalContext);

  const { buyNow } = useContext(GlobalContext);
  const navigate = useNavigate();

  const handleBuyNow = (product) => {
    buyNow(product);
    navigate("/place-order"); // Redirect to Place Order page
  };


  


  

  return (
    <>
    <Navbar></Navbar>
    <div className="grid grid-cols-1 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <div key={product.id} className="border p-4 rounded shadow-md">
          <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4 rounded" />
          <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
          <p className="text-gray-600 mb-4">{product.price}</p>
          <div className="flex space-x-2">
            <button
              onClick={() => addToCart(product)}
              className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800"
            >
              Add to Cart
            </button>
            <button
              onClick={() => handleBuyNow(product)}
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            >
              Buy Now
            </button>
            <button
              onClick={() => addToWishlist(product)}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Wishlist
            </button>
          </div>
        </div>
      ))}
    </div>

    <Footer></Footer>
    </>
  );
};

export default Shop;
