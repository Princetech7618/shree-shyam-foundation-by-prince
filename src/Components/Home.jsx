// import React from 'react';
// import { FaPrayingHands, FaArrowRight } from "react-icons/fa";
// import { Link } from 'react-router-dom';

// const Home = () => {
//   return (
//     <div className="w-full bg-cover bg-center min-h-screen bg-[url('/shyamji.png')]">
//       <div className="flex flex-col items-start justify-center text-center h-full px-6 pt-24 pb-10 gap-6 sm:gap-8">
        
//         {/* Main Heading */}
//         <h1 className="flex flex-wrap justify-start items-start gap-3 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-wider drop-shadow-[5px_5px_10px_rgba(0,0,0,0.7)]">
//           Khatu{" "}
//           <h1>
//           <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-red-500 to-pink-500">
//             Shyam
//           </span>
//           </h1>
//           <span className="text-blue-400 animate-pulse">Ji</span>
//           <FaPrayingHands className="text-amber-300 animate-bounce" />
//         </h1>

//         {/* Subheading */}
//         <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-white drop-shadow-[4px_4px_6px_rgba(0,0,0,0.8)] tracking-wide">
//           Welcome to the Divine Journey
//         </h2>

//         {/* Call to Action Button */}
//         <button className="cursor-pointer bg-white text-red-500 font-bold text-base sm:text-lg px-6 py-3 sm:px-8 sm:py-4 rounded-lg shadow-md hover:bg-gray-100 flex items-center justify-center mt-6">
//           <Link to="/donate"><span className='flex'>Donate Now <FaArrowRight className="ml-3 text-xl animate-pulse" /></span>
//           </Link>
//         </button>

//         {/* Stats Section */}
//         <div className="flex flex-col sm:flex-row justify-start items-start w-full max-w-5xl mt-40 gap-6 sm:gap-10 text-white font-bold mr-100">
//           <div className="text-start sm:text-start">
//             <h3 className="text-2xl sm:text-3xl md:text-4xl">1,000+</h3>
//             <p className="text-sm sm:text-base">Khatu Shyam Darshan Served</p>
//           </div>
//           <div className="text-start sm:text-start">
//             <h3 className="text-2xl sm:text-3xl md:text-4xl">100+</h3>
//             <p className="text-sm sm:text-base">Mashik Kirtan Free</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;


// import React from "react";
// import { FaPrayingHands, FaArrowRight } from "react-icons/fa";
// import { Link } from "react-router-dom";

// const Home = () => {
//   return (
//     <div className="relative w-full min-h-screen bg-[url('/shyamji.png')] bg-cover bg-center">

//       {/* Overlay (slightly stronger on left for readability) */}
//       <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-transparent"></div>

//       {/* Content */}
//       <div className="relative z-10 flex flex-col justify-center min-h-screen px-6 sm:px-10 md:px-16 lg:px-24 py-16">

//         {/* LEFT CONTAINER (IMPORTANT FIX) */}
//         <div className="max-w-md sm:max-w-lg md:max-w-xl">

//           {/* Heading */}
//           <h1 className="flex flex-wrap items-center gap-3 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-white leading-tight">
//             Khatu
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-red-500 to-pink-500">
//               Shyam
//             </span>
//             <span className="text-blue-400 animate-pulse">Ji</span>
//             <FaPrayingHands className="text-amber-300 animate-bounce" />
//           </h1>

//           {/* Subheading */}
//           <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-gray-200 mt-3">
//             Welcome to the Divine Journey
//           </p>

//           {/* CTA Button */}
//           <Link
//             to="/donate"
//             className="inline-flex items-center justify-center w-fit bg-white text-red-500 font-semibold text-sm sm:text-base px-6 py-3 sm:px-8 sm:py-4 rounded-lg shadow-lg hover:bg-gray-100 transition-all duration-300 mt-6 hover:scale-105"
//           >
//             Donate Now
//             <FaArrowRight className="ml-3 text-lg animate-pulse" />
//           </Link>

