// import React from 'react'
// import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
// import { FaLocationArrow, FaPhoneAlt, FaEnvelope, FaAngleDoubleRight } from "react-icons/fa";
// import Hero from "./Hero";

// const Gallery = () => {
//   return (
//    <>
 
//    <Hero 
//    shlokHindi="जय श्री श्याम"
// mainTitleHindi="दिव्य दर्शन गैलरी"
// // descriptionHindi="बाबा श्याम के पावन दर्शन, भक्ति भरे क्षण और यादगार यात्रा के सुंदर दृश्य — एक ही स्थान पर।"
//       imageSrc="/shyamji.png"

//    />

   
// {/* photos */}
// <div className="p-4 px-2 lg:mx-20">
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

//         <img src="https://th.bing.com/th/id/OIP.cKiB4WkQKbsWTLEcUxzdUQHaFY?rs=1&pid=ImgDetMain" alt="img1" className="rounded shadow object-cover w-100 h-50" />
//         <img src="https://thumbs.dreamstime.com/b/beawar-rajasthan-india-march-idol-hindu-god-khatu-shyam-baba-form-lord-krishna-temple-spring-fagun-fair-ahead-214210054.jpg?w=768" alt="img2" className="rounded shadow object-cover w-100 h-50" />
//         <img src="https://th.bing.com/th/id/OIP.dcAGojT56K1_NUodzH4lkQAAAA?rs=1&pid=ImgDetMain" alt="img3" className=" w-100 h-50 rounded shadow object-cover" />
//         <img src="https://th.bing.com/th/id/OIP.Ql0unGF1cGf1-suH4U624QHaEK?w=290&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="img4" className=" w-100 h-50 rounded shadow object-cover" />
//         <img src="https://th.bing.com/th/id/OIP.NOskU5LOEIPU71R3YchuAAHaE8?rs=1&pid=ImgDetMain" alt="img5" className=" w-100 h-50 rounded shadow object-cover" />
//         <img src="https://www.backpacknxplore.com/wp-content/uploads/2019/05/gudibande-lake-1-min_thumb.jpg" alt="img6" className=" w-100 h-50 rounded shadow object-cover" />
//         <img src="https://th.bing.com/th/id/OIP.7vGarsIWD5mGOXvEfXLZlgHaJQ?w=1080&h=1350&rs=1&pid=ImgDetMain" alt="img7" className=" w-100 h-50 rounded shadow object-cover" />
//         <img src="https://th.bing.com/th/id/OIP.cKiB4WkQKbsWTLEcUxzdUQHaFY?rs=1&pid=ImgDetMain" alt="img8" className=" w-100 h-50 rounded shadow object-cover" />
//         <img src="https://th.bing.com/th/id/OIP.dcAGojT56K1_NUodzH4lkQAAAA?rs=1&pid=ImgDetMain" alt="img9" className=" w-100 h-50 rounded shadow object-cover" />
//         <img src="https://i.pinimg.com/originals/85/4a/88/854a884b891975d91780a91c922a5e14.jpg" alt="img10" className="w-100 h-50 rounded shadow object-cover" />
//         <img src="https://edge.ixigo.com/ixi-api/img/5355f573e4b0d8e5e1614435_600x315.jpg" alt="img1" className=" w-100 h-50 rounded shadow object-cover" />
//         <img src="https://th.bing.com/th/id/OIP.NOskU5LOEIPU71R3YchuAAHaE8?rs=1&pid=ImgDetMain" alt="img2" className=" w-100 h-50 rounded shadow object-cover" />
//         <img src="https://th.bing.com/th/id/OIP.SEm22UbQ7YAgTVF4ztuBBAHaDq?rs=1&pid=ImgDetMain" alt="img3" className=" w-100 h-50 rounded shadow object-cover" />
//         <img src="https://www.maharanacab.com/wp-content/uploads/2019/03/jaipur-to-khatu-shyamji-temple-taxi-1.jpg" alt="img4" className=" w-100 h-50 rounded shadow object-cover" />
//         <img src="https://bestbengaluru.com/wp-content/uploads/2024/06/khatu-shyam-temple.jpg" alt="img5" className=" w-100 h-50 rounded shadow object-cover" />
//         <img src="https://i.ytimg.com/vi/DeveX2uPLKo/maxresdefault_live.jpg" alt="img6" className=" w-100 h-50 rounded shadow object-cover" />
//         <img src="https://edge.ixigo.com/ixi-api/img/5355f573e4b0d8e5e1614435_600x315.jpg" alt="img7" className=" w-100 h-50 rounded shadow object-cover" />
//         <img src="https://th.bing.com/th/id/R.8071d7d1ff523f92bdd87aabb8d610de?rik=MUDa6f0mtrRxdg&riu=http%3a%2f%2fphotos.wikimapia.org%2fp%2f00%2f05%2f58%2f45%2f18_full.jpg&ehk=6BVNefjvKyAT8UITmM1eJhjCYpgFBwqyK1Bn8RDQ5KU%3d&risl=&pid=ImgRaw&r=0" alt="img8" className=" w-100 h-50 rounded shadow object-cover" />
//         <img src="https://th.bing.com/th/id/OIP.NOskU5LOEIPU71R3YchuAAHaE8?rs=1&pid=ImgDetMain" alt="img9" className=" w-100 h-50 rounded shadow object-cover" />
//         <img src="https://th.bing.com/th/id/OIP.SEm22UbQ7YAgTVF4ztuBBAHaDq?rs=1&pid=ImgDetMain" alt="img10" className=" w-100 h-50 rounded shadow object-cover" />

