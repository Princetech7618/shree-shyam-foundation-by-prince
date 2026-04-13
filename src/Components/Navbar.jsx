import React, { useState } from "react";
import { Link } from 'react-router-dom';
import {
  FaHeart,
  FaWhatsapp,
  FaPhone,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaBars,
  FaArrowRight,
  FaTimes,
} from "react-icons/fa";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="w-full">
      {/* Top Bar */}
<div className="flex flex-col md:flex-row justify-between items-center bg-pink-200 px-2 md:px-6 py-2 text-sm text-black">
  {/* Phone + Email */}
  <div className="flex flex-col md:flex-row items-center gap-2 md:gap-20 w-full md:w-auto">
    {/* Phone Numbers */}
    <div className="flex items-center   justify-center">
      <span className="flex flex-wrap text-[9px] lg:text-lg gap-x-[2px] lg:gap-x-3">
 <FaPhone className="text-blue-500 hover:text-blue-600" />

        <a href="tel:+919990419733">+91 9990419733</a>

                <FaPhone className="text-blue-500 hover:text-blue-600" />
        <a href="tel:+919999041971">+91 9999041971</a>
               
  <FaPhone className="text-blue-500 hover:text-blue-600" />
        <a href="tel:+919990204197">+91 9990204197</a>
             
      </span>
    </div>

    {/* Email + Socials */}
    <div className="flex justify-between items-center w-full md:w-auto flex-wrap gap-2 md:gap-6">
      <div className="flex items-center gap-2 text-sm lg:text-lg">
        <FaEnvelope className="text-blue-500 hover:text-blue-600" />
        <a href="mailto:shreeshyamparivaarfoundation@gmail.com">shreeshyamparivaarfoundation@gmail.com</a>
      </div>
      <div className="flex gap-4 text-sm lg:text-lg md:mt-0 md:absolute md:right-6">
        <a href="https://www.facebook.com/profile.php?id=61575884746727" target="_blank" rel="noopener noreferrer">
        <FaFacebookF className="hover:text-blue-600 text-blue-500 cursor-pointer" /></a>
        <a href="https://www.instagram.com/khatushyam__foundation/" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="hover:text-pink-600 text-pink-500 cursor-pointer" />
        </a>
        <a href="https://wa.me/919999041971" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp className="hover:text-green-600 text-green-500 cursor-pointer" />
        </a>
        <a href="https://www.youtube.com/@%E0%A4%B6%E0%A5%8D%E0%A4%B0%E0%A5%80shyamparivar" target="_blank" rel="noopener noreferrer">
          <FaYoutube className="hover:text-red-600 text-red-500 cursor-pointer" />
        </a>
      </div>
    </div>
  </div>
</div>


      {/* Navigation Bar */}
      <div className="bg-gradient-to-r from-yellow-500 via-red-500 to-red-300 px-4 md:px-6 py-4 text-white">
        <div className="flex items-center justify-between">
          {/* Logo + Text (Clickable Area) */}
          <Link
            to="/"
            className="flex items-center p-2 rounded-lg transition-colors duration-200"
          >
            <img
              src="https://monumental-faun-17a621.netlify.app/img/logo.jpg"
              alt="Logo"
              className="h-12 w-12 bg-white p-1 rounded-full"
            />
            <div className="ml-2 text-sm sm:text-base md:text-lg font-semibold text-white leading-tight">
              Shree Shyam Parivar<br className="hidden sm:block" />
              Foundation Bhopura
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6 font-medium ">
            <Link className="hover:underline  hover:text-pink-200" to="/">Home</Link>
            <Link className="hover:underline  hover:text-pink-200" to="/about">About</Link>
            <Link className="hover:underline  hover:text-pink-200" to="/seat-booking">Seat Booking </Link>
            <Link className="hover:underline  hover:text-pink-200" to="/temple">Temple</Link>
            <Link className="hover:underline  hover:text-pink-200" to="/gallery">Gallery</Link>
            <Link className="hover:underline  hover:text-pink-200" to="/tourpackage">TourPackage</Link>
            <Link className="hover:underline  hover:text-pink-200" to="/contact">Contact</Link>
          </div>

          {/* Donate Now Button (Desktop) */}
          <div className="hidden md:block">
            <Link
              to="/donate"
              className="bg-white text-red-500 font-bold px-4 py-2 rounded-lg shadow-md hover:bg-gray-100 flex items-center"
            >
              Donate Now
              <FaArrowRight className="ml-3 text-xl animate-pulse" />
            </Link>
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
<div
  className={` h-full left-0   bg-gradient-to-r from-yellow-500 via-red-500 to-red-300 text-white z-50 transform transition-transform duration-300 ease-in-out ${
    isMenuOpen ? "translate-x-0" : "-translate-x-full"
  }`}
  onClick={() => setIsMenuOpen(false)}
>            <Link to="/" onClick={() => setIsMenuOpen(false)} className="block hover:underline  hover:text-pink-200">Home</Link>
            <Link to="/donate" onClick={() => setIsMenuOpen(false)} className="block hover:underline  hover:text-pink-200">Donate</Link>
            <Link to="/about" onClick={() => setIsMenuOpen(false)} className="block hover:underline  hover:text-pink-200">About</Link>
            <Link to="/seat-booking" onClick={() => setIsMenuOpen(false)} className="block hover:underline  hover:text-pink-200">Seat Booking</Link>
            <Link to="/temple" onClick={() => setIsMenuOpen(false)} className="block hover:underline  hover:text-pink-200">Temple</Link>
            <Link to="/gallery" onClick={() => setIsMenuOpen(false)} className="block hover:underline  hover:text-pink-200">Gallery</Link>
            <Link to="/tourpackage" onClick={() => setIsMenuOpen(false)} className="block hover:underline  hover:text-pink-200">TourPackage</Link>
            <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="block hover:underline hover:text-pink-200">Contact</Link>

            <Link
              to="/donate"
              className="block mt-6 bg-white text-red-500 font-bold px-6 py-3 rounded-lg shadow-md hover:bg-gray-100 flex items-center justify-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Donate Now
              <FaArrowRight className="ml-3 text-xl animate-pulse" />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
