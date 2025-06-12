import { Moon, BarChart3, Brain, Zap, Leaf } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Moon className="w-8 h-8" />,
      title: 'AI Sleep Tracker',
      description: 'Advanced machine learning algorithms analyze your sleep patterns with clinical precision, providing actionable insights for better rest.',
      highlight: 'ML-powered',
      accent: '🌙',
      bgColor: 'from-indigo-500 via-purple-500 to-blue-500'
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: 'Daily Sleep Analytics',
      description: 'Comprehensive daily reports with personalized recommendations based on your unique sleep data and lifestyle patterns.',
      highlight: 'Data-driven',
      accent: '📊',
      bgColor: 'from-emerald-500 via-teal-500 to-cyan-500'
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'Meditation Library',
      description: 'Curated collection of 500+ guided meditations, sleep stories, and binaural beats designed by sleep specialists.',
      highlight: '500+ content',
      accent: '🧘‍♀️',
      bgColor: 'from-purple-500 via-pink-500 to-rose-500'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Smart Sleep Coach',
      description: 'Your personal AI assistant learns from your habits and provides customized strategies for optimal sleep quality.',
      highlight: 'AI-powered',
      accent: '✨',
      bgColor: 'from-amber-500 via-orange-500 to-red-500'
    }
  ];

  return (
    <section id="features" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 mb-6">
            <Leaf className="w-6 h-6 text-emerald-500" />
            <span className="text-emerald-600 font-semibold">Natural Sleep Solutions</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-800">
            Revolutionize Your Sleep
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Comprehensive sleep improvement powered by cutting-edge AI technology and backed by sleep science research.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="flex items-start space-x-6">
                <div className={`w-20 h-20 bg-gradient-to-br ${feature.bgColor} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg relative`}>
                  <div className="text-white">
                    {feature.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 text-2xl">{feature.accent}</div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-4">
                    <h3 className="text-xl font-semibold text-slate-800">{feature.title}</h3>
                  </div>
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 px-3 py-1 rounded-full text-sm font-medium">
                      {feature.highlight}
                    </span>
                  </div>
                  <p className="text-slate-600 leading-relaxed">{feature.description}</p>
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