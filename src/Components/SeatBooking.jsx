import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCalendarCheck  , FaMapMarkerAlt, FaCalendarAlt, FaChair, FaCheckCircle } from 'react-icons/fa';
import Hero from "./Hero";
const packages = [
      { id: 1, name: "Khatu Shyam Ji", price: 2499, color: "from-orange-400 to-yellow-600", img: "khatushyam.jpg" },

  { id: 2, name: "Ayodhya Dham", price: 4500, color: "from-orange-400 to-red-500", img: "ayodhya.jpg" },
  { id: 3, name: "Ujjain Mahakal", price: 4500, color: "from-orange-500 to-orange-700", img: "ujjain.avif" },
  { id: 4, name: "Vaishno Devi", price: 4500, color: "from-pink-500 to-orange-500", img: "tourpackege2.jpg" },
];

const SeatBooking = () => {
  const [selectedPackage, setSelectedPackage] = useState(packages[0]);
  const [selectedSeats, setSelectedSeats] = useState([]);
  
  // Generating 30 dummy seats
  const totalSeats = Array.from({ length: 30 }, (_, i) => i + 1);

  const toggleSeat = (seatId) => {
    if (selectedSeats.includes(seatId)) {
      setSelectedSeats(selectedSeats.filter(s => s !== seatId));
    } else {
      setSelectedSeats([...selectedSeats, seatId]);
    }
  };

  const handleBooking = () => {
    if (selectedSeats.length === 0) {
      alert("Please select at least one seat.");
      return;
    }

    const phoneNumber = "+919990419733"; // Aapka WhatsApp Number
    const message = `*New Seat Booking Query*%0A--------------------------%0A*Package:* ${selectedPackage.name}%0A*Seats No:* ${selectedSeats.join(', ')}%0A*Total Persons:* ${selectedSeats.length}%0A*Total Amount:* ₹${selectedSeats.length * selectedPackage.price}%0A--------------------------%0AHi, I want to confirm my booking for the ${selectedPackage.name} package. Please guide me for further steps.`;
    
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
<>
  <Hero 
            shlokHindi="हारे का सहारा, बाबा श्याम हमारा"
      mainTitleHindi="हर सफर में सहारा, बाबा श्याम हमारा"
    //   descriptionHindi="खाटू धाम के पावन दर्शन का अनुभव करें"
      imageSrc="/shyamji.png"
      />

    <div className="min-h-screen bg-white text-gray-900 font-sans pb-20">
      {/* Header */}

    
      {/* <div className="py-12 px-6 text-center bg-orange-50/50">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-semibold text-gray-950 tracking-tighter"
        >
       Select Your  <span className="text-orange-500">Journey</span>
        </motion.h1>
        <p className="mt-4 text-gray-500 uppercase tracking-[0.4em] text-xs font-bold">Premium Spiritual Travel Experience</p>
      </div> */}

      <div className="max-w-7xl mx-auto px-4 md:px-8 mt-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left: Package Selection */}
        <div className="lg:col-span-4 space-y-6">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <FaMapMarkerAlt className="text-red-500" /> Choose Package
          </h2>
          <div className="grid grid-cols-1 gap-4">
            {packages.map((pkg) => (
           <motion.div
  key={pkg.id}
  whileHover={{ scale: 1.03, y: -5 }}
  whileTap={{ scale: 0.98 }}
  onClick={() => { setSelectedPackage(pkg); setSelectedSeats([]); }}
  className={`relative overflow-hidden rounded-3xl cursor-pointer border-2 transition-all duration-500 ${
    selectedPackage.id === pkg.id 
    ? 'border-red-500 shadow-[0_20px_50px_rgba(249,115,22,0.2)] ring-4 ring-orange-50' 
    : 'border-gray-100  hover:opacity-100'
  }`}
>
  {/* Image Section - Height increased to h-48 for full view */}
  <div className="relative h-48 w-full overflow-hidden">
    <img 
      src={pkg.img} 
      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
      alt={pkg.name} 
    />
    {/* Expensive Look Gradient Overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
    
    {/* Price Tag on Image */}
    <div className="absolute bottom-4 left-4 text-white">
       {/* <p className="text-xs uppercase tracking-widest opacity-80">Starting from</p> */}
       <h3 className="text-xl font-bold">₹{pkg.price}</h3>
    </div>
  </div>

  {/* Text Content Section */}
  <div className="p-5 flex justify-between items-center bg-white">
    <div>
      <h3 className="font-semibold text-xl text-gray-900 tracking-tight">{pkg.name}</h3>
      {/* <p className="text-orange-600 text-sm font-semibold">Premium AC Coach</p> */}
    </div>
    
    {/* Selected Icon */}
    <div className={`h-8 w-8 rounded-full flex items-center justify-center transition-all ${
      selectedPackage.id === pkg.id ? 'bg-red-500 text-white' : 'bg-gray-100 text-gray-300'
    }`}>
      <FaCheckCircle size={18} />
    </div>
  </div>
</motion.div>
            ))}
          </div>
        </div>

        {/* Center: Seat Map */}
 {/* Center: Seat Map */}
<div className="lg:col-span-5">
  <div className="sticky top-0 bg-gray-50 rounded-[40px] p-8 border border-gray-100 shadow-inner">
    
    <div className="text-center">
      <div className="w-full h-2 bg-gray-300 rounded-full mb-2"></div>
      <p className="text-[10px] text-gray-400 uppercase font-bold tracking-widest">
        Front / Driver Side
      </p>
    </div>

    <div className="grid grid-cols-4 gap-4 max-w-sm mx-auto">
      {totalSeats.map((seat) => (
        <motion.div
          key={seat}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => toggleSeat(seat)}
          className={`h-12 w-12 rounded-xl flex items-center justify-center cursor-pointer transition-all duration-300 font-bold border-2 ${
            selectedSeats.includes(seat)
              ? 'bg-red-500 border-red-600 text-white shadow-lg shadow-red-200'
              : 'bg-white border-gray-200 text-gray-400 hover:border-red-300'
          }`}
        >
          <FaChair className={selectedSeats.includes(seat) ? 'text-white' : 'text-gray-200'} />
        </motion.div>
      ))}
    </div>

  </div>
</div>

        {/* Right: Booking Summary */}
        <div className="lg:col-span-3">
          <div className="sticky top-24 bg-white border-2 border-orange-100 rounded-[30px] p-8 shadow-2xl overflow-hidden relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/5 rounded-full -mr-16 -mt-16"></div>
            
            <h2 className="text-2xl font-bold mb-6">Summary</h2>
            
            <div className="space-y-4 mb-8">
              <div className="flex justify-between">
                <span className="text-gray-500">Package</span>
                <span className="font-bold text-red-600">{selectedPackage.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Seats ({selectedSeats.length})</span>
                <span className="font-bold">{selectedSeats.length > 0 ? selectedSeats.join(', ') : 'None'}</span>
              </div>
              <div className="h-px bg-gray-100 w-full"></div>
              <div className="flex justify-between items-end">
                <span className="text-gray-500">Total Price</span>
                <span className="text-3xl font-semibold  text-gray-950">₹{selectedSeats.length * selectedPackage.price}</span>
              </div>
            </div>

            <button
              onClick={handleBooking}
              className=" cursor-pointer w-full py-4 bg-red-500 hover:bg-red-600 text-white rounded-2xl font-bold flex items-center justify-center gap-3 transition-all duration-300 shadow-xl shadow-orange-200 active:scale-95"
            >
              <FaCalendarCheck   size={20} />
              Book Now
            </button>

            {/* <p className="mt-4 text-[10px] text-gray-400 text-center leading-relaxed font-medium">
              By clicking, you will be redirected to WhatsApp to complete your secure payment & booking.
            </p> */}
          </div>
        </div>

      </div>
      
      {/* Floating Decorative Elements */}
      {/* <div className="fixed bottom-10 left-10 hidden lg:block opacity-10">
        <h1 className="text-9xl font-black text-gray-900">SHREE SHYAM JI</h1>
      </div> */}
    </div>
    </>
  );
};

