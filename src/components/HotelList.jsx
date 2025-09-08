import HotelCard from "./HotelCard";
import bed1 from '../assets/bed1.jpg'
import bed2 from '../assets/bed2.jpg'
import bed3 from '../assets/bed3.jpg'
import bed4 from '../assets/bed4.jpg'
import bed5 from '../assets/bed5.jpg'
import bed6 from '../assets/bed6.jpg'
import ex1 from '../assets/ex1.jpg'
import ex2 from '../assets/ex2.jpg'
import ex3 from '../assets/ex3.jpg'
import ex4 from '../assets/ex4.jpg'
import ex5 from '../assets/ex5.jpg'
import ex6 from '../assets/ex6.jpg'
import ex7 from '../assets/ex7.jpg'
import ex8 from '../assets/ex8.jpg'
import ex9 from '../assets/ex9.jpg'





export default function HotelList() {
    const hotels = [
        {
            name: "Continental Inn",
            stars: 4,
            location: "Ayodhya Bypass, Bhopal",
            image: bed4,
            images: [ ex2, ex3, ex4
            ],
            features: [ "Free Wi-Fi", "Free Parking", "24h Front Desk", "Restaurant" ],
            price: 327,
            reviews: { text: "Excellent", score: 8.8, count: 81 },
        },
        {
            name: "Hotel Continental",
            stars: 4,
            location: "Ayodhya Nagar, Bhopal",
            image: bed6,
            images: [ ex1, ex5, ex6
            ],
            features: [ "Free Wi-Fi", "Free Parking", "24h Front Desk", "Restaurant" ],
            price: 290,
            reviews: { text: "Excellent", score: 8.8, count: 50 },
        }, {
            name: "Shree Balaji Hotel",
            stars: 4,
            location: "ISRO Colony, Bhopal",
            image: bed1,
            images: [
                ex7, ex8, ex9
            ],
            features: [ "Free Wi-Fi", "Free Parking", "24h Front Desk", "Restaurant" ],
            price: 230,
            reviews: { text: "Excellent", score: 8.8, count: 49 },
        },

    ];

    return (
        <div className="p-6 space-y-6">
            {hotels.map((hotel, idx) => (
                <HotelCard key={idx} hotel={hotel} />
            ))}
        </div>
    );
}
