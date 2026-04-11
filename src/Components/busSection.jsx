// import React from 'react';

// const NewsCard = ({ image, date, title, excerpt, contact1, contact2 }) => (
//   <div className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col md:flex-row transition-transform hover:scale-[1.02]">
//     <img
//       src={image}
//       alt={title}
//       className="w-full md:w-1/2 h-64 sm:h-72 md:h-auto object-cover"
//     />
//     <div className="p-4 sm:p-6 flex flex-col justify-between">
//       <div>
//         <p className="text-gray-600 text-xs sm:text-sm mb-2">{date}</p>
//         <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">{title}</h2>
//         <p className="text-gray-500 text-sm sm:text-base">{excerpt}</p>
//       </div>
//       <div className="mt-4 sm:mt-6">
//         {/* "No More" Text Above Contacts */}
//         <p className="text-left text-sm sm:text-base font-semibold text-gray-600 mb-3">No More</p>

//         {/* Contact Numbers Section */}
//         <div className="text-sm sm:text-base text-gray-600 mb-3">
//           <p>
//             Contact 1: <a href={`tel:${contact1}`} className="text-blue-500 no-underline hover:text-blue-600">{contact1}</a>
//           </p>
//           <p>
//             Contact 2: <a href={`tel:${contact2}`} className="text-blue-500 no-underline hover:text-blue-600">{contact2}</a>
//           </p>
//         </div>

//         <hr className="w-10 sm:w-12 border-gray-300 mb-2" />
//       </div>
//     </div>
//   </div>
// );

// const NewsSection = () => {
//   return (
//     <section className="bg-[#f1faf5] py-10 sm:py-12 px-4 sm:px-6 lg:px-12">
//       <div className="justify-center flex">
//         <h2 className="items-center text-center text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-10 sm:mb-12 relative inline-block">
//           Upcoming Events
//           <span className="block w-1/2 sm:w-full h-1 bg-gray-900 absolute -bottom-2 left-1/2 transform -translate-x-1/2"></span>
//         </h2>
//       </div>
// <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-6 sm:gap-8">
//   {/* Image 1 */}
//   <div className="text-center">
//     <img src="/contact2.jpeg" alt="Image 1" className="w-full h-auto object-cover rounded-lg shadow" />
//     <div className="mt-2 flex space-y-1 bg-red-900 justify-center gap-4">
//       <a href="tel:+919999041971" className="text-white font-bold block">+91 9999041971,</a>
//       <a href="tel:+918178069222" className="text-white block font-bold">+91 8178069222</a>
//     </div>
//   </div>

//   {/* Image 2 */}
//   <div className="text-center">
//     <img src="/contact3.jpeg" alt="Image 2" className="w-full h-auto object-cover rounded-lg shadow" />
//     <div className="mt-2 flex space-y-1 bg-red-900 justify-center gap-4">
//       <a href="tel:+919999041971" className="text-white font-bold block">+91 9999041971,</a>
//       <a href="tel:+918178069222" className="text-white block font-bold">+91 8178069222</a>
//     </div>
//   </div>

//   {/* Image 3 */}
//   <div className="text-center">
//     <img src="/contact1.jpeg" alt="Image 3" className="w-full h-auto object-cover rounded-lg shadow" />
//     <div className="mt-2 flex bg-red-900 space-y-1 justify-center gap-4">
//       <a href="tel:+919999041971" className="text-white font-bold block">+91 9999041971,</a>
//       <a href="tel:+918178069222" className="text-white block font-bold">+91 8178069222</a>
//     </div>
//   </div>
// </div>

//       <hr className="border border-gray-200 my-8 sm:my-10" />
//     </section>
//   );
// };

// export default NewsSection;







