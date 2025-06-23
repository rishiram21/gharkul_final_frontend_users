import React, { useState, useEffect } from 'react';
import { Search, Star, Phone, MessageCircle, Share2, MapPin, Home, Building, Users, Heart, Filter, Menu, X } from 'lucide-react';

const HomePage = () => {
  const [activeTab, setActiveTab] = useState('Buy');
  const [activePropertyType, setActivePropertyType] = useState('Kharadi');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const propertyTypes = ['Kharadi', 'Viman Nagar', 'Bhorawadi', 'Baner', 'Balewadi'];
  const tabs = ['Buy', 'Rent', 'Requirement'];

  const featuredProperties = [
    {
      id: 1,
      title: '3 BHK in Ganga Constella',
      location: 'Near Shankar Maharaj Math, Bhorawadi, Pune',
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=250&fit=crop&crop=center',
      price: '₹85 Lac',
      type: '3BHK',
      area: '1250 sq ft'
    },
    {
      id: 2,
      title: '2 BHK Ganga Ishanya',
      location: 'Near Shankar Maharaj Math, Bhorawadi, Pune',
      image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&h=250&fit=crop&crop=center',
      price: '₹65 Lac',
      type: '2BHK',
      area: '950 sq ft'
    },
    {
      id: 3,
      title: '3 BHK Lavish Flat',
      location: 'Near Shankar Maharaj Math, Bhorawadi, Pune',
      image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=400&h=250&fit=crop&crop=center',
      price: '₹95 Lac',
      type: '3BHK',
      area: '1400 sq ft'
    }
  ];

  const underConstructionProject = {
    title: 'Gharkul Premises',
    subtitle: 'Possession From NA',
    price: '₹ 2.5 Cr',
    status: 'Onwards*',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=400&fit=crop&crop=center'
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Mobile Header */}
      {/* <div className="lg:hidden bg-blue-600 text-white p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">PropertyHub</h1>
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div> */}

      {/* Search Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-4 md:py-8">
        <div className="w-full px-3 md:px-6 lg:px-8">
          {/* Search Bar */}
          <div className="mb-4 md:mb-6">
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-3 md:left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 md:w-5 md:h-5" />
              <input
                type="text"
                placeholder="Search Properties, Requirements..."
                className="w-full pl-10 md:pl-12 pr-4 py-3 md:py-4 border border-gray-200 rounded-lg text-sm md:text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
              />
            </div>
          </div>

          {/* Tabs */}
          <div className="flex justify-center mb-4 md:mb-6">
            <div className="bg-white rounded-lg p-1 flex shadow-sm">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-3 md:px-6 py-2 rounded-md font-medium transition-colors text-sm md:text-base ${
                    activeTab === tab
                      ? 'bg-blue-500 text-white'
                      : 'text-gray-600 hover:text-gray-800'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Property Type Filters */}
          <div className="flex justify-center mb-4 md:mb-6">
            <div className="flex flex-wrap gap-2 justify-center">
              {propertyTypes.map((type) => (
                <button
                  key={type}
                  onClick={() => setActivePropertyType(type)}
                  className={`px-3 md:px-4 py-1.5 md:py-2 rounded-full border font-medium transition-colors text-xs md:text-sm ${
                    activePropertyType === type
                      ? 'bg-blue-500 text-white border-blue-500'
                      : 'bg-white text-gray-600 border-gray-300 hover:border-blue-300'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* Search Button */}
          <div className="text-center">
            <button className="bg-blue-500 text-white px-8 md:px-12 py-2.5 md:py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors text-sm md:text-base shadow-md">
              Search
            </button>
          </div>
        </div>
      </section>

      {/* Featured Requirements Section */}
      <section className="py-6 md:py-8 bg-white border-b border-gray-100">
        <div className="w-full px-3 md:px-6 lg:px-8">
          <div className="text-center mb-4 md:mb-6">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <Star className="w-4 h-4 md:w-5 md:h-5 text-blue-500" />
              <h2 className="text-lg md:text-2xl font-bold text-gray-800">Featured Requirements</h2>
            </div>
          </div>

          {/* User Profile Card */}
          <div className="bg-white rounded-lg shadow-md p-4 md:p-6 max-w-3xl mx-auto border">
            <div className="flex items-start space-x-3 md:space-x-4">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Users className="w-5 h-5 md:w-6 md:h-6 text-blue-600" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-col md:flex-row md:items-center md:space-x-2 mb-2">
                  <h3 className="font-semibold text-gray-800 text-sm md:text-base">Isha Shah</h3>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium inline-block mt-1 md:mt-0 w-fit">
                    Posted Just now
                  </span>
                </div>
                <div className="flex flex-wrap gap-1.5 md:gap-2 mb-3">
                  <span className="bg-blue-500 text-white px-2 md:px-3 py-1 rounded text-xs md:text-sm">Kharadi</span>
                  <span className="bg-gray-100 text-gray-700 px-2 md:px-3 py-1 rounded text-xs md:text-sm">Viman Nagar</span>
                  <span className="bg-gray-100 text-gray-700 px-2 md:px-3 py-1 rounded text-xs md:text-sm">Baner</span>
                  <span className="bg-gray-100 text-gray-700 px-2 md:px-3 py-1 rounded text-xs md:text-sm">Undri</span>
                  <span className="bg-gray-100 text-gray-700 px-2 md:px-3 py-1 rounded text-xs md:text-sm">Hadapsar</span>
                </div>
                <p className="text-gray-600 mb-4 text-sm md:text-base">
                  Need a 2BHK urgently in Kharadi, semi-furnished okay. Budget around 25k.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex space-x-3 md:space-x-4">
                    <button className="text-gray-600 hover:text-blue-600 transition-colors">
                      <Share2 className="w-4 h-4" />
                    </button>
                    <button className="text-gray-600 hover:text-blue-600 transition-colors">
                      <MessageCircle className="w-4 h-4" />
                    </button>
                    <button className="text-gray-600 hover:text-blue-600 transition-colors">
                      <Phone className="w-4 h-4" />
                    </button>
                  </div>
                  <button className="bg-blue-500 text-white px-4 md:px-6 py-2 rounded-lg font-medium hover:bg-blue-600 transition-colors text-sm md:text-base">
                    Ping
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Handpicked Properties Section */}
      <section className="py-6 md:py-8 bg-gray-50">
        <div className="w-full px-3 md:px-6 lg:px-8">
          <h2 className="text-lg md:text-2xl font-bold text-center text-gray-800 mb-4 md:mb-6">Handpicked Properties</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
            {featuredProperties.map((property) => (
              <div key={property.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="relative h-40 md:h-48 overflow-hidden">
                  <img 
                    src={property.image} 
                    alt={property.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute top-3 right-3">
                    <button className="bg-white/80 backdrop-blur-sm p-1.5 rounded-full hover:bg-white transition-colors">
                      <Heart className="w-4 h-4 text-red-500" />
                    </button>
                  </div>
                  <div className="absolute bottom-3 left-3">
                    <span className="bg-blue-500 text-white px-2 py-1 rounded text-xs font-medium">
                      {property.type}
                    </span>
                  </div>
                </div>
                <div className="p-3 md:p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-sm md:text-lg text-gray-800 flex-1">{property.title}</h3>
                    <span className="text-blue-600 font-bold text-sm md:text-base ml-2">{property.price}</span>
                  </div>
                  <div className="flex items-center text-gray-500 mb-2">
                    <MapPin className="w-3 h-3 md:w-4 md:h-4 mr-1 flex-shrink-0" />
                    <p className="text-xs md:text-sm truncate">{property.location}</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 text-xs md:text-sm">{property.area}</span>
                    <button className="bg-blue-500 text-white px-3 md:px-4 py-1.5 md:py-2 rounded-md font-medium hover:bg-blue-600 transition-colors text-xs md:text-sm">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Under Construction Projects */}
      <section className="py-6 md:py-8 bg-white">
        <div className="w-full px-3 md:px-6 lg:px-8">
          <h2 className="text-lg md:text-2xl font-bold text-center text-gray-800 mb-4 md:mb-6">Top Under Construction Projects</h2>

          <div className="relative rounded-lg overflow-hidden shadow-lg max-w-4xl mx-auto">
            <div className="h-60 md:h-80 relative">
              <img 
                src={underConstructionProject.image} 
                alt={underConstructionProject.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
              
              <div className="absolute bottom-4 left-4 md:left-6 text-white">
                <h3 className="text-lg md:text-xl font-bold">{underConstructionProject.title}</h3>
                <p className="text-blue-100 text-sm md:text-base">{underConstructionProject.subtitle}</p>
              </div>
              <div className="absolute bottom-4 right-4 md:right-6 text-right text-white">
                <div className="text-xl md:text-2xl font-bold">{underConstructionProject.price}</div>
                <div className="text-blue-100 text-sm md:text-base">{underConstructionProject.status}</div>
              </div>
              
              <div className="absolute top-4 right-4 md:right-6">
                <span className="bg-green-500 text-white px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-medium">
                  New Launch
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-6 md:py-8 bg-blue-50">
        <div className="w-full px-3 md:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-blue-600">NA +</div>
              <div className="text-gray-600 text-sm md:text-base">Properties</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-blue-600">NA +</div>
              <div className="text-gray-600 text-sm md:text-base">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-blue-600">NA +</div>
              <div className="text-gray-600 text-sm md:text-base">Locations</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-blue-600">24/7</div>
              <div className="text-gray-600 text-sm md:text-base">Support</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;