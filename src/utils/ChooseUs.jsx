import React from 'react';
import { Shield, Users, MapPin, Award } from 'lucide-react';

const ChooseUs = () => {
  const statistics = [
    {
      icon: <Users className="w-12 h-12 text-blue-500" />,
      number: "100+",
      label: "Happy Traveller"
    },
    {
      icon: <div className="w-12 h-12 flex items-center justify-center">
        <svg className="w-12 h-12 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
        </svg>
      </div>,
      number: "99.9%",
      label: "Total Positive Reviews"
    },
    {
      icon: <MapPin className="w-12 h-12 text-blue-500" />,
      number: "250+",
      label: "Tour Completed"
    },
    {
      icon: <Award className="w-12 h-12 text-blue-500" />,
      number: "50+",
      label: "Awwards Winning"
    }
  ];

  const features = [
    {
      icon: <Shield className="w-8 h-8 text-blue-500" />,
      title: "Safety First Always",
      description: "Your safety is our top priority. We maintain high standards for transport, accommodation, and hygiene, so you can explore worry-free."
    },
    {
      icon: <div className="w-8 h-8 flex items-center justify-center">
        <svg className="w-8 h-8 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      </div>,
      title: "Trusted Travel Guide",
      description: "Our team of knowledgeable and passionate local guides ensures that you get an authentic experience, filled with insights and hidden gems that only locals know about."
    }
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-12">
          <p className="text-blue-500 text-lg mb-2">Explore the world</p>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Why Choose Us <span className="text-blue-500">NIBT</span> Holidays
          </h2>
          <p className="text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We offer a range of tours that fit your budget without sacrificing the quality of your 
            experience. Whether you're a backpacker or a family looking for a budget-friendly 
            getaway, we've got you covered.
          </p>
        </div>

        {/* Features Section */}
        <div className="mb-16">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0 bg-blue-50 p-3 rounded-full">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {statistics.map((stat, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex justify-center mb-4">
                {stat.icon}
              </div>
              
              <div className="mb-2">
                <span className="text-4xl font-bold text-gray-900">{stat.number}</span>
              </div>
              
              {/* Dotted line */}
              <div className="flex justify-center mb-3">
                <div className="w-16 border-t-2 border-dotted border-blue-400"></div>
              </div>
              
              <p className="text-gray-700 font-medium text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;