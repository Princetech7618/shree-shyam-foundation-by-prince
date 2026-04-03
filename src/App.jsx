import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

// Component Imports
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import ReasonSection from './Components/khatushyamSection'
import ActivitiesSection from './Components/ActivitiesSection'
import PopularCauses from './Components/TKhatushyam'
import StatsSection from './Components/StatsSection'
import NewsSection from './Components/busSection'
import Footer from './Components/Footer'
import About from './Components/About'
import SeatBooking from './Components/SeatBooking.jsx'
import Temple from './Components/Temple'
import Gallery from './Components/Gallery'
import TourPackage from './Components/TourPackage'
import Contact from './Components/Contact'
import Donate from './Components/Donate'


function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Home Page with all sections */}
        <Route
          path="/"
          element={
            <>
              <Home />
              <ReasonSection />
              <ActivitiesSection />
              <PopularCauses />
              <StatsSection />
              <NewsSection />
            
            </>
          }
        />

        {/* Other Routes */}
        <Route path="/donate" element={<Donate />} />
        <Route path="/about" element={<About />} />
        <Route path="/SeatBooking" element={<SeatBooking />} />
        <Route path="/temple" element={<Temple />} />
        <Route path="/gallery" element={<Gallery />} />
         <Route path="/TourPackage" element={<TourPackage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
