import React, { useState } from "react";
import {
    Search,
    PhoneCall,
    Compass,
    Instagram,
    Linkedin,
    Facebook,
    GanttChartSquare,
    Menu,
    X,
    ChevronDown,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const FancyNavbar = () => {

     
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [mobileDropdown, setMobileDropdown] = useState({ pages: false, blog: false, tours: false });
    const location = useLocation();
    const currentPath = location.pathname;

    const [isScrolled, setIsScrolled] = useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    const navLinks = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Contact", path: "/contact" },
    ];

    const monthLinks = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const isActive = (path) => location.pathname === path;

    return (
     <header
      className={`fixed top-0 left-0 w-[100vw] z-50 transition-all duration-300
        ${isScrolled ? "bg-white shadow-md" : "bg-white/0 "}
        ${!isScrolled && currentPath === "/tours" ? "text-white" : ""}
      `}
    >
            <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <Compass className="text-red-500" size={28} />
                    <h1 className="text-xl font-bold ">Mice Travelo</h1>
                </div>

                {/* Desktop Nav */}
                <nav className="hidden lg:flex gap-8 font-medium">
                    {navLinks.map(link => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className={`transition hover:text-red-500 ${isActive(link.path) ? "text-red-500" : ""}`}
                        >
                            {link.name}
                        </Link>
                    ))}

                    {/* Tours Dropdown */}
                    <div className="relative group cursor-pointer">
                        <div className="flex items-center gap-1  hover:text-red-500 transition">
                            Tours <ChevronDown size={16} />
                        </div>
                        <div className="absolute top-full left-0 w-40 mt-2 backdrop-blur-md bg-black/60 text-white rounded-md shadow-md opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 z-50">
                            {monthLinks.map((month) => (
                                <Link
                                    key={month}
                                    to={`/${month.toLowerCase()}`}
                                    className="block px-4 py-2 uppercase hover:bg-white hover:text-green-900 transition"
                                >
                                    {month}
                                </Link>
                            ))}
                        </div>
                    </div>
                </nav>

                {/* Right Icons - Desktop */}
                <div className="hidden lg:flex items-center gap-4">
                    <div className="flex items-center text-sm  font-medium gap-2">
                        <PhoneCall className="text-red-500" size={16} />
                        10(256)-928 256
                    </div>
                    <div className="h-6 w-px bg-gray-300 mx-2"></div>
                    <div className="flex gap-3 text-gray-400">
                        {[Instagram, Linkedin, Facebook, GanttChartSquare].map((Icon, i) => (
                            <a href="#" key={i} className="hover:text-red-500"><Icon size={18} /></a>
                        ))}
                    </div>
                    <button className="bg-red-500 p-2 rounded-md text-white">
                        <Search size={18} />
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <div className="lg:hidden">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-red-500">
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="lg:hidden bg-white shadow-md px-6 pt-4 pb-6 space-y-4 dark:text-white   font-medium animate-fadeIn">
                    {navLinks.map(link => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className={`block hover:text-red-500 ${isActive(link.path) ? "text-red-500" : ""}`}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}

                    {/* Tours Dropdown - Mobile */}
                    <div>
                        <button
                            onClick={() =>
                                setMobileDropdown({ ...mobileDropdown, tours: !mobileDropdown.tours })
                            }
                            className="flex justify-between items-center w-full hover:text-red-500"
                        >
                            Tours
                            <ChevronDown
                                size={16}
                                className={`${mobileDropdown.tours ? "rotate-180" : ""} transition`}
                            />
                        </button>
                        {mobileDropdown.tours && (
                            <div className="ml-4 mt-2 space-y-2">
                                {[
                                    "January",
                                    "February",
                                    "March",
                                    "April",
                                    "May",
                                    "June",
                                    "July",
                                    "August",
                                    "September",
                                    "October",
                                    "November",
                                    "December",
                                ].map((month) => (
                                    <Link
                                        key={month}
                                        to={`/${month.toLowerCase()}`}
                                        className="block hover:text-red-500 uppercase"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {month}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>


                    {/* Pages Dropdown */}


                    {/* Blog Dropdown */}
                    <div>
                        <button
                            onClick={() => setMobileDropdown({ ...mobileDropdown, blog: !mobileDropdown.blog })}
                            className="flex justify-between w-full hover:text-red-500"
                        >
                            Blog <ChevronDown className={`${mobileDropdown.blog ? "rotate-180" : ""} transition`} size={16} />
                        </button>
                        {mobileDropdown.blog && (
                            <div className="ml-4 mt-2 space-y-2">
                                <Link to="/blog-grid" className="block hover:text-red-500">Blog Grid</Link>
                                <Link to="/blog-details" className="block hover:text-red-500">Blog Details</Link>
                            </div>
                        )}
                    </div>

                    {/* Social Icons */}
                    <div className="flex gap-4 mt-4 text-gray-400">
                        {[Instagram, Linkedin, Facebook, GanttChartSquare].map((Icon, i) => (
                            <a href="#" key={i} className="hover:text-red-500"><Icon size={18} /></a>
                        ))}
                        <button className="bg-red-500 p-2 rounded-md text-white ml-auto">
                            <Search size={18} />
                        </button>
                    </div>
                </div>
            )}
        </header>
    );
};

export default FancyNavbar;
