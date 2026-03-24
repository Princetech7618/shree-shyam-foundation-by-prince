// import React, { useState } from 'react';
// import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
// import { FaLocationArrow, FaPhoneAlt, FaEnvelope, FaAngleDoubleRight } from "react-icons/fa";

// const Contact = () => {

//     const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     contact: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     setFormData((prev) => ({
//       ...prev,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const phoneNumber = "919999041971"; // ✅ Replace with your WhatsApp Number (with country code, without +)

//     const message = `Name: ${formData.firstName} ${formData.lastName}%0AEmail: ${formData.email}%0AContact: ${formData.contact}%0AMessage: ${formData.message}`;

//     const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;

//     window.open(whatsappURL, "_blank");
//   };

//   return (
//     <>
//       {/* Header Section */}
//       <div className="bg-red-700 py-10 text-center">
//         <h1 className="text-white text-3xl md:text-4xl font-bold">CONTACT US</h1>
//         <h3 className="text-white text-sm md:text-base mt-2">Home - Contact</h3>
//       </div>

//       {/* Contact Form Section */}
//       <div className="bg-white text-gray-900" id='form-1'>
//         <section className="py-12 px-4 text-center">
//           <p className="text-sm text-red-600 uppercase font-semibold">
//            Shree Shyam Parivar
// Foundation Bhopura
//           </p>
//           <h2 className="text-xl md:text-2xl font-bold mt-2">
//             Send your message to us for any query
//           </h2>

//           <form
//         className="mt-8 max-w-4xl mx-auto space-y-4 text-left"
//         onSubmit={handleSubmit}
//       >
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//           <input
//             type="text"
//             required
//             name="firstName"
//             placeholder="First Name"
//             className="border p-3 w-full rounded"
//             value={formData.firstName}
//             onChange={handleChange}
//           />
//           <input
//             type="text"
//             required
//             name="lastName"
//             placeholder="Last Name"
//             className="border p-3 w-full rounded"
//             value={formData.lastName}
//             onChange={handleChange}
//           />
//           <input
//             type="email"
//             required
//             name="email"
//             placeholder="Email"
//             className="border p-3 w-full rounded"
//             value={formData.email}
//             onChange={handleChange}
//           />
//           <input
//             type="number"
//             required
//             name="contact"
//             placeholder="Contact Number"
//             className="border p-3 w-full rounded"
//             value={formData.contact}
//             onChange={handleChange}
//           />
//         </div>
//         <textarea
//           placeholder="Message"
//           required
//           name="message"
//           className="border p-3 w-full h-32 rounded"
//           value={formData.message}
//           onChange={handleChange}
//         />
//         <div className="text-center">
//           <button
//             type="submit"
//             className="bg-red-600 cursor-pointer text-white px-6 py-2 rounded hover:bg-red-700 transition"
//           >
//             SEND MESSAGE
//           </button>
//         </div>
//       </form>
//         </section>

//         {/* Contact Info Section */}
//         <section className="bg-gray-100 py-10 px-4">
//           <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//             {/* Address */}
//             <div className="bg-red-600 text-white p-6 flex items-start space-x-4 rounded">
//               <span className="text-2xl">📍</span>
//               <div>
//                 <h3 className="font-bold mb-1">Address</h3>
//                 <p className="text-sm">
                  // <a
                  //   href="https://www.google.com/maps/search/?api=1&query=Bhopura+Ghaziabad+201005"
                  //   target="_blank"
                  //   rel="noopener noreferrer"
                  // >
                  //   Bhopura, Ghaziabad<br />
                  //   Pin code 201005
                  // </a>
//                 </p>
//               </div>
//             </div>

//             {/* Phone */}
//             <div className="bg-red-600 text-white p-6 flex items-start space-x-4 rounded">
//               <span className="text-2xl">📞</span>
//               <div>
//                 <h3 className="font-bold mb-1">Phone</h3>
//                 <p className="text-sm">
//                   <a href="tel:+919999041971">
//                     +91 99990 41971
//                   </a>
//                 </p>
//                 <p className="text-sm">
//                   <a href="tel:+918178069222">
//                     +91 81780 69222
//                   </a>
//                 </p>
//                 <p className="text-sm">
//                   <a href="tel:+919999041974">
//                     +91  9999041974
//                   </a>
//                 </p>
//               </div>
//             </div>