//       </div>
// </div>
//    </>
//   )
// }

// export default Gallery






import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Hero from "./Hero";
import { Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';
import TourPackage from './TourPackage';

const Gallery = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const images = [
    "https://th.bing.com/th/id/OIP.cKiB4WkQKbsWTLEcUxzdUQHaFY?rs=1&pid=ImgDetMain",
    "https://thumbs.dreamstime.com/b/beawar-rajasthan-india-march-idol-hindu-god-khatu-shyam-baba-form-lord-krishna-temple-spring-fagun-fair-ahead-214210054.jpg?w=768",
    "https://th.bing.com/th/id/OIP.dcAGojT56K1_NUodzH4lkQAAAA?rs=1&pid=ImgDetMain",
    "https://th.bing.com/th/id/OIP.Ql0unGF1cGf1-suH4U624QHaEK?w=290&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    // "https://th.bing.com/th/id/OIP.NOskU5LOEIPU71R3YchuAAHaE8?rs=1&pid=ImgDetMain",
    // "https://www.backpacknxplore.com/wp-content/uploads/2019/05/gudibande-lake-1-min_thumb.jpg",
    "https://th.bing.com/th/id/OIP.7vGarsIWD5mGOXvEfXLZlgHaJQ?w=1080&h=1350&rs=1&pid=ImgDetMain",
    "https://th.bing.com/th/id/OIP.cKiB4WkQKbsWTLEcUxzdUQHaFY?rs=1&pid=ImgDetMain",
    // "https://th.bing.com/th/id/OIP.dcAGojT56K1_NUodzH4lkQAAAA?rs=1&pid=ImgDetMain",
    "https://i.pinimg.com/originals/85/4a/88/854a884b891975d91780a91c922a5e14.jpg",
    "https://edge.ixigo.com/ixi-api/img/5355f573e4b0d8e5e1614435_600x315.jpg",
    // "https://th.bing.com/th/id/OIP.NOskU5LOEIPU71R3YchuAAHaE8?rs=1&pid=ImgDetMain",
    "https://th.bing.com/th/id/OIP.SEm22UbQ7YAgTVF4ztuBBAHaDq?rs=1&pid=ImgDetMain",
    "https://www.maharanacab.com/wp-content/uploads/2019/03/jaipur-to-khatu-shyamji-temple-taxi-1.jpg",
    // "https://bestbengaluru.com/wp-content/uploads/2024/06/khatu-shyam-temple.jpg",
    // "https://i.ytimg.com/vi/DeveX2uPLKo/maxresdefault_live.jpg",
    // "https://edge.ixigo.com/ixi-api/img/5355f573e4b0d8e5e1614435_600x315.jpg",
    // "https://th.bing.com/th/id/R.8071d7d1ff523f92bdd87aabb8d610de",
    // "https://th.bing.com/th/id/OIP.NOskU5LOEIPU71R3YchuAAHaE8?rs=1&pid=ImgDetMain",
    // "https://th.bing.com/th/id/OIP.SEm22UbQ7YAgTVF4ztuBBAHaDq?rs=1&pid=ImgDetMain",
    "ujjain.avif",
    "ayodhya.jpg",
    "sheating1.avif",
    "tourpackege1.jpg",
        "tourpackege2.jpg",
        "khatushyam.jpg",

  ];

  const nextImage = () => {
    setSelectedIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setSelectedIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="min-h-screen text-white">

      <Hero 
        shlokHindi="जय श्री श्याम"
        mainTitleHindi="दिव्य दर्शन गैलरी"
        descriptionHindi="बाबा श्याम के पावन दर्शन और भक्ति भरे यादगार पलों का संग्रह।"
        imageSrc="/shyamji.png"
      />

      {/* Gallery */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-16 sm:py-20">
        
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 sm:gap-6 space-y-4 sm:space-y-6">
          {images.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              onClick={() => setSelectedIndex(index)}
              className="relative group overflow-hidden rounded-2xl cursor-pointer"
            >
              <img 
                src={src} 
                alt=""
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                <Maximize2 />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* LIGHTBOX */}
      {selectedIndex !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">

          {/* Close */}
          <button 
            onClick={() => setSelectedIndex(null)}
            className="absolute top-5 right-5 text-white"
          >
            <X size={30} />
          </button>

          {/* Prev */}
          <button 
            onClick={prevImage}
            className="absolute left-2 sm:left-6 text-white cursor-pointer "
          >
            <ChevronLeft size={40} />
          </button>

          {/* Image */}
          <img 
            src={images[selectedIndex]} 
            className="max-h-[80vh] max-w-[90vw] rounded-xl object-contain"
          />

          {/* Next */}
          <button 
            onClick={nextImage}
            className="absolute right-2 sm:right-6 text-white cursor-pointer "
          >
            <ChevronRight size={40} />
          </button>

        </div>
      )}

    </div>
  );
};

export default Gallery;