import React from "react";
import { Phone, ArrowRight, ArrowUpRight } from "lucide-react";
import {FaCalendarCheck } from 'react-icons/fa';
import NewPackage from "../Components/NewPackege";
const NewsSection = () => {
  const events = [
     
 
    {
      id: "01",
      img: "/2.jpeg",
      title: "Live Night",
      date: "APR 12",
      c1: "+91 9999041971",
      c2: "+91 9990419733",
      offset: "",
    },
    
     {
      id: "02",
      img: "/new2.jpeg",
      title: "Elite Meet",
      date: "MAY 05",
      c1: "+91 9999041971",
      c2: "+91 9990419733",
      offset: "",
    },
 {
      id: "03",
      img: "/new1.jpeg",
      title: "Elite Meet",
      date: "MAY 05",
      c1: "+91 9999041971",
      c2: "+91 9990419733",
      offset: "",
    },
   
 
  ];

  return (
    <section className="bg-[#fcfcfc] py-10 sm:py-14 px-4 sm:px-6 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="relative mb-16 sm:mb-20 flex flex-col items-center text-center">
          {/* <span className="text-red-600 font-bold tracking-[0.3em] sm:tracking-[0.4em] text-[10px] uppercase mb-4">
            The Collection
          </span> */}

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1a1a1a] tracking-tight leading-tight">
            Upcoming <br />
            <span className="font-serif italic font-light text-gray-400">
              Experiences
            </span>
          </h2>

          {/* <div className="absolute -bottom-5 w-1 h-12 bg-gradient-to-b from-red-600 to-transparent"></div> */}
        </div>

        {/* Grid */}
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-2 md:gap-3 lg:gap-4 px-10">          {events.map((event) => (
            <div
              key={event.id}
              className={`group relative flex flex-col ${event.offset} transition-all duration-700`}
            >
              {/* Image */}
              <div className="relative aspect-[4/6] overflow-hidden rounded-xl bg-gray-100 shadow-[0_15px_40px_rgba(0,0,0,0.08)] group-hover:shadow-[0_30px_70px_rgba(220,38,38,0.15)] transition-all duration-700">
                <img
                  src={event.img}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-red-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

           
            </div>
          ))}
        </div>
<NewPackage />
        {/* Booking Section */}
        <div className="mt-16 sm:mt-20">
          <div className="bg-gradient-to-r from-[#ff5d5c] via-[#fb4432] to-[#f97319] rounded-2xl sm:rounded-[2rem] p-6 sm:p-8 md:p-12 relative shadow-[0_20px_50px_rgba(220,38,38,0.25)] overflow-hidden">

            {/* Glow */}
            <div className="absolute top-0 right-0 w-40 sm:w-64 h-40 sm:h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 text-center md:text-left">

              {/* Left */}
              <div className="flex items-center gap-4 sm:gap-6">
                <div className=" hidden sm:flex w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white/20 items-center justify-center backdrop-blur-md">
                  <FaCalendarCheck className="text-white" size={28} />
                
                </div>
                  {/* 🛕 */}
                <div>
               <h4 className="text-white text-xl sm:text-2xl md:text-3xl font-semibold">
  पावन यात्रा हेतु अपनी सीट अभी आरक्षित करें
</h4>
<p className="text-red-100 text-xs sm:text-sm font-medium uppercase tracking-wider mt-1">
  सीमित सीटें उपलब्ध — पुण्य प्राप्ति का अवसर
</p>
                </div>
              </div>

              {/* Right CTA */}
              <div
            
                className="group flex items-center gap-4 bg-white px-6 sm:px-8 py-4 sm:py-5 rounded-xl sm:rounded-2xl transition-all hover:scale-[1.03] active:scale-95 shadow-lg"
              >
                <div className="flex flex-col items-start">
                  <span className="text-[9px] sm:text-[10px] font-semibold text-red-600 uppercase tracking-widest mb-1">
                    For Booking
                  </span>
                  <a 
                  href="tel:+919990419733"
                  className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900">
                    9990419733
                  </a>
                    <a 
                    href="tel:+919990204197"
                    className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900">
                  9990204197
                  </a>
                </div>

                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-red-50 flex items-center justify-center group-hover:bg-red-600 group-hover:text-white transition-colors">
                  <Phone size={18} />
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default NewsSection;