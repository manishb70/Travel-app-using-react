import React from "react";
import { Link } from "react-router-dom";

const NewsLater = () => {
  return (
    <div className="bg-gradient-to-b from-gray-800 to-gray-900 text-white py-16 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Text Content */}
        <div className="md:w-1/2">
          <h2 className="text-2xl md:text-3xl font-semibold mb-2">
            Subscribe Our Newsletter
          </h2>
          <p className="text-sm text-gray-300">
            Subscribe newsletter to get offers and about new places to discover.
          </p>
        </div>

        {/* Input & Button */}
        <div className="md:w-1/2 flex flex-col md:flex-row items-center gap-3 w-full">
          <input
            type="email"
            placeholder="Your mail"
            className="w-full md:w-auto px-4 py-3 rounded-md text-gray-900 outline-none"
          />
          <Link to={"/contact"}>
          <button className="bg-red-500 hover:bg-red-600 px-6 py-3 rounded-md text-white font-medium">
            Subscribe
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewsLater;
