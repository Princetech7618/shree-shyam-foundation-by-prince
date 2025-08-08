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
      "https://wallpaperbat.com/img/1439890-khatu-shyam-packers-and-movers-in-alawalpur-palwal-transporters-in-palwal.jpg",
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
    <>
      <section className="py-4 bg-white text-center">
        {/* Section Heading */}
        <h1 className="text-3xl md:text-5xl font-bold text-center my-6">
          Divine <span className="animate-pulse text-blue-800">Glimpses</span> of Shyam Baba
        </h1>

        {/* Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 max-w-7xl mx-auto">
          {helpItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md overflow-hidden transition-transform hover:scale-[1.02]"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105 rounded-t-2xl"
              />
              <div className="p-6 text-left">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-4">
                  {item.description}
                </p>
                <div className="flex justify-between items-center text-gray-500 text-sm sm:text-base">
                  <span className="block w-8 h-1 bg-gray-400 rounded-full"></span>
                  <Link to={item.link} className="font-semibold cursor-pointer hover:underline">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <hr className="border border-gray-200 my-10" />
    </>
  );
}
