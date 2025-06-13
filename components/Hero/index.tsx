"use client";

import { useState, useEffect } from "react";
import { Smartphone, Play, ArrowRight, Star, Moon, Leaf } from "lucide-react";

const Hero = () => {
  const [sleepScore, setSleepScore] = useState(0);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setSleepScore(prev => prev < 92 ? prev + 1 : 92);
    }, 50);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const isNightTime = currentTime.getHours() >= 20 || currentTime.getHours() <= 6;

  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated Nature Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
        {/* Floating Nature Elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-20 w-2 h-2 bg-emerald-300 rounded-full animate-float"></div>
          <div className="absolute top-40 right-32 w-1 h-1 bg-blue-300 rounded-full animate-float-delayed"></div>
          <div className="absolute bottom-60 left-40 w-3 h-3 bg-purple-300 rounded-full animate-gentle-bounce"></div>
          <div className="absolute top-1/3 right-20 w-2 h-2 bg-teal-300 rounded-full animate-float"></div>
          <div className="absolute bottom-40 right-60 w-1 h-1 bg-indigo-300 rounded-full animate-float-slow"></div>
        </div>
        
        {/* Nature-inspired SVG Pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="nature-leaves" x="0" y="0" width="400" height="400" patternUnits="userSpaceOnUse">
              <circle cx="50" cy="50" r="2" fill="currentColor" className="text-emerald-300" opacity="0.3"/>
              <circle cx="150" cy="150" r="1.5" fill="currentColor" className="text-blue-300" opacity="0.4"/>
              <circle cx="300" cy="200" r="1" fill="currentColor" className="text-purple-300" opacity="0.2"/>
              <circle cx="200" cy="350" r="2.5" fill="currentColor" className="text-teal-300" opacity="0.3"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#nature-leaves)" />
        </svg>
        
        {/* Subtle Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-indigo-500/10"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 glass-effect px-6 py-3 rounded-full mb-8 shadow-sm">
            <Star className="w-5 h-5 text-amber-500" />
            <span className="text-sm text-slate-700 font-medium">Rated #1 Sleep App of 2024</span>
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight hero-title">
            <span className="text-slate-800">Better Sleep,</span>
            <br />
            <span className="gradient-text">
              Better Life
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-4xl mx-auto leading-relaxed">
            Transform your sleep with AI-powered tracking, personalized meditation content, 
            and daily insights designed for modern professionals seeking natural wellness solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16">
            <a 
              href="https://apps.apple.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="button-primary inline-flex items-center space-x-3"
            >
              <Smartphone className="w-6 h-6" />
              <span>Download Free App</span>
              <ArrowRight className="w-5 h-5" />
            </a>
            <a 
              href="https://www.youtube.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="button-secondary inline-flex items-center space-x-3"
            >
              <Play className="w-5 h-5" />
              <span>Watch Demo</span>
            </a>
          </div>

          {/* Enhanced Sleep Score Demo */}
          <div className="max-w-sm mx-auto card-nature p-8">
            <div className="text-center">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <Moon className="w-5 h-5 text-indigo-500" />
                <h3 className="text-lg font-semibold text-slate-700">Your Sleep Score</h3>
                <span className="text-2xl">{isNightTime ? '🌙' : '☀️'}</span>
              </div>
              <div className="relative w-40 h-40 mx-auto mb-6">
                <svg className="w-40 h-40 transform -rotate-90" viewBox="0 0 144 144">
                  <circle cx="72" cy="72" r="64" stroke="currentColor" strokeWidth="8" fill="transparent" className="text-slate-200"/>
                  <circle cx="72" cy="72" r="64" stroke="url(#sleepGradient)" strokeWidth="8" fill="transparent" 
                    strokeDasharray={`${2 * Math.PI * 64}`}
                    strokeDashoffset={`${2 * Math.PI * 64 * (1 - sleepScore / 100)}`}
                    className="transition-all duration-1000 ease-out"
                    strokeLinecap="round"/>
                  <defs>
                    <linearGradient id="sleepGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#6366F1" />
                      <stop offset="50%" stopColor="#8B5CF6" />
                      <stop offset="100%" stopColor="#06B6D4" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-4xl font-bold text-slate-700">{sleepScore}</span>
                  <span className="text-sm text-slate-500">out of 100</span>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <div className="w-3 h-3 bg-emerald-400 rounded-full"></div>
                <p className="text-slate-600">Excellent sleep quality</p>
                <Leaf className="w-4 h-4 text-emerald-500" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;