export default SeatBooking;




// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { FaCalendarCheck, FaMapMarkerAlt, FaChair, FaCheckCircle } from 'react-icons/fa';
// import Hero from "./Hero";

// const packages = [
//   { id: 1, name: "Khatu Shyam Ji", price: 2499, img: "khatushyam.jpg" },
//   { id: 2, name: "Ayodhya Dham", price: 4500, img: "ayodhya.jpg" },
//   { id: 3, name: "Ujjain Mahakal", price: 4500, img: "ujjain.avif" },
//   { id: 4, name: "Vaishno Devi", price: 4500, img: "tourpackege2.jpg" },
// ];

// const SeatBooking = () => {
//   const [selectedPackage, setSelectedPackage] = useState(packages[0]);
//   const [selectedSeats, setSelectedSeats] = useState([]);

//   // 🔥 NEW: Already booked seats (dummy data)
//   const bookedSeats = [2, 5, 9, 14, 18, 22];

//   const totalSeats = Array.from({ length: 30 }, (_, i) => i + 1);

//   const toggleSeat = (seatId) => {
//     // ❌ If seat already booked → do nothing
//     if (bookedSeats.includes(seatId)) return;

//     if (selectedSeats.includes(seatId)) {
//       setSelectedSeats(selectedSeats.filter(s => s !== seatId));
//     } else {
//       setSelectedSeats([...selectedSeats, seatId]);
//     }
//   };

//   const handleBooking = () => {
//     if (selectedSeats.length === 0) {
//       alert("Please select at least one seat.");
//       return;
//     }

//     const phoneNumber = "+919999041971";
//     const message = `*New Seat Booking Query*%0A--------------------------%0A*Package:* ${selectedPackage.name}%0A*Seats:* ${selectedSeats.join(', ')}%0A*Total Persons:* ${selectedSeats.length}%0A*Total Amount:* ₹${selectedSeats.length * selectedPackage.price}%0A--------------------------%0AHi, I want to confirm my booking.`;

