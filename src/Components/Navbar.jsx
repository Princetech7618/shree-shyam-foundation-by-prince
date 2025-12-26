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
  <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6 w-full md:w-auto">
    {/* Phone Numbers */}
    <div className="flex items-center gap-2 flex-wrap justify-center">
      <span className="flex flex-wrap text-[9px] lg:text-lg gap-x-[2px] lg:gap-x-2">
        <FaPhone />
        <a href="tel:+919999041971">+91 99990 41971</a>,
        <a href="tel:+918178069222">+8178069222</a>,
        <a href="tel:+919911210174">+9999041974</a>,
        <a href="tel:+919911210174">+91 99112 10174</a>
      </span>
    </div>

    {/* Email + Socials */}
    <div className="flex justify-between items-center w-full md:w-auto flex-wrap gap-2 md:gap-6">
      <div className="flex items-center gap-2 text-sm lg:text-lg">
        <FaEnvelope />
        <a href="mailto:yadav.raj4580@gmail.com">yadav.raj4580@gmail.com</a>
      </div>
      <div className="flex gap-4 text-sm lg:text-lg md:mt-0 md:absolute md:right-6">
        <a href="https://www.facebook.com/profile.php?id=61575884746727" target="_blank" rel="noopener noreferrer"><FaFacebookF className="hover:text-blue-600 cursor-pointer" /></a>
        <a href="https://www.instagram.com/khatushyam__foundation/" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="hover:text-pink-600 cursor-pointer" />
        </a>
        <a href="https://wa.me/919999041971" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp className="hover:text-green-500 cursor-pointer" />
        </a>
        <a href="https://www.youtube.com/@khatushyam__foundation" target="_blank" rel="noopener noreferrer">
          <FaYoutube className="hover:text-pink-600 cursor-pointer" />
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
          <div className="hidden md:flex items-center gap-6 font-medium">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/darshan">Darshan</Link>
            <Link to="/temple">Temple</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/tourpackage">TourPackage</Link>
            <Link to="/contact">Contact</Link>
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
          <div className="md:hidden mt-4 space-y-2 text-sm font-medium">
            <Link to="/" onClick={() => setIsMenuOpen(false)} className="block">Home</Link>
            <Link to="/donate" onClick={() => setIsMenuOpen(false)} className="block">Donate</Link>
            <Link to="/about" onClick={() => setIsMenuOpen(false)} className="block">About</Link>
            <Link to="/darshan" onClick={() => setIsMenuOpen(false)} className="block">Darshan</Link>
            <Link to="/temple" onClick={() => setIsMenuOpen(false)} className="block">Temple</Link>
            <Link to="/gallery" onClick={() => setIsMenuOpen(false)} className="block">Gallery</Link>
            <Link to="/tourpackage" onClick={() => setIsMenuOpen(false)} className="block">TourPackage</Link>
            <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="block">Contact</Link>

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