//             {/* Email */}
//             <div className="bg-red-600 text-white p-6 flex items-start space-x-4 rounded">
//               <span className="text-2xl">✉️</span>
//               <div>
//                 <h3 className="font-bold mb-1">Email</h3>
//                 <p className="text-sm break-words">
//                   <a href="mailto:yadav.raj4580@gmail.com">
//                     yadav.raj4580@gmail.com
//                   </a>
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Bottom Buttons */}
//           <div className="flex flex-col sm:flex-row justify-center mt-6 gap-4">
//             <button className="bg-red-600 cursor-pointer text-white px-6 py-2 rounded hover:bg-red-700 transition">
//               <a href='#form-1'>HOW TO REACH</a>
//             </button>
//             <button className="bg-red-600 cursor-pointer text-white px-6 py-2 rounded hover:bg-red-700 transition">
//               <a href='#form-1'>WHERE TO STAY</a>
//             </button>
//           </div>
//         </section>
//       </div>
//     </>
//   );
// };

// export default Contact;


import React, { useState } from 'react';
import { FaFacebookF, FaWhatsapp, FaInstagram, FaYoutube , FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaCommentDots } from "react-icons/fa";
import Hero from './Hero';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const phoneNumber = "919990419733";
    const message = `*New Query from Website*%0A%0A*Name:* ${formData.firstName} ${formData.lastName}%0A*Email:* ${formData.email}%0A*Contact:* ${formData.contact}%0A*Message:* ${formData.message}`;
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="bg-slate-50 min-h-screen font-sans">

      <Hero
       shlokHindi="ॐ श्री श्याम देवाय नमः"
      mainTitleHindi="हारे का सहारा, बाबा श्याम हमारा"
      descriptionHindi="खाटू धाम के पावन दर्शन का अनुभव करें"
      imageSrc="/shyamji.png"
      />

      {/* MAIN CONTAINER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-stretch">
          
          {/* LEFT SIDE */}
          <div className="flex flex-col gap-6 h-full">

            {/* INFO CARD */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-xl border border-gray-100 flex-1">
              <p className="text-red-600 font-bold uppercase tracking-widest text-xs mb-2">
                Shree Shyam Parivar Foundation
              </p>

              <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-6 sm:mb-8">
                Contact Information
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-red-50 p-3 rounded-xl text-red-600 shrink-0">
                    <FaMapMarkerAlt size={18} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Our Location</h4>
                    <p className="text-gray-600 text-sm">
  <a
                    href="https://www.google.com/maps/search/?api=1&query=Bhopura+Ghaziabad+201005"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Bhopura, Ghaziabad<br />
                    Pin code 201005
                  </a>                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-red-50 p-3 rounded-xl text-red-600 shrink-0">
                    <FaPhoneAlt size={18} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Phone Numbers</h4>
                    <div className="text-gray-600 text-sm space-y-1">
                       <a href="tel:+919990419733">
                     +91  9990419733
                  </a> <br />
 <a href="tel:+919999041971">
                     +91 99990 41971
                   </a>     
                   <br />                

                   <a href="tel:+919999041974">
                     +91  9999041974
                  </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-red-50 p-3 rounded-xl text-red-600 shrink-0">
                    <FaEnvelope size={18} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Email Address</h4>
                    <p className="text-gray-600 text-sm">
 <a href="mailto:shreeshyamparivaarfoundation@gmail.com">
                     shreeshyamparivaarfoundation@gmail.com
                   </a>                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* SOCIAL CARD */}
            <div className="bg-white p-5 sm:p-6 rounded-2xl shadow-md border border-gray-100 text-center">
              <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
                Follow Us
              </h4>

          <div className="flex justify-center gap-3 sm:gap-4">
  {[
    { icon: FaFacebookF, link: "https://www.facebook.com/profile.php?id=61575884746727" },
    { icon: FaWhatsapp, link: "https://wa.me/919999041971" },
    { icon: FaInstagram, link: "https://www.instagram.com/khatushyam__foundation" },
    { icon: FaYoutube, link: "https://www.youtube.com/@%E0%A4%B6%E0%A5%8D%E0%A4%B0%E0%A5%80shyamparivar" }
  ].map((item, idx) => {
    const Icon = item.icon;
    return (
      <a
        key={idx}
        href={item.link}
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-slate-100 flex items-center justify-center text-gray-600 hover:bg-red-600 hover:text-white transition-all duration-300 hover:scale-110"
      >
        <Icon size={16} />
      </a>
    );
  })}
