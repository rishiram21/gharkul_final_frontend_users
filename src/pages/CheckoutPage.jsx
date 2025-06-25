import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { X, CreditCard, Lock, ArrowLeft, CheckCircle } from 'lucide-react';

const CheckoutPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [checkoutData, setCheckoutData] = useState({
    email: '',
    name: '',
    phone: '',
    paymentMethod: 'card'
  });
  const [isProcessing, setIsProcessing] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  useEffect(() => {
    if (location.state && location.state.selectedPlan) {
      setSelectedPlan(location.state.selectedPlan);
    } else {
      navigate('/subscription');
    }
  }, [location, navigate]);

  const handleInputChange = (field, value) => {
    setCheckoutData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleCheckoutSubmit = async (e) => {
    e.preventDefault();
    setIsProcessing(true);

    try {
      // Simulate payment processing with an animation
      await new Promise(resolve => setTimeout(resolve, 3000)); // Simulate processing delay
      setPaymentSuccess(true);
    } catch (error) {
      alert('Payment failed. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  if (!selectedPlan) {
    return <div>Loading...</div>;
  }

  if (paymentSuccess) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center">
        <div className="bg-white rounded-xl shadow-lg p-8 text-center max-w-md">
          <CheckCircle className="text-green-500 mx-auto mb-4" size={64} />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Payment Successful!</h2>
          <p className="text-gray-600 mb-6">Thank you for your purchase. Your payment has been processed successfully.</p>
          <button
            onClick={() => navigate('/subscription')}
            className="w-full py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Back to Subscription
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="max-w-4xl mx-auto p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-900">Checkout</h1>
          <button
            onClick={() => navigate('/subscription')}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X size={24} className="text-gray-500" />
          </button>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <div className="flex items-center gap-4 mb-6">
            <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${selectedPlan.color} flex items-center justify-center`}>
              {/* You can add a static icon or map it based on planId */}
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900">{selectedPlan.name} Plan</h3>
              <p className="text-sm text-gray-600">{selectedPlan.description}</p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-gray-900">{selectedPlan.price}</div>
              <div className="text-sm text-gray-600">{selectedPlan.period}</div>
            </div>
          </div>

          <form onSubmit={handleCheckoutSubmit} className="space-y-6">
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Payment Method</h4>
              <div className="space-y-2">
                <label className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="card"
                    checked={checkoutData.paymentMethod === 'card'}
                    onChange={(e) => handleInputChange('paymentMethod', e.target.value)}
                    className="text-blue-600"
                  />
                  <CreditCard size={20} className="text-gray-600" />
                  <span className="font-medium">Credit/Debit Card</span>
                </label>
                <label className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="upi"
                    checked={checkoutData.paymentMethod === 'upi'}
                    onChange={(e) => handleInputChange('paymentMethod', e.target.value)}
                    className="text-blue-600"
                  />
                  <div className="w-6 h-6 bg-orange-500 rounded text-white text-xs flex items-center justify-center font-bold">
                    U
                  </div>
                  <span className="font-medium">UPI</span>
                </label>
                <label className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="netbanking"
                    checked={checkoutData.paymentMethod === 'netbanking'}
                    onChange={(e) => handleInputChange('paymentMethod', e.target.value)}
                    className="text-blue-600"
                  />
                  <div className="w-6 h-6 bg-blue-500 rounded text-white text-xs flex items-center justify-center font-bold">
                    NB
                  </div>
                  <span className="font-medium">Net Banking</span>
                </label>
              </div>
            </div>

            <div className="border-t pt-4 mt-4">
              <h4 className="font-semibold text-gray-900 mb-4">Order Summary</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Plan Cost</span>
                  <span className="font-medium">{selectedPlan.price}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">GST (18%)</span>
                  <span className="font-medium">₹{Math.round(parseInt(selectedPlan.price.replace('₹', '').replace(',', '')) * 0.18)}</span>
                </div>
                <div className="border-t pt-2 mt-2 flex justify-between text-lg font-bold">
                  <span>Total Amount</span>
                  <span>₹{parseInt(selectedPlan.price.replace('₹', '').replace(',', '')) + Math.round(parseInt(selectedPlan.price.replace('₹', '').replace(',', '')) * 0.18)}</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 bg-green-50 p-4 rounded-lg mt-6">
              <Lock size={16} className="text-green-600" />
              <span className="text-sm text-green-700">
                Your payment information is secure and encrypted
              </span>
            </div>

            <div className="flex gap-3 mt-6">
              <button
                type="button"
                onClick={() => navigate('/subscription')}
                className="flex-1 px-4 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors"
              >
                <ArrowLeft size={16} className="inline mr-2" />
                Back
              </button>
              <button
                type="submit"
                disabled={isProcessing}
                className="flex-1 px-4 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isProcessing ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-6 h-6 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                    Processing Payment...
                  </div>
                ) : (
                  `Pay ₹${parseInt(selectedPlan.price.replace('₹', '').replace(',', '')) + Math.round(parseInt(selectedPlan.price.replace('₹', '').replace(',', '')) * 0.18)}`
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;




// import React, { useState, useEffect } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import { X, CreditCard, Lock, ArrowLeft, CheckCircle } from 'lucide-react';
// import axios from 'axios'; // Import axios for making HTTP requests

// const CheckoutPage = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const [checkoutData, setCheckoutData] = useState({
//     email: '',
//     name: '',
//     phone: '',
//     paymentMethod: 'card'
//   });
//   const [isProcessing, setIsProcessing] = useState(false);
//   const [selectedPlan, setSelectedPlan] = useState(null);
//   const [paymentSuccess, setPaymentSuccess] = useState(false);

//   useEffect(() => {
//     if (location.state && location.state.selectedPlan) {
//       setSelectedPlan(location.state.selectedPlan);
//     } else {
//       navigate('/subscription');
//     }
//   }, [location, navigate]);

//   const handleInputChange = (field, value) => {
//     setCheckoutData(prev => ({
//       ...prev,
//       [field]: value
//     }));
//   };

//   // const loadScript = (src) => {
//   //   return new Promise((resolve) => {
//   //     const script = document.createElement('script');
//   //     script.src = src;
//   //     script.onload = () => {
//   //       resolve(true);
//   //     };
//   //     script.onerror = () => {
//   //       resolve(false);
//   //     };
//   //     document.body.appendChild(script);
//   //   });
//   // };

//   // const createOrder = async (amount) => {
//   //   try {
//   //     const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/api/payment/create-order`, {
//   //       amount: amount,
//   //       currency: 'INR'
//   //     });
//   //     return response.data.orderId; // Assuming your backend returns the order ID
//   //   } catch (error) {
//   //     console.error('Error creating order:', error);
//   //     return null;
//   //   }
//   // };

//   const createOrder = async (amount) => {
//   try {
//     const token = localStorage.getItem('authToken'); // Assuming you store the token in localStorage
//     const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/api/payment/create-order`, {
//       amount: amount,
//       currency: 'INR'
//     }, {
//       headers: {
//         'Authorization': `Bearer ${token}` // Include the token in the Authorization header
//       }
//     });
//     return response.data.orderId; // Assuming your backend returns the order ID
//   } catch (error) {
//     console.error('Error creating order:', error);
//     return null;
//   }
// };


//   const verifyPayment = async (razorpayPaymentId, razorpayOrderId, razorpaySignature) => {
//     try {
//       const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/api/payment/verify`, {
//         razorpayPaymentId,
//         razorpayOrderId,
//         razorpaySignature,
//         userId: 2, // Replace with actual user ID
//         packageId: selectedPlan.planId
//       });
//       return response.data.success; // Assuming your backend returns a success status
//     } catch (error) {
//       console.error('Error verifying payment:', error);
//       return false;
//     }
//   };

//   // const displayRazorpay = async (amount) => {
//   //   const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js');

//   //   if (!res) {
//   //     alert('Razorpay SDK failed to load. Are you online?');
//   //     return;
//   //   }

//   //   const orderId = await createOrder(amount);
//   //   if (!orderId) {
//   //     alert('Failed to create order.');
//   //     return;
//   //   }

//   //   const options = {
//   //     key: 'YOUR_RAZORPAY_KEY', // Replace with your Razorpay key
//   //     amount: amount * 100, // Razorpay expects amount in paise
//   //     currency: 'INR',
//   //     name: 'Your Company Name',
//   //     description: `Payment for ${selectedPlan.name} Plan`,
//   //     image: 'https://your-company-logo-url.com/logo.png', // Replace with your company logo
//   //     order_id: orderId, // Use the order ID created on your backend
//   //     handler: async function (response) {
//   //       const isVerified = await verifyPayment(response.razorpay_payment_id, response.razorpay_order_id, response.razorpay_signature);
//   //       if (isVerified) {
//   //         setPaymentSuccess(true);
//   //       } else {
//   //         alert('Payment verification failed!');
//   //       }
//   //     },
//   //     prefill: {
//   //       name: checkoutData.name,
//   //       email: checkoutData.email,
//   //       contact: checkoutData.phone
//   //     },
//   //     theme: {
//   //       color: '#61dafb'
//   //     }
//   //   };

//   //   const paymentObject = new window.Razorpay(options);
//   //   paymentObject.open();
//   // };

//   const loadScript = (src) => {
//   return new Promise((resolve) => {
//     const script = document.createElement('script');
//     script.src = src;
//     script.onload = () => {
//       resolve(true);
//     };
//     script.onerror = () => {
//       resolve(false);
//     };
//     document.body.appendChild(script);
//   });
// };

// const displayRazorpay = async (amount, orderId) => {
//   const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js');

//   if (!res) {
//     alert('Razorpay SDK failed to load. Are you online?');
//     return;
//   }

//   const options = {
//     key: 'YOUR_RAZORPAY_KEY', // Replace with your actual Razorpay key
//     amount: amount,
//     currency: 'INR',
//     name: 'Your Company Name',
//     description: 'Payment for your order',
//     image: 'https://your-company-logo-url.com/logo.png',
//     order_id: orderId,
//     handler: function (response) {
//       // Handle successful payment
//       console.log(response);
//       alert('Payment successful!');
//     },
//     prefill: {
//       name: 'Customer Name',
//       email: 'customer@example.com',
//       contact: '9999999999'
//     },
//     notes: {
//       address: 'Razorpay Corporate Office'
//     },
//     theme: {
//       color: '#F37254'
//     }
//   };

//   const paymentObject = new window.Razorpay(options);
//   paymentObject.open();
// };


//   const handleCheckoutSubmit = async (e) => {
//     e.preventDefault();
//     setIsProcessing(true);

//     try {
//       // Calculate total amount including GST
//       const planPrice = parseInt(selectedPlan.price.replace('₹', '').replace(',', ''));
//       const totalAmount = planPrice + Math.round(planPrice * 0.18);

//       // Display Razorpay payment form
//       await displayRazorpay(totalAmount);
//     } catch (error) {
//       alert('Payment failed. Please try again.');
//     } finally {
//       setIsProcessing(false);
//     }
//   };

//   if (!selectedPlan) {
//     return <div>Loading...</div>;
//   }

//   if (paymentSuccess) {
//     return (
//       <div className="fixed inset-0 bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center">
//         <div className="bg-white rounded-xl shadow-lg p-8 text-center max-w-md">
//           <CheckCircle className="text-green-500 mx-auto mb-4" size={64} />
//           <h2 className="text-2xl font-bold text-gray-900 mb-2">Payment Successful!</h2>
//           <p className="text-gray-600 mb-6">Thank you for your purchase. Your payment has been processed successfully.</p>
//           <button
//             onClick={() => navigate('/subscription')}
//             className="w-full py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
//           >
//             Back to Subscription
//           </button>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
//       <div className="max-w-4xl mx-auto p-6">
//         <div className="flex justify-between items-center mb-6">
//           <h1 className="text-3xl font-bold text-gray-900">Checkout</h1>
//           <button
//             onClick={() => navigate('/subscription')}
//             className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
//           >
//             <X size={24} className="text-gray-500" />
//           </button>
//         </div>

//         <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
//           <div className="flex items-center gap-4 mb-6">
//             <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${selectedPlan.color} flex items-center justify-center`}>
//               {/* You can add a static icon or map it based on planId */}
//             </div>
//             <div className="flex-1">
//               <h3 className="font-semibold text-gray-900">{selectedPlan.name} Plan</h3>
//               <p className="text-sm text-gray-600">{selectedPlan.description}</p>
//             </div>
//             <div className="text-right">
//               <div className="text-2xl font-bold text-gray-900">{selectedPlan.price}</div>
//               <div className="text-sm text-gray-600">{selectedPlan.period}</div>
//             </div>
//           </div>

//           <form onSubmit={handleCheckoutSubmit} className="space-y-6">
//             {/* <div>
//               <h4 className="font-semibold text-gray-900 mb-4">Contact Information</h4>
//               <div className="space-y-4">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
//                   <input
//                     type="text"
//                     required
//                     value={checkoutData.name}
//                     onChange={(e) => handleInputChange('name', e.target.value)}
//                     className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                     placeholder="Enter your full name"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
//                   <input
//                     type="email"
//                     required
//                     value={checkoutData.email}
//                     onChange={(e) => handleInputChange('email', e.target.value)}
//                     className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                     placeholder="Enter your email"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
//                   <input
//                     type="tel"
//                     required
//                     value={checkoutData.phone}
//                     onChange={(e) => handleInputChange('phone', e.target.value)}
//                     className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                     placeholder="Enter your phone number"
//                   />
//                 </div>
//               </div>
//             </div> */}

//             <div>
//               <h4 className="font-semibold text-gray-900 mb-4">Payment Method</h4>
//               <div className="space-y-2">
//                 <label className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
//                   <input
//                     type="radio"
//                     name="paymentMethod"
//                     value="card"
//                     checked={checkoutData.paymentMethod === 'card'}
//                     onChange={(e) => handleInputChange('paymentMethod', e.target.value)}
//                     className="text-blue-600"
//                   />
//                   <CreditCard size={20} className="text-gray-600" />
//                   <span className="font-medium">Credit/Debit Card</span>
//                 </label>
//                 <label className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
//                   <input
//                     type="radio"
//                     name="paymentMethod"
//                     value="upi"
//                     checked={checkoutData.paymentMethod === 'upi'}
//                     onChange={(e) => handleInputChange('paymentMethod', e.target.value)}
//                     className="text-blue-600"
//                   />
//                   <div className="w-6 h-6 bg-orange-500 rounded text-white text-xs flex items-center justify-center font-bold">
//                     U
//                   </div>
//                   <span className="font-medium">UPI</span>
//                 </label>
//                 <label className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
//                   <input
//                     type="radio"
//                     name="paymentMethod"
//                     value="netbanking"
//                     checked={checkoutData.paymentMethod === 'netbanking'}
//                     onChange={(e) => handleInputChange('paymentMethod', e.target.value)}
//                     className="text-blue-600"
//                   />
//                   <div className="w-6 h-6 bg-blue-500 rounded text-white text-xs flex items-center justify-center font-bold">
//                     NB
//                   </div>
//                   <span className="font-medium">Net Banking</span>
//                 </label>
//               </div>
//             </div>

//             <div className="border-t pt-4 mt-4">
//               <h4 className="font-semibold text-gray-900 mb-4">Order Summary</h4>
//               <div className="space-y-2">
//                 <div className="flex justify-between">
//                   <span className="text-gray-600">Plan Cost</span>
//                   <span className="font-medium">{selectedPlan.price}</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="text-gray-600">GST (18%)</span>
//                   <span className="font-medium">₹{Math.round(parseInt(selectedPlan.price.replace('₹', '').replace(',', '')) * 0.18)}</span>
//                 </div>
//                 <div className="border-t pt-2 mt-2 flex justify-between text-lg font-bold">
//                   <span>Total Amount</span>
//                   <span>₹{parseInt(selectedPlan.price.replace('₹', '').replace(',', '')) + Math.round(parseInt(selectedPlan.price.replace('₹', '').replace(',', '')) * 0.18)}</span>
//                 </div>
//               </div>
//             </div>

//             <div className="flex items-center gap-2 bg-green-50 p-4 rounded-lg mt-6">
//               <Lock size={16} className="text-green-600" />
//               <span className="text-sm text-green-700">
//                 Your payment information is secure and encrypted
//               </span>
//             </div>

//             <div className="flex gap-3 mt-6">
//               <button
//                 type="button"
//                 onClick={() => navigate('/subscription')}
//                 className="flex-1 px-4 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors"
//               >
//                 <ArrowLeft size={16} className="inline mr-2" />
//                 Back
//               </button>
//               <button
//                 type="submit"
//                 disabled={isProcessing}
//                 className="flex-1 px-4 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
//               >
//                 {isProcessing ? (
//                   <div className="flex items-center justify-center gap-2">
//                     <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
//                     Processing...
//                   </div>
//                 ) : (
//                   `Pay ₹${parseInt(selectedPlan.price.replace('₹', '').replace(',', '')) + Math.round(parseInt(selectedPlan.price.replace('₹', '').replace(',', '')) * 0.18)}`
//                 )}
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CheckoutPage;
