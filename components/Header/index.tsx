"use client";

import { useState } from "react";
import { Moon, Download, Menu, X, Leaf } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-xl z-50 border-b border-slate-200/50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 via-purple-500 to-teal-500 rounded-2xl flex items-center justify-center shadow-lg">
              <Moon className="w-7 h-7 text-white" />
            </div>
            <div>
              <span className="text-2xl font-bold bg-gradient-to-r from-slate-700 to-indigo-700 bg-clip-text text-transparent">
                Good Sleep
              </span>
              <div className="text-xs text-slate-500 flex items-center space-x-1">
                <Leaf className="w-3 h-3" />
                <span>Natural wellness</span>
              </div>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="nav-link">
              Features
            </a>
            <a href="#testimonials" className="nav-link">
              Stories
            </a>
            <a href="#pricing" className="nav-link">
              Pricing
            </a>
            <button className="button-primary">
              <div className="flex items-center space-x-2">
                <Download className="w-4 h-4" />
                <span>Download</span>
              </div>
            </button>
          </div>

          <button
            className="md:hidden text-slate-600 p-2 rounded-lg hover:bg-slate-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-slate-200/50">
          <div className="px-4 py-6 space-y-4">
            <a href="#features" className="block text-slate-600 hover:text-indigo-600 transition-colors py-2 font-medium">Features</a>
            <a href="#testimonials" className="block text-slate-600 hover:text-indigo-600 transition-colors py-2 font-medium">Stories</a>
            <a href="#pricing" className="block text-slate-600 hover:text-indigo-600 transition-colors py-2 font-medium">Pricing</a>
            <button className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-3 rounded-2xl flex items-center justify-center space-x-2 font-medium">
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