import { Moon, Leaf, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-100 to-indigo-100 border-t border-slate-200">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 via-purple-500 to-teal-500 rounded-2xl flex items-center justify-center shadow-lg">
                <Moon className="w-7 h-7 text-white" />
              </div>
              <div>
                <span className="text-2xl font-bold text-slate-800">Good Sleep</span>
                <div className="flex items-center space-x-1 text-xs text-slate-500">
                  <Leaf className="w-3 h-3" />
                  <span>Natural wellness</span>
                </div>
              </div>
            </div>
            <p className="text-slate-600 leading-relaxed mb-4">
              Revolutionizing sleep health through AI-powered insights and personalized wellness solutions.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4 text-slate-800">Product</h4>
            <ul className="space-y-3 text-slate-600">
              <li><a href="#" className="hover:text-indigo-600 transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-indigo-600 transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-indigo-600 transition-colors">Download</a></li>
              <li><a href="#" className="hover:text-indigo-600 transition-colors">API</a></li>
              <li><a href="#" className="hover:text-indigo-600 transition-colors">Premium</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4 text-slate-800">Company</h4>
            <ul className="space-y-3 text-slate-600">
              <li><a href="#" className="hover:text-indigo-600 transition-colors">About</a></li>
              <li><a href="#" className="hover:text-indigo-600 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-indigo-600 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-indigo-600 transition-colors">Press</a></li>
              <li><a href="#" className="hover:text-indigo-600 transition-colors">Partners</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4 text-slate-800">Support</h4>
            <ul className="space-y-3 text-slate-600">
              <li><a href="#" className="hover:text-indigo-600 transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-indigo-600 transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-indigo-600 transition-colors">Privacy</a></li>
              <li><a href="#" className="hover:text-indigo-600 transition-colors">Terms</a></li>
              <li><a href="#" className="hover:text-indigo-600 transition-colors">Security</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-200 pt-8 text-center">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-slate-600 mb-4 md:mb-0">
              &copy; 2025 Good Sleep. All rights reserved. Designed for better sleep, built for better life.
            </p>
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm text-slate-500">Status: All systems operational</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;