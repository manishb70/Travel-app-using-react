import { Link } from "react-router-dom";
import React, { useState } from "react";



// Using placeholder images that will work in the artifact environment
const tours = [
  {
    name: "KERALA",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=400&h=600&fit=crop&crop=center",
    description: "Backwaters and spice gardens"
  },
  {
    name: "NEPAL",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=400&h=600&fit=crop&crop=center",
    description: "Himalayan adventures"
  },
  {
    name: "KASHMIR",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=600&fit=crop&crop=center",
    description: "Valley of flowers"
  },
  {
    name: "RAJASTHAN",
    image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=400&h=600&fit=crop&crop=center",
    description: "Royal heritage"
  },
];

const GroupTours = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="py-16 px-4 bg-white  text-white min-h-screen">
      {/* Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold font-serif mb-4 bg-gradient-to-r from-black to-blue-200 bg-clip-text text-transparent">
          Best MICE Group Tours
        </h2>
        <p className="text-sm md:text-lg max-w-3xl mx-auto text-black leading-relaxed">
          Discover breathtaking destinations with our carefully curated group tours.
          Experience the beauty, culture, and adventure that awaits in these magnificent locations.
        </p>
      </div>

      {/* Desktop Cards */}
      <div className="hidden md:flex justify-center items-stretch gap-1 max-w-6xl mx-auto mb-8">
        {tours.map((tour, index) => (
          <div
            key={index}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className={`
              relative rounded-lg overflow-hidden cursor-pointer
              transition-all duration-500 ease-out transform
              ${hoveredIndex === index
                ? "flex-[3] shadow-2xl"
                : "flex-1 hover:flex-[1.1]"
              }
              h-80 min-w-0
            `}
            style={{
              backgroundImage: `url(${tour.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Gradient Overlay */}
            <div className={`
              absolute inset-0 transition-all duration-500
              ${hoveredIndex === index
                ? "bg-gradient-to-t from-black/80 via-black/30 to-transparent"
                : "bg-gradient-to-t from-black/60 via-black/20 to-transparent"
              }
            `} />

            {/* Content Container */}
            <div className="relative z-10 h-full flex flex-col justify-between p-6">

              {/* Vertical Text (Always Visible) */}
              <div className={`
                flex-1 flex items-center justify-center transition-all duration-500
                ${hoveredIndex === index ? "opacity-0 scale-75" : "opacity-100 scale-100"}
              `}>
                <h3 className="text-white font-bold text-lg tracking-wider writing-mode-vertical transform rotate-180 whitespace-nowrap">
                  {tour.name}
                </h3>
              </div>

              {/* Expanded Content */}
              <div className={`
                absolute inset-0 flex flex-col justify-end p-6
                transition-all duration-500 transform
                ${hoveredIndex === index
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8 pointer-events-none"
                }
              `}>
                <div className="text-center">
                  <h3 className="text-3xl font-bold mb-3 text-white">
                    {tour.name}
                  </h3>
                  <p className="text-gray-200 mb-6 text-base">
                    {tour.description}
                  </p>
                  <Link to={"/tours"}>
                  <button className="bg-white/20 backdrop-blur-md border border-white/30 text-white px-8 py-3 rounded-full hover:bg-white/30 transition-all duration-300 font-medium text-sm">
                    Explore Tours
                  </button>
                  </Link>
                </div>
              </div>

              {/* Bottom Accent Line */}
              <div className={`
                absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-purple-400
                transition-all duration-500 transform origin-left
                ${hoveredIndex === index ? "scale-x-100" : "scale-x-0"}
              `} />
            </div>
          </div>
        ))}
      </div>

      {/* Mobile Cards */}
      <div className="md:hidden grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
        {tours.map((tour, index) => (
          <div
            key={index}
            className="relative rounded-xl overflow-hidden h-64 cursor-pointer group transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
            style={{
              backgroundImage: `url(${tour.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            {/* Content */}
            <div className="relative z-10 flex flex-col justify-end p-6 h-full text-center">
              <h3 className="text-xl font-bold mb-2 text-white">
                {tour.name}
              </h3>
              <p className="text-gray-200 mb-4 text-sm">
                {tour.description}  
              </p>
              <Link to={"tours"} className="bg-white/20 backdrop-blur-sm border border-white/30 text-white px-4 py-2 rounded-full hover:bg-white/30 transition-all duration-200 text-sm font-medium">
                Explore Tours
              </Link  >
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center mt-12">
        <button className="bg-gradient-to-r bg-red-600 text-white px-8 py-3 rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg">
          View All Tours
        </button>
      </div>

      {/* Custom CSS for vertical text */}
      <style jsx>{`
        .writing-mode-vertical {
          writing-mode: vertical-lr;
          text-orientation: mixed;
        }
      `}</style>
    </div>
  );
};

export default GroupTours;