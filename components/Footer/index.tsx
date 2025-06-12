import { Moon } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-16 px-4 sm:px-6 lg:px-8 bg-black/40 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                <Moon className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-white">Good Sleep</span>
            </div>
            <p className="text-white/70 leading-relaxed">
              Revolutionizing sleep health through AI-powered insights and personalized wellness solutions.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4 text-white">Product</h4>
            <ul className="space-y-2 text-white/70">
              <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Download</a></li>
              <li><a href="#" className="hover:text-white transition-colors">API</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4 text-white">Company</h4>
            <ul className="space-y-2 text-white/70">
              <li><a href="#" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4 text-white">Support</h4>
            <ul className="space-y-2 text-white/70">
              <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 text-center text-white/70">
          <p>&copy; 2024 Good Sleep. All rights reserved. Designed for better sleep, built for better life.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;