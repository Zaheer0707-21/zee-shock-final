import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation
import { FaShoppingCart } from 'react-icons/fa';  // Import the cart icon from react-icons


const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 sticky top-0 z-50 shadow-md">

      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <Link to="/" className="text-white text-2xl font-semibold hover:text-gray-200">
          Zee Shock
        </Link>

        {/* Navbar Links */}
        <div className="flex space-x-6">
          <Link to="/" className="text-white hover:text-gray-200">Home</Link>
          <Link to="/shop" className="text-white hover:text-gray-200">Shop</Link>
          <Link to="/Cart" className="text-white hover:text-gray-200">Cart</Link>
          <Link to="/WishList" className="text-white hover:text-gray-200">WishList</Link>
        </div>

        {/* Cart Icon */}
        <div className="text-white hover:text-gray-200 cursor-pointer">
  <FaShoppingCart />
</div>
        

      </div>
    </nav>
  );
}

export default Navbar;
