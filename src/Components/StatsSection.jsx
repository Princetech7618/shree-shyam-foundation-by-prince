import React from 'react';
import { CalendarPlus, HeartPulse, HandHeart, Users } from "lucide-react";

const stats = [
  { icon: <CalendarPlus size={48} />, number: 1000, label: "Finished khatu Shyam Event" },
  { icon: <HeartPulse size={48} />, number: 1000, label: "Shyam Sandhya Kirtan" },
  { icon: <HandHeart size={48} />, number: 120, label: "Nishulk Seva  5000+" },
];

const StatsSection = () => {
  return (
    <>
      <section className="bg-red-700 bg-opacity-90 text-white py-8 sm:py-10 lg:py-12 w-full">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 text-center">
            {stats.map((item, index) => (
              <div key={index} className="flex flex-col items-center gap-3">
                {item.icon}
                <p className="text-2xl font-bold">{item.number}</p>
                <p className="text-base sm:text-lg">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <hr className="border border-gray-200 my-10" />
    </>
  );
};

export default StatsSection;
