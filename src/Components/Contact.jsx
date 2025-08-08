import React, { useState } from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { FaLocationArrow, FaPhoneAlt, FaEnvelope, FaAngleDoubleRight } from "react-icons/fa";

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

    const phoneNumber = "919999041971"; // ✅ Replace with your WhatsApp Number (with country code, without +)

    const message = `Name: ${formData.firstName} ${formData.lastName}%0AEmail: ${formData.email}%0AContact: ${formData.contact}%0AMessage: ${formData.message}`;

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <>
      {/* Header Section */}
      <div className="bg-red-700 py-10 text-center">
        <h1 className="text-white text-3xl md:text-4xl font-bold">CONTACT US</h1>
        <h3 className="text-white text-sm md:text-base mt-2">Home - Contact</h3>
      </div>

      {/* Contact Form Section */}
      <div className="bg-white text-gray-900" id='form-1'>
        <section className="py-12 px-4 text-center">
          <p className="text-sm text-red-600 uppercase font-semibold">
           Shree Shyam Parivar
Foundation Bhopura
          </p>
          <h2 className="text-xl md:text-2xl font-bold mt-2">
            Send your message to us for any query
          </h2>

          <form
        className="mt-8 max-w-4xl mx-auto space-y-4 text-left"
        onSubmit={handleSubmit}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            type="text"
            required
            name="firstName"
            placeholder="First Name"
            className="border p-3 w-full rounded"
            value={formData.firstName}
            onChange={handleChange}
          />
          <input
            type="text"
            required
            name="lastName"
            placeholder="Last Name"
            className="border p-3 w-full rounded"
            value={formData.lastName}
            onChange={handleChange}
          />
          <input
            type="email"
            required
            name="email"
            placeholder="Email"
            className="border p-3 w-full rounded"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="number"
            required
            name="contact"
            placeholder="Contact Number"
            className="border p-3 w-full rounded"
            value={formData.contact}
            onChange={handleChange}
          />
        </div>
        <textarea
          placeholder="Message"
          required
          name="message"
          className="border p-3 w-full h-32 rounded"
          value={formData.message}
          onChange={handleChange}
        />
        <div className="text-center">
          <button
            type="submit"
            className="bg-red-600 cursor-pointer text-white px-6 py-2 rounded hover:bg-red-700 transition"
          >
            SEND MESSAGE
          </button>
        </div>
      </form>
        </section>

        {/* Contact Info Section */}
        <section className="bg-gray-100 py-10 px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {/* Address */}
            <div className="bg-red-600 text-white p-6 flex items-start space-x-4 rounded">
              <span className="text-2xl">📍</span>
              <div>
                <h3 className="font-bold mb-1">Address</h3>
                <p className="text-sm">
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Bhopura+Ghaziabad+201005"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Bhopura, Ghaziabad<br />
                    Pin code 201005
                  </a>
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="bg-red-600 text-white p-6 flex items-start space-x-4 rounded">
              <span className="text-2xl">📞</span>
              <div>
                <h3 className="font-bold mb-1">Phone</h3>
                <p className="text-sm">
                  <a href="tel:+919999041971">
                    +91 99990 41971
                  </a>
                </p>
                <p className="text-sm">
                  <a href="tel:+918178069222">
                    +91 81780 69222
                  </a>
                </p>
                <p className="text-sm">
                  <a href="tel:+919999041974">
                    +91  9999041974
                  </a>
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="bg-red-600 text-white p-6 flex items-start space-x-4 rounded">
              <span className="text-2xl">✉️</span>
              <div>
                <h3 className="font-bold mb-1">Email</h3>
                <p className="text-sm break-words">
                  <a href="mailto:yadav.raj4580@gmail.com">
                    yadav.raj4580@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Buttons */}
          <div className="flex flex-col sm:flex-row justify-center mt-6 gap-4">
            <button className="bg-red-600 cursor-pointer text-white px-6 py-2 rounded hover:bg-red-700 transition">
              <a href='#form-1'>HOW TO REACH</a>
            </button>
            <button className="bg-red-600 cursor-pointer text-white px-6 py-2 rounded hover:bg-red-700 transition">
              <a href='#form-1'>WHERE TO STAY</a>
            </button>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
