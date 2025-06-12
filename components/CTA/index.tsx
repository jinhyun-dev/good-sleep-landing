import { Download } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-900/50 to-pink-900/50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
          Ready to Transform Your Sleep?
        </h2>
        <p className="text-xl text-white/80 mb-12">
          Join over 500,000 users who have already improved their sleep quality with Good Sleep.
          Download now and start your journey to better rest tonight.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-10 py-4 rounded-full text-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center space-x-3">
            <Download className="w-6 h-6" />
            <span>Download for iOS</span>
          </button>
          <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-10 py-4 rounded-full text-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center space-x-3">
            <Download className="w-6 h-6" />
            <span>Download for Android</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;