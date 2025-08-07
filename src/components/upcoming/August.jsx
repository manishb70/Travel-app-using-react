import React from 'react';
import { Calendar, Users, MapPin, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import img3 from "../../assets/images/himalaya/himalaya.jpg";
const August = () => {
      React.useEffect(() => {
      // Scroll to top when component loads (reload/refresh)
      window.scrollTo(0, 0);
    }, []);
  
  const tours = [
    {
      id: 1,
      title: "Senior Citizen Jagannath Puri Group Tour",
      duration: "4 Days / 3 Nights",
      month: "March",
      locations: "Bhubaneswar, Puri, Konark, Chilika Lake",
      price: "Rs.44,900",
      image: "/api/placeholder/300/200",
      imageAlt: "Jagannath Temple with traditional architecture"
    },
    {
      id: 2,
      title: "Holi Celebration Senior Citizen Group Tour",
      duration: "2 Night / 3 Days", 
      month: "March",
      locations: "Delhi - Bharatpur - Delhi",
      price: "Rs.22,900",
      image: "/api/placeholder/300/200",
      imageAlt: "Colorful Holi celebration with people in traditional dress"
    },
    {
      id: 3,
      title: "Baku Azerbaijan Senior Citizen Group Tour",
      duration: "Coming Soon",
      month: "March",
      locations: "Baku, Azerbaijan",
      price: "Coming Soon",
      image: "/api/placeholder/300/200",
      imageAlt: "Baku city skyline at night"
    },
    {
      id: 4,
      title: "Ayodhya - Prayagraj - Varanasi Group Tour",
      duration: "Coming Soon",
      month: "March", 
      locations: "Ayodhya, Prayagraj, Varanasi",
      price: "Coming Soon",
      image: "/api/placeholder/300/200",
      imageAlt: "Sacred ghats along the Ganges river"
    }
  ];

  return (
    <div className="min-h-screen  bg-gradient-to-b  from-blue-50 to-white">
      {/* Hero Section */}
      <div className="relative h-200 bg-gradient-to-r from-blue-600 to-blue-800 overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className={`absolute inset-0 bg-cover bg-center`}  style={{ backgroundImage: `url(${img3})` }}></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4">
          <h1 className="text-2xl md:text-3xl font-bold mb-3 text-center">
            UPCOMING TOURS
          </h1>
          <div className="bg-white text-black bg-opacity-20 backdrop-blur-sm px-4 py-2 rounded-lg">
            <h2 className="text-lg md:text-xl font-semibold">August</h2>
          </div>
          <p className="mt-3 text-sm font-medium tracking-wide">
               Lorem ipsum dolor sit a
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-orange-600 mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
          </h1>
          
          <div className="max-w-3xl mx-auto mb-6">
            <blockquote className="text-sm text-gray-600 italic leading-relaxed">
              "We encourage Golden Agers to travel, learn, and discover new things. Explore the unique treasures that the fun-filled lifetime adventures have to give you. Onboard the journey that allows you to make new friends and enable you to discover yourself."
            </blockquote>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
            <div className="flex items-center justify-center bg-orange-50 p-3 rounded-lg">
              <MapPin className="text-orange-600 mr-2" size={16} />
              <span className="text-orange-600 font-semibold text-sm">Elderly friendly itineraries</span>
            </div>
            <div className="flex items-center justify-center bg-orange-50 p-3 rounded-lg">
              <Users className="text-orange-600 mr-2" size={16} />
              <span className="text-orange-600 font-semibold text-sm">Like-minded, same-age co-travellers</span>
            </div>
            <div className="flex items-center justify-center bg-red-50 p-3 rounded-lg">
              <Users className="text-red-600 mr-2" size={16} />
              <span className="text-red-600 font-semibold text-sm">Assisted Groups</span>
            </div>
            <div className="flex items-center justify-center bg-blue-50 p-3 rounded-lg">
              <Users className="text-blue-600 mr-2" size={16} />
              <span className="text-blue-600 font-semibold text-sm">For 50+yrs people only</span>
            </div>
          </div>
        </div>

        {/* Tours Grid */}
        <div className="grid lg:grid-cols-2 gap-6">
          {tours.map((tour) => (
            <div key={tour.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-gray-100">
              <div className="p-4">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-bold text-orange-600 flex-1 pr-3">
                    {tour.title}
                  </h3>
                  <span className="bg-green-600 text-white px-2 py-1 rounded-full text-xs font-semibold whitespace-nowrap">
                    Upcoming Tour
                  </span>
                </div>

                <div className="flex flex-col md:flex-row gap-3">
                  <div className="md:w-1/3">
                    <img 
                      src={tour.image} 
                      alt={tour.imageAlt}
                      className="w-full h-24 object-cover rounded-md"
                    />
                  </div>
                  
                  <div className="md:w-2/3 space-y-2">
                    <div className="flex items-center text-gray-700">
                      <Calendar className="mr-2" size={14} />
                      <span className="font-semibold text-sm">{tour.duration}</span>
                    </div>
                    
                    <div className="text-blue-600 font-semibold text-sm">
                      {tour.month}
                    </div>
                    
                    <div className="text-gray-600 text-sm">
                      {tour.locations}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-xl font-bold text-red-600">{tour.price}</span>
                        {tour.price !== "Coming Soon" && (
                          <span className="text-xs text-blue-600 ml-2">Inclusive of GST PP</span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-3 pt-3 border-t">
                   <Link to={"/contact"}  className="w-full bg-slate-800 hover:bg-slate-700 text-white py-2 px-4 rounded-md font-semibold transition-colors duration-200 flex items-center justify-center text-sm">
                    <Eye className="mr-2" size={14} />
                   Contact Us
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-8 text-center">
          <div className="bg-gradient-to-r from-orange-100 to-red-100 p-6 rounded-xl">
            <h3 className="text-xl font-bold text-orange-700 mb-3">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem tenetur nulla consequuntur 
            </h3>
            <p className="text-gray-700 max-w-2xl mx-auto text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique quod neque ex accusamus quas voluptate sequi esse, soluta nostrum, minus, rerum at architecto deleniti error aliquam deserunt praesentium molestiae dicta!.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default August;