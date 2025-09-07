import { Building2 } from "lucide-react";

const cities = [
  { name: "Mumbai", image: "https://images.unsplash.com/photo-1562979314-bee7453e911c?q=80&w=774&auto=format&fit=crop" },
  { name: "Delhi", image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=870&auto=format&fit=crop" },
  { name: "Bhopal", image: "https://images.unsplash.com/photo-1652645709250-774cfeeda89c?q=80&w=387&auto=format&fit=crop" },
  { name: "Bangalore", image: "https://images.unsplash.com/photo-1698332137428-3c4296198e8f?q=80&w=387&auto=format&fit=crop" },
  { name: "Hyderabad", image: "https://images.unsplash.com/photo-1657981630164-769503f3a9a8?q=80&w=435&auto=format&fit=crop" },
  { name: "Chennai", image: "https://images.unsplash.com/photo-1616843413587-9e3a37f7bbd8?q=80&w=435&auto=format&fit=crop" },
  { name: "Jaipur", image: "https://images.unsplash.com/photo-1524229648276-e66561fe45a9?q=80&w=843&auto=format&fit=crop" },
  { name: "Lucknow", image: "https://images.unsplash.com/photo-1577109716041-02c9988f23ca?q=80&w=435&auto=format&fit=crop" },
//   { name: "Pune", image: "https://images.unsplash.com/photo-1686543918113-69f8a94b3b67?q=80&w=327&auto=format&fit=crop" },
];

export default function PopularCities() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6">Popular Cities</h2>

      {/* ✅ Responsive Layout */}
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-9 gap-6">
        {/* Cities */}
        {cities.map((city, index) => (
          <div
            key={index}
            className="flex flex-col items-center cursor-pointer hover:scale-105 transition-transform"
          >
            <img
              src={city.image}
              alt={city.name}
              className="w-20 h-20 md:w-24 md:h-24 object-cover rounded-xl shadow"
            />
            <p className="mt-2 text-sm font-medium text-center">{city.name}</p>
          </div>
        ))}

        {/* All Cities */}
        <div className="flex flex-col items-center cursor-pointer hover:scale-105 transition-transform">
          <div className="w-20 h-20 md:w-24 md:h-24 flex items-center justify-center rounded-xl bg-black text-white">
            <Building2 size={28} />
          </div>
          <p className="mt-2 text-sm font-medium text-center">All Cities</p>
        </div>
      </div>
    </div>
  );
}
