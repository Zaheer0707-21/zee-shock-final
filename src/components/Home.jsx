import React from "react";
import { Link } from "react-router-dom";
import watchBanner from "../Assets/watch-banner.jpg"; // Import the image
import Navbar from "./Navbar";
import Footer from "./Footer"

const Home = () => {
  return (
    <>
    <Navbar></Navbar>
    <div>
      {/* Hero Banner Section */}
      <section
        className="relative h-[80vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${watchBanner})` }} // Use the imported image here
      >
        <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay */}
        <div className="relative z-10 container mx-auto h-full flex items-center justify-center text-center text-white px-6">
          <div>
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
              Discover Timeless Elegance
            </h1>
            <p className="text-lg md:text-2xl mb-6">
              Find the perfect watch to match your style and personality.
            </p>
            <Link to="/shop">
              <button className="bg-yellow-500 text-black py-3 px-8 rounded-full text-lg font-semibold transition-transform transform hover:scale-105">
                Shop Now
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Additional Content Below Hero */}
      <div className="container mx-auto py-20 text-center">
        <h2 className="text-3xl font-bold mb-10">Our Premium Watches</h2>
        <p className="text-lg mb-6">Browse through our curated collection of luxury watches.</p>
        <Link to="/shop">
          <button className="bg-black text-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-yellow-500 transition">
            View All Watches
          </button>
        </Link>
      </div>
    </div>
    <Footer></Footer>
    </>
  );
};

export default Home;
