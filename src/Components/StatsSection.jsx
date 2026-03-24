// import React from 'react';
// import { CalendarPlus, HeartPulse, HandHeart, Users } from "lucide-react";

// const stats = [
//   { icon: <CalendarPlus size={48} />, number: 1000, label: "Finished khatu Shyam Event" },
//   { icon: <HeartPulse size={48} />, number: 1000, label: "Shyam Sandhya Kirtan" },
//   { icon: <HandHeart size={48} />, number: 120, label: "Nishulk Seva  5000+" },
// ];

// const StatsSection = () => {
//   return (
//     <>
//       <section className="bg-red-700 bg-opacity-90 text-white py-8 sm:py-10 lg:py-12 w-full">
//         <div className="w-full px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 text-center">
//             {stats.map((item, index) => (
//               <div key={index} className="flex flex-col items-center gap-3">
//                 {item.icon}
//                 <p className="text-2xl font-bold">{item.number}</p>
//                 <p className="text-base sm:text-lg">{item.label}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//       <hr className="border border-gray-200 my-10" />
//     </>
//   );
// };

// export default StatsSection;



import React from 'react';
import { CalendarPlus, HeartPulse, HandHeart } from "lucide-react";

const stats = [
  { icon: <CalendarPlus size={48} />, number: 1000, label: "Finished khatu Shyam Event" },
  { icon: <HeartPulse size={48} />, number: 1000, label: "Shyam Sandhya Kirtan" },
  { icon: <HandHeart size={48} />, number: 120, label: "Nishulk Seva  5000+" },
];



const StatsSection = () => {





  return (

    <section className="py-10 px-4 bg-[#fdfdfd] overflow-hidden">

      <style jsx>{`

        @keyframes float {

          0%, 100% { transform: translateY(0px) rotate(0deg); }

          50% { transform: translateY(-20px) rotate(2deg); }

        }

        .animate-float {

          animation: float 6s ease-in-out infinite;

        }

        .animate-float-delayed {

          animation: float 6s ease-in-out infinite;

          animation-delay: 2s;

        }

        .animate-float-slow {

          animation: float 8s ease-in-out infinite;

          animation-delay: 1s;

        }

      `}</style>



      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 px-5 md:px-10">

          {stats.map((item, index) => (

            <div 

              key={index} 

              className={`relative group ${

                index === 0 ? 'animate-float' : index === 1 ? 'animate-float-delayed' : 'animate-float-slow'

              }`}

            >

              

              {/* Creative Balloon Glow */}

              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-red-400/20 rounded-full blur-[50px] group-hover:bg-red-500/40 group-hover:scale-150 transition-all duration-1000"></div>



              {/* Main Card */}

              <div className="relative bg-white/80 backdrop-blur-sm rounded-[1rem] p-4 border border-gray-100 shadow-xl transition-all duration-500 group-hover:shadow-red-200/50 group-hover:scale-105 active:scale-95 flex flex-col items-center text-center h-full">

                

                {/* Balloon "String" Visual */}

                <div className="absolute -bottom-12 left-1/2 w-[2px] h-12 bg-gradient-to-b from-gray-200 to-transparent"></div>



                {/* Animated Icon Circle */}

                <div className="mb-8 relative">

                  <div className="absolute inset-0 bg-red-500 rounded-full scale-0 group-hover:scale-110 transition-transform duration-500 ease-out"></div>

                  <div className="relative p-6 rounded-full bg-red-50 text-red-600 group-hover:text-red-600 transition-colors duration-500 shadow-inner">

                    {React.cloneElement(item.icon, { 

                      className: "w-10 h-10 transform group-hover:rotate-12 transition-transform" 

                    })}

                  </div>

                </div>



                {/* Counter & Label */}

                <div className="space-y-3">

                  <h3 className="text-5xl font-semibold text-gray-900 tracking-tight">

                    {item.number}+

                  </h3>

                  

                  {/* Decorative underline that expands */}

                  <div className="relative h-1.5 w-12 mx-auto overflow-hidden rounded-full bg-gray-100">

                    <div className="absolute inset-0 bg-red-500 translate-x-[-100%] group-hover:translate-x-[0%] transition-transform duration-700"></div>

                  </div>



                  <p className="text-xl font-semibold text-red-500/80 uppercase tracking-[0.3em] pt-2">

                    {item.label}

                  </p>

                </div>



                {/* Subtle "Light Reflection" on the balloon card */}

                <div className="absolute top-4 left-6 w-8 h-4 bg-white/60 rounded-full rotate-[-35deg] filter blur-sm"></div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>

  );

};





export default StatsSection;