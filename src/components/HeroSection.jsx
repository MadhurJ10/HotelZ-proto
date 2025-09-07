import { useState } from "react";

export default function HeroSection() {
  const [location, setLocation] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("2 Adults, 1 Room");

  return (
    <section
      className="relative h-[90vh] bg-cover bg-center flex items-end justify-center pb-20"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.1.0&auto=format&fit=crop&w=1600&q=80')",
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/20"></div>

      {/* Content */}
      <div className="relative text-center text-white max-w-4xl px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-snug">
          Find your perfect stay with{" "}
          <span className="text-blue-400">HotelZ</span>
        </h1>
        <p className="mb-8 text-lg md:text-xl">
          Compare prices, explore rooms, and book with confidence.
        </p>

        {/* Search Box */}
        <div className="bg-white text-black  rounded-2xl shadow-xl p-6 flex flex-col md:flex-row md:items-center gap-4 md:gap-2 md:w-fit">
          <input
            type="text"
            placeholder="Where are you going?"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="flex-1 min-w-[200px] px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="date"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
            className="flex-1 min-w-[160px] px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="date"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            className="flex-1 min-w-[160px] px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <select
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
            className="flex-1 min-w-[180px] px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option>1 Adult, 1 Room</option>
            <option>2 Adults, 1 Room</option>
            <option>2 Adults, 2 Rooms</option>
            <option>Family</option>
          </select>
          <button className="w-full md:w-auto bg-blue-500 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-600 transition-all">
            Search
          </button>
        </div>
      </div>
    </section>
  );
}
