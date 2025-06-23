import React, { useState } from 'react';

const PostProperty = () => {
  // Basic state
  const [city, setCity] = useState('');
  const [propertyType, setPropertyType] = useState('');
  const [subPropertyType, setSubPropertyType] = useState('');
  const [transactionType, setTransactionType] = useState('');

  // Property Details
  const [propertyName, setPropertyName] = useState('');
  const [apartmentType, setApartmentType] = useState('');
  const [bhkType, setBhkType] = useState('');
  const [floor, setFloor] = useState('');
  const [totalFloor, setTotalFloor] = useState('');
  const [propertyAge, setPropertyAge] = useState('');
  const [builtUpArea, setBuiltUpArea] = useState('');
  const [carpetArea, setCarpetArea] = useState('');

  // Location Details
  const [area, setArea] = useState('');
  const [state, setState] = useState('');
  const [pincode, setPincode] = useState('');

  // Rental/Purchase Details
  const [expectedRent, setExpectedRent] = useState('');
  const [expectedDeposit, setExpectedDeposit] = useState('');
  const [monthlyMaintenance, setMonthlyMaintenance] = useState('');
  const [availableFrom, setAvailableFrom] = useState('');
  const [preferredTenants, setPreferredTenants] = useState('');
  const [furnishing, setFurnishing] = useState('');
  const [expectedPrice, setExpectedPrice] = useState('');
  const [description, setDescription] = useState('');

  // PG Specific
  const [roomType, setRoomType] = useState('');
  const [pgGender, setPgGender] = useState('');
  const [preferredGuests, setPreferredGuests] = useState('');
  const [gateClosingTime, setGateClosingTime] = useState('');

  // Commercial Specific
  const [buildingType, setBuildingType] = useState('');
  const [floorType, setFloorType] = useState('');

  // Land/Plot Specific
  const [plotArea, setPlotArea] = useState('');
  const [length, setLength] = useState('');
  const [width, setWidth] = useState('');
  const [boundaryWall, setBoundaryWall] = useState('');

  // Amenities
  const [parking, setParking] = useState('');
  const [bathrooms, setBathrooms] = useState('');
  const [balconies, setBalconies] = useState('');
  const [amenities, setAmenities] = useState({
    gym: false,
    garden: false,
    park: false,
    swimmingPool: false,
    gateSecurity: false,
    tv: false,
    ac: false,
    geyser: false,
    cupboard: false,
    attachedBathroom: false,
    powerBackup: false,
    lift: false,
    washroom: false,
    security: false,
    wifi: false,
    waterSupply: false,
    electricConnection: false,
  });

  const cities = [
    'Mumbai', 'Delhi', 'Bangalore', 'Hyderabad', 'Chennai', 'Kolkata', 
    'Pune', 'Ahmedabad', 'Jaipur', 'Surat', 'Lucknow', 'Kanpur'
  ];

  const handleAmenityChange = (amenity) => {
    setAmenities({
      ...amenities,
      [amenity]: !amenities[amenity],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      city,
      propertyType,
      subPropertyType,
      transactionType,
      propertyName,
      apartmentType,
      bhkType,
      floor,
      totalFloor,
      propertyAge,
      builtUpArea,
      carpetArea,
      area,
      state,
      pincode,
      expectedRent,
      expectedDeposit,
      monthlyMaintenance,
      availableFrom,
      preferredTenants,
      furnishing,
      expectedPrice,
      description,
      roomType,
      pgGender,
      preferredGuests,
      gateClosingTime,
      buildingType,
      floorType,
      plotArea,
      length,
      width,
      boundaryWall,
      parking,
      bathrooms,
      balconies,
      amenities,
    };
    console.log(formData);
    alert('Property posted successfully!');
  };

  const renderPropertyPhotos = () => (
    <div className="mb-6">
      <h2 className="text-xl font-semibold mb-4 flex items-center">
        <span className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center mr-3 text-indigo-600 font-bold text-sm">1</span>
        Property Photos
      </h2>
      <div className="border-2 border-dashed border-gray-300 rounded-xl p-4 text-center">
        <p className="mb-2">
          {propertyType === 'Residential' && (transactionType === 'Rent' || transactionType === 'Buy') 
            ? 'Upload 1-4 photos' 
            : 'Upload up to 10 photos'}
        </p>
        <button type="button" className="bg-indigo-600 text-white px-4 py-2 rounded-xl hover:bg-indigo-700 transition-colors">
          Upload Media
        </button>
      </div>
    </div>
  );

  const renderBasicSelection = () => (
    <div className="mb-6">
      <h2 className="text-xl font-semibold mb-4">Basic Information</h2>
      
      {/* City Dropdown */}
      <div className="mb-4">
        <select
          className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        >
          <option value="">Select City</option>
          {cities.map((cityName) => (
            <option key={cityName} value={cityName}>{cityName}</option>
          ))}
        </select>
      </div>

      {/* Property Type Buttons */}
      <div className="flex flex-wrap gap-3 mb-4">
        {['Residential', 'Commercial', 'Land/Plot'].map((type) => (
          <button
            key={type}
            type="button"
            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
              propertyType === type
                ? 'bg-indigo-600 text-white shadow-lg transform scale-105'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-md'
            }`}
            onClick={() => {
              setPropertyType(type);
              setSubPropertyType('');
              setTransactionType('');
            }}
          >
            {type}
          </button>
        ))}
      </div>

      {/* Transaction Type Buttons */}
      {propertyType && (
        <div className="flex flex-wrap gap-3 mb-4">
          {propertyType === 'Residential' && ['Rent', 'Buy', 'PG/Hostel'].map((type) => (
            <button
              key={type}
              type="button"
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                transactionType === type
                  ? 'bg-indigo-600 text-white shadow-lg transform scale-105'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-md'
              }`}
              onClick={() => setTransactionType(type)}
            >
              {type}
            </button>
          ))}
          {propertyType === 'Commercial' && ['Rent', 'Buy'].map((type) => (
            <button
              key={type}
              type="button"
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                transactionType === type
                  ? 'bg-indigo-600 text-white shadow-lg transform scale-105'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-md'
              }`}
              onClick={() => setTransactionType(type)}
            >
              {type}
            </button>
          ))}
          {propertyType === 'Land/Plot' && (
            <button
              type="button"
              className="px-4 py-2 rounded-xl text-sm font-medium bg-indigo-600 text-white shadow-lg transform scale-105"
              onClick={() => setTransactionType('Buy')}
            >
              Buy
            </button>
          )}
        </div>
      )}
    </div>
  );

  const renderPropertyDetails = () => {
    if (!propertyType || !transactionType) return null;

    return (
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-4 flex items-center">
          <span className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center mr-3 text-indigo-600 font-bold text-sm">2</span>
          Property Details
        </h2>

        {/* Residential Rent/Buy */}
        {propertyType === 'Residential' && (transactionType === 'Rent' || transactionType === 'Buy') && (
          <>
            <input
              type="text"
              placeholder="Property Name"
              className="w-full p-3 border border-gray-300 rounded-xl mb-3 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
              value={propertyName}
              onChange={(e) => setPropertyName(e.target.value)}
            />
            
            <div className="flex flex-wrap gap-3 mb-3">
              {['Apartment', 'Individual House/Villa'].map((type) => (
                <button
                  key={type}
                  type="button"
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                    apartmentType === type
                      ? 'bg-indigo-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  onClick={() => setApartmentType(type)}
                >
                  {type}
                </button>
              ))}
            </div>

            <div className="flex space-x-3 mb-3">
              <select
                className="w-1/3 p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                value={bhkType}
                onChange={(e) => setBhkType(e.target.value)}
              >
                <option value="">BHK Type</option>
                <option value="1BHK">1 BHK</option>
                <option value="2BHK">2 BHK</option>
                <option value="3BHK">3 BHK</option>
                <option value="4BHK">4 BHK</option>
                <option value="5BHK">5 BHK</option>
              </select>
              
              <select
                className="w-1/3 p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                value={floor}
                onChange={(e) => setFloor(e.target.value)}
              >
                <option value="">Floor</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>

              <select
                className="w-1/3 p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                value={totalFloor}
                onChange={(e) => setTotalFloor(e.target.value)}
              >
                <option value="">Total Floors</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>

            <select
              className="w-full p-3 border border-gray-300 rounded-xl mb-3 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
              value={propertyAge}
              onChange={(e) => setPropertyAge(e.target.value)}
            >
              <option value="">Property Age</option>
              <option value="<1">Less than 1 year</option>
              <option value="3-5">3 to 5 years</option>
              <option value="5-10">5 to 10 years</option>
              <option value=">10">More than 10 years</option>
            </select>

            <div className="flex space-x-3 mb-3">
              <input
                type="text"
                placeholder="Built-up Area (sq.ft)"
                className="w-1/2 p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                value={builtUpArea}
                onChange={(e) => setBuiltUpArea(e.target.value)}
              />
              <input
                type="text"
                placeholder="Carpet Area (sq.ft)"
                className="w-1/2 p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                value={carpetArea}
                onChange={(e) => setCarpetArea(e.target.value)}
              />
            </div>
          </>
        )}

        {/* PG/Hostel */}
        {propertyType === 'Residential' && transactionType === 'PG/Hostel' && (
          <>
            <input
              type="text"
              placeholder="Property Name"
              className="w-full p-3 border border-gray-300 rounded-xl mb-3 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
              value={propertyName}
              onChange={(e) => setPropertyName(e.target.value)}
            />

            <select
              className="w-full p-3 border border-gray-300 rounded-xl mb-3 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
              value={roomType}
              onChange={(e) => setRoomType(e.target.value)}
            >
              <option value="">Room Type in PG</option>
              <option value="Single">Single</option>
              <option value="Double">Double</option>
              <option value="Three">Three</option>
              <option value="Four">Four</option>
            </select>

            <div className="flex space-x-3 mb-3">
              <input
                type="text"
                placeholder="Built-up Area (sq.ft)"
                className="w-1/2 p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                value={builtUpArea}
                onChange={(e) => setBuiltUpArea(e.target.value)}
              />
              <input
                type="text"
                placeholder="Carpet Area (sq.ft)"
                className="w-1/2 p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                value={carpetArea}
                onChange={(e) => setCarpetArea(e.target.value)}
              />
            </div>
          </>
        )}

        {/* Commercial */}
        {propertyType === 'Commercial' && (
          <>
            <div className="flex flex-wrap gap-2 mb-3">
              {['Office Space', 'Shop', 'Showroom', 'Godown', 'Industrial Building', 'Other'].map((type) => (
                <button
                  key={type}
                  type="button"
                  className={`px-3 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                    subPropertyType === type
                      ? 'bg-indigo-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  onClick={() => setSubPropertyType(type)}
                >
                  {type}
                </button>
              ))}
            </div>

            <div className="flex flex-wrap gap-2 mb-3">
              {['Independent House', 'Business Park', 'Mall', 'Standalone Building'].map((type) => (
                <button
                  key={type}
                  type="button"
                  className={`px-3 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                    buildingType === type
                      ? 'bg-indigo-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  onClick={() => setBuildingType(type)}
                >
                  {type}
                </button>
              ))}
            </div>

            <select
              className="w-full p-3 border border-gray-300 rounded-xl mb-3 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
              value={propertyAge}
              onChange={(e) => setPropertyAge(e.target.value)}
            >
              <option value="">Age of Property</option>
              <option value="<1">Less than 1 year</option>
              <option value="3-5">3 to 5 years</option>
              <option value="5-10">5 to 10 years</option>
              <option value=">10">More than 10 years</option>
            </select>

            <div className="flex space-x-3 mb-3">
              <select
                className="w-1/2 p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                value={floor}
                onChange={(e) => setFloor(e.target.value)}
              >
                <option value="">Floor</option>
                <option value="Lower Basement">Lower Basement</option>
                <option value="Ground">Ground</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>

              <select
                className="w-1/2 p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                value={floorType}
                onChange={(e) => setFloorType(e.target.value)}
              >
                <option value="">Floor Type</option>
                <option value="Full Building">Full Building</option>
                <option value="Partial">Partial</option>
              </select>
            </div>
          </>
        )}

        {/* Land/Plot */}
        {propertyType === 'Land/Plot' && (
          <>
            <input
              type="text"
              placeholder="Plot Area (sq.ft)"
              className="w-full p-3 border border-gray-300 rounded-xl mb-3 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
              value={plotArea}
              onChange={(e) => setPlotArea(e.target.value)}
            />

            <div className="flex space-x-3 mb-3">
              <input
                type="text"
                placeholder="Length (ft)"
                className="w-1/2 p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                value={length}
                onChange={(e) => setLength(e.target.value)}
              />
              <input
                type="text"
                placeholder="Width (ft)"
                className="w-1/2 p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                value={width}
                onChange={(e) => setWidth(e.target.value)}
              />
            </div>

            <div className="flex gap-3 mb-3">
              {['Yes', 'No'].map((option) => (
                <button
                  key={option}
                  type="button"
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                    boundaryWall === option
                      ? 'bg-indigo-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  onClick={() => setBoundaryWall(option)}
                >
                  Boundary Wall: {option}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    );
  };

  const renderLocationDetails = () => {
    if (!propertyType || !transactionType) return null;

    return (
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-4 flex items-center">
          <span className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center mr-3 text-indigo-600 font-bold text-sm">3</span>
          Location Details
        </h2>

        <input
          type="text"
          placeholder="Area"
          className="w-full p-3 border border-gray-300 rounded-xl mb-3 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
          value={area}
          onChange={(e) => setArea(e.target.value)}
        />

        <div className="flex space-x-3 mb-3">
          <input
            type="text"
            placeholder="State"
            className="w-1/2 p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
            value={state}
            onChange={(e) => setState(e.target.value)}
          />
          <input
            type="text"
            placeholder="Pin Code"
            className="w-1/2 p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
            value={pincode}
            onChange={(e) => setPincode(e.target.value)}
          />
        </div>
      </div>
    );
  };

  const renderPricingDetails = () => {
    if (!propertyType || !transactionType) return null;

    return (
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-4 flex items-center">
          <span className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center mr-3 text-indigo-600 font-bold text-sm">4</span>
          {propertyType === 'Residential' && transactionType === 'Rent' && 'Rental Details'}
          {propertyType === 'Residential' && transactionType === 'Buy' && 'Resale Details'}
          {propertyType === 'Residential' && transactionType === 'PG/Hostel' && 'PG Details'}
          {propertyType === 'Commercial' && 'Rental Details'}
          {propertyType === 'Land/Plot' && 'Resale Details'}
        </h2>

        {/* Residential Rent */}
        {propertyType === 'Residential' && transactionType === 'Rent' && (
          <>
            <p className="text-gray-600 mb-3">Property Available for rent/lease</p>
            
            <div className="flex space-x-3 mb-3">
              <input
                type="text"
                placeholder="Expected Rent (INR)"
                className="w-1/2 p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                value={expectedRent}
                onChange={(e) => setExpectedRent(e.target.value)}
              />
              <input
                type="text"
                placeholder="Expected Deposit (INR)"
                className="w-1/2 p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                value={expectedDeposit}
                onChange={(e) => setExpectedDeposit(e.target.value)}
              />
            </div>

            <input
              type="text"
              placeholder="Monthly Maintenance (INR)"
              className="w-full p-3 border border-gray-300 rounded-xl mb-3 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
              value={monthlyMaintenance}
              onChange={(e) => setMonthlyMaintenance(e.target.value)}
            />

            <input
              type="date"
              placeholder="Available From"
              className="w-full p-3 border border-gray-300 rounded-xl mb-3 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
              value={availableFrom}
              onChange={(e) => setAvailableFrom(e.target.value)}
            />

            <div className="flex flex-wrap gap-2 mb-3">
              <span className="text-sm text-gray-600 w-full mb-2">Preferred Tenants:</span>
              {['Anyone', 'Family', 'Bachelor Female', 'Bachelor Male', 'Company'].map((tenant) => (
                <button
                  key={tenant}
                  type="button"
                  className={`px-3 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                    preferredTenants === tenant
                      ? 'bg-indigo-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  onClick={() => setPreferredTenants(tenant)}
                >
                  {tenant}
                </button>
              ))}
            </div>

            <div className="flex flex-wrap gap-2 mb-3">
              <span className="text-sm text-gray-600 w-full mb-2">Furnishing:</span>
              {['Fully', 'Semi', 'Un'].map((furnish) => (
                <button
                  key={furnish}
                  type="button"
                  className={`px-3 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                    furnishing === furnish
                      ? 'bg-indigo-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  onClick={() => setFurnishing(furnish)}
                >
                  {furnish}
                </button>
              ))}
            </div>

            <textarea
              placeholder="Description"
              className="w-full p-3 border border-gray-300 rounded-xl mb-3 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
              rows={4}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </>
        )}

        {/* Residential Buy */}
        {propertyType === 'Residential' && transactionType === 'Buy' && (
          <>
            <input
              type="text"
              placeholder="Expected Price (INR)"
              className="w-full p-3 border border-gray-300 rounded-xl mb-3 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
              value={expectedPrice}
              onChange={(e) => setExpectedPrice(e.target.value)}
            />

            <input
              type="date"
              placeholder="Available From"
              className="w-full p-3 border border-gray-300 rounded-xl mb-3 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
              value={availableFrom}
              onChange={(e) => setAvailableFrom(e.target.value)}
            />

            <textarea
              placeholder="Description"
              className="w-full p-3 border border-gray-300 rounded-xl mb-3 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
              rows={4}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </>
        )}

        {/* PG/Hostel */}
        {propertyType === 'Residential' && transactionType === 'PG/Hostel' && (
          <>
            <div className="flex space-x-3 mb-3">
              <input
                type="text"
                placeholder="Expected Rent (INR)"
                className="w-1/2 p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                value={expectedRent}
                onChange={(e) => setExpectedRent(e.target.value)}
              />
              <input
                type="text"
                placeholder="Expected Deposit (INR)"
                className="w-1/2 p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                value={expectedDeposit}
                onChange={(e) => setExpectedDeposit(e.target.value)}
              />
            </div>
                        <div className="flex flex-wrap gap-2 mb-3">
              <span className="text-sm text-gray-600 w-full mb-2">Amenities:</span>
              {['TV', 'AC', 'Geyser', 'Cupboard', 'Attached Bathroom'].map((amenity) => (
                <button
                  key={amenity}
                  type="button"
                  className={`px-3 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                    amenities[amenity.toLowerCase().replace(' ', '')]
                      ? 'bg-indigo-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  onClick={() => handleAmenityChange(amenity.toLowerCase().replace(' ', ''))}
                >
                  {amenity}
                </button>
              ))}
            </div>
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="text-sm text-gray-600 w-full mb-2">PG Details:</span>
              {['Male', 'Female', 'Others'].map((gender) => (
                <button
                  key={gender}
                  type="button"
                  className={`px-3 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                    pgGender === gender
                      ? 'bg-indigo-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  onClick={() => setPgGender(gender)}
                >
                  {gender}
                </button>
              ))}
            </div>
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="text-sm text-gray-600 w-full mb-2">Preferred Guests:</span>
              {['Working', 'Student', 'Both'].map((guest) => (
                <button
                  key={guest}
                  type="button"
                  className={`px-3 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                    preferredGuests === guest
                      ? 'bg-indigo-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  onClick={() => setPreferredGuests(guest)}
                >
                  {guest}
                </button>
              ))}
            </div>
            <input
              type="date"
              placeholder="Available From"
              className="w-full p-3 border border-gray-300 rounded-xl mb-3 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
              value={availableFrom}
              onChange={(e) => setAvailableFrom(e.target.value)}
            />
            <input
              type="time"
              placeholder="Gate Closing Time"
              className="w-full p-3 border border-gray-300 rounded-xl mb-3 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
              value={gateClosingTime}
              onChange={(e) => setGateClosingTime(e.target.value)}
            />
          </>
        )}
        {/* Commercial */}
        {propertyType === 'Commercial' && (
          <>
            <div className="flex space-x-3 mb-3">
              <input
                type="text"
                placeholder="Expected Rent (INR)"
                className="w-1/2 p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                value={expectedRent}
                onChange={(e) => setExpectedRent(e.target.value)}
              />
              <input
                type="text"
                placeholder="Expected Deposit (INR)"
                className="w-1/2 p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                value={expectedDeposit}
                onChange={(e) => setExpectedDeposit(e.target.value)}
              />
            </div>
            <input
              type="date"
              placeholder="Available From"
              className="w-full p-3 border border-gray-300 rounded-xl mb-3 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
              value={availableFrom}
              onChange={(e) => setAvailableFrom(e.target.value)}
            />
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="text-sm text-gray-600 w-full mb-2">Amenities:</span>
              {['Power Backup', 'Lift', 'Parking', 'Washroom', 'Security', 'Wifi'].map((amenity) => (
                <button
                  key={amenity}
                  type="button"
                  className={`px-3 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                    amenities[amenity.toLowerCase().replace(' ', '')]
                      ? 'bg-indigo-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  onClick={() => handleAmenityChange(amenity.toLowerCase().replace(' ', ''))}
                >
                  {amenity}
                </button>
              ))}
            </div>
          </>
        )}
        {/* Land/Plot */}
        {propertyType === 'Land/Plot' && (
          <>
            <input
              type="text"
              placeholder="Expected Price (INR)"
              className="w-full p-3 border border-gray-300 rounded-xl mb-3 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
              value={expectedPrice}
              onChange={(e) => setExpectedPrice(e.target.value)}
            />
            <input
              type="date"
              placeholder="Available From"
              className="w-full p-3 border border-gray-300 rounded-xl mb-3 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
              value={availableFrom}
              onChange={(e) => setAvailableFrom(e.target.value)}
            />
            <textarea
              placeholder="Description"
              className="w-full p-3 border border-gray-300 rounded-xl mb-3 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
              rows={4}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="text-sm text-gray-600 w-full mb-2">Amenities:</span>
              {['Water Supply', 'Electric Connection'].map((amenity) => (
                <button
                  key={amenity}
                  type="button"
                  className={`px-3 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                    amenities[amenity.toLowerCase().replace(' ', '')]
                      ? 'bg-indigo-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  onClick={() => handleAmenityChange(amenity.toLowerCase().replace(' ', ''))}
                >
                  {amenity}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    );
  };

  const renderAmenities = () => {
    if (!propertyType || !transactionType) return null;
    return (
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-4 flex items-center">
          <span className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center mr-3 text-indigo-600 font-bold text-sm">5</span>
          Amenities
        </h2>
        <div className="flex flex-wrap gap-3">
          {Object.keys(amenities).map((amenity) => (
            <button
              key={amenity}
              type="button"
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                amenities[amenity]
                  ? 'bg-indigo-600 text-white shadow-lg transform scale-105'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-md'
              }`}
              onClick={() => handleAmenityChange(amenity)}
            >
              {amenity.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase())}
            </button>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-6 px-4 lg:py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-2xl lg:text-4xl font-bold text-gray-900 mb-2">
            Post Your Property
          </h1>
          <p className="text-gray-600 text-sm lg:text-base">
            Fill in the details to list your property
          </p>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
          <form onSubmit={handleSubmit}>
            {renderPropertyPhotos()}
            {renderBasicSelection()}
            {renderPropertyDetails()}
            {renderLocationDetails()}
            {renderPricingDetails()}
            {renderAmenities()}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-4 px-6 rounded-xl text-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              🏠 Post My Property
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PostProperty;
