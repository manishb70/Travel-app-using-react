import React from "react";

const destinations = [
  {
    name: "Italy",
    places: "07 Places",
    image: "https://source.unsplash.com/400x300/?italy",
  },
  {
    name: "Brazil",
    places: "03 Places",
    image: "https://source.unsplash.com/400x300/?brazil",
  },
  {
    name: "America",
    places: "10 Places",
    image: "https://source.unsplash.com/400x300/?america",
  },
  {
    name: "Nepal",
    places: "02 Places",
    image: "https://source.unsplash.com/400x300/?nepal",
  },
  {
    name: "Maldives",
    places: "02 Places",
    image: "https://source.unsplash.com/400x300/?maldives",
  },
  {
    name: "Indonesia",
    places: "05 Places",
    image: "https://source.unsplash.com/400x300/?indonesia",
  },
];

const Landing = () => {
  return (
    <section className="py-16 bg-white" id="popular-destination">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Popular Destination</h2>
        <p className="text-gray-500 max-w-xl mx-auto mb-12">
          Suffered alteration in some form, by injected humour or good day
          randomised booth anim 8-bit hella wolf moon beard words.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {destinations.map((dest, index) => (
            <div
              key={index}
              className="relative rounded-lg overflow-hidden shadow-lg group"
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default Landing;
