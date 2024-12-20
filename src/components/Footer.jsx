import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaPinterest } from "react-icons/fa"; // Import social media icons

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-6">
        {/* Footer top section with links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-6">
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul>
              <li>
                <Link to="/" className="hover:text-yellow-500">Home</Link>
              </li>
              <li>
                <Link to="/shop" className="hover:text-yellow-500">Shop</Link>
              </li>
              <li>
                <Link to="/cart" className="hover:text-yellow-500">Cart</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-yellow-500">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-yellow-500">Contact</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-6">
              <a href="#" className="text-xl hover:text-yellow-500">
                <FaFacebookF />
              </a>
              <a href="#" className="text-xl hover:text-yellow-500">
                <FaTwitter />
              </a>
              <a href="#" className="text-xl hover:text-yellow-500">
                <FaInstagram />
              </a>
              <a href="#" className="text-xl hover:text-yellow-500">
                <FaPinterest />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <p className="mb-2">Email: support@zeeShock.com</p>
            <p>Phone: +91 8925074299</p>
          </div>
        </div>

        {/* Footer bottom section with copyright */}
        <div className="border-t border-gray-700 pt-4 mt-6 text-center">
          <p className="text-sm">© 2024 WatchShop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
