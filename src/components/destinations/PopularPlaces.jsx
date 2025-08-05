import React, { useEffect, useRef, useState } from "react";
import { Clock, Star } from "lucide-react";
import { Link } from "react-router-dom";

const places = [
  {
    id: 1,
    name: "California",
    country: "United States of America",
    price: 500,
    rating: 4.5,
    reviews: 20,
    duration: "5 Days",
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop&crop=center"
  },
  {
    id: 2,
    name: "Korola Megna",
    country: "United States of America", 
    price: 500,
    rating: 4.5,
    reviews: 20,
    duration: "5 Days",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop&crop=center"
  },
  {
    id: 3,
    name: "London",
    country: "United Kingdom", // Fixed country
    price: 500,
    rating: 4.5,
    reviews: 20,
    duration: "5 Days",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=400&h=300&fit=crop&crop=center"
  },
  {
    id: 4,
    name: "Miami Beach",
    country: "United States of America",
    price: 500,
    rating: 4.5,
    reviews: 20,
    duration: "5 Days",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop&crop=center"
  },
  {
    id: 5,
    name: "San Francisco", // Made name unique
    country: "United States of America",
    price: 500,
    rating: 4.5,
    reviews: 20,
    duration: "5 Days",
    image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=400&h=300&fit=crop&crop=center"
  },
  {
    id: 6,
    name: "Saintmartine Iceland",
    country: "Iceland", // Fixed country
    price: 500,
    rating: 4.5,
    reviews: 20,
    duration: "5 Days",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=300&fit=crop&crop=center"
  }
];

const PopularPlaces = () => {
  const [visibleCards, setVisibleCards] = useState(new Set());
  const cardRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardId = parseInt(entry.target.dataset.cardId);
            setVisibleCards(prev => new Set([...prev, cardId]));
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
      );
    }

    if (hasHalfStar) {
      stars.push(
        <Star key="half" className="w-4 h-4 fill-yellow-400 text-yellow-400 opacity-50" />
      );
    }

    const remainingStars = 5 - Math.ceil(rating);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(
        <Star key={`empty-${i}`} className="w-4 h-4 text-gray-300" />
      );
    }

    return stars;
  };

  return (
    <div className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Popular Places
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Discover amazing destinations around the world. From bustling cities to serene landscapes, 
            find your perfect getaway with our curated selection of popular travel destinations.
          </p>
        </div>

        {/* Places Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {places.map((place, index) => (
            <Link key={place.id} to="/tours" className="block">
              <div
                ref={(el) => cardRefs.current[index] = el}
                data-card-id={place.id}
                className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-700 transform hover:-translate-y-2 group ${
                  visibleCards.has(place.id) 
                    ? 'translate-x-0 opacity-100' 
                    : '-translate-x-full opacity-0'
                }`}
                style={{
                  transitionDelay: visibleCards.has(place.id) ? `${index * 150}ms` : '0ms'
                }}
              >
                {/* Image Container */}
                <div className="relative overflow-hidden">
                  <img
                    src={place.image}
                    alt={place.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Price Badge */}
                  <div className="absolute top-4 left-4 bg-teal-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    ${place.price}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Title and Country */}
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {place.name}
                    </h3>
                    <p className="text-gray-500 text-sm">
                      {place.country}
                    </p>
                  </div>

                  {/* Rating and Duration */}
                  <div className="flex items-center justify-between">
                    {/* Rating */}
                    <div className="flex items-center space-x-2">
                      <div className="flex items-center space-x-1">
                        {renderStars(place.rating)}
                      </div>
                      <span className="text-sm text-gray-600">
                        ({place.reviews} Reviews)
                      </span>
                    </div>

                    {/* Duration */}
                    <div className="flex items-center space-x-1 text-gray-600">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm">{place.duration}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Contact Us Button */}
        <div className="text-center">
          <Link to="/contact">
            <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Contact Us
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PopularPlaces;