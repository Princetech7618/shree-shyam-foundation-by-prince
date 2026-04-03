// import React from "react";

// export default function ActivitiesSection() {
//   return (
//     <div className="min-h-screen bg-[#f4fcf8] flex flex-col md:flex-row items-center justify-center px-4 py-4 md:py-4 lg:py-4 gap-10">
      
//       {/* Left Image Section */}
//       <div className="w-full md:w-1/2 flex justify-center">
//         <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl">
//           <img
//             src="https://th.bing.com/th/id/OIP.OUPUB_dG_O4exl3NIzM2XQHaEK?cb=iwp2&w=1600&h=900&rs=1&pid=ImgDetMain"
//             alt="Activities Poster"
//             className="w-full h-120 rounded-lg shadow-lg object-cover aspect-video"
//           />
//         </div>
//       </div>

//       {/* Right Text Section */}
//       <div className="w-full md:w-1/2 px-2 sm:px-6 lg:px-12 md:text-left">
//         <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
//           Shri Shyam Foundation{" "}
//           <span className="border-b-4 border-red-400 inline-block ml-2">
//             Latest Activities
//           </span>
//         </h2>

//         {/* Centered Hindi Heading */}
//         <div className="mt-4">
//           <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800">
//             श्री श्याम परिवार फाउंडेशन भोपुरा
//           </h1>
//           <div className="mt-2">
//             <p className="text-lg sm:text-xl font-semibold">
//               करने वाला श्याम, कराने वाले श्याम
//             </p>
//             <p className="text-lg sm:text-xl font-semibold">
//               मंडल से जुड़ने के लिए संपर्क करें।
//             </p>
//             <p className="text-lg sm:text-xl font-semibold text-red-700 mt-1">
//               📞 <a href="tel:+919999041971" className="hover:underline text-blue-600">+91 9999041971</a>
//             </p>
//           </div>
//         </div>

//         <h1 className="text-3xl font-bold text-red-700 mt-6 mb-6 text-center">
//           ॥ जय श्री श्याम ॥
//         </h1>

//         {/* Activities List */}
//         <div className="flex flex-col md:flex-row gap-6">
//           <ul className="space-y-3 text-lg w-full md:w-1/2">
//             {[
//               "मासिक धार्मिक बस यात्रा ।",
//               "वार्षिक श्री श्याम महोत्सव ।",
//               "वार्षिक श्री सुन्दरकाण्ड पाठ ।",
//               "जरूरत मंद व्यक्ति को चिकित्सा व दवाई उपलब्ध कराना ।",
//               "निःशुल्क मासिक श्री श्याम कीर्तन ।",
//               "निःशुल्क भंडारा व्यवस्था सेवा ।",
//             ].map((item, index) => (
//               <li key={index} className="flex items-start">
//                 <span className="text-orange-600 mr-2">🔸</span>
//                 <span>{item}</span>
//               </li>
//             ))}
//           </ul>

//           <ul className="space-y-3 text-lg w-full md:w-1/2">
//             {[
//               "निःशुल्क दवाइयां व्यवस्था सेवा ।",
//               "निःशुल्क प्रसाद वितरण व्यवस्था सेवा ।",
//               "निःशुल्क चरण पादुका सेवा ।",
//               "निःशुल्क जलपान व्यवस्था सेवा ।",
//               "इत्र सेवा ।",
//             ].map((item, index) => (
//               <li key={index} className="flex items-start">
//                 <span className="text-orange-600 mr-2">🔸</span>
//                 <span>{item}</span>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Contact Info */}
//         <div className="mt-8 text-md lg:text-lg font-bold text-gray-800 justify md:text-left">
//           श्री श्याम परिवार फाउंडेशन भोपुरा से जुड़ने के लिए संपर्क करें:
//           <br />
//           📞{" "}
//           <a href="tel:+919999041971" className="text-blue-600 hover:underline">
//             +91 99990 41971
//           </a>
//           ,{" "}
//           <a href="tel:+918178069222" className="text-blue-600 hover:underline">
//             +91 81780 69222
//           </a>
//           ,{" "}
//           <a href="tel:+919999041974" className="text-blue-600 hover:underline">
//             +91 9999041974
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }





import React from "react";

