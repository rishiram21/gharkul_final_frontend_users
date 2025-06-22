import React, { useState, useEffect } from 'react';
import { Check, Star, Users, Briefcase, X, Zap, Shield, TrendingUp, ArrowRight, ChevronDown, ChevronUp, Gift, Clock, Phone, Mail, MessageCircle } from 'lucide-react';

const Subscription = () => {
  const [showUserPlans, setShowUserPlans] = useState(true);
  const [isAnnual, setIsAnnual] = useState(false);
  const [showComparison, setShowComparison] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [showFAQ, setShowFAQ] = useState(false);
  const [openFAQ, setOpenFAQ] = useState(null);
  const [animateCards, setAnimateCards] = useState(false);

  useEffect(() => {
    setAnimateCards(true);
  }, [showUserPlans]);

  const togglePlans = (isUser) => {
    setShowUserPlans(isUser);
    setAnimateCards(false);
    setTimeout(() => setAnimateCards(true), 100);
  };

  const userPlans = [
    {
      name: 'Starter',
      price: '₹299',
      originalPrice: null,
      period: '/30 days',
      description: 'Perfect for getting started with basic access',
      features: [
        '10 Contacts',
        'One-time Access',
        'Easy to Use',
        '30 Days Validity'
      ],
      popular: false,
      color: 'from-blue-500 to-blue-600',
      icon: <TrendingUp size={24} className="text-white" />,
      savings: null
    },
    {
      name: 'Smart',
      price: '₹699',
      originalPrice: null,
      period: '/30 days',
      description: 'Great for active users with enhanced features',
      features: [
        '25 Contacts',
        'Priority Support',
        'Matching Features',
        '30 Days Validity'
      ],
      popular: true,
      color: 'from-purple-500 to-purple-600',
      icon: <Zap size={24} className="text-white" />,
      savings: null
    },
    {
      name: 'Premium',
      price: '₹999',
      originalPrice: null,
      period: '/30 days',
      description: 'Complete solution with premium support',
      features: [
        '30 Contacts',
        'WhatsApp Alerts',
        '24x7 Support',
        '30 Days Validity'
      ],
      popular: false,
      color: 'from-emerald-500 to-emerald-600',
      icon: <Shield size={24} className="text-white" />,
      savings: null
    }
  ];

  const brokerPlans = [
    {
      name: 'Basic',
      price: '₹4,999',
      originalPrice: null,
      period: '/45 days',
      description: 'Essential tools for basic brokerage needs',
      features: [
        '20 Listings',
        'Basic Visibility',
        'Easy to Use',
        '45 Days Validity'
      ],
      popular: false,
      color: 'from-orange-500 to-orange-600',
      icon: <Users size={24} className="text-white" />,
      savings: null
    },
    {
      name: 'Pro',
      price: '₹8,999',
      originalPrice: null,
      period: '/60 days',
      description: 'Advanced features for growing brokerages',
      features: [
        '35 Listings',
        'Analytics',
        'Profile Page',
        '60 Days Validity'
      ],
      popular: true,
      color: 'from-red-500 to-red-600',
      icon: <Briefcase size={24} className="text-white" />,
      savings: null
    },
    {
      name: 'Elite',
      price: '₹14,999',
      originalPrice: null,
      period: '/75 days',
      description: 'Premium solution for the elite brokerages',
      features: [
        '50 Listings',
        'Featured Badge',
        'WhatsApp Support',
        '75 Days Validity'
      ],
      popular: false,
      color: 'from-indigo-500 to-indigo-600',
      icon: <Shield size={24} className="text-white" />,
      savings: null
    }
  ];

  const currentPlans = showUserPlans ? userPlans : brokerPlans;

  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "Individual Investor",
      content: "The Smart plan has completely transformed my investment strategy. The real-time analytics are game-changing!",
      rating: 5,
      avatar: "RK"
    },
    {
      name: "Sarah Johnson",
      role: "Portfolio Manager",
      content: "Premium features saved us countless hours. The dedicated account manager is incredibly responsive.",
      rating: 5,
      avatar: "SJ"
    },
    {
      name: "Mumbai Securities",
      role: "Brokerage Firm",
      content: "The broker platform streamlined our operations. Client management has never been easier.",
      rating: 5,
      avatar: "MS"
    }
  ];

  const faqs = [
    {
      question: "Can I switch plans anytime?",
      answer: "Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle."
    },
    {
      question: "Is there a free trial available?",
      answer: "We offer a 14-day free trial for all plans. No credit card required to start."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, debit cards, UPI, and bank transfers for Indian customers."
    },
    {
      question: "Do you offer refunds?",
      answer: "Yes, we offer a 30-day money-back guarantee for all plans if you're not completely satisfied."
    }
  ];

  const handlePlanSelect = (plan) => {
    setSelectedPlan(plan);
    // Simulate plan selection animation
    setTimeout(() => {
      alert(`Great choice! You've selected the ${plan.name} plan for ${plan.price}${plan.period}. Redirecting to checkout...`);
      setSelectedPlan(null);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white py-8">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <Gift size={16} />
            <span className="text-sm font-medium">Limited Time: 2 months free on annual plans!</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
            Supercharge Your Investment Journey
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-8">
            Choose from our comprehensive plans designed for every investor - from beginners to enterprise brokerages
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => document.getElementById('plans').scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              View Plans
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">
              Start Free Trial
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16" id="plans">
        {/* Plan Toggle */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-full p-1 shadow-lg border border-gray-200">
            <button
              onClick={() => togglePlans(true)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                showUserPlans
                  ? 'bg-blue-500 text-white shadow-md'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              <Users size={20} />
              User Subscription
            </button>
            <button
              onClick={() => togglePlans(false)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                !showUserPlans
                  ? 'bg-blue-500 text-white shadow-md'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              <Briefcase size={20} />
              Broker Subscription
            </button>
          </div>
        </div>

        {/* Plans Grid */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {currentPlans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl ${
                plan.popular ? 'ring-2 ring-purple-500 ring-opacity-50 transform scale-105' : ''
              } ${animateCards ? 'animate-fadeInUp' : 'opacity-0'} ${
                selectedPlan?.name === plan.name ? 'ring-4 ring-blue-500 ring-opacity-70' : ''
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 z-10">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-center py-3 font-semibold flex items-center justify-center gap-2">
                    <Star size={16} fill="white" />
                    Most Popular Choice
                  </div>
                </div>
              )}
              
              <div className="p-8 pt-12">
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${plan.color} flex items-center justify-center mb-6 mx-auto shadow-lg`}>
                  {plan.icon}
                </div>
                
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold text-gray-900 mb-3">{plan.name}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{plan.description}</p>
                  
                  <div className="flex flex-col items-center">
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold text-gray-900">{plan.price}</span>
                      <span className="text-gray-600 ml-2 text-lg">{plan.period}</span>
                    </div>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                        <Check size={14} className="text-green-600" />
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="space-y-3">
                  <button 
                    onClick={() => handlePlanSelect(plan)}
                    disabled={selectedPlan?.name === plan.name}
                    className={`w-full py-4 px-6 rounded-xl font-semibold text-white transition-all duration-300 transform hover:scale-105 bg-gradient-to-r ${plan.color} hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-opacity-30 disabled:opacity-70 disabled:cursor-not-allowed ${
                      selectedPlan?.name === plan.name ? 'animate-pulse' : ''
                    }`}
                  >
                    {selectedPlan?.name === plan.name ? 'Processing...' : 'Get Started'}
                  </button>
                  <button className="w-full py-3 px-6 rounded-xl font-medium text-gray-700 border-2 border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all duration-300">
                    Start Free Trial
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison Button */}
        <div className="text-center mb-16">
          <button
            onClick={() => setShowComparison(!showComparison)}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 hover:bg-gray-200 rounded-xl font-semibold text-gray-700 transition-all duration-300"
          >
            Compare All Features
            {showComparison ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </button>
        </div>

        {/* Feature Comparison */}
        {showComparison && (
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-16 animate-fadeIn">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Features</th>
                    {currentPlans.map(plan => (
                      <th key={plan.name} className="px-6 py-4 text-center text-sm font-semibold text-gray-900">
                        {plan.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {currentPlans[0].features.map((feature, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm text-gray-900">{feature}</td>
                      {currentPlans.map(plan => (
                        <td key={plan.name} className="px-6 py-4 text-center">
                          {plan.features.includes(feature) ? (
                            <Check size={16} className="text-green-600 mx-auto" />
                          ) : (
                            <X size={16} className="text-gray-300 mx-auto" />
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Testimonials */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">What our customers say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="#fbbf24" className="text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <button
              onClick={() => setShowFAQ(!showFAQ)}
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold"
            >
              {showFAQ ? 'Hide' : 'Show'} FAQ
              {showFAQ ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>
          </div>
          
          {showFAQ && (
            <div className="max-w-3xl mx-auto space-y-4 animate-fadeIn">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
                  <button
                    onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                  >
                    <span className="font-semibold text-gray-900">{faq.question}</span>
                    {openFAQ === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </button>
                  {openFAQ === index && (
                    <div className="px-6 pb-4 text-gray-700 animate-fadeIn">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Contact & Support */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white text-center mb-16">
          <h2 className="text-3xl font-bold mb-6">Need Help Choosing?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Our expert team is here to help you find the perfect plan for your needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300">
              <Phone size={20} />
              Schedule Call
            </button>
            <button className="inline-flex items-center gap-2 border-2 border-white text-white px-6 py-3 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">
              <MessageCircle size={20} />
              Live Chat
            </button>
            <button className="inline-flex items-center gap-2 border-2 border-white text-white px-6 py-3 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">
              <Mail size={20} />
              Email Support
            </button>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Clock size={16} />
            Limited Time Offer - 2 Months Free!
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of successful investors and brokers who trust our platform
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl">
              Start Free Trial
              <ArrowRight size={20} />
            </button>
            <button className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:border-gray-400 hover:bg-gray-50 transition-all duration-300">
              View Demo
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Subscription;