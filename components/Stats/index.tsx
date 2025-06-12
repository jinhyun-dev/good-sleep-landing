import { Users, Star, TrendingUp, Award } from "lucide-react";

const Stats = () => {
  const stats = [
    { number: '500K+', label: 'Active Users', icon: <Users className="w-6 h-6" /> },
    { number: '4.9', label: 'App Store Rating', icon: <Star className="w-6 h-6" /> },
    { number: '85%', label: 'Sleep Quality Improvement', icon: <TrendingUp className="w-6 h-6" /> },
    { number: '50+', label: 'Countries Worldwide', icon: <Award className="w-6 h-6" /> }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="flex items-center justify-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white">
                  {stat.icon}
                </div>
              </div>
              <div className="text-3xl font-bold mb-2 text-white">{stat.number}</div>
              <div className="text-white/70">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;