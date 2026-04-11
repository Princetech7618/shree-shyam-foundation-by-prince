"use client";

import React from "react";
import { Phone } from "lucide-react";

const BookingBanner = () => {
  return (
    <section className="w-full py-10 px-4 sm:px-6 md:px-10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-1 gap-6 items-center">

        {/* LEFT IMAGE */}
        <div className="w-full h-full overflow-hidden rounded-xl">
          <img
            src="/new3.jpeg" // 👉 apni image yaha daal
            alt="Booking"
            className="w-full h-full object-cover hover:scale-105 transition duration-700"
          />
        </div>


      </div>
    </section>
  );
};

export default BookingBanner;