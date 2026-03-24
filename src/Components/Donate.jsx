// import React, { useState } from 'react';

// const Donate = () => {
// const [formData, setFormData] = useState({
//   name: "",
//   email: "",
//   mobile: "",
//   address: "",
//   amount: "",
// });

// const handleChange = (e) => {
//   setFormData({
//     ...formData,
//     [e.target.name]: e.target.value,
//   });
// };

// const handleSubmit = (e) => {
//   e.preventDefault();

//   const {
//     name,
//     email,
//     mobile,
//     address,
//     amount,
//   } = formData;

// const message = `*Donation Details*\nName: ${name}\nEmail: ${email}\nMobile: ${mobile}\nAddress: ${address}\nDonation Amount: ₹${amount}`;

//   // WhatsApp number jisko message bhejna hai (with country code, e.g., +91 for India)
//   const phoneNumber = "919999041971"; // <-- yahan apna WhatsApp number daalein

//   const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

//   window.open(whatsappURL, "_blank");
// };

//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 lg:p-6">
//       <div className="w-full max-w-xl bg-white p-4 lg:p-8 rounded shadow-md">
//         <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Donate Now</h2>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <label className="block text-gray-700">Name</label>
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//               className="mt-1 block w-full p-2 border rounded border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>

//           <div>
//             <label className="block text-gray-700">Email</label>
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//               className="mt-1 block w-full p-2 border rounded border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>

//           <div>
//             <label className="block text-gray-700">Mobile No</label>
//             <input
//               type="tel"
//               name="mobile"
//               value={formData.mobile}
//               onChange={handleChange}
//               required
//               className="mt-1 block w-full p-2 border rounded border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>

//           <div>
//             <label className="block text-gray-700">Address</label>
//             <textarea
//               name="address"
//               value={formData.address}
//               onChange={handleChange}
//               required
//               rows={3}
//               className="mt-1 block w-full p-2 border rounded border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             ></textarea>
//           </div>

//           <div>
//             <label className="block text-gray-700">Donation Amount</label>
//             <input
//               type="number"
//               name="amount"
//               value={formData.amount}
//               onChange={handleChange}
//               required
//               className="mt-1 block w-full p-2 border rounded border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>

//           <div className="text-center">
//             <button
//               type="submit"
//               className="bg-yellow-400 cursor-pointer text-white px-6 py-2 rounded hover:bg-yellow-600 transition"
//             >
//               Submit Donation
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Donate;







import React, { useState } from 'react';
import { FaDonate, FaHandHoldingHeart, FaArrowRight   } from "react-icons/fa";

const Donate = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    address: "",
    amount: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, mobile, address, amount } = formData;

    const message = `*New Donation Request*\n\n *Donor:* ${name}\n *Email:* ${email}\n *Mobile:* ${mobile}\n *Address:* ${address}\n *Amount:* ₹${amount}\n\nThank you for your support!`;

    // WhatsApp number jisko message bhejna hai
    const phoneNumber = "919990419733"; 

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, "_blank");
  };

  // Inline style for the custom color
  const primaryColor = { color: '#ff6160' };
  const primaryBg = { backgroundColor: '#ff0000' };
  const primaryBorder = { borderColor: '#ff6160' };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-0 md:p-6 lg:p-8 font-sans">
      <div className="w-full max-w-7xl bg-white rounded-none md:rounded-3xl shadow-2xl flex flex-col md:flex-row overflow-hidden border border-gray-100">
        
        {/* Left Side: Creative & Impact (Visual) */}
        <div className="md:w-1/2 p-10 lg:p-16 flex flex-col justify-between text-white relative order-1 md:order-1 bg-red-600 ">
          {/* Abstract geometric pattern overlay */}
          <div className="absolute inset-0 opacity-10">
            <svg width="100%" height="100%"><defs><pattern id="pattern" width="40" height="40" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><rect width="20" height="40" fill="white"></rect><rect width="40" height="20" fill="white"></rect></pattern></defs><rect width="100%" height="100%" fill="url(#pattern)"></rect></svg>
          </div>
          
<div className="relative z-10  justify-center items-end min-h-[40vh]">
<div className="inline-flex items-center gap-3 bg-white/20 px-4 py-3 rounded-xl mb-8">
  {/* <FaDonate className="h-6 w-6 text-white" /> */}
  <img src="https://monumental-faun-17a621.netlify.app/img/logo.jpg" alt="image not show " className='w-10 h-10 rounded-full object-cover' />
  <h1 className="text-white text-lg font-semibold">Donate Now</h1>
</div>

  {/* <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tighter leading-tight">
    आपका सहयोग <br /> बदलता है कई ज़िंदगियाँ
  </h1> */}
{/* 
  <p className="text-white/80 mt-6 text-lg max-w-md">
    आपका हर एक योगदान श्री श्याम परिवार फाउंडेशन के माध्यम से शिक्षा, स्वास्थ्य सेवाओं 
    और ज़रूरतमंद लोगों तक आवश्यक सहायता पहुँचाने में महत्वपूर्ण भूमिका निभाता है। 
    आपका सहयोग समाज में एक सकारात्मक बदलाव लाने की दिशा में एक मजबूत कदम है।
  </p> */}
  
         <div className="relative z-10 mt-12 md:mt-0 bg-white/10 p-6 rounded-xl border border-white/20">
  <h4 className="font-bold text-xl mb-3">श्री श्याम परिवार फाउंडेशन संकल्प</h4>
  <p className="text-sm text-white">
    आपका प्रत्येक सहयोग श्री श्याम परिवार फाउंडेशन के सेवा कार्यों, प्रसाद वितरण, सामाजिक सहायता 
    एवं जनकल्याण गतिविधियों में समर्पित किया जाता है। और आपका हर एक योगदान ज़रूरतमंद लोगों तक आवश्यक सहायता पहुँचाने में महत्वपूर्ण भूमिका निभाता है।  आपका योगदान समाज में सकारात्मक परिवर्तन 
    लाने का एक महत्वपूर्ण माध्यम है। 
    आपकी सभी जानकारी पूर्णतः सुरक्षित रखी जाती है और केवल सेवा एवं सत्यापन के उद्देश्य से ही उपयोग की जाती है।
  </p>
