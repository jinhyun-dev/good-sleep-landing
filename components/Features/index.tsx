import { Moon, BarChart3, Brain, Zap } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Moon className="w-8 h-8" />,
      title: 'AI Sleep Tracker',
      description: 'Advanced machine learning algorithms analyze your sleep patterns with clinical precision, providing actionable insights for better rest.',
      highlight: 'ML-powered'
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: 'Daily Sleep Analytics',
      description: 'Comprehensive daily reports with personalized recommendations based on your unique sleep data and lifestyle patterns.',
      highlight: 'Data-driven'
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'Meditation Library',
      description: 'Curated collection of 500+ guided meditations, sleep stories, and binaural beats designed by sleep specialists.',
      highlight: '500+ content'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Smart Sleep Coach',
      description: 'Your personal AI assistant learns from your habits and provides customized strategies for optimal sleep quality.',
      highlight: 'AI-powered'
    }
  ];

  return (
    <section id="features" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Revolutionize Your Sleep
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Comprehensive sleep improvement powered by cutting-edge AI technology and backed by sleep science research.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 group">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-3">
                    <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                    <span className="bg-gradient-to-r from-purple-400 to-pink-400 px-2 py-1 rounded-full text-xs font-medium text-white">
                      {feature.highlight}
                    </span>
                  </div>
                  <p className="text-white/70 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;