// Listings.js
import React ,{useEffect} from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Bed, Bath, Square, Heart } from 'lucide-react';

const Listings = () => {
  const properties = [
    {
      id: 1,
      title: "Modern Apartment in Koregaon Park",
      location: "Koregaon Park, Pune",
      price: "₹80,000",
      period: "/month",
      bedrooms: 2,
      bathrooms: 2,
      area: "1,200",
      images: [
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop"
      ],
      featured: true,
      description: "This stunning modern apartment features contemporary design with premium finishes throughout. Located in the heart of Koregaon Park, it offers easy access to restaurants, cafes, and shopping centers. The apartment boasts spacious rooms with large windows providing natural light, a fully equipped modern kitchen, and a beautiful balcony with city views.",
      amenities: ["WiFi", "Parking", "Gym", "Security"],
      owner: {
        name: "Rajesh Sharma",
        rating: 4.8,
        reviews: 24,
        phone: "+91 98765 43210",
        description: "Experienced property owner with over 10 years in real estate. Known for maintaining high-quality properties and excellent tenant relationships. Responsive to maintenance requests and ensures all amenities are well-maintained.",
        joinedDate: "2018"
      }
    },
    // Add other properties here
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Property Listings
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Discover your perfect rental home from our curated selection
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8 mt-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
              <select className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>All Locations</option>
                <option>Koregaon Park</option>
                <option>Baner</option>
                <option>Viman Nagar</option>
                <option>Camp</option>
                <option>Kothrud</option>
                <option>Hinjewadi</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Price Range</label>
              <select className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Any Price</option>
                <option>₹30,000 - ₹50,000</option>
                <option>₹50,000 - ₹80,000</option>
                <option>₹80,000+</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Bedrooms</label>
              <select className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Any</option>
                <option>1+</option>
                <option>2+</option>
                <option>3+</option>
              </select>
            </div>
            <div className="flex items-end">
              <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                Search
              </button>
            </div>
          </div>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((property) => (
            <div key={property.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <div className="relative">
                <img
                  src={property.images[0]}
                  alt={property.title}
                  className="w-full h-48 object-cover"
                />
                {property.featured && (
                  <div className="absolute top-3 left-3 bg-blue-600 text-white px-2 py-1 rounded text-xs font-medium">
                    Featured
                  </div>
                )}
                <button className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-sm hover:bg-gray-50 transition-colors">
                  <Heart className="h-4 w-4 text-gray-400" />
                </button>
              </div>

              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{property.title}</h3>
                <div className="flex items-center text-gray-500 mb-3">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span className="text-sm">{property.location}</span>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="text-2xl font-bold text-blue-600">
                    {property.price}
                    <span className="text-sm text-gray-500 font-normal">{property.period}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <Bed className="h-4 w-4 mr-1" />
                    <span>{property.bedrooms} bed</span>
                  </div>
                  <div className="flex items-center">
                    <Bath className="h-4 w-4 mr-1" />
                    <span>{property.bathrooms} bath</span>
                  </div>
                  <div className="flex items-center">
                    <Square className="h-4 w-4 mr-1" />
                    <span>{property.area} sqft</span>
                  </div>
                </div>

                <Link
                  to={`/property/${property.id}`}
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors block text-center"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-8">
          <button className="bg-white text-blue-600 border border-blue-600 px-6 py-2 rounded-lg hover:bg-blue-50 transition-colors">
            Load More Properties
          </button>
        </div>
      </div>
    </div>
  );
};

export default Listings;