export default function ActivitiesSection() {
  const activitiesLeft = [
    "मासिक धार्मिक बस यात्रा ।",
    "वार्षिक श्री श्याम महोत्सव ।",
    "वार्षिक श्री सुन्दरकाण्ड पाठ ।",
    "जरूरत मंद व्यक्ति को चिकित्सा व दवाई उपलब्ध कराना ।",
    "निःशुल्क मासिक श्री श्याम कीर्तन ।",
    "निःशुल्क भंडारा व्यवस्था सेवा ।",
  ];

  const activitiesRight = [
    "निःशुल्क दवाइयां व्यवस्था सेवा ।",
    "निःशुल्क प्रसाद वितरण व्यवस्था सेवा ।",
    "निःशुल्क चरण पादुका सेवा ।",
    "निःशुल्क जलपान व्यवस्था सेवा ।",
    "इत्र सेवा ।",
  ];

  return (
    <section className="min-h-screen bg-[#f4fcf8] py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        
        {/* Left Image Section - Added Hover Effect & Decorative Elements */}
        <div className="w-full lg:w-5/12 relative">
          <div className="absolute -top-4 -left-4 w-24 h-24 bg-red-100 rounded-full blur-2xl opacity-60"></div>
          <div className="relative z-10 overflow-hidden rounded-2xl shadow-2xl transition-transform duration-500 hover:scale-[1.02]">
            <img
              src="https://th.bing.com/th/id/OIP.OUPUB_dG_O4exl3NIzM2XQHaEK?cb=iwp2&w=1600&h=900&rs=1&pid=ImgDetMain"
              alt="Activities Poster"
              className="w-full h-auto object-cover aspect-[4/5] sm:aspect-video lg:aspect-[3/4]"
            />
          </div>
          <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-orange-100 rounded-full blur-3xl opacity-60"></div>
        </div>

        {/* Right Text Section */}
        <div className="w-full lg:w-7/12">
          {/* Header Area */}
          <div className="space-y-4 mb-8">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-900 leading-tight">
              Shri Shyam Foundation{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-red-600">Latest Activities</span>
                <span className="absolute bottom-1 left-0 w-full h-3 bg-red-100 -z-10"></span>
              </span>
            </h2>
            
            <div className="border-l-4 border-orange-500 pl-4 py-2">
              <h1 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-1">
                श्री श्याम परिवार फाउंडेशन भोपुरा
              </h1>
              <p className="text-lg sm:text-xl font-medium text-gray-600 italic">
                "करने वाला श्याम, कराने वाले श्याम"
              </p>
            </div>
          </div>

          {/* Devotional Quote */}
          <div className="bg-white/50 backdrop-blur-sm border border-red-100 rounded-xl p-4 mb-8 text-center shadow-sm">
            <h3 className="text-3xl font-semibold text-red-700 tracking-widest">
              ॥ जय श्री श्याम ॥
            </h3>
          </div>

          {/* Activities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
            <ul className="space-y-4">
              {activitiesLeft.map((item, index) => (
                <li key={index} className="flex items-start group">
                  <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-orange-100 text-orange-600 mr-3 group-hover:bg-orange-600 group-hover:text-white transition-colors duration-300">
                    <span className="text-sm">🔸</span>
                  </span>
                  <span className="text-gray-700 font-medium leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <ul className="space-y-4">
              {activitiesRight.map((item, index) => (
                <li key={index} className="flex items-start group">
                  <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-orange-100 text-orange-600 mr-3 group-hover:bg-orange-600 group-hover:text-white transition-colors duration-300">
                    <span className="text-sm">🔸</span>
                  </span>
                  <span className="text-gray-700 font-medium leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Footer Section */}
          <div className="mt-10 pt-8 border-t border-gray-200">
            <p className="text-lg font-semibold text-gray-800 mb-4">
              मंडल से जुड़ने के लिए संपर्क करें:
            </p>
            <div className="flex flex-wrap gap-4">
              {[
                                { label: "Phone 1", num: "+91  9990419733" },

                { label: "Phone 2", num: "+91 9999041971" },
              ].map((phone, idx) => (
                <a
                  key={idx}
                  href={`tel:${phone.num.replace(/\s/g, '')}`}
                  className="flex items-center bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100 hover:shadow-md hover:border-red-200 transition-all text-blue-600 font-bold"
                >
                  <span className="mr-2 text-red-600">📞</span>
                  {phone.num}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}