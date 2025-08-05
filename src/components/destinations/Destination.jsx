import React from "react";
import img from "../../assets/destinations/1.png";
import img2 from "../../assets/destinations/2.png";
import img3 from "../../assets/destinations/3.png";
import img4 from "../../assets/destinations/4.png";
import img5 from "../../assets/destinations/5.png";
import img6 from "../../assets/destinations/6.png";
import { Link } from "react-router-dom";















const destinations = [
  {
    name: "Italy",
    places: "07 Places",
    image: img,
  },
  {
    name: "Brazil",
    places: "03 Places",
    image: img2,
  },
  {
    name: "America",
    places: "10 Places",
    image: img3,
  },
  {
    name: "Nepal",
    places: "02 Places",
    image: img4,
  },
  {
    name: "Maldives",
    places: "02 Places",
    image: img5,
  },
  {
    name: "Indonesia",
    places: "05 Places",
    image: img6,
  },
];

const Destination = () => {
  return (
    <section className="py-16 text-black  bg-white" id="popular-destination">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Popular Destination</h2>
        <p className="text-gray-500 max-w-xl mx-auto mb-12">
          Suffered alteration in some form, by injected humour or good day
          randomised booth anim 8-bit hella wolf moon beard words.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {destinations.map((dest, index) => (
          <Link to={"/tours"}>
            <div
              key={index}
              className="relative rounded-lg cursor-pointer overflow-hidden shadow-lg group"
            >
              <img
                src={dest.image}
                alt={dest.name}
                className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/60 to-transparent p-4">
                <h3 className="text-white font-semibold text-lg">{dest.name}</h3>
                <span className="text-xs bg-teal-400 text-white px-2 py-1 rounded-full inline-block mt-1">
                  {dest.places}
                </span>
              </div>
            </div>
              </Link>
          ))}
        </div>
      </div>
      
    </section>
  );
};

export default Destination;
