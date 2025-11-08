import React, { useState } from 'react';
import { useAuth } from '../../../../context/AuthContext';
import { useCart } from '../../../../context/CartContext';

export default function RegisterForm() {
  const { login, loading } = useAuth();
  const { showToast } = useCart();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: ''
  });

  const [errors, setErrors] = useState({});
  const [agreedToTerms, setAgreedToTerms] = useState(false);

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
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
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
    
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    if (!agreedToTerms) {
      newErrors.terms = 'You must agree to the terms and conditions';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    // In a real app, you'd call a registration API here
    // For demo, we'll just log them in after "registration"
    const result = await login(formData.email, formData.password, 'customer');

    if (result.success) {
      showToast('Account created successfully! Welcome to Luxe Jewels.', 'success');
    } else {
      showToast('Registration failed. Please try again.', 'error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Name Field */}
      <div>
        <label htmlFor="register-name" className="block text-sm font-medium text-gray-700 mb-2">
          Full Name
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <i className="fas fa-user text-gray-400"></i>
          </div>
          <input
            type="text"
            id="register-name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className={`w-full pl-10 pr-4 py-3 border ${
              errors.name ? 'border-red-500' : 'border-gray-300'
            } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all`}
            placeholder="Enter your full name"
          />
        </div>
        {errors.name && (
          <p className="mt-1 text-sm text-red-500">{errors.name}</p>
        )}
      </div>

      {/* Email Field */}
      <div>
        <label htmlFor="register-email" className="block text-sm font-medium text-gray-700 mb-2">
          Email Address
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <i className="fas fa-envelope text-gray-400"></i>
          </div>
          <input
            type="email"
            id="register-email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className={`w-full pl-10 pr-4 py-3 border ${
              errors.email ? 'border-red-500' : 'border-gray-300'
            } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all`}
            placeholder="Enter your email"
          />
        </div>
        {errors.email && (
          <p className="mt-1 text-sm text-red-500">{errors.email}</p>
        )}
      </div>

      {/* Phone Field */}
      <div>
        <label htmlFor="register-phone" className="block text-sm font-medium text-gray-700 mb-2">
          Phone Number <span className="text-gray-400">(Optional)</span>
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <i className="fas fa-phone text-gray-400"></i>
          </div>
          <input
            type="tel"
            id="register-phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            placeholder="Enter your phone number"
          />
        </div>
      </div>

      {/* Password Field */}
      <div>
        <label htmlFor="register-password" className="block text-sm font-medium text-gray-700 mb-2">
          Password
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <i className="fas fa-lock text-gray-400"></i>
          </div>
          <input
            type="password"
            id="register-password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            className={`w-full pl-10 pr-4 py-3 border ${
              errors.password ? 'border-red-500' : 'border-gray-300'
            } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all`}
            placeholder="Create a password"
          />
        </div>
        {errors.password && (
          <p className="mt-1 text-sm text-red-500">{errors.password}</p>
        )}
      </div>

      {/* Confirm Password Field */}
      <div>
        <label htmlFor="register-confirm-password" className="block text-sm font-medium text-gray-700 mb-2">
          Confirm Password
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <i className="fas fa-lock text-gray-400"></i>
          </div>
          <input
            type="password"
            id="register-confirm-password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            className={`w-full pl-10 pr-4 py-3 border ${
              errors.confirmPassword ? 'border-red-500' : 'border-gray-300'
            } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all`}
            placeholder="Confirm your password"
          />
        </div>
        {errors.confirmPassword && (
          <p className="mt-1 text-sm text-red-500">{errors.confirmPassword}</p>
        )}
      </div>

      {/* Terms Checkbox */}
      <div>
        <div className="flex items-start">
          <input
            type="checkbox"
            id="terms"
            checked={agreedToTerms}
            onChange={(e) => {
              setAgreedToTerms(e.target.checked);
              if (errors.terms) {
                setErrors(prev => ({ ...prev, terms: '' }));
              }
            }}
            className={`h-4 w-4 mt-1 text-blue-600 focus:ring-blue-500 border-gray-300 rounded ${
              errors.terms ? 'border-red-500' : ''
            }`}
          />
          <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
            I agree to the <a href="#" className="text-blue-600 hover:text-blue-800">Terms and Conditions</a> and <a href="#" className="text-blue-600 hover:text-blue-800">Privacy Policy</a>
          </label>
        </div>
        {errors.terms && (
          <p className="mt-1 text-sm text-red-500">{errors.terms}</p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={loading}
        className={`w-full py-3 px-4 rounded-lg text-white font-medium transition-all ${
          loading 
            ? 'bg-gray-400 cursor-not-allowed' 
            : 'bg-blue-600 hover:bg-blue-700 active:scale-95'
        }`}
      >
        {loading ? (
          <span className="flex items-center justify-center">
            <i className="fas fa-spinner fa-spin mr-2"></i>
            Creating Account...
          </span>
        ) : (
          'Create Account'
        )}
      </button>

      {/* Benefits */}
      <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg">
        <p className="text-xs text-green-800 font-medium mb-2">
          <i className="fas fa-check-circle mr-2"></i>
          Benefits of creating an account:
        </p>
        <ul className="text-xs text-green-700 space-y-1 ml-6">
          <li>• Track your orders</li>
          <li>• Save items to wishlist</li>
          <li>• Faster checkout</li>
          <li>• Exclusive offers and rewards</li>
        </ul>
      </div>
    </form>
  );
}
