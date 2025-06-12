"use client";

import { useState, useEffect } from "react";
import { Star } from "lucide-react";

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: 'Anna Chen',
      role: 'Digital Nomad, San Francisco',
      content: 'Good Sleep completely transformed my irregular sleep schedule. No more jet lag struggles - I wake up refreshed every morning!',
      rating: 5,
      avatar: '👩‍💻'
    },
    {
      name: 'Mark Thompson',
      role: 'Product Manager, London',
      content: 'As someone who travels frequently for work, maintaining consistent sleep seemed impossible. This app is a game changer.',
      rating: 5,
      avatar: '👨‍💼'
    },
    {
      name: 'Sarah Kim',
      role: 'Working Mom, Toronto',
      content: 'Between work and kids, quality sleep felt like a luxury. Good Sleep made it achievable with just 10 minutes of daily guidance.',
      rating: 5,
      avatar: '👩‍👧'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="py-24 px-4 sm:px-6 lg:px-8 bg-black/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Loved by Sleep Seekers Worldwide
          </h2>
          <p className="text-xl text-white/80">
            Join thousands who have transformed their sleep with Good Sleep
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div className="flex items-center justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
              ))}
            </div>
            
            <blockquote className="text-xl md:text-2xl text-center mb-8 leading-relaxed text-white">
              "{testimonials[currentTestimonial].content}"
            </blockquote>
            
            <div className="flex items-center justify-center space-x-4">
              <div className="text-3xl">{testimonials[currentTestimonial].avatar}</div>
              <div className="text-center">
                <div className="font-semibold text-lg text-white">{testimonials[currentTestimonial].name}</div>
                <div className="text-white/70">{testimonials[currentTestimonial].role}</div>
              </div>
            </div>
            
            <div className="flex justify-center space-x-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial ? 'bg-purple-500' : 'bg-white/30'
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