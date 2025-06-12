"use client";

import { useState, useEffect } from "react";
import { Star, Wind } from "lucide-react";

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: 'Anna Chen',
      role: 'Digital Nomad, San Francisco',
      content: 'Good Sleep completely transformed my irregular sleep schedule. No more jet lag struggles - I wake up refreshed every morning!',
      rating: 5,
      avatar: '🌸',
      location: 'Working from Bali'
    },
    {
      name: 'Mark Thompson',
      role: 'Product Manager, London',
      content: 'As someone who travels frequently for work, maintaining consistent sleep seemed impossible. This app is a game changer.',
      rating: 5,
      avatar: '🍃',
      location: 'Remote work enthusiast'
    },
    {
      name: 'Sarah Kim',
      role: 'Working Mom, Toronto',
      content: 'Between work and kids, quality sleep felt like a luxury. Good Sleep made it achievable with just 10 minutes of daily guidance.',
      rating: 5,
      avatar: '🌿',
      location: 'Balancing family & career'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50/50 to-blue-50/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 mb-6">
            <Wind className="w-6 h-6 text-blue-500" />
            <span className="text-blue-600 font-semibold">Sleep Stories</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-800">
            Loved by Sleep Seekers Worldwide
          </h2>
          <p className="text-xl text-slate-600">
            Join thousands who have transformed their sleep with Good Sleep
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="testimonial-card">
            <div className="flex items-center justify-center mb-8">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-7 h-7 text-amber-400 fill-current" />
                ))}
              </div>
            </div>
            
            <blockquote className="text-xl md:text-2xl text-center mb-8 leading-relaxed text-slate-700 font-medium font-serif italic">
              "{testimonials[currentTestimonial].content}"
            </blockquote>
            
            <div className="flex items-center justify-center space-x-6">
              <div className="text-4xl">{testimonials[currentTestimonial].avatar}</div>
              <div className="text-center">
                <div className="font-semibold text-lg text-slate-800">{testimonials[currentTestimonial].name}</div>
                <div className="text-slate-600">{testimonials[currentTestimonial].role}</div>
                <div className="text-sm text-slate-500 mt-1">{testimonials[currentTestimonial].location}</div>
              </div>
            </div>
            
            <div className="flex justify-center space-x-3 mt-10">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    index === currentTestimonial ? 'bg-indigo-500 scale-125' : 'bg-slate-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;