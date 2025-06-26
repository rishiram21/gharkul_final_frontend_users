import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Bed, Bath, Square, Heart } from 'lucide-react';
import axios from 'axios';

const Listings = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);
  const [size] = useState(10);

  // Static images for properties
  const staticImages = [
    "https://images.unsplash.com/photo-1560518883-ce09059eeffa",
    "https://images.unsplash.com/photo-1560518883-ce09059eeffa",
    "https://images.unsplash.com/photo-1560518883-ce09059eeffa",
    "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?cs=srgb&dl=pexels-binyaminmellish-186077.jpg&fm=jpg"
  ];

  useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/properties/get`, {
          params: { page, size }
        });
        console.log('Fetched properties:', response.data.content);

        if (page === 0) {
          setProperties(response.data.content);
        } else {
          setProperties(prevProperties => {
            const newProperties = response.data.content.filter(newProp =>
              !prevProperties.some(existingProp => existingProp.propertyId === newProp.propertyId)
            );
            return [...prevProperties, ...newProperties];
          });
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching properties:", error.response ? error.response.data : error.message);
        setLoading(false);
      }
    };

    fetchProperties();
  }, [page, size]);

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  if (loading && page === 0) {
    return <div className="text-center py-10">Loading...</div>;
  }

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.length > 0 ? (
            properties.map((property, index) => (
              <div key={property.propertyId} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                <div className="relative">
                  <img
                    src={staticImages[index % staticImages.length]}
                    alt={property.propertyName}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-2 right-2 bg-white p-2 rounded-full shadow">
                    <Heart className="h-5 w-5 text-gray-600" />
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{property.propertyName}</h3>
                  <div className="flex items-center text-gray-500 mb-3">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span className="text-sm">{property.address.city}, {property.address.area}</span>
                  </div>
                  <div className="text-xl font-bold text-blue-600 mb-4">
                    ₹{property.expectedPrice} <span className="text-sm text-gray-500 font-normal">/month</span>
                  </div>
                  <div className="flex justify-between text-sm text-gray-600 mb-4">
                    <div className="flex items-center">
                      <Bed className="h-4 w-4 mr-1" />
                      <span>{property.bhkType.replace('_', ' ')}</span>
                    </div>
                    <div className="flex items-center">
                      <Square className="h-4 w-4 mr-1" />
                      <span>{property.totalBuildUpArea} sqft</span>
                    </div>
                  </div>
                 
                  <Link
                    to={`/property/1`}
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors block text-center"
                  >
                    View Details
                  </Link>
                 
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-10">No properties found</div>
          )}
        </div>
        <div className="text-center mt-8">
          <button
            onClick={handleLoadMore}
            className="bg-white text-blue-600 border border-blue-600 px-6 py-2 rounded-lg hover:bg-blue-50 transition-colors"
          >
            Load More Properties
          </button>
        </div>
      </div>
    </div>
  );
};

export default Listings;
