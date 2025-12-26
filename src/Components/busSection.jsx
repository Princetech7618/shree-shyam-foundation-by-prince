import React from 'react';

const NewsCard = ({ image, date, title, excerpt, contact1, contact2 }) => (
  <div className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col md:flex-row transition-transform hover:scale-[1.02]">
    <img
      src={image}
      alt={title}
      className="w-full md:w-1/2 h-64 sm:h-72 md:h-auto object-cover"
    />
    <div className="p-4 sm:p-6 flex flex-col justify-between">
      <div>
        <p className="text-gray-600 text-xs sm:text-sm mb-2">{date}</p>
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">{title}</h2>
        <p className="text-gray-500 text-sm sm:text-base">{excerpt}</p>
      </div>
      <div className="mt-4 sm:mt-6">
        {/* "No More" Text Above Contacts */}
        <p className="text-left text-sm sm:text-base font-semibold text-gray-600 mb-3">No More</p>

        {/* Contact Numbers Section */}
        <div className="text-sm sm:text-base text-gray-600 mb-3">
          <p>
            Contact 1: <a href={`tel:${contact1}`} className="text-blue-500 no-underline hover:text-blue-600">{contact1}</a>
          </p>
          <p>
            Contact 2: <a href={`tel:${contact2}`} className="text-blue-500 no-underline hover:text-blue-600">{contact2}</a>
          </p>
        </div>

        <hr className="w-10 sm:w-12 border-gray-300 mb-2" />
      </div>
    </div>
  </div>
);

const NewsSection = () => {
  return (
    <section className="bg-[#f1faf5] py-10 sm:py-12 px-4 sm:px-6 lg:px-12">
      <div className="justify-center flex">
        <h2 className="items-center text-center text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-10 sm:mb-12 relative inline-block">
          Upcoming Events
          <span className="block w-1/2 sm:w-full h-1 bg-gray-900 absolute -bottom-2 left-1/2 transform -translate-x-1/2"></span>
        </h2>
      </div>
<div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-6 sm:gap-8">
  {/* Image 1 */}
  <div className="text-center">
    <img src="/contact2.jpeg" alt="Image 1" className="w-full h-auto object-cover rounded-lg shadow" />
    <div className="mt-2 flex space-y-1 bg-red-900 justify-center gap-4">
      <a href="tel:+919999041971" className="text-white font-bold block">+91 9999041971,</a>
      <a href="tel:+918178069222" className="text-white block font-bold">+91 8178069222</a>
    </div>
  </div>

  {/* Image 2 */}
  <div className="text-center">
    <img src="/contact3.jpeg" alt="Image 2" className="w-full h-auto object-cover rounded-lg shadow" />
    <div className="mt-2 flex space-y-1 bg-red-900 justify-center gap-4">
      <a href="tel:+919999041971" className="text-white font-bold block">+91 9999041971,</a>
      <a href="tel:+918178069222" className="text-white block font-bold">+91 8178069222</a>
    </div>
  </div>

  {/* Image 3 */}
  <div className="text-center">
    <img src="/contact1.jpeg" alt="Image 3" className="w-full h-auto object-cover rounded-lg shadow" />
    <div className="mt-2 flex bg-red-900 space-y-1 justify-center gap-4">
      <a href="tel:+919999041971" className="text-white font-bold block">+91 9999041971,</a>
      <a href="tel:+918178069222" className="text-white block font-bold">+91 8178069222</a>
    </div>
  </div>
</div>

      <hr className="border border-gray-200 my-8 sm:my-10" />
    </section>
  );
};

export default NewsSection;
