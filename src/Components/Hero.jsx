import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import  { useRef, useEffect } from "react";
 
const KhatuShyamHero = ({ 
  shlokHindi,
  mainTitleHindi,
  descriptionHindi,
  
}) => {

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (custom = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * 0.2,
        duration: 0.9,
        ease: [0.215, 0.61, 0.355, 1]
      }
    })
  };

   const videoRef = useRef(null);
    useEffect(() => {
    const video = videoRef.current;

    const handleTimeUpdate = () => {
      if (video.currentTime >= 4) {
        video.currentTime = 0; // 🔁 restart after 4 sec
      }
    };

    video.addEventListener("timeupdate", handleTimeUpdate);

    return () => {
      video.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, []);

  return (
    <section className="  relative w-full py-35 flex items-center justify-center overflow-hidden">
      
      {/* Background Image */}
      <motion.div 
        className="absolute inset-0 w-full h-full z-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        {/* <img 
          src="ayodhya.jpg"
          // src='temple1.jpg'
          // src='khatushyam1.jpg'
          alt="Khatu Shyam Ji Divine"
          className="w-full h-full object-cover object-center"
        /> */}
        <video
  
    ref={videoRef}
autoPlay
  muted
  playsInline
  className="w-full h-full object-cover object-center "
>
  {/* <source src="video.mp4" type="video/mp4" /> */}
    <source src="video2.mp4" type="video/mp4" />
  {/* <source src="video3.mp4" type="video/mp4" /> */}

</video>

      </motion.div>

      {/* Overlay */}
      {/* <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/70 via-black/40 to-[#080604]" /> */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-orange-950/40 via-transparent to-purple-950/30" />

      {/* Content */}
      <div className="relative z-20 w-full max-w-7xl px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center">
        
        {/* Shlok */}
        <motion.div 
          custom={0}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mt-5 sm:mt-20 inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-2.5 rounded-full bg-orange-500/10 border border-orange-500/30 backdrop-blur-md mb-6 sm:mb-10"
        >
          <Sparkles size={16} className="text-orange-300 animate-pulse" />
          <span className="text-sm sm:text-lg md:text-xl font-serif text-orange-200">
            {shlokHindi}
          </span>
          <Sparkles size={16} className="text-orange-300 animate-pulse" />
        </motion.div>

        {/* Title */}
        {/* <motion.h1 
          custom={1}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight mb-4 sm:mb-8 tracking-tight"
        >
          {mainTitleHindi.split(" ").map((word, i) => (
            <span key={i} className={i >= 3 ? "text-orange-400" : "text-orange-100"}>
              {word}{" "}
            </span>
          ))}
        </motion.h1> */}

        {/* Description */}
        {/* <motion.p 
          custom={2}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="max-w-xl sm:max-w-2xl md:max-w-3xl text-sm sm:text-base md:text-lg lg:text-xl text-white leading-relaxed mb-8 sm:mb-12 px-2"
        >
          {descriptionHindi}
        </motion.p> */}

      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 w-full h-16 sm:h-24 z-10 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
};

export default KhatuShyamHero;
