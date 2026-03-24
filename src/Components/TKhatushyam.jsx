// import React from "react";

// const causes = [
//   {
//     title: "Khatu Shyam Event",
//     description:
//       "Khatu Shyam Maharaj is a divine manifestation of Lord Krishna, known for his boundless grace and compassion towards his devotees. Peace, and divine love. Mahabharata who took a vow to serve Lord Krishna.",
//     image:
//       "https://hindi.cdn.zeenews.com/hindi/sites/default/files/2023/03/06/1640217-baba-khatu-shyam-ji.jpeg?im=FitAndFill=(1200,900)",
//   },
//   {
//     title: "Shyam Rang Mein Rangi Shaam",
//     description:
//       "The main deity of Khatu Shyam is believed to be the form of Barbarik, a warrior from the Mahabharata who took a vow to serve Lord Krishna.",
//     image:
//       "https://i.pinimg.com/originals/7d/2b/80/7d2b80bb1c4a0e0faa2ed1170171e36f.jpg",
//   },
//   {
//     title: "Bhakti Ki Shaam, Shyam Ke Naam",
//     description:
//       "The Khatu Shyam temple is also famous for its beautiful architecture, featuring intricately carved pillars, ornate domes, and stunning artwork depicting Lord Krishna.",
//     image:
//       "https://wallpaperbat.com/img/1439823-shri-khatu-shyam-kund-darshan-wallpaper-photo-gallery-hd-nature-wallpaper-funny-faces-image.jpg",
//   },
// ];

// export default function PopularCauses() {
//   return (
//     <section className="py-10 px-4 sm:px-6 lg:px-8 bg-gray-50">
// <div className="flex justify-center">
//  <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center border-b-4 border-red-600 inline-block mx-auto">
//   Events
// </h2>
// </div>


//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
//         {causes.map((cause, index) => (
//           <div
//             key={index}
//             className="bg-white rounded-xl shadow-md overflow-hidden transition hover:shadow-xl flex flex-col"
//           >
//             <div className="relative">
//               <img
//                 src={cause.image}
//                 alt={cause.title || "Event image"}
//                 className="w-full h-60 object-cover"
//               />
             
//             </div>
//             <div className="p-5 flex-grow flex flex-col justify-between">
//               <div>
//                 <h3 className="text-lg sm:text-xl font-semibold mb-3">
//                   {cause.title || "Khatu Shyam Event"}
//                 </h3>
//                 <p className="text-gray-600 text-sm sm:text-base line-clamp-4">
//                   {cause.description}
//                 </p>
//               </div>
//               <div className="flex items-center justify-between border-t pt-4 mt-4">
//                 <div className="w-10 h-1 bg-gray-300" />
//                 <span className="text-red-600 font-semibold text-sm cursor-pointer hover:underline">
//                   Read More
//                 </span>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       <hr className="border border-gray-300 my-10" />
//     </section>
//   );
// }




import React from "react";


const causes = [
  {
    title: "Khatu Shyam Event",
    description:
      "Khatu Shyam Maharaj is a divine manifestation of Lord Krishna, known for his boundless grace and compassion towards his devotees. Peace, and divine love. Mahabharata who took a vow to serve Lord Krishna.",
    image:
      "https://hindi.cdn.zeenews.com/hindi/sites/default/files/2023/03/06/1640217-baba-khatu-shyam-ji.jpeg?im=FitAndFill=(1200,900)",
  },
  {
    title: "Shyam Rang Mein Rangi Shaam",
    description:
      "The main deity of Khatu Shyam is believed to be the form of Barbarik, a warrior from the Mahabharata who took a vow to serve Lord Krishna.",
    image:
      "https://i.pinimg.com/originals/7d/2b/80/7d2b80bb1c4a0e0faa2ed1170171e36f.jpg",
  },
  {
    title: "Bhakti Ki Shaam, Shyam Ke Naam",
    description:
      "The Khatu Shyam temple is also famous for its beautiful architecture, featuring intricately carved pillars, ornate domes, and stunning artwork depicting Lord Krishna.",
    image:
      "https://wallpaperbat.com/img/1439823-shri-khatu-shyam-kund-darshan-wallpaper-photo-gallery-hd-nature-wallpaper-funny-faces-image.jpg",
  },
];

export default function PopularCauses() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#fdfdfd]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-900 text-center relative inline-block tracking-tight uppercase">
            Events
            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-red-600 rounded-full"></span>
          </h2>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {causes.map((cause, index) => (
            <div key={index} className="relative group">
              
              {/* The "Balloon" Glow - Enhanced visibility */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[80%] bg-gradient-to-tr from-red-500/30 to-orange-400/30 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none"></div>
              
              <article
                className="relative z-10 bg-white rounded-[1rem] border border-gray-100 overflow-hidden transition-all duration-500 shadow-sm group-hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] group-hover:-translate-y-3 flex flex-col h-full"
              >
                {/* Image Container */}
                <div className="relative overflow-hidden aspect-[16/10]">
                  <img
                    src={cause.image}
                    alt={cause.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* Content Section */}
                <div className="p-7 flex-grow flex flex-col justify-center">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 group-hover:text-red-600 transition-colors duration-300 leading-tight">
                    {cause.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed ">
                    {cause.description}
                  </p>
{/* Light Pink "Balloon" Circle - Replicating image bottom-right corner */}
                  <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-pink-100 rounded-full opacity-60 pointer-events-none"></div>
                 
                </div>
              </article>
            </div>
          ))}
        </div>

        {/* Minimal Footer */}
        <div className="mt-8 flex flex-col items-center">
          <span className="text-[10px] uppercase tracking-[0.5em] text-gray-400 font-bold">
            Shri Shyam Foundation
          </span>
                    <div className="w-10 h-[2px] bg-pink-200 mt-4"></div>

        </div>
      </div>
    </section>
  );
}