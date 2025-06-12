import { CheckCircle } from "lucide-react";

const Pricing = () => {
  const pricingPlans = [
    {
      name: 'Free',
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
      icon: '🌱',
      bgGradient: 'from-emerald-50 to-teal-50',
      borderColor: 'border-emerald-200'
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
      icon: '🌟',
      bgGradient: 'from-indigo-50 to-purple-50',
      borderColor: 'border-indigo-200'
    }
  ];

  return (
    <section id="pricing" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-800">
            Choose Your Sleep Journey
          </h2>
          <p className="text-xl text-slate-600">
            Start free, upgrade when you're ready for advanced features
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative pricing-card ${plan.popular ? 'pricing-card-popular' : ''} ${plan.borderColor} bg-gradient-to-br ${plan.bgGradient}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <div className="text-4xl mb-4">{plan.icon}</div>
                <h3 className="text-2xl font-bold mb-2 text-slate-800">{plan.name}</h3>
                <p className="text-slate-600 mb-6">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-slate-800">{plan.price}</span>
                  {plan.period !== 'forever' && (
                    <span className="text-slate-600 ml-2">/{plan.period}</span>
                  )}
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                    <span className="text-slate-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 rounded-2xl font-semibold transition-all duration-300 ${
                plan.popular
                  ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white hover:from-indigo-600 hover:to-purple-700 shadow-lg hover:shadow-xl'
                  : 'bg-white text-slate-700 border-2 border-slate-200 hover:bg-slate-50 hover:border-slate-300'
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