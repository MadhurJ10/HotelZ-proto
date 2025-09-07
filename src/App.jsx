import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import PopularCities from './components/PopularCities'
import HotelList from './components/HotelList'
import FilterSection from './components/FilterSection'

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <PopularCities />

      {/* ✅ Hotel Section (Fixed for laptop/desktop) */}
      <div className="p-6 max-w-7xl mx-autov ">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Left: Filters (1 column) */}
          <div className="col-span-1">
            <FilterSection />
          </div>

          {/* Right: Hotel List (3 columns wide) */}
          <div className="col-span-3">
            <HotelList />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App