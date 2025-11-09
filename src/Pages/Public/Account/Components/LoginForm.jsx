import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../../context/AuthContext';
import { useCart } from '../../../../context/CartContext';

export default function LoginForm() {
  const { login, loading } = useAuth();
  const { showToast } = useCart();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({});
  const [rememberMe, setRememberMe] = useState(false);

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
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    const result = await login(formData.email, formData.password, 'customer');

    if (result.success) {
      showToast('Welcome back! Login successful.', 'success');
      // User will automatically see dashboard due to AccountPage logic
    } else {
      showToast(result.message || 'Invalid email or password', 'error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Email Field */}
      <div>
        <label htmlFor="login-email" className="block text-sm font-medium text-gray-700 mb-2">
          Email Address
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <i className="fas fa-envelope text-gray-400"></i>
          </div>
          <input
            type="email"
            id="login-email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className={`w-full pl-10 pr-4 py-3 border ${
              errors.email ? 'border-red-500' : 'border-gray-300'
            } rounded-lg focus:outline-none focus:ring-2 focus:border-transparent transition-all`}
            style={{ focusRingColor: 'var(--primary-gold)' }}
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
        <label htmlFor="login-password" className="block text-sm font-medium text-gray-700 mb-2">
          Password
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <i className="fas fa-lock text-gray-400"></i>
          </div>
          <input
            type="password"
            id="login-password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            className={`w-full pl-10 pr-4 py-3 border ${
              errors.password ? 'border-red-500' : 'border-gray-300'
            } rounded-lg focus:outline-none focus:ring-2 focus:border-transparent transition-all`}
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
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
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
          'Login to Your Account'
        )}
      </button>
    </form>
  );
}
