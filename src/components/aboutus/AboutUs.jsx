import React from "react";

const AboutUs = () => (
  <section className="bg-white py-12 px-4 md:px-24">
    <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
      <h2 className="text-3xl md:text-4xl font-bold text-red-700 mb-4">
        About Us
      </h2>
      <p className="text-lg text-gray-700 mb-6 leading-relaxed">
        Welcome to <span className="font-semibold text-orange-700">Mice travelo</span> — your
        ultimate guide to discovering the vibrant beauty, rich culture, and hidden gems across India.
      </p>
      <p className="mb-4 text-gray-700">
        Our mission is simple: <span className="font-medium text-red-600">to inspire and assist travelers</span> in planning unforgettable journeys — from the snow-capped Himalayas to sun-kissed beaches in Goa, bustling cities, tranquil villages, and everything in between.
      </p>
      <p className="mb-4 text-gray-700">
        Founded by passionate explorers, we understand what travelers seek: authentic experiences, local insights, and trustworthy guides. Our dedicated team curates travel stories, itinerary tips, destination highlights, and practical advice to make your Indian adventure seamless and memorable.
      </p>
      <p className="mb-4 text-gray-700">
        Thank you for choosing us as your trusted companion for exploring the magic of India. Whether you’re charting your first solo trip or planning a family vacation, we’re here to help you <span className="font-medium text-pink-700">travel smarter and travel deeper</span>.
      </p>
      <div className="mt-8 flex flex-col md:flex-row md:justify-between items-center">
        <div className="mb-6 md:mb-0">
          <span className="block text-gray-900 font-semibold">Happy Travels!</span>
          <span className="block text-gray-500">— The Incredible India Explorer Team</span>
        </div>
        <img
          className="h-16"
          alt="Indian travel icon"
          src="https://cdn-icons-png.flaticon.com/512/888/888879.png"
        />
      </div>
      {/* Contact and Location */}
      <div className="mt-10 border-t pt-6">
        <h3 className="text-xl font-semibold text-red-800 mb-4">Contact Us</h3>
        <div className="space-y-2">
          <div className="flex items-center text-gray-700">
            <span className="material-icons text-red-600 mr-2">location_on</span>
            <span>Dwarka, Delhi, India</span>
          </div>
          <div className="flex items-center text-gray-700">
            <span className="material-icons text-red-600 mr-2">email</span>
            <span>contact@example.com</span>
          </div>
          <div className="flex items-center text-gray-700">
            <span className="material-icons text-red-600 mr-2">phone</span>
            <span>+91-9999-99999</span>
          </div>
        </div>
      </div>
    </div>
    {/* Material Icons CDN */}
    <link
      href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet"
    />
  </section>
);

export default AboutUs;
