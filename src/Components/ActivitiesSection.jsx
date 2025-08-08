import React from "react";

export default function ActivitiesSection() {
  return (
    <div className="min-h-screen bg-[#f4fcf8] flex flex-col md:flex-row items-center justify-center px-4 py-4 md:py-4 lg:py-4 gap-10">
      
      {/* Left Image Section */}
      <div className="w-full md:w-1/2 flex justify-center">
        <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl">
          <img
            src="https://th.bing.com/th/id/OIP.OUPUB_dG_O4exl3NIzM2XQHaEK?cb=iwp2&w=1600&h=900&rs=1&pid=ImgDetMain"
            alt="Activities Poster"
            className="w-full h-120 rounded-lg shadow-lg object-cover aspect-video"
          />
        </div>
      </div>

      {/* Right Text Section */}
      <div className="w-full md:w-1/2 px-2 sm:px-6 lg:px-12 md:text-left">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
          Shri Shyam Foundation{" "}
          <span className="border-b-4 border-red-400 inline-block ml-2">
            Latest Activities
          </span>
        </h2>

        {/* Centered Hindi Heading */}
        <div className="mt-4">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800">
            श्री श्याम परिवार फाउंडेशन भोपुरा
          </h1>
          <div className="mt-2">
            <p className="text-lg sm:text-xl font-semibold">
              करने वाला श्याम, कराने वाले श्याम
            </p>
            <p className="text-lg sm:text-xl font-semibold">
              मंडल से जुड़ने के लिए संपर्क करें।
            </p>
            <p className="text-lg sm:text-xl font-semibold text-red-700 mt-1">
              📞 <a href="tel:+919999041971" className="hover:underline text-blue-600">+91 9999041971</a>
            </p>
          </div>
        </div>

        <h1 className="text-3xl font-bold text-red-700 mt-6 mb-6 text-center">
          ॥ जय श्री श्याम ॥
        </h1>

        {/* Activities List */}
        <div className="flex flex-col md:flex-row gap-6">
          <ul className="space-y-3 text-lg w-full md:w-1/2">
            {[
              "मासिक धार्मिक बस यात्रा ।",
              "वार्षिक श्री श्याम महोत्सव ।",
              "वार्षिक श्री सुन्दरकाण्ड पाठ ।",
              "जरूरत मंद व्यक्ति को चिकित्सा व दवाई उपलब्ध कराना ।",
              "निःशुल्क मासिक श्री श्याम कीर्तन ।",
              "निःशुल्क भंडारा व्यवस्था सेवा ।",
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="text-orange-600 mr-2">🔸</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <ul className="space-y-3 text-lg w-full md:w-1/2">
            {[
              "निःशुल्क दवाइयां व्यवस्था सेवा ।",
              "निःशुल्क प्रसाद वितरण व्यवस्था सेवा ।",
              "निःशुल्क चरण पादुका सेवा ।",
              "निःशुल्क जलपान व्यवस्था सेवा ।",
              "इत्र सेवा ।",
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="text-orange-600 mr-2">🔸</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="mt-8 text-md lg:text-lg font-bold text-gray-800 justify md:text-left">
          श्री श्याम परिवार फाउंडेशन भोपुरा से जुड़ने के लिए संपर्क करें:
          <br />
          📞{" "}
          <a href="tel:+919999041971" className="text-blue-600 hover:underline">
            +91 99990 41971
          </a>
          ,{" "}
          <a href="tel:+918178069222" className="text-blue-600 hover:underline">
            +91 81780 69222
          </a>
          ,{" "}
          <a href="tel:+919999041974" className="text-blue-600 hover:underline">
            +91 9999041974
          </a>
        </div>
      </div>
    </div>
  );
}
