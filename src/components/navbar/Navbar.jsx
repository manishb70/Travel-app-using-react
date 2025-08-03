import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import "./Navbar.css";
import { Menu, X, MapPin, Compass } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const menus = [
    { title: "Home", url: "home", icon: Compass },
    { title: "Reason", url: "most", icon: MapPin },
    { title: "View point", url: "viewpoint", icon: MapPin },
    { title: "Book Now", url: "book", icon: MapPin },
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest('.navbar-container')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isOpen]);

  return (
    <>
      {/* Backdrop overlay for mobile menu */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}

      <nav 
        className={`navbar-container fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-[#001E23]/95 backdrop-blur-lg shadow-lg border-b border-white/10' 
            : 'bg-transparent'
        }`}
      >
        <div className="flex justify-between items-center px-6 md:px-[140px] py-4 md:py-5">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-[#2FA8B9] to-[#42a8bb] rounded-xl flex items-center justify-center">
              <Compass className="w-6 h-6 text-white" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-white font-bold text-xl tracking-wide">
                Wanderlust
              </h1>
              <p className="text-[#42a8bb] text-xs font-light -mt-1">
                Travel & Explore
              </p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex">
            <ul className="flex items-center space-x-8 lg:space-x-12">
              {menus.map((menu, i) => (
                <li key={i} className="relative group">
                  <Link
                    to={menu.url}
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={600}
                    delay={100}
                    className="cursor-pointer text-white font-semibold text-sm lg:text-base uppercase tracking-wide py-2 px-4 rounded-lg transition-all duration-300 hover:text-[#42a8bb] hover:bg-white/5 flex items-center space-x-2"
                    onSetActive={() => setActiveSection(menu.url)}
                  >
                    <menu.icon className="w-4 h-4" />
                    <span>{menu.title}</span>
                  </Link>
                  
                  {/* Active indicator */}
                  <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-[#2FA8B9] to-[#42a8bb] transition-all duration-300 group-hover:w-full ${
                    activeSection === menu.url ? 'w-full' : ''
                  }`} />
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-white p-2 rounded-lg hover:bg-white/10 transition-all duration-300 relative z-50"
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-6">
                <Menu 
                  size={24} 
                  className={`absolute inset-0 transition-all duration-300 ${
                    isOpen ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'
                  }`} 
                />
                <X 
                  size={24} 
                  className={`absolute inset-0 transition-all duration-300 ${
                    isOpen ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0'
                  }`} 
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="bg-[#001E23]/95 backdrop-blur-lg border-t border-white/10">
            <ul className="py-6 px-6 space-y-2">
              {menus.map((menu, i) => (
                <li key={i} className="relative">
                  <Link
                    to={menu.url}
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={600}
                    delay={100}
                    className="cursor-pointer flex items-center space-x-4 text-white font-semibold text-base uppercase tracking-wide py-4 px-4 rounded-xl hover:bg-white/10 hover:text-[#42a8bb] transition-all duration-300 border border-transparent hover:border-white/20"
                    onClick={() => setIsOpen(false)}
                    onSetActive={() => setActiveSection(menu.url)}
                  >
                    <div className="w-8 h-8 bg-gradient-to-br from-[#2FA8B9]/20 to-[#42a8bb]/20 rounded-lg flex items-center justify-center">
                      <menu.icon className="w-4 h-4 text-[#42a8bb]" />
                    </div>
                    <span className="flex-1">{menu.title}</span>
                    <div className="w-2 h-2 bg-[#42a8bb] rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </Link>
                  
                  {/* Mobile active indicator */}
                  {activeSection === menu.url && (
                    <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-8 bg-gradient-to-b from-[#2FA8B9] to-[#42a8bb] rounded-r-full" />
                  )}
                </li>
              ))}
            </ul>
            
            {/* Mobile Menu Footer */}
            <div className="px-6 pb-6 pt-2 border-t border-white/10">
              <div className="text-center">
                <p className="text-[#42a8bb] text-sm font-medium mb-1">
                  Ready for Adventure?
                </p>
                <p className="text-white/60 text-xs">
                  Discover amazing destinations worldwide
                </p>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer to prevent content overlap */}
      <div className="h-16 md:h-20" />
    </>
  );
};

export default Navbar;