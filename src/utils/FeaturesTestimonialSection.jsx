import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Hotel, MapPin, Clock } from "lucide-react";

const features = [
  {
    icon: <Hotel className="w-8 h-8 text-red-500" />,
    title: "Comfortable Journey",
    description: "A wonderful serenity has taken to the possession of my entire soul."
  },
  {
    icon: <Hotel className="w-8 h-8 text-red-500" />,
    title: "Luxuries Hotel",
    description: "A wonderful serenity has taken to the possession of my entire soul."
  },
  {
    icon: <Clock className="w-8 h-8 text-red-500" />,
    title: "Travel Guide",
    description: "A wonderful serenity has taken to the possession of my entire soul."
  }
];

const testimonials = [
  {
    id: 1,
    name: "Micky Mouse",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    text: "Working in conjunction with humanitarian aid agencies, we have supported programmes to help alleviate human suffering."
  },
  {
    id: 2,
    name: "Sarah Johnson",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
    text: "The travel experience was absolutely amazing. Every detail was perfectly planned and executed. Highly recommend their services!"
  },
  {
    id: 3,
    name: "David Chen",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    text: "Professional service and attention to detail made our vacation unforgettable. The team went above and beyond our expectations."
  }
];

const FeaturesTestimonialSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center group hover:transform hover:scale-105 transition-all duration-300"
            >
              {/* Icon Container */}
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center group-hover:bg-red-100 transition-colors duration-300">
                  {feature.icon}
                </div>
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed max-w-sm mx-auto">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Testimonial Section */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 relative overflow-hidden">
            
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-red-50 to-transparent rounded-full transform translate-x-16 -translate-y-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-blue-50 to-transparent rounded-full transform -translate-x-12 translate-y-12"></div>
            
            <div className="relative z-10 text-center">
              
              {/* Profile Image */}
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <img
                    src={testimonials[currentTestimonial].image}
                    alt={testimonials[currentTestimonial].name}
                    className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg"
                  />
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Testimonial Text */}
              <div className="mb-6">
                <p className="text-gray-700 text-lg leading-relaxed max-w-2xl mx-auto italic">
                  "{testimonials[currentTestimonial].text}"
                </p>
              </div>

              {/* Name */}
              <h4 className="text-xl font-semibold text-gray-900 mb-8">
                - {testimonials[currentTestimonial].name}
              </h4>

              {/* Navigation Dots */}
              <div className="flex items-center justify-center space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentTestimonial
                        ? "bg-red-500 scale-125"
                        : "bg-gray-300 hover:bg-gray-400"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-red-500 hover:shadow-xl transition-all duration-300 opacity-0 md:opacity-100"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-red-500 hover:shadow-xl transition-all duration-300 opacity-0 md:opacity-100"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesTestimonialSection;