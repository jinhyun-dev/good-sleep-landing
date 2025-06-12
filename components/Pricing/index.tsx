import { CheckCircle } from "lucide-react";

const Pricing = () => {
  const pricingPlans = [
    {
      name: 'Starter',
      price: 'Free',
      period: 'forever',
      description: 'Perfect for getting started with sleep tracking',
      features: [
        'Basic sleep tracking',
        'Limited meditation library',
        'Weekly sleep reports',
        'Community access'
      ],
      cta: 'Get Started',
      popular: false,
      color: 'from-slate-600 to-slate-700'
    },
    {
      name: 'Premium',
      price: '$9.99',
      period: 'per month',
      description: 'Complete sleep optimization toolkit',
      features: [
        'Advanced AI coaching',
        'Unlimited meditation library',
        'Daily detailed analytics',
        'Priority customer support',
        'Data export & insights',
        'Personalized recommendations',
        'Sleep score trends',
        'Integration with health apps'
      ],
      cta: 'Start Premium Trial',
      popular: true,
      color: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <section id="pricing" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Choose Your Sleep Journey
          </h2>
          <p className="text-xl text-white/80">
            Start free, upgrade when you're ready for advanced features
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300 hover:scale-105 ${
                plan.popular 
                  ? 'border-purple-500 ring-2 ring-purple-500/20' 
                  : 'border-white/10 hover:border-white/20'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2 text-white">{plan.name}</h3>
                <p className="text-white/70 mb-4">{plan.description}</p>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  {plan.period !== 'forever' && (
                    <span className="text-white/70 ml-2">/{plan.period}</span>
                  )}
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-white/80">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 rounded-full font-semibold transition-all duration-300 ${
                plan.popular
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 shadow-lg hover:shadow-xl'
                  : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
              }`}>
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;