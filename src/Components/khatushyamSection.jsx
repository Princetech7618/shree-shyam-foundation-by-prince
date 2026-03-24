// import React from "react";
// import { Link } from 'react-router-dom';

// const helpItems = [
//   {
//     title: "The Legend of Barbarika",
//     image:
//       "https://th.bing.com/th/id/R.f838575191151ae77e46f4b34633b446?rik=pvuTCK3OELs8Vg&riu=http%3a%2f%2fmixingimages.in%2fwp-content%2fuploads%2f2023%2f06%2fKhatu-Shyam-Image-Wallpaper.jpg&ehk=tCPuAm%2bhVCF7xT12wzzztlzmF90u8vMXrnR%2fChFs3ys%3d&risl=&pid=ImgRaw&r=0",
//     description:
//       "Khatu Shyam Ji, a revered deity in Hinduism, is believed to be the incarnation of Barbarik, the grandson of Bhima and the son of Ghatotkacha.",
//     link: "temple" // Unique link for this Card
//   },
//   {
//     title: "Shree Shyam Foundation",
//     image:
//       "https://www.craftoapp.com/_next/image/?url=https%3A%2F%2Fmedia.crafto.app%2Fhome%2F900x900%2Fc8c0d924-ee72-4d57-bbe5-ace0f59d8148%3Fdimension%3D900x900%26type%3DDevotional&w=3840&q=60",
//     description:
//       "Khatu Shyam Ji, also known as Barbarika, is a revered deity worshipped for his power, devotion, and promise to protect his devotees. The temple in Khatu.",
//     link: "/about" // Unique link for this card
//   },
//   {
//     title: "Shree Shyam Darshan",
//     image:
//       "https://www.templedarshanyatri.com/upload/mandir/khatu-shyam-mandir.jpg",
//     description:
//       "Khatu Shyam Ji, a revered deity in Hinduism, is believed to be the manifestation of Barbarika, the grandson of Bhima (from the Mahabharata).",
//     link: "/darshan" // Unique link for this card
//   },
// ];

// export default function ReasonSection() {
//   return (
//     <>
//       <section className="py-4 bg-white text-center">
//         {/* Section Heading */}
        // <h1 className="text-3xl md:text-5xl font-bold text-center my-6">
        //   Divine <span className="animate-pulse text-blue-800">Glimpses</span> of Shyam Baba
        // </h1>

//         {/* Card Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 max-w-7xl mx-auto">
//           {helpItems.map((item, index) => (
//             <div
//               key={index}
//               className="bg-white rounded-2xl shadow-md overflow-hidden transition-transform hover:scale-[1.02]"
//             >
//               <img
//                 src={item.image}
//                 alt={item.title}
//                 className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105 rounded-t-2xl"
//               />
//               <div className="p-6 text-left">
//                 <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900 mb-3">
//                   {item.title}
//                 </h3>
//                 <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-4">
//                   {item.description}
//                 </p>
//                 <div className="flex justify-between items-center text-gray-500 text-sm sm:text-base">
//                   <span className="block w-8 h-1 bg-gray-400 rounded-full"></span>
//                   <Link to={item.link} className="font-semibold cursor-pointer hover:underline">
//                     Read More
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Divider */}
//       <hr className="border border-gray-200 my-10" />
//     </>
//   );
// }





import React from "react";
import { Link } from 'react-router-dom';


const helpItems = [
  {
    title: "The Legend of Barbarika",
    image:
      "https://th.bing.com/th/id/R.f838575191151ae77e46f4b34633b446?rik=pvuTCK3OELs8Vg&riu=http%3a%2f%2fmixingimages.in%2fwp-content%2fuploads%2f2023%2f06%2fKhatu-Shyam-Image-Wallpaper.jpg&ehk=tCPuAm%2bhVCF7xT12wzzztlzmF90u8vMXrnR%2fChFs3ys%3d&risl=&pid=ImgRaw&r=0",
    description:
      "Khatu Shyam Ji, a revered deity in Hinduism, is believed to be the incarnation of Barbarik, the grandson of Bhima and the son of Ghatotkacha.",
    link: "temple" // Unique link for this Card
  },
  {
    title: "Shree Shyam Foundation",
    image:
      "https://www.craftoapp.com/_next/image/?url=https%3A%2F%2Fmedia.crafto.app%2Fhome%2F900x900%2Fc8c0d924-ee72-4d57-bbe5-ace0f59d8148%3Fdimension%3D900x900%26type%3DDevotional&w=3840&q=60",
    description:
      "Khatu Shyam Ji, also known as Barbarika, is a revered deity worshipped for his power, devotion, and promise to protect his devotees. The temple in Khatu.",
    link: "/about" // Unique link for this card
  },
  {
    title: "Shree Shyam Darshan",
    image:
      "https://www.templedarshanyatri.com/upload/mandir/khatu-shyam-mandir.jpg",
    description:
      "Khatu Shyam Ji, a revered deity in Hinduism, is believed to be the manifestation of Barbarika, the grandson of Bhima (from the Mahabharata).",
    link: "/darshan" // Unique link for this card
  },
];

export default function ReasonSection() {
  return (
    <section className="py-16 bg-gray-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
           <h2 className="text-3xl md:text-5xl font-bold text-center my-6">
          Divine <span className="animate-pulse text-red-600">Glimpses</span> of Shyam Baba
        </h2>
          <div className="mt-4 w-24 h-1.5 bg-red-600 mx-auto rounded-full shadow-lg"></div>
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {helpItems.map((item, index) => (
            <Link 
              to={item.link} 
              key={index}
              className="group  relative flex flex-col bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 ease-out overflow-hidden hover:-translate-y-2 "
            >
              {/* --- SIDE COLOR EFFECT --- */}
              {/* <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#f01613de] transition-all duration-500 group-hover:w-2 z-20"></div> */}
{/* Light Pink "Balloon" Circle - Replicating image bottom-right corner */}
                  <div className="absolute -bottom-8 -right-8 w-20 h-20 bg-pink-100 rounded-full opacity-60 pointer-events-none"></div>              
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                {/* Subtle side shadow overlay */}
                <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Content Container */}
              <div className="p-8 flex flex-col flex-grow relative">


                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#f01613de] transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-8 line-clamp-3">
                  {item.description}
                </p>
                
                {/* Bottom Action Area */}
                <div className="mt-auto flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <span className="w-6 h-[2px] bg-[#f01613de] group-hover:w-10 transition-all duration-300"></span>
                    <span className="text-sm font-bold uppercase tracking-widest text-[#f01613de]">
                      Explore
                    </span>
                  </div>
                  
                  {/* Styled Arrow Button */}
                  <div className="bg-red-50 p-2.5 rounded-xl text-[#f01613de] group-hover:bg-[#f01613de] group-hover:text-white transition-all duration-300 transform group-hover:rotate-[-45deg]">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-5 w-5" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

       
      </div>
    </section>
  );
}