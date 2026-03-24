import React from "react";
import { FaCalendarCheck, FaPhoneAlt } from "react-icons/fa";

const BookingCard = () => {
  return (
    <div className="w-full lg:w-[350px] flex justify-center lg:justify-end">
      <div className="relative group w-full max-w-[350px]">
        
        {/* Glow */}
        <div className="absolute -inset-1 bg-gradient-to-r from-yellow-500 to-red-600 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
        
        <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 p-6 sm:p-8 rounded-3xl shadow-2xl">
          
          <div className="bg-pink-500/20 w-14 h-14 rounded-2xl flex items-center justify-center mb-6">
            <FaCalendarCheck className="text-white text-2xl" />
          </div>
          
          <h2 className="text-white text-2xl font-bold mb-2">Seat Booking</h2>

          <p className="text-gray-100 text-sm mb-6 font-medium">
            सीट बुकिंग के लिए अभी संपर्क करें और अपनी आध्यात्मिक यात्रा सुनिश्चित करें।
          </p>

          <div className="space-y-4">
            <a 
              href="tel:9990419733" 
              className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/20 transition-all group/item"
            >
              <div className="bg-green-500 rounded-full p-3 group-hover/item:scale-110 transition-transform">
                <FaPhoneAlt className="text-white text-sm" />
              </div>
              <div>
                <p className="text-gray-100 text-xs font-semibold uppercase">Call Support</p>
                <p className="text-white text-lg font-bold">9990419733</p>
              </div>
            </a>
          </div>

          <div className="mt-6 pt-6 border-t border-white/10 text-center">
            <span className="text-white text-lg">
              "हारे का सहारा, बाबा श्याम हमारा"
            </span>
          </div>

        </div>
      </div>
    </div>
  );
};

export default BookingCard;