//         </div>
//       </div>

//       {/* Stats Section (BOTTOM LEFT FIXED) */}
//       <div className="absolute bottom-6 left-0 w-full px-6 sm:px-10 md:px-16 lg:px-24">
//         <div className="max-w-md sm:max-w-lg md:max-w-xl flex flex-col sm:flex-row gap-6 sm:gap-12 text-white">

//           <div>
//             <h3 className="text-xl sm:text-2xl md:text-3xl font-bold">
//               1,000+
//             </h3>
//             <p className="text-sm sm:text-base text-gray-300">
//               Khatu Shyam Darshan Served
//             </p>
//           </div>

//           <div>
//             <h3 className="text-xl sm:text-2xl md:text-3xl font-bold">
//               100+
//             </h3>
//             <p className="text-sm sm:text-base text-gray-300">
//               Mashik Kirtan Free
//             </p>
//           </div>

//         </div>
//       </div>

//     </div>
//   );
// };

// export default Home;


import React from "react";
import { FaPrayingHands, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import BookingCard from "../Components/BookingCard";
const Home = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-black">
      
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{ backgroundImage: "url('/shyamji.png')" }}
      ></div>

      {/* LEFT SIDE DARK GRADIENT (IMPORTANT FIX) */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#de7838] via-black/30 to-transparent"></div>

      {/* Main Content Wrapper */}
      <div className="relative z-10 flex flex-col  justify-between min-h-screen px-4 sm:px-6 md:px-12 lg:px-24 py-12 lg:py-20">
        
    

        {/* LEFT LOCKED CONTENT (KEY FIX) */}
        <div className="w-full max-w-[85%] sm:max-w-[70%] md:max-w-[55%] lg:max-w-[45%] xl:max-w-[40%]">

      <div className="flex items-center gap-3">
  <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight flex items-center gap-2 flex-wrap">
    
    {/* <span>Khatu</span> */}

    <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-red-500 to-yellow-500">
     Khatu Shyam Ji
    </span>

    {/* <span className="text-blue-400">Ji</span> */}

  </h1>

  {/* 🙏 Icon */}
  <FaPrayingHands className="text-amber-300 text-xl sm:text-2xl animate-bounce" />
</div>

          <p className="mt-5 text-base sm:text-lg md:text-xl text-gray-100 leading-relaxed">
            Welcome to the Divine Journey. Experience the peace, grace, and 
            unwavering faith at the feet of Haare Ka Sahara.
          </p>

          <div className="mt-40 md:mt-8">
            <Link
              to="/donate"
              className="group inline-flex items-center gap-3 bg-white text-red-600 font-bold px-6 py-3 sm:px-8 sm:py-4 rounded-full transition-all duration-300 hover:scale-105"
            >
              Donate Now
              <FaArrowRight className="transition-transform group-hover:translate-x-2" />
            </Link>
          </div>
        </div>

        {/* BOTTOM STATS (LEFT SAFE ZONE) */}
        <div className="w-full max-w-[85%] sm:max-w-[70%] md:max-w-[55%] lg:max-w-[45%] xl:max-w-[40%] mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">

          <div className="p-4 sm:p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
            <h3 className="text-2xl sm:text-3xl font-bold text-white">1,000+</h3>
            <p className="text-white text-xs sm:text-sm uppercase tracking-wider">
              Darshan Served
            </p>
          </div>

          <div className="p-4 sm:p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
            <h3 className="text-2xl sm:text-3xl font-bold text-white">100+</h3>
            <p className="text-white text-xs sm:text-sm uppercase tracking-wider">
              Mashik Kirtan Free
            </p>
          </div>

        </div>
    {/* ✅ BOOKING CARD FIXED RIGHT */}
        <div className="mt-10 lg:mt-5 lg:absolute lg:top-1/3 lg:right-10 transform lg:-translate-y-1/2">
          <BookingCard />
        </div>
      </div>

      {/* Decorative Icon (Safe Right Side) */}
      
    </div>
    
  );
};

export default Home;







