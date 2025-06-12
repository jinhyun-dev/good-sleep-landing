import { Users, Star, TrendingUp, Award } from "lucide-react";

const Stats = () => {
  const stats = [
    { 
      number: '500K+', 
      label: 'Active Users', 
      icon: <Users className="w-6 h-6" />, 
      color: 'from-emerald-400 to-teal-500',
      accent: '🌱'
    },
    { 
      number: '4.9', 
      label: 'App Store Rating', 
      icon: <Star className="w-6 h-6" />, 
      color: 'from-amber-400 to-orange-500',
      accent: '⭐'
    },
    { 
      number: '85%', 
      label: 'Sleep Quality Improvement', 
      icon: <TrendingUp className="w-6 h-6" />, 
      color: 'from-blue-400 to-indigo-500',
      accent: '📈'
    },
    { 
      number: '50+', 
      label: 'Countries Worldwide', 
      icon: <Award className="w-6 h-6" />, 
      color: 'from-purple-400 to-pink-500',
      accent: '🌍'
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/30 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="flex items-center justify-center mb-4">
                <div className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300 relative`}>
                  <div className="text-white">
                    {stat.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 text-lg">{stat.accent}</div>
                </div>
              </div>
              <div className="text-3xl font-bold mb-2 text-slate-700">{stat.number}</div>
              <div className="text-slate-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;