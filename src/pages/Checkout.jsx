import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [gst, setGst] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    // Retrieve the selected plan from localStorage
    const plan = JSON.parse(localStorage.getItem('selectedPlan'));
    if (!plan) {
      // Redirect to the subscription page if no plan is selected
      navigate('/subscription');
    } else {
      setSelectedPlan(plan);

      // Calculate GST (18%)
      const gstAmount = parseFloat(plan.price.replace(/[^0-9.-]+/g, '')) * 0.18;
      setGst(gstAmount);

      // Calculate total amount
      const total = parseFloat(plan.price.replace(/[^0-9.-]+/g, '')) + gstAmount;
      setTotalAmount(total);
    }
  }, [navigate]);

  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  const displayRazorpay = async () => {
    const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js');

    if (!res) {
      alert('Razorpay SDK failed to load. Are you online?');
      return;
    }

    const options = {
      key: 'YOUR_RAZORPAY_KEY', // Replace with your Razorpay key
      amount: totalAmount * 100, // Razorpay expects the amount in paise
      currency: 'INR',
      name: 'Your Company Name',
      description: `Payment for ${selectedPlan.name} plan`,
      image: 'https://your-company-logo-url',
      handler: function (response) {
        alert(`Payment successful! Payment ID: ${response.razorpay_payment_id}`);
        // You can redirect to a success page or update the database here
      },
      prefill: {
        name: 'Customer Name',
        email: 'customer@example.com',
        contact: '9999999999',
      },
      notes: {
        address: 'Razorpay Corporate Office',
      },
      theme: {
        color: '#3399cc',
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  if (!selectedPlan) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="max-w-3xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">Checkout</h1>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Selected Plan</h2>

            <div className="flex items-center justify-between bg-gray-50 rounded-xl p-6 mb-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900">{selectedPlan.name}</h3>
                <p className="text-gray-600">{selectedPlan.description}</p>
              </div>
              <div className="text-right">
                <p className="text-3xl font-bold text-gray-900">{selectedPlan.price}</p>
                <p className="text-gray-600">{selectedPlan.period}</p>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-6 mb-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-gray-600">Plan Amount</span>
                <span className="text-gray-900 font-medium">{selectedPlan.price}</span>
              </div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-gray-600">GST (18%)</span>
                <span className="text-gray-900 font-medium">₹{gst.toFixed(2)}</span>
              </div>
              <div className="flex items-center justify-between text-xl font-bold text-gray-900">
                <span>Total Amount</span>
                <span>₹{totalAmount.toFixed(2)}</span>
              </div>
            </div>

            <button
              onClick={displayRazorpay}
              className="w-full py-4 px-6 rounded-xl font-semibold text-white transition-all duration-300 transform hover:scale-105 bg-gradient-to-r from-blue-500 to-blue-600 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-opacity-30"
            >
              Pay Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
