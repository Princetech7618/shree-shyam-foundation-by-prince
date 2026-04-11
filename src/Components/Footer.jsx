// import React, { useState } from 'react';
// import {
//   FaFacebookF,
//   FaTwitter,
//   FaInstagram,
//   FaWhatsapp,
//   FaLocationArrow,
//   FaPhoneAlt,
//   FaEnvelope,
//   FaYoutube,
//   FaAngleDoubleRight
// } from "react-icons/fa";
// import { Link } from 'react-router-dom';

// const Footer = () => {
//   const [showModal, setShowModal] = useState(false);

//   return (
//     <>
//       <footer className="bg-yellow-400 text-red-700 px-6 py-10">
//         <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10">
//           {/* Logo and Description */}
//           <div className="md:w-1/3">
//             <div className="flex items-center mb-4">
//               <img
//                 src="https://cdn130.picsart.com/283108491019211.png"
//                 alt="Logo"
//                 className="h-24 mr-4"
//               />
//               <h4 className="text-2xl font-bold">Shree Shyam Parivar Foundation Bhopura</h4>
//             </div>
//             <p className="text-base leading-relaxed">
//               Khatu Shyam Baba Seva Foundation is making significant contribution towards
//               providing quality education, healthcare and livelihood facilities to socially
//               and economically disadvantaged people.
//             </p>
//           </div>

//           {/* Quick Links */}
//           <div className="md:w-1/3">
//             <h3 className="text-xl font-bold mb-4">Quick Links:</h3>
//             <ul className="space-y-2">
//               {["Home", "About", "Darshan", "Temple", "Gallery", "Contact", "Donate"].map((item, index) => (
                // <li key={index} className="flex items-center">
                //   <FaAngleDoubleRight className="mr-2" />
                //   <Link
                //     to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                //     className="hover:underline"
                //   >
                //     {item}
                //   </Link>
                // </li>
//               ))}
//             </ul>
//           </div>

//           {/* Contact Info */}
//           <div className="md:w-1/3">
//             <h3 className="text-xl font-bold mb-4">Contact Info:</h3>
//             <p className="flex items-start mb-2">
//               <FaLocationArrow className="mt-1 mr-2" />
//               <a
//                 href="https://www.google.com/maps?q=Bhopura+Ghaziabad"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="hover:underline"
//               >
//                 Bhopura, Ghaziabad
//               </a>
//             </p>
//             <p className="flex items-center mb-2 flex-wrap">
//               <FaPhoneAlt className="mr-2" />
//               <a href="tel:+919999041971" className="hover:underline mr-1">+91 99990 41971</a>,
//               <a href="tel:+918178069222" className="hover:underline mx-1">8178069222</a>,
//               <a href="tel:+919911210174" className="hover:underline ml-1">9911210174</a>
//             </p>
//             <p className="flex items-center mb-4">
//               <FaEnvelope className="mr-2" />
//               <a href="mailto:yadav.raj4580@gmail.com" className="hover:underline">
//                 yadav.raj4580@gmail.com
//               </a>
//             </p>

//             <h3 className="text-xl font-bold mb-2">Social Links:</h3>
//             <div className="flex space-x-3">
//               <a
//                 href="https://www.facebook.com/profile.php?id=61575884746727"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="bg-red-700 text-white p-3 rounded-full hover:scale-105 transition"
//               >
//                 <FaFacebookF />
//               </a>
//               <a
//                 href="https://wa.me/919999041971"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="bg-red-700 text-white p-3 rounded-full hover:scale-105 transition"
//               >
//                 <FaWhatsapp />
//               </a>
//               <a
//                 href="https://www.instagram.com/khatushyam__foundation"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="bg-red-700 text-white p-3 rounded-full hover:scale-105 transition"
//               >
//                 <FaInstagram />
//               </a>
//               <a
                // href="https://www.youtube.com/@%E0%A4%B6%E0%A5%8D%E0%A4%B0%E0%A5%80shyamparivar"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="bg-red-700 text-white p-3 rounded-full hover:scale-105 transition"
//               >
//                 <FaYoutube />
//               </a>
//             </div>
//           </div>
//         </div>

//         {/* Bottom Footer */}
//         <div className="text-center border-t border-red-600 mt-10 pt-4 text-sm">
//           © 2025 | Shree Shyam Parivar Foundation Bhopura | All Rights Reserved | Designed & Developed by{" "}
//           <span className="font-semibold">
//             <a href="https://kanakdrishtiinfo.com" target="_blank" rel="noopener noreferrer">
//               Kanak Drishti Infotech Pvt. Ltd.
//             </a>
//           </span>
//         </div>
//       </footer>

//       {/* Donate Modal */}
//       {showModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
//           <div className="bg-white rounded-lg p-6 w-full max-w-md relative">
//             <button
//               className="absolute top-2 right-3 text-red-600 font-bold text-xl"
//               onClick={() => setShowModal(false)}
//             >
//               ×
//             </button>
//             <h2 className="text-xl font-bold text-red-700 mb-4">Donation Query Form</h2>
//             <form className="space-y-4">
//               <input
//                 type="text"
//                 placeholder="Your Name"
//                 className="w-full border border-red-300 rounded px-4 py-2"
//               />
//               <input
//                 type="tel"
//                 placeholder="Your Phone Number"
//                 className="w-full border border-red-300 rounded px-4 py-2"
//               />
//               <textarea
//                 placeholder="Your Message"
//                 className="w-full border border-red-300 rounded px-4 py-2"
//                 rows="4"
//               />
//               <button
//                 type="submit"
//                 className="bg-red-700 text-white px-6 py-2 rounded hover:bg-red-800"
//               >
//                 Submit
//               </button>
//             </form>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Footer;




