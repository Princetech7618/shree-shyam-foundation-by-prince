import React from 'react';
import { FaPrayingHands, FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="w-full bg-cover bg-center min-h-screen bg-[url('/shyamji.png')]">
      <div className="flex flex-col items-start justify-center text-center h-full px-6 pt-24 pb-10 gap-6 sm:gap-8">
        
        {/* Main Heading */}
        <h1 className="flex flex-wrap justify-start items-start gap-3 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-wider drop-shadow-[5px_5px_10px_rgba(0,0,0,0.7)]">
          Khatu{" "}
          <h1>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-red-500 to-pink-500">
            Shyam
          </span>
          </h1>
          <span className="text-blue-400 animate-pulse">Ji</span>
          <FaPrayingHands className="text-amber-300 animate-bounce" />
        </h1>

        {/* Subheading */}
        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-white drop-shadow-[4px_4px_6px_rgba(0,0,0,0.8)] tracking-wide">
          Welcome to the Divine Journey
        </h2>

        {/* Call to Action Button */}
        <button className="cursor-pointer bg-white text-red-500 font-bold text-base sm:text-lg px-6 py-3 sm:px-8 sm:py-4 rounded-lg shadow-md hover:bg-gray-100 flex items-center justify-center mt-6">
          <Link to="/donate"><span className='flex'>Donate Now <FaArrowRight className="ml-3 text-xl animate-pulse" /></span>
          </Link>
        </button>

        {/* Stats Section */}
        <div className="flex flex-col sm:flex-row justify-start items-start w-full max-w-5xl mt-40 gap-6 sm:gap-10 text-white font-bold mr-100">
          <div className="text-start sm:text-start">
            <h3 className="text-2xl sm:text-3xl md:text-4xl">1,000+</h3>
            <p className="text-sm sm:text-base">Khatu Shyam Darshan Served</p>
          </div>
          <div className="text-start sm:text-start">
            <h3 className="text-2xl sm:text-3xl md:text-4xl">100+</h3>
            <p className="text-sm sm:text-base">Mashik Kirtan Free</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
