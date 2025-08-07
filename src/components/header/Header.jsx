import { FaFacebook, FaInstagram, FaYoutube, FaPlay } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import { MapPin, Calendar, Users, ArrowRight, Sparkles } from "lucide-react";
import "./Header.css";
import React, { useContext, useEffect, useState } from "react";
import Slider from "../../utils/slider/Slider";
import { MyContext } from "../../context/AppContext";
import { Link } from "react-router-dom";

const contentData = [
  {
    country: "Indonesia",
    title: "Explore Indonesia",
    subtitle: "Discover Paradise Islands",
    description: "Experience the breathtaking beauty of Indonesia's 17,000 islands. From the cultural heart of Bali to the pristine beaches of Raja Ampat, embark on an unforgettable journey through diverse landscapes and rich traditions.",
    highlights: ["1,000+ Islands", "Rich Culture", "Tropical Climate"],
    color: "from-orange-500 to-red-600"
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



      const handleClass = (activeSlideIndex) => {
        switch (activeSlideIndex) {
            case 0:
                return "bgContainer1";
            case 1:
                return "bgContainer2";
            case 2:
                return "bgContainer3";
            default:
                return "bgContainer1";
        }
    }


    const classChange = handleClass(activeSlideIndex);




  useEffect(() => {
    setIsVisible(true);
    const timer = setInterval(() => {
      setCurrentHighlight(prev => (prev + 1) % 3);
    }, 2000);
    return () => clearInterval(timer);
  }, [activeSlideIndex]);

  const currentContent = contentData[activeSlideIndex] || contentData[0];

  const socialLinks = [
    { icon: FaYoutube, color: "hover:text-red-500", label: "YouTube" },
    { icon: FaInstagram, color: "hover:text-pink-500", label: "Instagram" },
    { icon: BsWhatsapp, color: "hover:text-green-500", label: "WhatsApp" },
    { icon: FaFacebook, color: "hover:text-blue-500", label: "Facebook" } 
  ];

  return (
    <div className={`relative min-h-screen flex flex-col justify-center overflow-hidden ${classChange}`}>
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
              <div className="w-12 h-1 bg-gradient-to-r from-red-500   to-green-500 rounded-full"></div>
              <span className="text-red-500 font-extrabold text-lg tracking-wider uppercase">
                {currentContent.subtitle}
              </span>
            </div>
            
            <h1 className="text-[32px] sm:text-[48px] md:text-[64px] lg:text-[80px] xl:text-[100px] text-white font-montserrat font-[800] leading-[0.9] mb-6">
              Explore <br />
              <span className={`bg-gradient-to-r ${currentContent.color} bg-clip-text text-transparent animate-pulse`}>
               Tours
              </span>
            </h1>
          </div>

          {/* Description */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <p className="text-white/90 text-[16px] md:text-[18px] leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-8">
              {currentContent.description}
            </p>
          </div>

          {/* Highlights */}
          <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
              {currentContent.highlights.map((highlight, index) => (
                <div 
                  key={index}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all duration-500 ${
                    currentHighlight === index 
                      ? 'border-[#2FA8B9] bg-[#2FA8B9]/20 text-[#42a8bb]' 
                      : 'border-white/30 bg-white/5 text-white/70'
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
              <Link to={"/contact"} className="group relative overflow-hidden bg-gradient-to-r bg-red-500  text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                <span className="relative z-10 flex items-center gap-3">
                  <MapPin className="w-5 h-5" />
                  Book Now
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r bg-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>

             
            </div>
          </div>

          {/* Stats */}
          <div className={`transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex justify-center lg:justify-start gap-8 mt-12">
              <div className="text-center">
                <div className="text-2xl font-bold text-[#42a8bb] mb-1">50+</div>
                <div className="text-white/60 text-sm">Destinations</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#42a8bb] mb-1">10K+</div>
                <div className="text-white/60 text-sm">Happy Travelers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#42a8bb] mb-1">5★</div>
                <div className="text-white/60 text-sm">Rating</div>
              </div>
            </div>
          </div>
        </div>

        {/* Slider Section */}
        <div className="w-full mt-15  lg:w-1/2 flex flex-col items-center lg:items-end relative">
          <div className={`w-full max-w-[500px]   transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <div className="relative">
              {/* Decorative Frame */}
              <div className="absolute -inset-4 bg-gradient-to-r from-[#2FA8B9]/20 to-[#42a8bb]/20 rounded-3xl blur-xl"></div>
              <div className="relative ">
                <Slider />
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
                  <div className={`w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-white/20 hover:scale-110 ${social.color}`}>
                    <social.icon className="text-xl" />
                  </div>
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-xs text-white/60 whitespace-nowrap">{social.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Info Cards */}
          {/* <div className={`hidden lg:block absolute -right-20 top-1/2 transform -translate-y-1/2 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="space-y-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 min-w-[200px] hover:bg-white/15 transition-all duration-300">
                <div className="flex items-center gap-3 mb-2">
                  <Calendar className="w-5 h-5 text-[#42a8bb]" />
                  <span className="text-white font-medium">Best Time</span>
                </div>
                <p className="text-white/70 text-sm">Year Round</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 min-w-[200px] hover:bg-white/15 transition-all duration-300">
                <div className="flex items-center gap-3 mb-2">
                  <Users className="w-5 h-5 text-[#42a8bb]" />
                  <span className="text-white font-medium">Group Size</span>
                </div>
                <p className="text-white/70 text-sm">2-15 People</p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Header;