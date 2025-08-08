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
    <section className="py-10 px-4 sm:px-6 lg:px-8 bg-gray-50">
<div className="flex justify-center">
 <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center border-b-4 border-red-600 inline-block mx-auto">
  Events
</h2>
</div>


      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {causes.map((cause, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md overflow-hidden transition hover:shadow-xl flex flex-col"
          >
            <div className="relative">
              <img
                src={cause.image}
                alt={cause.title || "Event image"}
                className="w-full h-60 object-cover"
              />
             
            </div>
            <div className="p-5 flex-grow flex flex-col justify-between">
              <div>
                <h3 className="text-lg sm:text-xl font-semibold mb-3">
                  {cause.title || "Khatu Shyam Event"}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base line-clamp-4">
                  {cause.description}
                </p>
              </div>
              <div className="flex items-center justify-between border-t pt-4 mt-4">
                <div className="w-10 h-1 bg-gray-300" />
                <span className="text-red-600 font-semibold text-sm cursor-pointer hover:underline">
                  Read More
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <hr className="border border-gray-300 my-10" />
    </section>
  );
}
