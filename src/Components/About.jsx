import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { FaLocationArrow, FaPhoneAlt, FaEnvelope, FaAngleDoubleRight } from "react-icons/fa";


const members = [
    {
      name: "Rajkumari",
      role: "Member",
      img: "/photo1.png",
    },
    {
      name: "Anuradha Sharma",
      role: "Member",
      img: "/photo2.png",
    },
    {
      name: "Rohit Thakur",
      role: "Member",
      img: "/photo3.png",
    },
    {
      name: "Sanjay Malik",
      role: "Member",
      img: "/photo4.png",
    },
    {
      name: "Dr. Devindar sain",
      role: "Member",
      img: "/photo5.png",
    },
    {
      name: "Neera Malik",
      role: "Member",
      img: "/women.png",
    },
    {
      name: "Atender kumar",
      role: "Member",
      img: "/men.png",
    },
     {
      name: "Rupam Jha",
      role: "Member",
      img: "/onemore.png",
    },
  ];

const About = () => {
  return (
    <div>
      {/* Top Header Section */}
    {/* Header Section */}
<div className="bg-red-700 py-4 sm:py-5 md:py-6">
  <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-center text-white">
    About Us
  </h1>
  <h2 className="text-sm sm:text-base md:text-lg text-center text-white font-medium">
    Home - About Us
  </h2>
</div>

{/* Main Info Section */}
<div className="flex flex-col md:flex-row items-center justify-between gap-8 px-4 sm:px-6 lg:px-12 py-8 lg:py-12 bg-blue-100">
  {/* Left Text Content */}
  <div className="w-full md:w-1/2 m-4 ">
    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center md:text-left text-red-800 mb-4">
      Shree Khatu <span className="animate-pulse text-red-900">Shyam</span> Ji
    </h1>
    <p className="text-base sm:text-lg text-justify text-black leading-relaxed">
    Certainly! Here's an expanded version:

Shree Khatu Shyam Ji, the revered manifestation of Barbarik, the grandson of Bhima, holds a special place in the hearts of millions of devotees, particularly in Rajasthan and Haryana. Known for his unparalleled sacrifice during the Mahabharata, Barbarik was blessed by Lord Krishna, who foretold that in the age of Kaliyuga, he would be worshipped as Shyam. This divine form of worship signifies an unwavering faith in Lord Krishna’s power and grace. It is believed that chanting Shyam Ji’s name with pure devotion can bring miraculous results, alleviating suffering, fulfilling desires, and guiding individuals on the path of spiritual enlightenment. His divine presence is a beacon of hope, offering solace to those in distress and blessing them with peace, protection, and prosperity. Through sincere devotion, Shree Khatu Shyam Ji reminds us of the power of faith, sacrifice, and the eternal blessings of divine grace.
</p>
  </div>

  {/* Right Image */}
  <div className="w-full md:w-1/2 flex justify-center">
    <img
      src="https://ksbsf.in/wp-content/uploads/2022/08/khatu-shyam-2.jpg"
      alt="Khatu Shyam Ji"
      className="w-full max-w-md rounded-lg shadow-lg"
    />
  </div>
</div>

    {/* Image Cards Section */}
    <div className="flex flex-col items-center p-4">
  {/* Main container for 3 cards */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl">
    {[1, 2, 3].map((_, index) => (
      <div
        key={index}
        className="group bg-white shadow-md rounded-xl overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105"
      >
        <img
          src={
            index === 0
              ? "https://hindi.oneindia.com/img/1200x60x675/2023/02/khatushyamjitemple2023-1675694281.jpg"
              : index === 1
              ? "https://www.fiyopa.in/wp-content/uploads/2024/08/Khatu-Shyamji-Temple.jpg"
              : "https://tse4.mm.bing.net/th?id=OIP.BSHxTNWbWLWrsKF9j6eZFgAAAA&cb=iwc1&rs=1&pid=ImgDetMain"
          }
          alt={`Card ${index + 1}`}
          className="w-full h-60 object-cover group-hover:opacity-80 transition-opacity duration-300"
        />
      </div>
    ))}
  </div>
</div>

{/* para */}
    <div className='bg-white py-0 text-red-700 mx-0 lg:mx-5'>
    <h1 className='text-center font-bold text-2xl m-6'>Khatu Shyam Ji Temple Significance</h1>
    <p className='text-black py-0 text-justify text-md lg:text-lg mx-4 lg:mx-10 leading-relaxed'>The Khatu Shyam Temple, located in Khatu town of Sikar district, Rajasthan, is a prominent Hindu pilgrimage site dedicated to Lord Shyam, believed to be the manifestation of Barbarik, the grandson of Bhima from the Mahabharata. The original temple was constructed in 1027 AD by Roopsingh Chauhan and his wife Narmada Kanwar, and it was later renovated in 1720 AD by Diwan Abhaisingh under the Marwar ruler’s directive. The idol, made of rare stone and worshipped in the form of a head (Shish), is said to have emerged from the holy pond known as Shyam Kund. The temple, built from pristine Makrana marble, is admired for its unique Rajputana architecture, including silver-covered sanctum doors, intricately painted prayer halls, and marble entrance gates with floral carvings. The precincts include Shyam Bagicha, a garden used for floral offerings; the Samadhi of Aloo Singh, a devoted follower; and nearby temples like Gopinath and Gaurishankar—the latter known for a miraculous event where blood reportedly gushed from a Shiva Lingam struck by Mughal soldiers. As the family deity of countless devotees and a symbol of divine grace in the Kaliyuga (the present age of darkness), Lord Shyam is believed to fulfill the wishes of those who worship with a pure heart.
    The Samadhi of Aloo Singh,(a great devotee), is located within the garden. The Gopinath temple lies to the south- east of the main temple. The Gaurishankar temple also lies nearby. There is an interesting tale associated with the Gaurishankar temple. It is said that some soldiers of the mughal emperor Aurangzeb wanted to destroy this temple. They attacked the Shiva lingam enshrined within this temple with their spears. Immediately, fountains of blood appeared from the Shiva Linga. The soldiers ran away, terrified. One can still see the mark of the spear on the Lingam. Khatu town is situated in the Sikar District, Rajasthan, India. Shyamji’s temple, constructed of the famous Makrana marble, lies in the heart of the town. Lord Shyamji is considered to be the God of the Kaliyug means (the present age where sin and wrong doing is at its maximum.)
    </p>
    </div>
 
{/* para */}
    <div className='bg-white py-6 text-black-700 mx-0 lg:mx-5'>
    <h1 className='text-center font-bold text-2xl text-red-700'>Barbarika</h1>
    <p className='text-black py-2 leading-relaxed text-md lg:text-lg mx-4 lg:mx-10 text-justify tracking-wide'>
    The legend begins with the Mahābhārata. Barbarika alias ‘Khatu Shyam’ alias Shyam Baba was son of Bhima (Second of the Pandava brothers) and Mata Ahilavati. Even in his childhood, Barbarika was a very brave warrior. He learnt the art of warfare from his mother. God Shiva, pleased with him, gave him the three infallible arrows (Teen Baan). Hence, Barbarika came to be known by the appellation Teen Baan Dhaari, the “Bearer of Three Arrows”. Later, Agni (The God of Fire) gave him the bow that would make him victorious in the three worlds. When Barbarika got to know that battle between the Pandavas and the Kauravas had become inevitable, he wanted to witness what was to be the Mahābhārata War. He promised his mother that if he felt the urge to participate in the battle, he would join the side which would be losing. He rode to the field on his Blue Horse equipped with his three arrows and bow.
    </p>
    </div>

{/* img+para */}
<div className="bg-white py-8 px-4 sm:px-6 md:px-12 mx-4 sm:mx-6 md:mx-12 rounded-lg shadow-lg">
  {/* Image */}
  <div className="flex justify-center mb-6">
    <img
      src="https://ksbsf.in/wp-content/uploads/2022/08/slide-01-200x200.jpg"
      alt="Barbarika"
      className="rounded-full w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 object-cover border-4 border-red-700 shadow-md"
    />
  </div>

  {/* Title */}
  <h1 className="text-center font-extrabold text-2xl sm:text-3xl md:text-4xl text-red-700 mb-4 tracking-wide">
    Barbarika Donates His Head to Krishna
  </h1>

  {/* Paragraph */}
  <p className="text-gray-800 text-justify leading-relaxed text-base sm:text-lg md:text-xl">
    According to legend from the <span className="font-semibold text-red-700">Mahabharata</span>, Barbarika, the grandson of Bhima and son of Ghatotkach, was an incredibly powerful warrior who had vowed to support the weaker side in any battle. Possessing three infallible arrows and immense strength, he intended to participate in the Kurukshetra war. Before the battle began, <span className="font-semibold text-red-700">Lord Krishna</span>, disguised as a Brahmin, tested Barbarika’s intentions and realized that his vow could unintentionally support <span className="italic">adharma</span> (unrighteousness) by constantly switching sides. To prevent this, Krishna revealed his divine form and asked Barbarika for a supreme sacrifice. In an act of ultimate devotion and humility, Barbarika willingly donated his <span className="font-semibold">head (Shish)</span> to Krishna. Moved by his selflessness, Krishna granted him a boon that in the age of <span className="italic">Kaliyuga</span>, he would be worshipped as <span className="font-semibold text-red-700">Shyam</span>, and those who remember him with a pure heart would be blessed. His head, said to have witnessed the entire war from a hilltop, is now enshrined in the sacred <span className="font-semibold text-red-700">Khatu Shyam Temple</span> in Rajasthan—a symbol of selfless devotion and eternal grace.
  </p>
</div>

{/* left image right para */}

<div className="flex flex-col lg:flex-row px-4 sm:px-6 lg:px-12 py-8 gap-6">
  {/* Image Section */}
  <div className="w-full lg:w-1/2">
    <img 
      src="https://rukminim1.flixcart.com/image/832/832/juk4gi80/poster/z/t/z/large-newposter8315-lord-khatu-shyam-ji-i-poster-large-print-on-original-imaf5tfyahpty8gy.jpeg?q=70" 
      alt="Descriptive Image" 
      className="rounded-lg w-full h-auto object-cover shadow-md"
    />
  </div>

  {/* Content Section */}
  <div className="w-full lg:w-1/2 flex flex-col justify-center">
    {/* Heading */}
    <h1 className="text-xl sm:text-2xl lg:text-3xl text-red-700 font-bold mb-4 text-center lg:text-left">
      About Shree Shyam Parivar Foundation Bhopura
    </h1>

    {/* Paragraph */}
    <p className="text-base sm:text-lg text-justify text-gray-800 leading-relaxed">
     Shree Shyam Parivar Foundation Bhopura is a non-profit organization established on September 4, 2021, under the Companies Act, 2013 (CIN No. U74999DL2021NPL386100). Our mission is to serve society and address key social issues through a wide range of charitable and community-driven activities.

Founded by a group of committed social workers, the foundation aims to uplift underprivileged sections of society through efforts in healthcare, education, vocational training, and empowerment—particularly for women and children. We are also dedicated to promoting sustainable development within local communities.

Our work focuses on supporting vulnerable groups such as migrants, impoverished and abused women, neglected children, senior citizens, and school dropouts. To reach these communities, we organize and facilitate:
At Shree Shyam Parivar Foundation, we envision a society where every individual, irrespective of their socio-economic background, has access to opportunities for growth and prosperity. We value compassion, integrity, and transparency in all our efforts, striving to create an inclusive community where everyone can thrive.

Through collaboration with like-minded organizations, local governments, and volunteers, we continue to work towards empowering.
    </p>
  </div>
</div>

{/* 2section content */}

<div className="flex justify-center items-center mt-4 px-2">
  <div className="flex flex-col md:flex-row w-full md:w-4/5">
    {/* Left Section */}
    <div className="w-full md:w-1/2 px-4 mb-6 md:mb-0">
      <div className="font-bold text-2xl mb-4 text-red-700 text-center">Our Vision</div>
      <p className="text-gray-700 text-justify">
        The Khatu Shyam Baba Seva Foundation is committed to uplifting socially and economically disadvantaged communities by providing quality education, healthcare, and livelihood opportunities. Our mission is to ensure that children, especially those from underprivileged backgrounds, receive the education, health support, and nutrition they need to grow into responsible citizens. We empower girls to pursue their educational and professional aspirations, helping them become confident, independent contributors to society. Through vocational training and career counseling, we equip youth with the skills needed to earn a stable income and improve their quality of life. Additionally, we provide healthcare services and wellness initiatives to ensure that marginalized communities have access to basic healthcare. By creating sustainable livelihood opportunities, we strive to break the cycle of poverty, empowering individuals to lead self-sufficient lives with dignity.
      </p>
    </div>

    {/* Right Section */}
    <div className="w-full md:w-1/2 px-4">
      <div className="font-bold text-2xl mb-4 text-red-700 text-center">Our Mission</div>
      <p className="text-gray-700 text-justify">
        Since its foundation, the <strong>Khatu Shyam Baba Seva Foundation</strong> has been dedicated to fostering a social order based on the principles of <strong>"Hare Ka Sahara"</strong>, focusing on promoting <strong>inclusive education</strong>, ensuring quality learning for all children regardless of gender, class, race, ethnicity, or religion. The Foundation is committed to <strong>early childhood development</strong>, implementing <strong>child-centered approaches</strong>, and providing <strong>teacher training</strong> to improve educational outcomes. Additionally, it strengthens <strong>community engagement</strong> by building closer relationships between schools and local communities, while also emphasizing <strong>gender equality</strong>, <strong>health and well-being</strong>, <strong>sustainable development</strong>, and the integration of <strong>technology in education</strong>. Through scholarships and financial support, the Foundation strives to eliminate educational barriers, empowering marginalized children and ensuring equal opportunities for all.
      </p>
    </div>
  </div>
</div>

<div className="py-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-red-600 mb-10">
          Founder
        </h2>

      <div className="flex flex-col md:flex-row justify-center items-center gap-8 px-4">
        {/* Founder Card 1 */}
        <div className="rounded-2xl overflow-hidden w-full max-w-sm">
          <img
            src="/dir.png"
            alt="Founder 1"
            className="w-full h-[500px] object-cover"
          />
          <div className="p-4 text-center">
            <h3 className="text-xl font-semibold text-gray-800">Ravindra Yadav</h3>
            {/* <p className="text-sm text-gray-500">Founder</p> */}
          </div>
        </div>

        {/* Founder Card 2 */}
        <div className="rounded-2xl overflow-hidden w-full max-w-sm">
          <img
            src="/dir2.png"
            alt="Founder 2"
            className="w-full h-[500px] object-cover"
          />
          <div className="p-4 text-center">
            <h3 className="text-xl font-semibold text-gray-800">Omkar Sharma</h3>
            {/* <p className="text-sm text-gray-500">Founder</p> */}
          </div>
        </div>
      </div>
    </div>



{/* 4cards */}
<div className="container-fluid mx-auto px-4 sm:px-6 lg:px-8 py-10">
  {/* Heading */}
  <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-red-700 mb-10">
    Trust Board Members
  </h1>

  {/* Grid Layout */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-5 gap-8">
    {[
      {
        src: "/client1.png",
        alt: "Director 1",
        name: "Mukesh Kumar",
        role: "Director",
      },
      {
        src: "/client2.png",
        alt: "Director 2",
        name: "Rajesh Kumar",
        role: "Director",
      },
      {
        src: "/client3.png",
        alt: "Director 3",
        name: "Reena Gupta",
        role: "Director",
      },
      {
        src: "/client4.png",
        alt: "Director",
        name: "Vinesh Yadav",
        role: "Director",
      },
       {
        src: "/client5.jpeg",
        alt: "Auditor",
        name: "Ram Kumar Jha",
        role: "Director",
      },
  
    ].map((person, idx) => (
      <div key={idx} className="text-center">
        <img
          src={person.src}
          alt={person.alt}
          className="w-full h-86 object-cover rounded-md shadow-md"
        />
        <h3 className="mt-4 text-lg sm:text-xl font-semibold">{person.name}</h3>
        {/* <p className="text-red-600 font-bold text-sm sm:text-base">{person.role}</p> */}
      </div>
    ))}
  </div>
</div>



    {/* 8cards */}
    <div className="py-10 px-4 sm:px-6 lg:px-8 mx-auto">
  <h2 className="text-3xl sm:text-4xl font-bold text-center text-red-600 mb-10">
    Trust Members
  </h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-5 gap-8">
    {members.map((member, index) => (
      <div key={index} className="text-center">
        <img
          src={member.img}
          alt={member.name}
          className="w-full h-86 object-cover rounded-md shadow-md"
        />
        <h3 className="mt-4 text-lg sm:text-xl font-semibold">{member.name}</h3>
        {/* <p className="text-red-600 font-bold text-sm sm:text-base">{member.role}</p> */}
      </div>
    ))}
  </div>
</div>


</div>
  );
};

export default About;
