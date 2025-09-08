import { Star } from "lucide-react";

export default function HotelCard({ hotel }) {
  return (
    <div className="border rounded-lg shadow-sm p-4 flex flex-col md:flex-row gap-4 w-full">
      {/* Left: Image */}
      <div className="flex flex-col">
        <img
          src={hotel.image}
          alt={hotel.name}
          className="w-full h-48 object-cover object-center rounded-lg"
        />
        <div className="grid grid-cols-4 gap-1 mt-2">
          {hotel.images.slice(0, 3).map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`hotel-${idx}`}
              className="w-16 h-12 object-cover  rounded"
            />
          ))}
          <div className="flex items-center justify-center bg-gray-200 text-sm font-semibold rounded">
            See all
          </div>
        </div>
      </div>

      {/* Right: Details */}
      <div className="flex-1 flex flex-col justify-between">
        <div>
          {/* Hotel name + rating */}
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">{hotel.name}</h2>
            <div className="flex items-center gap-1 text-yellow-500">
              {Array.from({ length: hotel.stars }).map((_, i) => (
                <Star key={i} size={18} fill="currentColor" />
              ))}
            </div>
          </div>

          {/* Location */}
          <p className="text-sm text-blue-600">{hotel.location}</p>

          {/* Features */}
          <div className="flex flex-wrap gap-2 mt-2 text-sm">
            {hotel.features.slice(0, 3).map((feature, i) => (
              <span
                key={i}
                className="border px-2 py-1 rounded text-gray-600"
              >
                {feature}
              </span>
            ))}
            {hotel.features.length > 3 && (
              <span className="border px-2 py-1 rounded text-gray-600">
                +{hotel.features.length - 3}
              </span>
            )}
          </div>
        </div>

        {/* Bottom: Price + Reviews */}
        <div className="flex justify-between items-center mt-4">
          <div>
            <p className="text-sm text-gray-500">
              {hotel.reviews.count} reviews • {hotel.reviews.text}
            </p>
            <p className="text-lg font-semibold text-red-600">
              ₹ {hotel.price.toLocaleString()}
              <span className="text-sm text-gray-600"> / Hour</span>
            </p>
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700">
            Check availability
          </button>
        </div>
      </div>
    </div>
  );
}
