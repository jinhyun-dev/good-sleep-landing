"use client";

import { useState, useEffect } from "react";
import { Smartphone, Play, ArrowRight, Star } from "lucide-react";

const Hero = () => {
  const [sleepScore, setSleepScore] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSleepScore(prev => prev < 92 ? prev + 1 : 92);
    }, 50);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-8 border border-white/20">
            <Star className="w-4 h-4 text-yellow-400" />
            <span className="text-sm text-white/90">Rated #1 Sleep App of 2024</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight text-white">
            Better Sleep,
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              Better Life
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
            Transform your sleep with AI-powered tracking, personalized meditation content, 
            and daily insights designed for modern professionals and digital nomads.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center space-x-3">
              <Smartphone className="w-5 h-5" />
              <span>Download Free App</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="border-2 border-white/30 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition-all duration-300 flex items-center space-x-3">
              <Play className="w-5 h-5" />
              <span>Watch Demo</span>
            </button>
          </div>
        </div>

        {/* Sleep Score Demo */}
        <div className="max-w-md mx-auto bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-4 text-white">Your Sleep Score</h3>
            <div className="relative w-32 h-32 mx-auto mb-4">
              <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 128 128">
                <circle cx="64" cy="64" r="56" stroke="currentColor" strokeWidth="8" fill="transparent" className="text-white/20"/>
                <circle cx="64" cy="64" r="56" stroke="url(#gradient)" strokeWidth="8" fill="transparent" 
                  strokeDasharray={`${2 * Math.PI * 56}`}
                  strokeDashoffset={`${2 * Math.PI * 56 * (1 - sleepScore / 100)}`}
                  className="transition-all duration-1000 ease-out"/>
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#8B5CF6" />
                    <stop offset="100%" stopColor="#EC4899" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-3xl font-bold text-white">{sleepScore}</span>
              </div>
            </div>
            <p className="text-white/70">Excellent sleep quality</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;