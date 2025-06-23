import React from 'react';

const UserProfile = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">User Profile</h1>

        <div className="bg-white shadow rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Dashboard</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div className="bg-blue-500 text-white p-4 rounded-lg">Account</div>
            <div className="bg-green-500 text-white p-4 rounded-lg">Subscription</div>
            <div className="bg-yellow-500 text-white p-4 rounded-lg">Properties</div>
            <div className="bg-purple-500 text-white p-4 rounded-lg">Inquiries</div>
            <div className="bg-red-500 text-white p-4 rounded-lg">Interests</div>
          </div>
        </div>

        <div className="bg-white shadow rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Account Section</h2>
          <div className="mb-4">
            <h3 className="text-xl font-medium">Personal Details</h3>
            <p>Full Name: John Doe</p>
            <p>Email: john.doe@example.com</p>
            <p>Phone: +1234567890</p>
          </div>
        </div>

        <div className="bg-white shadow rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Subscriptions</h2>
          <p>Active Subscriptions: Premium Plan</p>
          <p>Status: Active</p>
        </div>

        <div className="bg-white shadow rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">My Properties</h2>
          <p>Property 1: 123 Main St, City, Country</p>
          <p>Property 2: 456 Another St, City, Country</p>
        </div>

        <div className="bg-white shadow rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Inquiries</h2>
          <p>Inquiry 1: Subject of Inquiry 1</p>
          <p>Inquiry 2: Subject of Inquiry 2</p>
        </div>

        <div className="bg-white shadow rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">My Interests</h2>
          <p>Interest 1: Hiking</p>
          <p>Interest 2: Reading</p>
        </div>

        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Remove Account</h2>
          <button className="bg-red-500 text-white px-4 py-2 rounded-lg">Remove Account</button>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
