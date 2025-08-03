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
import { Link } from "react-router-dom";

const FancyNavbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [mobileDropdown, setMobileDropdown] = useState({
        pages: false,
        blog: false,
    });

    return (
        <header className="bg-white shadow-md w-full fixed top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <Compass className="text-red-500" size={28} />
                    <h1 className="text-xl font-bold text-black">Travelo</h1>
                    <div className="h-6 w-px bg-gray-300 mx-4 hidden lg:block"></div>
                </div>

                {/* Hamburger Menu */}
                <div className="lg:hidden">
                    <button

                        className="text-red-500"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex gap-8 text-black font-medium relative">
                    <Link to={"/"} className="hover:text-red-500 transition">Home</Link>
                    <a href="#" className="hover:text-red-500 transition">About</a>
                    <a href="#" className="hover:text-red-500 transition">Destination</a>

                    {/* Pages Dropdown */}
                    {/* Tours Dropdown - Desktop */}
                    <div className="group relative cursor-pointer">
                        <div className="flex items-center gap-1 hover:text-red-500 transition">
                            Tours <ChevronDown size={16} />
                        </div>
                        <div className="absolute left-0 top-full mt-2 w-40  backdrop-blur-md text-white rounded-md shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 z-50">
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
                                    to={`/${month}`}
                                    href="#"
                                    key={month}
                                    Link
                                    className="block px-4 py-2 hover:bg-white hover:text-green-900 uppercase transition"
                                >
                                    {month}
                                </Link>
                            ))}
                        </div>
                    </div>


                    {/* Blog Dropdown */}
                    <div className="group relative cursor-pointer">
                        <div className="flex items-center gap-1 hover:text-red-500 transition">
                            Blog
                            <ChevronDown size={16} />
                        </div>
                        <div className="absolute left-0 top-full mt-2 w-40 bg-white shadow-lg rounded-md opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 z-50">
                            <a href="#" className="block px-4 py-2 hover:bg-gray-100">Blog Grid</a>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-100">Blog Details</a>
                        </div>
                    </div>

                    <a href="#" className="hover:text-red-500 transition">Contact</a>
                </nav>

                {/* Right Section */}
                <div className="hidden lg:flex items-center gap-4">
                    <div className="flex items-center text-sm text-black font-medium gap-2">
                        <PhoneCall className="text-red-500" size={16} />
                        10(256)-928 256
                    </div>
                    <div className="h-6 w-px bg-gray-300 mx-2"></div>
                    <div className="flex gap-3 text-gray-400">
                        <a href="#"><Instagram className="hover:text-red-500" size={18} /></a>
                        <a href="#"><Linkedin className="hover:text-red-500" size={18} /></a>
                        <a href="#"><Facebook className="hover:text-red-500" size={18} /></a>
                        <a href="#"><GanttChartSquare className="hover:text-red-500" size={18} /></a>
                    </div>
                    <div className="bg-red-500 p-2 rounded-l-md cursor-pointer">
                        <Search className="text-white" size={18} />
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="lg:hidden bg-white shadow-md px-6 pt-4 pb-6 space-y-4 text-black font-medium">
                    <a href="#" className="block hover:text-red-500">Home</a>
                    <a href="#" className="block hover:text-red-500">About</a>
                    <a href="#" className="block hover:text-red-500">Destination</a>

                    {/* Pages Mobile Dropdown */}
                    <div>
                        <button
                            onClick={() => setMobileDropdown({ ...mobileDropdown, pages: !mobileDropdown.pages })}
                            className="flex justify-between items-center w-full hover:text-red-500"
                        >
                            Pages
                            <ChevronDown size={16} className={mobileDropdown.pages ? "rotate-180 transition" : "transition"} />
                        </button>
                        {mobileDropdown.pages && (
                            <div className="ml-4 mt-2 space-y-2">
                                <a href="#" className="block hover:text-red-500">Gallery</a>
                                <a href="#" className="block hover:text-red-500">FAQ</a>
                                <a href="#" className="block hover:text-red-500">Testimonials</a>
                            </div>
                        )}
                    </div>

                    {/* Blog Mobile Dropdown */}
                    <div>
                        <button
                            onClick={() => setMobileDropdown({ ...mobileDropdown, blog: !mobileDropdown.blog })}
                            className="flex justify-between items-center w-full hover:text-red-500"
                        >
                            Blog
                            <ChevronDown size={16} className={mobileDropdown.blog ? "rotate-180 transition" : "transition"} />
                        </button>
                        {mobileDropdown.blog && (
                            <div className="ml-4 mt-2 space-y-2">
                                <a href="#" className="block hover:text-red-500">Blog Grid</a>
                                <a href="#" className="block hover:text-red-500">Blog Details</a>
                            </div>
                        )}
                    </div>

                    <a href="#" className="block hover:text-red-500">Contact</a>

                    {/* Icons */}
                    <div className="flex gap-4 mt-4 text-gray-400">
                        <a href="#"><Instagram className="hover:text-red-500" size={18} /></a>
                        <a href="#"><Linkedin className="hover:text-red-500" size={18} /></a>
                        <a href="#"><Facebook className="hover:text-red-500" size={18} /></a>
                        <a href="#"><GanttChartSquare className="hover:text-red-500" size={18} /></a>
                        <div className="bg-red-500 p-2 rounded-md ml-auto cursor-pointer">
                            <Search className="text-white" size={18} />
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
};

export default FancyNavbar;