//     window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
//   };

//   return (
//     <>
//       <Hero 
//         shlokHindi="Select Your Sacred Journey"
//         mainTitleHindi="हर सफर में सहारा, बाबा श्याम हमारा"
//         imageSrc="/shyamji.png"
//       />

//       <div className="min-h-screen bg-white text-gray-900 font-sans pb-20">

//         <div className="max-w-7xl mx-auto px-4 md:px-8 mt-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
          
//           {/* LEFT */}
//           <div className="lg:col-span-4 space-y-6">
//             <h2 className="text-2xl font-bold flex items-center gap-2">
//               <FaMapMarkerAlt className="text-orange-500" /> Choose Package
//             </h2>

//             <div className="grid grid-cols-1 gap-4">
//               {packages.map((pkg) => (
//                 <motion.div
//                   key={pkg.id}
//                   whileHover={{ scale: 1.03 }}
//                   onClick={() => { setSelectedPackage(pkg); setSelectedSeats([]); }}
//                   className={`rounded-3xl cursor-pointer border-2 ${
//                     selectedPackage.id === pkg.id
//                       ? 'border-orange-500 shadow-lg'
//                       : 'border-gray-200'
//                   }`}
//                 >
//                   <img src={pkg.img} className="h-40 w-full object-cover rounded-t-3xl" />
//                   <div className="p-4 flex justify-between">
//                     <h3 className="font-semibold">{pkg.name}</h3>
//                     <FaCheckCircle className={`${selectedPackage.id === pkg.id ? 'text-orange-500' : 'text-gray-300'}`} />
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </div>

//           {/* CENTER - SEATS */}
//           <div className="lg:col-span-5">
//             <div className="sticky top-20 bg-gray-50 rounded-[40px] p-6 border shadow-inner">

//               <div className="text-center mb-4">
//                 <div className="w-full h-2 bg-gray-300 rounded-full mb-2"></div>
//                 <p className="text-xs text-gray-400">Front / Driver</p>
//               </div>

//               <div className="grid grid-cols-4 gap-4 max-w-sm mx-auto">
//                 {totalSeats.map((seat) => {
//                   const isBooked = bookedSeats.includes(seat);
//                   const isSelected = selectedSeats.includes(seat);

//                   return (
//                     <motion.div
//                       key={seat}
//                       whileHover={!isBooked ? { scale: 1.1 } : {}}
//                       whileTap={!isBooked ? { scale: 0.9 } : {}}
//                       onClick={() => toggleSeat(seat)}
//                       className={`h-12 w-12 rounded-xl flex items-center justify-center border-2 font-bold
//                         ${isBooked 
//                           ? 'bg-gray-300 border-gray-400 text-white cursor-not-allowed'
//                           : isSelected
//                           ? 'bg-orange-500 border-orange-600 text-white shadow-lg'
//                           : 'bg-white border-gray-200 text-gray-400 hover:border-orange-300 cursor-pointer'
//                         }`}
//                     >
//                       <FaChair />
//                     </motion.div>
//                   );
//                 })}
//               </div>

//               {/* 🔥 Legend */}
//               <div className="flex justify-center gap-4 mt-6 text-xs">
//                 <span className="flex items-center gap-1">
//                   <div className="w-3 h-3 bg-orange-500 rounded"></div> Selected
//                 </span>
//                 <span className="flex items-center gap-1">
//                   <div className="w-3 h-3 bg-gray-300 rounded"></div> Booked
//                 </span>
//                 <span className="flex items-center gap-1">
//                   <div className="w-3 h-3 bg-white border rounded"></div> Available
//                 </span>
//               </div>

//             </div>
//           </div>

//           {/* RIGHT */}
//           <div className="lg:col-span-3">
//             <div className="sticky top-24 bg-white border rounded-3xl p-6 shadow-lg">

//               <h2 className="text-xl font-bold mb-4">Summary</h2>

//               <div className="space-y-3 mb-6">
//                 <div className="flex justify-between">
//                   <span>Package</span>
//                   <span className="text-orange-600 font-bold">{selectedPackage.name}</span>
//                 </div>

//                 <div className="flex justify-between">
//                   <span>Seats</span>
//                   <span>{selectedSeats.length ? selectedSeats.join(', ') : 'None'}</span>
//                 </div>

//                 <div className="flex justify-between font-bold text-lg">
//                   <span>Total</span>
//                   <span>₹{selectedSeats.length * selectedPackage.price}</span>
//                 </div>
//               </div>

//               <button
//                 onClick={handleBooking}
//                 className="w-full py-3 bg-orange-500 text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-orange-600"
//               >
//                 <FaCalendarCheck />
//                 Book Now
//               </button>

//             </div>
//           </div>

//         </div>
//       </div>
//     </>
//   );
// };

// export default SeatBooking;