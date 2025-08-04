import React, { useState, useEffect } from 'react';
import { Shield, Users, MapPin, Award } from 'lucide-react';

const ChooseUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({
    travellers: 0,
    reviews: 0,
    tours: 0,
    awards: 0
  });

  useEffect(() => {
    setIsVisible(true);
    
    // Animated counters
    const animateCounters = () => {
      const targets = { travellers: 100, reviews: 99.9, tours: 250, awards: 50 };
      const duration = 2000;
      const steps = 60;
      const interval = duration / steps;
      
      let step = 0;
      const timer = setInterval(() => {
        step++;
        const progress = step / steps;
        
        setCounters({
          travellers: Math.floor(targets.travellers * progress),
          reviews: Math.min(99.9, (targets.reviews * progress).toFixed(1)),
          tours: Math.floor(targets.tours * progress),
          awards: Math.floor(targets.awards * progress)
        });
        
        if (step >= steps) clearInterval(timer);
      }, interval);
    };

    setTimeout(animateCounters, 1000);
  }, []);

  const statistics = [
    {
      icon: <Users className="w-12 h-12 text-blue-500" />,
      number: `${counters.travellers}+`,
      label: "Happy Traveller"
    },
    {
      icon: <div className="w-12 h-12 flex items-center justify-center">
        <svg className="w-12 h-12 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
        </svg>
      </div>,
      number: `${counters.reviews}%`,
      label: "Total Positive Reviews"
    },
    {
      icon: <MapPin className="w-12 h-12 text-blue-500" />,
      number: `${counters.tours}+`,
      label: "Tour Completed"
    },
    {
      icon: <Award className="w-12 h-12 text-blue-500" />,
      number: `${counters.awards}+`,
      label: "Awards Winning"
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

  // Particles for background animation
  const particles = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    delay: Math.random() * 5,
    duration: 8 + Math.random() * 4,
    size: Math.random() * 4 + 2,
    left: Math.random() * 100,
    top: Math.random() * 100
  }));

  return (
    <div className="bg-gradient-to-br from-gray-50 via-blue-50 to-gray-50 py-16 relative overflow-hidden">
      {/* Animated Background Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute w-1 h-1 bg-blue-300 rounded-full opacity-40 particle-float"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`,
              width: `${particle.size}px`,
              height: `${particle.size}px`
            }}
          />
        ))}
      </div>

      {/* Multiple Animated Flight Paths */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Main flight path */}
        <svg className="absolute top-1/4 left-0 w-full h-2" viewBox="0 0 1000 4">
          <path d="M0,2 Q250,0 500,2 T1000,2" stroke="#3b82f6" strokeWidth="2" strokeDasharray="8,8" fill="none" opacity="0.4">
            <animate attributeName="stroke-dashoffset" values="0;-32" dur="3s" repeatCount="indefinite"/>
          </path>
        </svg>
        
        {/* Secondary flight path */}
        <svg className="absolute top-3/4 left-0 w-full h-2" viewBox="0 0 1000 4">
          <path d="M1000,2 Q750,4 500,2 T0,2" stroke="#8b5cf6" strokeWidth="1.5" strokeDasharray="6,6" fill="none" opacity="0.3">
            <animate attributeName="stroke-dashoffset" values="0;24" dur="4s" repeatCount="indefinite"/>
          </path>
        </svg>
      </div>

      {/* Multiple Flying Objects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Main Airplane */}
        <div className="airplane-main">
          <svg className="w-10 h-10 text-blue-500 transform" fill="currentColor" viewBox="0 0 24 24">
            <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
          </svg>
        </div>

        {/* Helicopter */}
        <div className="helicopter-animation">
          <svg className="w-8 h-8 text-purple-500" fill="currentColor" viewBox="0 0 24 24">
            <path d="M1.5 15.5v2l1.5 1 1.5-1v-2l-1.5-1-1.5 1zm6-6L6 8l-1.5 1.5L6 11l1.5-1.5zM12 8.5L10.5 7 9 8.5 10.5 10 12 8.5zm4.5 7v2l1.5 1 1.5-1v-2l-1.5-1-1.5 1zm3-10v2l1.5 1 1.5-1v-2l-1.5-1-1.5 1z"/>
          </svg>
        </div>

        {/* Hot Air Balloon */}
        <div className="balloon-float">
          <svg className="w-12 h-12 text-red-400" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 3.87 3.13 7 7 7s7-3.13 7-7c0-3.87-3.13-7-7-7zm0 12c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0 2l-2 3h4l-2-3z"/>
          </svg>
        </div>
      </div>

      {/* Floating Travel Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Compass */}
        <div className="absolute top-16 left-16 opacity-20">
          <div className="compass-spin">
            <svg className="w-16 h-16 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          </div>
        </div>

        {/* Globe */}
        <div className="absolute bottom-20 right-20 opacity-25">
          <div className="globe-rotate">
            <svg className="w-20 h-20 text-green-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
            </svg>
          </div>
        </div>

        {/* Camera */}
        <div className="absolute top-32 right-16 opacity-30">
          <div className="camera-flash">
            <svg className="w-10 h-10 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5zm0-5c-0.83 0-1.5 0.67-1.5 1.5s0.67 1.5 1.5 1.5 1.5-0.67 1.5-1.5-0.67-1.5-1.5-1.5z"/>
              <path d="M20 4h-3.17L15 2H9L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2z"/>
            </svg>
          </div>
        </div>

        {/* Multiple Clouds with varying sizes */}
        {[...Array(6)].map((_, i) => (
          <div 
            key={i}
            className={`absolute opacity-15 cloud-drift-${i + 1}`}
            style={{
              top: `${20 + (i * 15)}%`,
              left: `${10 + (i * 15)}%`,
              animationDelay: `${i * 0.8}s`
            }}
          >
            <svg className={`w-${8 + i * 2} h-${8 + i * 2} text-blue-300`} fill="currentColor" viewBox="0 0 24 24">
              <path d="M19.36 10.04A7.5 7.5 0 0 0 12 4C9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 0 0 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.64-4.96z"/>
            </svg>
          </div>
        ))}
      </div>

      {/* Shooting Stars */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <div 
            key={i}
            className={`shooting-star shooting-star-${i + 1}`}
            style={{ animationDelay: `${i * 3}s` }}
          >
            <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-transparent rounded-full"></div>
          </div>
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Header Section with enhanced animations */}
        <div className="text-center mb-12">
          <p className={`text-blue-500 text-lg mb-2 transition-all duration-1000 ${isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0'}`}>
            Explore the world
          </p>
          <h2 className={`text-4xl font-bold text-gray-900 mb-6 transition-all duration-1000 ${isVisible ? 'animate-slide-in-right opacity-100' : 'opacity-0'}`} 
              style={{ animationDelay: '0.2s' }}>
            Why Choose Us <span className="text-blue-500 animate-pulse">NIBT</span> Holidays
          </h2>
          <p className={`text-gray-600 max-w-4xl mx-auto leading-relaxed transition-all duration-1000 ${isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0'}`} 
             style={{ animationDelay: '0.4s' }}>
            We offer a range of tours that fit your budget without sacrificing the quality of your 
            experience. Whether you're a backpacker or a family looking for a budget-friendly 
            getaway, we've got you covered.
          </p>
        </div>

        {/* Features Section with staggered animations */}
        <div className="mb-16">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} 
                   className={`flex items-start space-x-4 transition-all duration-1000 transform hover:scale-105 ${isVisible ? 'animate-slide-in-left opacity-100' : 'opacity-0'}`} 
                   style={{ animationDelay: `${0.6 + index * 0.2}s` }}>
                <div className="flex-shrink-0 bg-blue-50 p-3 rounded-full hover:scale-110 hover:rotate-12 transition-all duration-300 hover:shadow-lg">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-blue-600 transition-colors duration-300">
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

        {/* Enhanced Statistics Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {statistics.map((stat, index) => (
            <div key={index} 
                 className={`bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:rotate-1 ${isVisible ? 'animate-card-bounce opacity-100' : 'opacity-0'}`}
                 style={{ animationDelay: `${1 + index * 0.15}s` }}>
              <div className="flex justify-center mb-4 transform hover:scale-125 hover:rotate-12 transition-all duration-300">
                {stat.icon}
              </div>
              
              <div className="mb-2">
                <span className="text-4xl font-bold text-gray-900 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {stat.number}
                </span>
              </div>
              
              {/* Enhanced animated dotted line */}
              <div className="flex justify-center mb-3">
                <div className="w-16 h-0.5 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 rounded-full animate-pulse-glow"></div>
              </div>
              
              <p className="text-gray-700 font-medium text-sm hover:text-blue-600 transition-colors duration-300">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-in-left {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slide-in-right {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes card-bounce {
          0% {
            opacity: 0;
            transform: translateY(50px) scale(0.8);
          }
          50% {
            transform: translateY(-10px) scale(1.05);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes airplane-fly-main {
          0% {
            transform: translateX(-100px) translateY(10px) rotate(15deg);
          }
          25% {
            transform: translateX(300px) translateY(-10px) rotate(15deg);
          }
          50% {
            transform: translateX(700px) translateY(15px) rotate(15deg);
          }
          75% {
            transform: translateX(1100px) translateY(-5px) rotate(15deg);
          }
          100% {
            transform: translateX(1400px) translateY(10px) rotate(15deg);
          }
        }

        @keyframes helicopter-fly {
          0% {
            transform: translateX(100vw) translateY(20px) rotate(-10deg);
          }
          100% {
            transform: translateX(-100px) translateY(10px) rotate(-10deg);
          }
        }

        @keyframes balloon-float {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          25% {
            transform: translateY(-15px) translateX(10px);
          }
          50% {
            transform: translateY(-5px) translateX(-5px);
          }
          75% {
            transform: translateY(-20px) translateX(15px);
          }
        }

        @keyframes compass-spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes globe-rotate {
          0% {
            transform: rotateY(0deg);
          }
          100% {
            transform: rotateY(360deg);
          }
        }

        @keyframes camera-flash {
          0%, 90%, 100% {
            opacity: 0.3;
          }
          5%, 15% {
            opacity: 1;
            transform: scale(1.1);
          }
        }

        @keyframes particle-float {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          25% {
            transform: translateY(-20px) translateX(10px);
          }
          50% {
            transform: translateY(-10px) translateX(-15px);
          }
          75% {
            transform: translateY(-25px) translateX(5px);
          }
        }

        @keyframes cloud-drift {
          0% {
            transform: translateX(0px);
          }
          100% {
            transform: translateX(50px);
          }
        }

        @keyframes shooting-star {
          0% {
            transform: translate(0, 0) rotate(45deg);
            opacity: 1;
          }
          100% {
            transform: translate(200px, 200px) rotate(45deg);
            opacity: 0;
          }
        }

        @keyframes pulse-glow {
          0%, 100% {
            opacity: 0.5;
            transform: scaleX(1);
          }
          50% {
            opacity: 1;
            transform: scaleX(1.2);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }

        .animate-slide-in-left {
          animation: slide-in-left 0.8s ease-out forwards;
        }

        .animate-slide-in-right {
          animation: slide-in-right 0.8s ease-out forwards;
        }

        .animate-card-bounce {
          animation: card-bounce 1s ease-out forwards;
        }

        .airplane-main {
          animation: airplane-fly-main 12s linear infinite;
          position: absolute;
          top: 25%;
          left: -100px;
        }

        .helicopter-animation {
          animation: helicopter-fly 15s linear infinite;
          position: absolute;
          top: 60%;
          left: 100vw;
        }

        .balloon-float {
          animation: balloon-float 6s ease-in-out infinite;
          position: absolute;
          top: 10%;
          right: 20%;
        }

        .compass-spin {
          animation: compass-spin 8s linear infinite;
        }

        .globe-rotate {
          animation: globe-rotate 10s linear infinite;
        }

        .camera-flash {
          animation: camera-flash 4s infinite;
        }

        .particle-float {
          animation: particle-float 6s ease-in-out infinite;
        }

        ${[...Array(6)].map((_, i) => `
          .cloud-drift-${i + 1} {
            animation: cloud-drift ${15 + i * 2}s ease-in-out infinite alternate;
          }
        `).join('')}

        ${[...Array(3)].map((_, i) => `
          .shooting-star-${i + 1} {
            position: absolute;
            top: ${10 + i * 20}%;
            right: 0;
            animation: shooting-star 2s linear infinite;
          }
        `).join('')}

        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default ChooseUs;