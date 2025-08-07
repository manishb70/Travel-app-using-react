import React from "react";

const BookingForm = () => (
  <section className="bg-white  py-12 px-4 md:px-24">
    <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-8">
      <h2 className="text-2xl md:text-3xl font-bold text-red-700 mb-6">
        Book Your Trip / Contact Us
      </h2>
      <form className="space-y-5 ">
        <div>
          <label className="block mb-1 font-semibold text-gray-700" htmlFor="fullName">
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            placeholder="Your full name"
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-red-400"
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-semibold text-gray-700" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your email address"
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-red-400"
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-semibold text-gray-700" htmlFor="phone">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Your phone number"
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-red-400"
          />
        </div>
        <div>
          <label className="block mb-1 font-semibold text-gray-700" htmlFor="travelDate">
            Travel Date
          </label>
          <input
            type="date"
            id="travelDate"
            name="travelDate"
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-red-400"
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-semibold text-gray-700" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Any special requests or questions"
            className="w-full border border-gray-300 rounded-md p-2 resize-y focus:outline-none focus:ring-2 focus:ring-red-400"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded-md transition-colors"
        >
          Submit
        </button>
      </form>
    </div>
  </section>
);

export default BookingForm;
