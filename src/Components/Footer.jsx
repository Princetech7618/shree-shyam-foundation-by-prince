import React, { useState } from 'react';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaWhatsapp,
  FaLocationArrow,
  FaPhoneAlt,
  FaEnvelope,
  FaYoutube,
  FaAngleDoubleRight
} from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <footer className="bg-yellow-400 text-red-700 px-6 py-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10">
          {/* Logo and Description */}
          <div className="md:w-1/3">
            <div className="flex items-center mb-4">
              <img
                src="https://cdn130.picsart.com/283108491019211.png"
                alt="Logo"
                className="h-24 mr-4"
              />
              <h4 className="text-2xl font-bold">Shree Shyam Parivar Foundation Bhopura</h4>
            </div>
            <p className="text-base leading-relaxed">
              Khatu Shyam Baba Seva Foundation is making significant contribution towards
              providing quality education, healthcare and livelihood facilities to socially
              and economically disadvantaged people.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:w-1/3">
            <h3 className="text-xl font-bold mb-4">Quick Links:</h3>
            <ul className="space-y-2">
              {["Home", "About", "Darshan", "Temple", "Gallery", "Contact", "Donate"].map((item, index) => (
                <li key={index} className="flex items-center">
                  <FaAngleDoubleRight className="mr-2" />
                  <Link
                    to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="hover:underline"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:w-1/3">
            <h3 className="text-xl font-bold mb-4">Contact Info:</h3>
            <p className="flex items-start mb-2">
              <FaLocationArrow className="mt-1 mr-2" />
              <a
                href="https://www.google.com/maps?q=Bhopura+Ghaziabad"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Bhopura, Ghaziabad
              </a>
            </p>
            <p className="flex items-center mb-2 flex-wrap">
              <FaPhoneAlt className="mr-2" />
              <a href="tel:+919999041971" className="hover:underline mr-1">+91 99990 41971</a>,
              <a href="tel:+918178069222" className="hover:underline mx-1">8178069222</a>,
              <a href="tel:+919911210174" className="hover:underline ml-1">9911210174</a>
            </p>
            <p className="flex items-center mb-4">
              <FaEnvelope className="mr-2" />
              <a href="mailto:yadav.raj4580@gmail.com" className="hover:underline">
                yadav.raj4580@gmail.com
              </a>
            </p>

            <h3 className="text-xl font-bold mb-2">Social Links:</h3>
            <div className="flex space-x-3">
              <a
                href="https://www.facebook.com/profile.php?id=61575884746727"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-700 text-white p-3 rounded-full hover:scale-105 transition"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://wa.me/919999041971"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-700 text-white p-3 rounded-full hover:scale-105 transition"
              >
                <FaWhatsapp />
              </a>
              <a
                href="https://www.instagram.com/khatushyam__foundation"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-700 text-white p-3 rounded-full hover:scale-105 transition"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.youtube.com/@khatushyam__foundation"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-700 text-white p-3 rounded-full hover:scale-105 transition"
              >
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="text-center border-t border-red-600 mt-10 pt-4 text-sm">
          © 2025 | Shree Shyam Parivar Foundation Bhopura | All Rights Reserved | Designed & Developed by{" "}
          <span className="font-semibold">
            <a href="https://kanakdrishtiinfo.com" target="_blank" rel="noopener noreferrer">
              Kanak Drishti Infotech Pvt. Ltd.
            </a>
          </span>
        </div>
      </footer>

      {/* Donate Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md relative">
            <button
              className="absolute top-2 right-3 text-red-600 font-bold text-xl"
              onClick={() => setShowModal(false)}
            >
              ×
            </button>
            <h2 className="text-xl font-bold text-red-700 mb-4">Donation Query Form</h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-red-300 rounded px-4 py-2"
              />
              <input
                type="tel"
                placeholder="Your Phone Number"
                className="w-full border border-red-300 rounded px-4 py-2"
              />
              <textarea
                placeholder="Your Message"
                className="w-full border border-red-300 rounded px-4 py-2"
                rows="4"
              />
              <button
                type="submit"
                className="bg-red-700 text-white px-6 py-2 rounded hover:bg-red-800"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;
