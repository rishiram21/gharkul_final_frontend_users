import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, AuthContext } from './context/AuthContext';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';
import Listing from './pages/Listings';
import Features from './pages/Features';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Postproperty from './pages/Postproperty';
import HomePage from './pages/HomePage';
import Aboutus from './pages/Aboutus';
import Contactus from './pages/Contactus';
import Postrequirement from './pages/Postrequirement';
import Propertydetails from './subpages/Propertydetails';
import Subscription from './pages/Subscription';

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = React.useContext(AuthContext);
  return isAuthenticated ? children : <Navigate to="/signin" />;
};

function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="App">
          <Header />
          <Navbar />
          <main className="min-h-screen">
            <Routes>
              {/* Main Pages */}
              <Route path="/" element={<HomePage />} />
              <Route path="/home" element={<HomePage />} />
              <Route path="/listing" element={<Listing />} />
              <Route path="/features" element={<Features />} />
              <Route path="/subscription" element={<Subscription />} />
              <Route path="/about" element={<Aboutus />} />
              <Route path="/contact" element={<Contactus />} />
              <Route path="/signin" element={<Signin />} />
              <Route path="/signup" element={<Signup />} />

              {/* Protected Routes */}
              <Route
                path="/postproperty"
                element={
                  <ProtectedRoute>
                    <Postproperty />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/postrequirement"
                element={
                  <ProtectedRoute>
                    <Postrequirement />
                  </ProtectedRoute>
                }
              />

              {/* Sub-Pages */}
              <Route path="/property/:id" element={<Propertydetails />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