import React from 'react';
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaLocationArrow,
  FaPhoneAlt,
  FaEnvelope,
  FaYoutube,
  FaAngleDoubleRight,
  FaPaperPlane
} from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {

  return (
    <>
      <footer className="relative bg-gradient-to-br from-yellow-400 to-yellow-500 text-red-800 pt-10 pb-4 px-8 overflow-hidden">
        {/* Decorative Background Element */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 via-red-500 to-red-600"></div>
        
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            
            {/* Column 1: Brand Identity */}
         <div className="space-y-6 max-w-xl">
  <div className="flex items-center gap-4 sm:gap-5">

    {/* Logo */}
    <div className="w-14 h-14 sm:w-16 sm:h-16 flex-shrink-0">
      <img
        src="https://monumental-faun-17a621.netlify.app/img/logo.jpg"
        alt="Logo"
        className="w-full h-full object-cover rounded-full"
      />
    </div>

    {/* Text */}
    <div>
      <h4 className="text-md sm:text-lg md:text-xl font-semibold tracking-tight leading-tight">
      Shree Shyam <br />
        <span className="text-red-600">
Parivar Foundation Bhopura 
        </span>
      </h4>
    </div>

  </div>

  <p className="text-sm sm:text-base font-semibold ">
Khatu Shyam Baba Seva Foundation is making significant contribution towards providing quality education, healthcare and livelihood facilities to socially and economically disadvantaged people.
  </p>
</div>

            {/* Column 2: Navigation */}
            <div>
              <h3 className="text-lg font-bold mb-6 pb-2 border-b-2 border-red-600/20 inline-block">Quick Links</h3>
              <ul className="grid grid-cols-1 gap-3">
                {["Home", "About", "Darshan", "Temple", "Gallery", "Contact", "Donate"].map((item) => (
                  <li key={item}>
                    <Link
                      to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                      className="group hover:underline flex items-center text-sm font-semibold hover:text-red-600 transition-colors duration-300"
                    >
                      <FaAngleDoubleRight className="mr-2 text-xs group-hover:translate-x-1 transition-transform" />
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Contact Details */}
            <div>
              <h3 className="text-lg font-bold mb-6 pb-2 border-b-2 border-red-600/20 inline-block">Get In Touch</h3>
              <div className="space-y-4">
                <a href="https://www.google.com/maps?q=Bhopura+Ghaziabad" target="_blank" rel="noreferrer" className="flex items-start group">
                  <div className="bg-red-700 text-white p-2 rounded-lg mr-3 group-hover:bg-red-800 transition-colors">
                    <FaLocationArrow className="text-xs" />
                  </div>
                  <span className="text-sm font-medium">Bhopura, Ghaziabad, <br/>Uttar Pradesh, India</span>
                </a>
                
                <div className="flex items-start group">
                  <div className="bg-red-700 text-white p-2 rounded-lg mr-3">
                    <FaPhoneAlt className="text-xs" />
                  </div>
                  <div className="flex flex-col text-sm font-medium">
                                        <a href="tel:+919990419733" className="hover:text-red-600 transition-colors">+91  9990419733</a>

                    <a href="tel:+919999041971" className="hover:text-red-600 transition-colors">+91 9999041971</a>
                                        <a href="tel:+919990204197" className="hover:text-red-600 transition-colors">+91 9990204197</a>

                  </div>
                </div>

                <a href="mailto:shreeshyamparivaarfoundation@gmail.com" className="flex items-center group">
                  <div className="bg-red-700 text-white p-2 rounded-lg mr-3 group-hover:bg-red-800 transition-colors">
                    <FaEnvelope className="text-xs" />
                  </div>
                  <span className="text-sm font-medium truncate hover:text-red-600 transition-colors">shreeshyamparivaarfoundation@gmail.com</span>
                </a>
              </div>
            </div>

            {/* Column 4: Newsletter & Social */}
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold mb-4">Connect With Us</h3>
                <div className="flex gap-3">
                  {[
                    { icon: <FaFacebookF />, url: "https://www.facebook.com/profile.php?id=61575884746727" },
                    { icon: <FaWhatsapp />, url: "https://wa.me/919990419733" },
                    { icon: <FaInstagram />, url: "https://www.instagram.com/khatushyam__foundation" },
                    { icon: <FaYoutube />, url: "https://www.youtube.com/@%E0%A4%B6%E0%A5%8D%E0%A4%B0%E0%A5%80shyamparivar" }
                  ].map((social, i) => (
                    <a
                      key={i}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-red-700 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-red-800 hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
  
              
                          <Link
              to="/donate"
            
                className="w-full cursor-pointer bg-red-700 text-white py-3 px-6 rounded-xl font-bold shadow-lg hover:bg-red-800 hover:shadow-xl active:scale-95 transition-all flex items-center justify-center gap-2"
              >
                <FaPaperPlane className="text-sm" /> Support Our Mission
              
              </Link>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-red-900/10 text-center md:flex md:justify-between md:items-center">
            <p className="text-xs font-bold opacity-80 mb-4 md:mb-0">
               © {new Date().getFullYear()} | SHREE SHYAM PARIVAR FOUNDATION | ALL RIGHTS RESERVED
            </p>
            <p className="text-xs font-bold opacity-80">
             Designed & Developed by  <a href="https://kanakdrishtiinfo.com" target='blank' className="underline hover:text-red-600">Kanak Drishti Infotech Pvt. Ltd.</a>
            </p>
          </div>
        </div>
      </footer>

 
    </>
  );
};

export default Footer;