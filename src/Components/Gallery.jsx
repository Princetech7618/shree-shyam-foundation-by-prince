import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { FaLocationArrow, FaPhoneAlt, FaEnvelope, FaAngleDoubleRight } from "react-icons/fa";


const Gallery = () => {
  return (
   <>
  <div className='bg-red-700 py-4 md:py-6 lg:py-6'>
    <h1 className='text-white text-lg md:text-2xl lg:text-2xl font-bold justify-center text-center'>Gallery</h1>
    <h3 className='text-white justify-center text-center text-sm lg:text-md'>Home - Gallery</h3>
  </div>
   
{/* photos */}
<div className="p-4 px-2 lg:mx-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

        <img src="https://th.bing.com/th/id/OIP.cKiB4WkQKbsWTLEcUxzdUQHaFY?rs=1&pid=ImgDetMain" alt="img1" className="rounded shadow object-cover w-100 h-50" />
        <img src="https://thumbs.dreamstime.com/b/beawar-rajasthan-india-march-idol-hindu-god-khatu-shyam-baba-form-lord-krishna-temple-spring-fagun-fair-ahead-214210054.jpg?w=768" alt="img2" className="rounded shadow object-cover w-100 h-50" />
        <img src="https://th.bing.com/th/id/OIP.dcAGojT56K1_NUodzH4lkQAAAA?rs=1&pid=ImgDetMain" alt="img3" className=" w-100 h-50 rounded shadow object-cover" />
        <img src="https://th.bing.com/th/id/OIP.Ql0unGF1cGf1-suH4U624QHaEK?w=290&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="img4" className=" w-100 h-50 rounded shadow object-cover" />
        <img src="https://th.bing.com/th/id/OIP.NOskU5LOEIPU71R3YchuAAHaE8?rs=1&pid=ImgDetMain" alt="img5" className=" w-100 h-50 rounded shadow object-cover" />
        <img src="https://www.backpacknxplore.com/wp-content/uploads/2019/05/gudibande-lake-1-min_thumb.jpg" alt="img6" className=" w-100 h-50 rounded shadow object-cover" />
        <img src="https://th.bing.com/th/id/OIP.7vGarsIWD5mGOXvEfXLZlgHaJQ?w=1080&h=1350&rs=1&pid=ImgDetMain" alt="img7" className=" w-100 h-50 rounded shadow object-cover" />
        <img src="https://th.bing.com/th/id/OIP.cKiB4WkQKbsWTLEcUxzdUQHaFY?rs=1&pid=ImgDetMain" alt="img8" className=" w-100 h-50 rounded shadow object-cover" />
        <img src="https://th.bing.com/th/id/OIP.dcAGojT56K1_NUodzH4lkQAAAA?rs=1&pid=ImgDetMain" alt="img9" className=" w-100 h-50 rounded shadow object-cover" />
        <img src="https://i.pinimg.com/originals/85/4a/88/854a884b891975d91780a91c922a5e14.jpg" alt="img10" className="w-100 h-50 rounded shadow object-cover" />
        <img src="https://edge.ixigo.com/ixi-api/img/5355f573e4b0d8e5e1614435_600x315.jpg" alt="img1" className=" w-100 h-50 rounded shadow object-cover" />
        <img src="https://th.bing.com/th/id/OIP.NOskU5LOEIPU71R3YchuAAHaE8?rs=1&pid=ImgDetMain" alt="img2" className=" w-100 h-50 rounded shadow object-cover" />
        <img src="https://th.bing.com/th/id/OIP.SEm22UbQ7YAgTVF4ztuBBAHaDq?rs=1&pid=ImgDetMain" alt="img3" className=" w-100 h-50 rounded shadow object-cover" />
        <img src="https://www.maharanacab.com/wp-content/uploads/2019/03/jaipur-to-khatu-shyamji-temple-taxi-1.jpg" alt="img4" className=" w-100 h-50 rounded shadow object-cover" />
        <img src="https://bestbengaluru.com/wp-content/uploads/2024/06/khatu-shyam-temple.jpg" alt="img5" className=" w-100 h-50 rounded shadow object-cover" />
        <img src="https://i.ytimg.com/vi/DeveX2uPLKo/maxresdefault_live.jpg" alt="img6" className=" w-100 h-50 rounded shadow object-cover" />
        <img src="https://edge.ixigo.com/ixi-api/img/5355f573e4b0d8e5e1614435_600x315.jpg" alt="img7" className=" w-100 h-50 rounded shadow object-cover" />
        <img src="https://th.bing.com/th/id/R.8071d7d1ff523f92bdd87aabb8d610de?rik=MUDa6f0mtrRxdg&riu=http%3a%2f%2fphotos.wikimapia.org%2fp%2f00%2f05%2f58%2f45%2f18_full.jpg&ehk=6BVNefjvKyAT8UITmM1eJhjCYpgFBwqyK1Bn8RDQ5KU%3d&risl=&pid=ImgRaw&r=0" alt="img8" className=" w-100 h-50 rounded shadow object-cover" />
        <img src="https://th.bing.com/th/id/OIP.NOskU5LOEIPU71R3YchuAAHaE8?rs=1&pid=ImgDetMain" alt="img9" className=" w-100 h-50 rounded shadow object-cover" />
        <img src="https://th.bing.com/th/id/OIP.SEm22UbQ7YAgTVF4ztuBBAHaDq?rs=1&pid=ImgDetMain" alt="img10" className=" w-100 h-50 rounded shadow object-cover" />

      </div>
</div>
   </>
  )
}

export default Gallery