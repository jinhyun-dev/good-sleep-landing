import { Download, Smartphone, Apple } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-50 via-purple-50 to-teal-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-indigo-300 to-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-purple-300 to-teal-300 rounded-full mix-blend-multiply filter blur-xl animate-float-delayed"></div>
      </div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="mb-8">
          <span className="text-6xl">🌙</span>
        </div>
        
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-800">
          Ready to Transform Your Sleep?
        </h2>
        <p className="text-xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed">
          Join over 500,000 users who have already improved their sleep quality with Good Sleep.
          Download now and start your journey to better rest tonight.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
          <a 
            href="https://apps.apple.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-10 py-4 rounded-2xl text-lg font-semibold hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-xl flex items-center space-x-3"
          >
            <Apple className="w-6 h-6" />
            <div className="text-left">
              <div className="text-xs opacity-90">Download on the</div>
              <div className="text-sm font-bold">App Store</div>
            </div>
          </a>
          <a 
            href="https://play.google.com/store" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-10 py-4 rounded-2xl text-lg font-semibold hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 shadow-xl flex items-center space-x-3"
          >
            <Smartphone className="w-6 h-6" />
            <div className="text-left">
              <div className="text-xs opacity-90">Get it on</div>
              <div className="text-sm font-bold">Google Play</div>
            </div>
          </a>
        </div>

        <div className="flex items-center justify-center space-x-8 text-slate-500">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
            <span className="text-sm">Free to start</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
            <span className="text-sm">No credit card required</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
            <span className="text-sm">Cancel anytime</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;