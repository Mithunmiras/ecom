import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext';
import AccountDashboard from './Components/AccountDashboard';
import LoginForm from './Components/LoginForm';
import RegisterForm from './Components/RegisterForm';

export default function AccountPage() {
  const [activeTab, setActiveTab] = useState('login');
  const { user, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  // If user is authenticated, show dashboard
  if (isAuthenticated && user && user.role === 'customer') {
    return <AccountDashboard />;
  }

  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb">
        <div className="container mx-auto max-w-7xl px-6">
          <a href="/" onClick={(e) => { e.preventDefault(); navigate('/'); }}>Home</a>
          <span className="separator">/</span>
          <span>Account</span>
        </div>
      </div>

      {/* Account Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="max-w-md mx-auto">
            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold mb-2" style={{ color: 'var(--primary-gold)' }}>My Account</h1>
              <p className="text-gray-600">Login or create an account to get started</p>
            </div>

            {/* Tabs */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              {/* Tab Headers */}
              <div className="flex border-b border-gray-200">
                <button
                  onClick={() => setActiveTab('login')}
                  className={`flex-1 py-4 text-center font-medium transition-all ${
                    activeTab === 'login'
                      ? 'border-b-2'
                      : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'
                  }`}
                  style={activeTab === 'login' ? { 
                    color: 'var(--primary-gold)', 
                    borderColor: 'var(--primary-gold)',
                    background: '#fef3e2'
                  } : {}}
                >
                  <i className="fas fa-sign-in-alt mr-2"></i>
                  Login
                </button>
                <button
                  onClick={() => setActiveTab('register')}
                  className={`flex-1 py-4 text-center font-medium transition-all ${
                    activeTab === 'register'
                      ? 'border-b-2'
                      : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'
                  }`}
                  style={activeTab === 'register' ? { 
                    color: 'var(--primary-gold)', 
                    borderColor: 'var(--primary-gold)',
                    background: '#fef3e2'
                  } : {}}
                >
                  <i className="fas fa-user-plus mr-2"></i>
                  Register
                </button>
              </div>

              {/* Tab Content */}
              <div className="p-8">
                {activeTab === 'login' ? <LoginForm /> : <RegisterForm />}
              </div>
            </div>

            {/* Additional Info */}
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                <i className="fas fa-shield-alt mr-2" style={{ color: 'var(--primary-gold)' }}></i>
                Your information is secure and will never be shared
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
