import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../../context/AuthContext";
import { useCart } from "../../../../context/CartContext";

export default function LoginPage() {
  const { login, loading } = useAuth();
  const { showToast } = useCart();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.email) {
      newErrors.email = 'Please enter your email';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!formData.password) {
      newErrors.password = 'Please enter your password';
    } else if (formData.password.length < 3) {
      newErrors.password = 'Password must be at least 3 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    const result = await login(formData.email, formData.password);

    if (result.success) {
      showToast('Login successful!', 'success');
      navigate("/admin");
    } else {
      showToast(result.message || 'Invalid credentials', 'error');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen px-4" style={{
      background: 'linear-gradient(135deg, rgba(184, 134, 11, 0.1), rgba(139, 69, 19, 0.1))'
    }}>
      <div className="w-full max-w-md bg-white shadow-2xl rounded-2xl p-8">
        <div className="text-center mb-8">
          <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{
            background: 'linear-gradient(135deg, var(--primary-gold), var(--dark-gold))'
          }}>
            <i className="fas fa-user-shield text-2xl text-white"></i>
          </div>
          <h2 className="text-3xl font-bold mb-2" style={{ color: 'var(--primary-gold)' }}>Admin Login</h2>
          <p className="text-gray-600">Please login to access the admin panel</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <i className="fas fa-envelope text-gray-400"></i>
              </div>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={`w-full pl-10 pr-4 py-3 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:border-transparent transition-all`}
                placeholder="Enter your email"
                onFocus={(e) => e.target.style.borderColor = 'var(--primary-gold)'}
                onBlur={(e) => !errors.email && (e.target.style.borderColor = '#d1d5db')}
              />
            </div>
            {errors.email && (
              <p className="mt-1 text-sm text-red-500">{errors.email}</p>
            )}
          </div>

          {/* Password Field */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <i className="fas fa-lock text-gray-400"></i>
              </div>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className={`w-full pl-10 pr-4 py-3 border ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:border-transparent transition-all`}
                placeholder="Enter your password"
                onFocus={(e) => e.target.style.borderColor = 'var(--primary-gold)'}
                onBlur={(e) => !errors.password && (e.target.style.borderColor = '#d1d5db')}
              />
            </div>
            {errors.password && (
              <p className="mt-1 text-sm text-red-500">{errors.password}</p>
            )}
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="remember"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="remember" className="ml-2 block text-sm text-gray-700">
                Remember me
              </label>
            </div>
            <a href="#" className="text-sm font-medium" style={{ color: 'var(--primary-gold)' }}>
              Forgot password?
            </a>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 px-4 rounded-lg text-white font-medium transition-all ${
              loading 
                ? 'bg-gray-400 cursor-not-allowed' 
                : 'active:scale-95'
            }`}
            style={!loading ? { 
              background: 'var(--primary-gold)',
            } : {}}
            onMouseEnter={(e) => !loading && (e.target.style.background = 'var(--dark-gold)')}
            onMouseLeave={(e) => !loading && (e.target.style.background = 'var(--primary-gold)')}
          >
            {loading ? (
              <span className="flex items-center justify-center">
                <i className="fas fa-spinner fa-spin mr-2"></i>
                Logging in...
              </span>
            ) : (
            'Login'
          )}
        </button>
      </form>

      {/* Back to Home */}
      <div className="mt-6 text-center">
        <button
          onClick={() => navigate('/')}
          className="text-sm font-medium hover:underline"
          style={{ color: 'var(--primary-gold)' }}
        >
          <i className="fas fa-arrow-left mr-2"></i>
          Back to Home
        </button>
      </div>
    </div>
  </div>
  );
}