</div>
  
</div>

{/* 
         <div className="relative z-10 mt-12 md:mt-0 bg-white/10 p-6 rounded-xl border border-white/20">
  <h4 className="font-bold text-xl mb-3">श्री श्याम परिवार फाउंडेशन संकल्प</h4>
  <p className="text-sm text-white">
    आपका प्रत्येक सहयोग श्री श्याम परिवार फाउंडेशन के सेवा कार्यों, भंडारा, सामाजिक सहायता 
    एवं जनकल्याण गतिविधियों में समर्पित किया जाता है। आपका योगदान समाज में सकारात्मक परिवर्तन 
    लाने का एक महत्वपूर्ण माध्यम है। 
    आपकी सभी जानकारी पूर्णतः सुरक्षित रखी जाती है और केवल सेवा एवं सत्यापन के उद्देश्य से ही उपयोग की जाती है।
  </p>
</div> */}
<div className="flex justify-center items-center mt-10">
  <FaHandHoldingHeart className="text-[#ff9b9b] text-[120px] sm:text-[150px] md:text-[200px] lg:text-[250px]" />
</div>
        </div>

        {/* Right Side: Professional Donation Form */}
        <div className="md:w-1/2 p-8 lg:p-14 order-2 md:order-2">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Donate Now</h2>
            <div className="text-sm font-medium px-4 py-1.5 rounded-full bg-slate-100 text-slate-600">Secure Process</div>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Name Field */}
              <div className="sm:col-span-2">
                <label className="block text-sm font-semibold text-gray-800 mb-1.5">Full Name</label>
                <input
                  type="text"
                  name="name"
                  // placeholder="Rahul Sharma"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-3.5 rounded-xl border border-gray-200 bg-white focus:ring-2 outline-none transition-all placeholder:text-gray-400"
                  style={{ '--tw-ring-color': '#ff616040', borderColor: formData.name ? '#ff6160' : '#e5e7eb' }}
                />
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-1.5">Email Address</label>
                <input
                  type="email"
                  name="email"
                  // placeholder="rahul@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-3.5 rounded-xl border border-gray-200 bg-white focus:ring-2 outline-none transition-all placeholder:text-gray-400"
                  style={{ '--tw-ring-color': '#ff616040', borderColor: formData.email ? '#ff6160' : '#e5e7eb' }}
                />
              </div>

              {/* Mobile Field */}
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-1.5">Mobile Number</label>
                <input
                  type="tel"
                  name="mobile"
                  // placeholder="+91 98765 43210"
                  value={formData.mobile}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-3.5 rounded-xl border border-gray-200 bg-white focus:ring-2 outline-none transition-all placeholder:text-gray-400"
                  style={{ '--tw-ring-color': '#ff616040', borderColor: formData.mobile ? '#ff6160' : '#e5e7eb' }}
                />
              </div>

              {/* Address Field */}
              <div className="sm:col-span-2">
                <label className="block text-sm font-semibold text-gray-800 mb-1.5">Address (for receipt)</label>
                <textarea
                  name="address"
                  // placeholder="H.No 123, Street Name, City, State - ZipCode"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  rows={3}
                  className="w-full px-5 py-3.5 rounded-xl border border-gray-200 bg-white focus:ring-2 outline-none transition-all placeholder:text-gray-400 resize-none"
                  style={{ '--tw-ring-color': '#ff616040', borderColor: formData.address ? '#ff6160' : '#e5e7eb' }}
                ></textarea>
              </div>

              {/* Amount Field */}
              <div className="sm:col-span-2">
                <label className="block text-sm font-semibold text-gray-800 mb-1.5">Donation Amount</label>
                <div className="relative">
                  <span className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500 font-semibold text-lg">₹</span>
                  <input
                    type="number"
                    name="amount"
                    placeholder="1000"
                    value={formData.amount}
                    onChange={handleChange}
                    required
                    className="w-full pl-10 pr-5 py-4 rounded-xl border border-gray-200 bg-white focus:ring-2 outline-none transition-all placeholder:text-gray-400 font-bold text-xl"
                    style={{ '--tw-ring-color': '#ff616040', borderColor: formData.amount ? '#ff6160' : '#e5e7eb' }}
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <button
                type="submit"
                className="cursor-pointer bg-red-500 w-full hover:bg-red-600 text-white font-extrabold py-5 rounded-2xl shadow-lg hover:shadow-red-500 transition-all transform active:scale-[0.98] flex items-center justify-center gap-3 text-lg"
                // style={primaryBg}
              >
                <span className='font-semibold'>Submit Donation </span>
                {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg> */}
                <FaArrowRight className="h-6 w-6" />
              </button>
              {/* <p className="text-center text-xs text-gray-400 mt-5">
                After clicking, your WhatsApp will open with the pre-filled message.
              </p> */}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Donate;