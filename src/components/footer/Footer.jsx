import { Facebook, Twitter, Instagram, MapPin, Youtube } from 'lucide-react';

export default function TraveloFooter() {
  return (
    <footer className="bg-slate-900 text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-full relative">
                  <div className="absolute inset-1 bg-red-500 rounded-full"></div>
                </div>
              </div>
              <span className="text-white text-xl font-semibold">Travelo</span>
            </div>
            
            <div className="space-y-2 text-sm">
              <p>5th flora, 700/D kings road, green</p>
              <p>lane New York-1782</p>
              <p>+10 367 826 2567</p>
              <p>contact@carpenter.com</p>
            </div>

            {/* Social Media Icons */}
            <div className="flex space-x-4 pt-4">
              <Facebook className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <MapPin className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Youtube className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Gallery</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Popular Destinations */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">Popular Destination</h3>
            <div className="grid grid-cols-2 gap-y-3 text-sm">
              <div>
                <ul className="space-y-3">
                  <li><a href="#" className="hover:text-white transition-colors">Indonesia</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">India</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Italy</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">France</a></li>
                </ul>
              </div>
              <div>
                <ul className="space-y-3">
                  <li><a href="#" className="hover:text-white transition-colors">America</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Switzerland</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Canada</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">England</a></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Instagram Gallery */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">Instagram</h3>
            <div className="grid grid-cols-3 gap-2">
              <div className="aspect-square bg-gradient-to-br from-orange-400 to-pink-500 rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=150&h=150&fit=crop" 
                  alt="Mountain landscape" 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="aspect-square bg-gradient-to-br from-blue-400 to-cyan-500 rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=150&h=150&fit=crop" 
                  alt="Ocean view" 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="aspect-square bg-gradient-to-br from-gray-400 to-gray-600 rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1551632811-561732d1e306?w=150&h=150&fit=crop" 
                  alt="Hiker" 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="aspect-square bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1440778303588-435521a205bc?w=150&h=150&fit=crop" 
                  alt="Forest cabin" 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="aspect-square bg-gradient-to-br from-slate-400 to-slate-600 rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1464822759844-d150dd22bcd8?w=150&h=150&fit=crop" 
                  alt="Mountain peak" 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="aspect-square bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=150&h=150&fit=crop" 
                  alt="Forest path" 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-8  text-center text-sm text-gray-400">
          <p>
            Copyright ©2025 All rights reserved | 
            <span className="text-red-500 font-medium"> Mice Travelo</span>
          </p>
        </div>
      </div>
    </footer>
  );
}