import React, { useContext, useEffect, useState } from "react";
import { FaFacebook, FaInstagram, FaYoutube, FaPlay } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import { MapPin, Calendar, Users, ArrowRight, Sparkles } from "lucide-react";
import "./Header.css";
import Slider from "../../utils/slider/Slider";
import { MyContext } from "../../context/AppContext";
import BookTour from "../../utils/slider/BookTour";

const contentData = [
  {
    country: "Indonesia",
    title: "Explore Indonesia",
    subtitle: "Discover Paradise Islands",
    description: "Experience the breathtaking beauty of Indonesia's 17,000 islands. From the cultural heart of Bali to the pristine beaches of Raja Ampat, embark on an unforgettable journey through diverse landscapes and rich traditions.",
    highlights: ["1,000+ Islands", "Rich Culture", "Tropical Climate"],
    color: "from-red-500 to-red-600"
  },
  {
    country: "Thailand",
    title: "Explore Thailand",
    subtitle: "Land of Smiles",
    description: "Immerse yourself in Thailand's vibrant culture, from bustling Bangkok markets to serene temple complexes. Discover golden beaches, lush jungles, and warm hospitality that will capture your heart.",
    highlights: ["Ancient Temples", "Street Food", "Tropical Beaches"],
    color: "from-yellow-500 to-orange-600"
  },
  {
    country: "Nepal",
    title: "Explore Nepal",
    subtitle: "Roof of the World",
    description: "Journey to the majestic Himalayas where adventure meets spirituality. Experience world-class trekking, encounter diverse wildlife, and discover ancient Buddhist and Hindu traditions in this mountain paradise.",
    highlights: ["Mount Everest", "Himalayan Treks", "Ancient Culture"],
    color: "from-blue-500 to-purple-600"
  },
];

const Header = () => {
  const { activeSlideIndex } = useContext(MyContext);
  const [isVisible, setIsVisible] = useState(false);
  const [currentHighlight, setCurrentHighlight] = useState(0);

  // Fix: Add proper dependencies and cleanup
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Fix: Separate useEffect for highlight animation
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHighlight(prev => (prev + 1) % 3);
    }, 2000);
    
    return () => clearInterval(timer);
  }, []);

  // Fix: Reset highlight when slide changes
  useEffect(() => {
    setCurrentHighlight(0);
    setIsVisible(false);
    
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, [activeSlideIndex]);

  // Fix: Add safe fallback and bounds checking
  const currentContent = contentData[activeSlideIndex] || contentData[0];

  const socialLinks = [
    { icon: FaYoutube, color: "hover:text-red-500", label: "YouTube" },
    { icon: FaInstagram, color: "hover:text-pink-500", label: "Instagram" },
    { icon: BsWhatsapp, color: "hover:text-green-500", label: "WhatsApp" },
    { icon: FaFacebook, color: "hover:text-blue-500", label: "Facebook" }
  ];

  return (
    <div className="relative min-h-screen     flex flex-col justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#2FA8B9]/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 right-20 w-48 h-48 bg-[#42a8bb]/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-[#2FA8B9]/10 rounded-full blur-2xl animate-bounce"></div>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-between px-4 md:px-[140px] gap-12 lg:gap-20 relative z-10">
        {/* Content Section */}
        <div className="w-full lg:w-1/2 text-center lg:text-left space-y-8">
          {/* Main Title with Animation */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
              <div className="w-12 h-1 bg-gradient-to-r from-[#2FA8B9] to-[#42a8bb] rounded-full"></div>
              <span className="text-[#42a8bb] font-semibold text-lg tracking-wider uppercase">
                {currentContent.subtitle}
              </span>
            </div>

            <h1 className="text-[32px] sm:text-[48px] md:text-[64px] lg:text-[80px] xl:text-[100px] text-black font-montserrat font-[800] leading-[0.9] mb-6">
              Explore <br />
              <span className={`bg-gradient-to-r ${currentContent.color} bg-clip-text text-transparent animate-pulse`}>
                Tour
              </span>
            </h1>
          </div>

          {/* Description */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <p className="text-black/90 text-[16px] md:text-[18px] leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-8">
              {currentContent.description}
            </p>
          </div>

          {/* Highlights */}
          <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
              {currentContent.highlights.map((highlight, index) => (
                <div
                  key={`${activeSlideIndex}-${index}`} // Fix: Add unique key with slide index
                  className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all duration-500 ${
                    currentHighlight === index
                      ? 'border-[#2FA8B9] bg-[#2FA8B9]/20 text-[#42a8bb]'
                      : 'border-white/30 bg-white/5 text-black/70'
                  }`}
                >
                  <Sparkles className="w-4 h-4" />
                  <span className="text-sm font-medium">{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className={`transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-6">
              <BookTour />

              <button 
                className="group flex items-center gap-3 text-black text-lg hover:text-[#42a8bb] transition-all duration-300"
                aria-label="Watch promotional video"
              >
                <div className="relative">
                  <div className="w-14 h-14 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-[#2FA8B9]/20 transition-all duration-300">
                    <FaPlay className="text-black ml-1" />
                  </div>
                  <div className="absolute inset-0 border-2 border-white/30 rounded-full animate-ping group-hover:border-[#42a8bb]/50"></div>
                </div>
                <span className="font-medium">Watch Video</span>
              </button>
            </div>
          </div>
        </div>

        {/* Slider Section */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-end relative">
          <div className={`w-full max-w-[500px] transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <div className="relative">
              {/* Decorative Frame */}
              <div className="absolute -inset-4 bg-gradient-to-r from-[#2FA8B9]/20 to-[#42a8bb]/20 rounded-3xl blur-xl"></div>
              <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
                <Slider className="" />
              </div>
            </div>
          </div>

          {/* Enhanced Social Icons */}
          <div className={`mt-8 lg:mt-12 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-0.5 bg-gradient-to-r from-transparent to-[#42a8bb]"></div>
              <span className="text-[#42a8bb] text-sm font-medium">Follow Us</span>
              <div className="w-8 h-0.5 bg-gradient-to-l from-transparent to-[#42a8bb]"></div>
            </div>

            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <div key={index} className="group relative">
                  <button
                    className={`w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-white/20 hover:scale-110 ${social.color}`}
                    aria-label={`Visit our ${social.label} page`}
                  >
                    <social.icon className="text-xl" />
                  </button>
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-xs text-black/60 whitespace-nowrap">{social.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;  