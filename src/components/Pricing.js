import React, { useState } from 'react';

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const plans = [
    {
      id: 1,
      name: "Starter",
      description: "Perfect for individuals and small projects",
      monthlyPrice: 9,
      yearlyPrice: 90,
      features: [
        "100 photos per month",
        "Basic enhancement features",
        "Standard quality output",
        "Email support",
        "Mobile app access",
        "Basic templates"
      ],
      cta: "Start Free Trial",
      popular: false,
      color: "blue"
    },
    {
      id: 2,
      name: "Professional",
      description: "Ideal for photographers and content creators",
      monthlyPrice: 29,
      yearlyPrice: 290,
      features: [
        "500 photos per month",
        "All enhancement features",
        "High-quality output",
        "Priority support",
        "Batch processing",
        "API access",
        "Custom presets",
        "Advanced templates"
      ],
      cta: "Start Free Trial",
      popular: true,
      color: "blue"
    },
    {
      id: 3,
      name: "Business",
      description: "For agencies and high-volume users",
      monthlyPrice: 99,
      yearlyPrice: 990,
      features: [
        "Unlimited photos",
        "Premium enhancement features",
        "Studio-quality output",
        "24/7 phone support",
        "Advanced batch processing",
        "Full API access",
        "White-label options",
        "Team collaboration",
        "Custom integrations",
        "Dedicated account manager"
      ],
      cta: "Contact Sales",
      popular: false,
      color: "blue"
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Choose the plan that fits your needs. All plans include a 14-day free trial. 
            No credit card required to get started.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center mb-12">
            <span className={`text-sm font-medium ${billingCycle === 'monthly' ? 'text-gray-900' : 'text-gray-500'}`}>
              Monthly
            </span>
            <button
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
              className="mx-4 relative inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  billingCycle === 'yearly' ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-sm font-medium ${billingCycle === 'yearly' ? 'text-gray-900' : 'text-gray-500'}`}>
              Yearly
            </span>
            {billingCycle === 'yearly' && (
              <span className="ml-2 bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full">
                Save 20%
              </span>
            )}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${
                plan.popular ? 'ring-2 ring-blue-500 scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="p-8">
                {/* Plan Header */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  
                  <div className="mb-6">
                    <span className="text-5xl font-bold text-gray-900">
                      ${billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice}
                    </span>
                    <span className="text-gray-600 ml-2">
                      /{billingCycle === 'monthly' ? 'month' : 'year'}
                    </span>
                  </div>
                  
                  {billingCycle === 'yearly' && (
                    <div className="text-sm text-green-600 font-medium mb-4">
                      Save ${(plan.monthlyPrice * 12) - plan.yearlyPrice} per year
                    </div>
                  )}
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button
                  onClick={() => scrollToSection('hero')}
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 ${
                    plan.popular
                      ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 max-w-4xl mx-auto shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              All Plans Include
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Secure & Private</h4>
                <p className="text-gray-600 text-sm">Your photos are encrypted and never shared</p>
              </div>
              <div>
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Lightning Fast</h4>
                <p className="text-gray-600 text-sm">Process photos in seconds, not hours</p>
              </div>
              <div>
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Cancel Anytime</h4>
                <p className="text-gray-600 text-sm">No long-term contracts or hidden fees</p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16 max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Frequently Asked Questions
          </h3>
          <div className="space-y-4">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h4 className="font-semibold text-gray-900 mb-2">Can I change my plan anytime?</h4>
              <p className="text-gray-600 text-sm">Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h4 className="font-semibold text-gray-900 mb-2">What happens to my photos after processing?</h4>
              <p className="text-gray-600 text-sm">Your photos are automatically deleted from our servers after 30 days. We never use your images for training our AI.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h4 className="font-semibold text-gray-900 mb-2">Do you offer refunds?</h4>
              <p className="text-gray-600 text-sm">Yes, we offer a 30-day money-back guarantee. If you're not satisfied, we'll refund your payment.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