</div>
            </div>

          </div>

          {/* RIGHT SIDE FORM */}
           {/* Right Side: Form */}
          <div className="lg:col-span-1">
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl relative border border-gray-50">
              <div className="mb-10">
                
                <h3 className=" flex items-center gap-2 text-2xl md:text-3xl font-semibold text-gray-900 mb-4">Send Us a Message

                                    <FaCommentDots   size={22}  />

                </h3>
                {/* <p className="text-gray-500">Fill out the form below and our team will get back to you via WhatsApp or Email within 24 hours.</p> */}
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="group">
                    <label className="block text-xs font-bold text-gray-400 uppercase mb-2 ml-1 group-focus-within:text-red-600 transition-colors">First Name</label>
                    <input
                      type="text"
                      required
                      name="firstName"
                      placeholder="Name"
                      className="w-full px-5 py-4 rounded-2xl bg-slate-50 border-transparent border-2 focus:border-red-600 focus:bg-white outline-none transition-all text-gray-900 placeholder:text-gray-300"
                      value={formData.firstName}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="group">
                    <label className="block text-xs font-bold text-gray-400 uppercase mb-2 ml-1 group-focus-within:text-red-600 transition-colors">Last Name</label>
                    <input
                      type="text"
                      required
                      name="lastName"
                      placeholder="Lastname"
                      className="w-full px-5 py-4 rounded-2xl bg-slate-50 border-transparent border-2 focus:border-red-600 focus:bg-white outline-none transition-all text-gray-900 placeholder:text-gray-300"
                      value={formData.lastName}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="group">
                    <label className="block text-xs font-bold text-gray-400 uppercase mb-2 ml-1 group-focus-within:text-red-600 transition-colors">Email Address</label>
                    <input
                      type="email"
                      required
                      name="email"
                      placeholder="@g-mail.com"
                      className="w-full px-5 py-4 rounded-2xl bg-slate-50 border-transparent border-2 focus:border-red-600 focus:bg-white outline-none transition-all text-gray-900 placeholder:text-gray-300"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="group">
                    <label className="block text-xs font-bold text-gray-400 uppercase mb-2 ml-1 group-focus-within:text-red-600 transition-colors">Contact Number</label>
                    <input
                      type="number"
                      required
                      name="contact"
                      placeholder="10-digit number"
                      className="w-full px-5 py-4 rounded-2xl bg-slate-50 border-transparent border-2 focus:border-red-600 focus:bg-white outline-none transition-all text-gray-900 placeholder:text-gray-300"
                      value={formData.contact}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="group">
                  <label className="block text-xs font-bold text-gray-400 uppercase mb-2 ml-1 group-focus-within:text-red-600 transition-colors">Your Message</label>
                  <textarea
                    placeholder="How can we help you?"
                    required
                    name="message"
                    rows="4"
                    className="w-full px-5 py-4 rounded-2xl bg-slate-50 border-transparent border-2 focus:border-red-600 focus:bg-white outline-none transition-all text-gray-900 placeholder:text-gray-300 resize-none"
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold cursor-pointer  py-5 rounded-2xl shadow-xl hover:shadow-red-200 transition-all transform active:scale-[0.98] flex items-center justify-center gap-3 text-lg uppercase tracking-wider"
                >
                  <FaCommentDots   size={22}  />
                  Send Message
                </button>
              </form>
              
              {/* <div className="flex flex-wrap justify-center gap-4 mt-10">
                <button className="flex-1 min-w-[150px] border-2 border-slate-100 py-3 rounded-xl text-sm font-bold text-gray-500 hover:border-red-600 hover:text-red-600 transition-all">HOW TO REACH</button>
                <button className="flex-1 min-w-[150px] border-2 border-slate-100 py-3 rounded-xl text-sm font-bold text-gray-500 hover:border-red-600 hover:text-red-600 transition-all">WHERE TO STAY</button>
              </div> */}
            </div>
            
          </div>

        </div>
      </div>

      {/* MAP FIXED FULL WIDTH */}
      <div className="w-full px-4 sm:px-6 lg:px-8 pb-10">
      <div className="rounded-xl w-full  shadow-xl overflow-hidden h-100 border-4 border-white"> <iframe title="Office Location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14002.348651810578!2d77.3488241!3d28.6720408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf09633333333%3A0x3333333333333333!2sBhopura%2C%20Ghaziabad!5e0!3m2!1sen!2sin!4v1625000000000!5m2!1sen!2sin" width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy" ></iframe> </div>
      </div>

    </div>
  );
};

export default Contact;