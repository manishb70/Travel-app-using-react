import React, { useState } from 'react';
import { Search, Filter, X, Heart, Download, Share2, Eye, Camera, MapPin, Calendar } from 'lucide-react';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState('masonry');

  const categories = [
    { id: 'all', name: 'All Photos', count: 48 },
    { id: 'mountains', name: 'Mountains', count: 15 },
    { id: 'beaches', name: 'Beaches', count: 12 },
    { id: 'heritage', name: 'Heritage', count: 10 },
    { id: 'adventure', name: 'Adventure', count: 8 },
    { id: 'spiritual', name: 'Spiritual', count: 3 }
  ];

  const images = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
      category: 'mountains',
      title: 'Himalayan Peaks',
      location: 'Manali, Himachal Pradesh',
      date: 'March 2024',
      photographer: 'Adventure Tours',
      likes: 324,
      description: 'Snow-capped peaks of the mighty Himalayas during sunrise'
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&h=600&fit=crop",
      category: 'beaches',
      title: 'Goa Sunset',
      location: 'Arambol Beach, Goa',
      date: 'February 2024',
      photographer: 'Beach Explorer',
      likes: 256,
      description: 'Golden hour at one of Goa\'s most beautiful beaches'
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1599661046827-dacde729210d?w=800&h=600&fit=crop",
      category: 'heritage',
      title: 'Rajasthan Palace',
      location: 'Udaipur, Rajasthan',
      date: 'January 2024',
      photographer: 'Heritage Tours',
      likes: 445,
      description: 'Magnificent architecture of the City Palace'
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=800&h=600&fit=crop",
      category: 'spiritual',
      title: 'Ganges Aarti',
      location: 'Varanasi, Uttar Pradesh',
      date: 'April 2024',
      photographer: 'Spiritual Journey',
      likes: 189,
      description: 'Evening aarti ceremony at the sacred ghats'
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?w=800&h=600&fit=crop",
      category: 'mountains',
      title: 'Mountain Lake',
      location: 'Ladakh, J&K',
      date: 'March 2024',
      photographer: 'High Altitude Tours',
      likes: 378,
      description: 'Crystal clear waters reflecting the Ladakh mountains'
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
      category: 'beaches',
      title: 'Tropical Paradise',
      location: 'Andaman Islands',
      date: 'February 2024',
      photographer: 'Island Explorer',
      likes: 512,
      description: 'Pristine beaches of the Andaman and Nicobar Islands'
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800&h=600&fit=crop",
      category: 'adventure',
      title: 'River Rafting',
      location: 'Rishikesh, Uttarakhand',
      date: 'March 2024',
      photographer: 'Adventure Sports',
      likes: 234,
      description: 'White water rafting on the Ganges river'
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1548013146-72479768bada?w=800&h=600&fit=crop",
      category: 'heritage',
      title: 'Ancient Temple',
      location: 'Khajuraho, Madhya Pradesh',
      date: 'January 2024',
      photographer: 'Heritage Tours',
      likes: 298,
      description: 'Intricate stone carvings of ancient temples'
    },
    {
      id: 9,
      src: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=800&h=600&fit=crop",
      category: 'mountains',
      title: 'Mountain Village',
      location: 'Spiti Valley, Himachal Pradesh',
      date: 'April 2024',
      photographer: 'Mountain Explorer',
      likes: 167,
      description: 'Remote village nestled in the Spiti Valley'
    },
    {
      id: 10,
      src: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=800&h=600&fit=crop",
      category: 'adventure',
      title: 'Trek Adventure',
      location: 'Valley of Flowers, Uttarakhand',
      date: 'March 2024',
      photographer: 'Trek Masters',
      likes: 423,
      description: 'Blooming wildflowers during the trek season'
    },
    {
      id: 11,
      src: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&h=600&fit=crop",
      category: 'beaches',
      title: 'Coastal Beauty',
      location: 'Kovalam, Kerala',
      date: 'February 2024',
      photographer: 'Coastal Tours',
      likes: 345,
      description: 'Lighthouse beach with coconut palms'
    },
    {
      id: 12,
      src: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop",
      category: 'heritage',
      title: 'Taj Mahal',
      location: 'Agra, Uttar Pradesh',
      date: 'January 2024',
      photographer: 'Monument Tours',
      likes: 789,
      description: 'The iconic symbol of love at golden hour'
    }
  ];

  const filteredImages = images.filter(image => {
    const matchesCategory = selectedCategory === 'all' || image.category === selectedCategory;
    const matchesSearch = image.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         image.location.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const openModal = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  const renderMasonryLayout = () => (
    <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
      {filteredImages.map((image) => (
        <div 
          key={image.id} 
          className="break-inside-avoid bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group cursor-pointer transform hover:scale-[1.02]"
          onClick={() => openModal(image)}
        >
          <div className="relative overflow-hidden">
            <img 
              src={image.src} 
              alt={image.title}
              className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <h3 className="font-bold text-lg mb-1">{image.title}</h3>
                <div className="flex items-center text-sm opacity-90">
                  <MapPin className="w-3 h-3 mr-1" />
                  {image.location}
                </div>
              </div>
              <div className="absolute top-4 right-4 flex gap-2">
                <button className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors">
                  <Heart className="w-4 h-4" />
                </button>
                <button className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors">
                  <Eye className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
          <div className="p-4">
            <div className="flex items-center justify-between text-sm text-gray-600">
              <div className="flex items-center">
                <Camera className="w-4 h-4 mr-1" />
                {image.photographer}
              </div>
              <div className="flex items-center">
                <Heart className="w-4 h-4 mr-1 text-red-500" />
                {image.likes}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderGridLayout = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {filteredImages.map((image) => (
        <div 
          key={image.id} 
          className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer"
          onClick={() => openModal(image)}
        >
          <div className="relative overflow-hidden aspect-square">
            <img 
              src={image.src} 
              alt={image.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <h3 className="font-bold text-sm mb-1">{image.title}</h3>
                <div className="flex items-center text-xs opacity-90">
                  <MapPin className="w-3 h-3 mr-1" />
                  {image.location}
                </div>
              </div>
              <div className="absolute top-4 right-4">
                <button className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors">
                  <Eye className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderListLayout = () => (
    <div className="space-y-6">
      {filteredImages.map((image) => (
        <div 
          key={image.id} 
          className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
          onClick={() => openModal(image)}
        >
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/3 h-48 md:h-32 overflow-hidden">
              <img 
                src={image.src} 
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="md:w-2/3 p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">{image.title}</h3>
              <p className="text-gray-600 mb-3">{image.description}</p>
              <div className="flex items-center justify-between text-sm text-gray-500">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    {image.location}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {image.date}
                  </div>
                </div>
                <div className="flex items-center">
                  <Heart className="w-4 h-4 mr-1 text-red-500" />
                  {image.likes}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Hero Section */}
      <div className="relative h-80 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4">
          <Camera className="w-16 h-16 mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Travel Gallery
          </h1>
          <p className="text-lg md:text-xl text-center max-w-2xl opacity-90">
            Discover breathtaking moments from our adventures around incredible destinations
          </p>
        </div>
      </div>

      {/* Controls Section */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          {/* Search and View Mode */}
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search photos by title or location..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
              />
            </div>
            
            <div className="flex gap-2">
              <button
                onClick={() => setViewMode('masonry')}
                className={`px-4 py-3 rounded-xl font-medium transition-all ${
                  viewMode === 'masonry' 
                    ? 'bg-blue-500 text-white shadow-lg' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                Masonry
              </button>
              <button
                onClick={() => setViewMode('grid')}
                className={`px-4 py-3 rounded-xl font-medium transition-all ${
                  viewMode === 'grid' 
                    ? 'bg-blue-500 text-white shadow-lg' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                Grid
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`px-4 py-3 rounded-xl font-medium transition-all ${
                  viewMode === 'list' 
                    ? 'bg-blue-500 text-white shadow-lg' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                List
              </button>
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Content */}
        <div className="mb-8">
          {viewMode === 'masonry' && renderMasonryLayout()}
          {viewMode === 'grid' && renderGridLayout()}
          {viewMode === 'list' && renderListLayout()}
        </div>

        {/* Stats */}
        <div className="text-center">
          <p className="text-gray-600">
            Showing {filteredImages.length} photos
            {selectedCategory !== 'all' && ` in ${categories.find(c => c.id === selectedCategory)?.name}`}
          </p>
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 p-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors"
            >
              <X className="w-6 h-6 text-white" />
            </button>
            
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="max-w-full max-h-[80vh] object-contain rounded-2xl"
            />
            
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-2xl">
              <div className="text-white">
                <h3 className="text-2xl font-bold mb-2">{selectedImage.title}</h3>
                <p className="text-gray-200 mb-3">{selectedImage.description}</p>
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <div className="flex items-center text-sm">
                      <MapPin className="w-4 h-4 mr-2" />
                      {selectedImage.location}
                    </div>
                    <div className="flex items-center text-sm">
                      <Calendar className="w-4 h-4 mr-2" />
                      {selectedImage.date}
                    </div>
                    <div className="flex items-center text-sm">
                      <Camera className="w-4 h-4 mr-2" />
                      {selectedImage.photographer}
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <button className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors">
                      <Heart className="w-5 h-5" />
                    </button>
                    <button className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors">
                      <Download className="w-5 h-5" />
                    </button>
                    <button className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors">
                      <Share2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;