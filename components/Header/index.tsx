"use client";

import { useState } from "react";
import { Moon, Download, Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-xl z-50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
              <Moon className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
              Good Sleep
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-white/80 hover:text-white transition-all duration-200 hover:scale-105">
              Features
            </a>
            <a href="#testimonials" className="text-white/80 hover:text-white transition-all duration-200 hover:scale-105">
              Reviews
            </a>
            <a href="#pricing" className="text-white/80 hover:text-white transition-all duration-200 hover:scale-105">
              Pricing
            </a>
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2.5 rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              <div className="flex items-center space-x-2">
                <Download className="w-4 h-4" />
                <span>Download</span>
              </div>
            </button>
          </div>

          <button
            className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/40 backdrop-blur-xl border-t border-white/10">
          <div className="px-4 py-6 space-y-4">
            <a href="#features" className="block text-white/80 hover:text-white transition-colors py-2">Features</a>
            <a href="#testimonials" className="block text-white/80 hover:text-white transition-colors py-2">Reviews</a>
            <a href="#pricing" className="block text-white/80 hover:text-white transition-colors py-2">Pricing</a>
            <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full flex items-center justify-center space-x-2">
              <Download className="w-4 h-4" />
              <span>Download App</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;