import React from "react";
import { useAuth } from "../../../../context/AuthContext";

function TopHeader({ pageTitle }) {
  const { user } = useAuth();

  return (
    <header className="bg-white shadow-sm px-6 py-4" style={{ borderBottom: '2px solid var(--primary-gold)' }}>
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold" style={{ color: 'var(--primary-gold)' }}>{pageTitle}</h1>
          <p className="text-sm text-gray-600 mt-1">
            Welcome back, <span style={{ color: 'var(--dark-gold)', fontWeight: '600' }}>{user?.name || 'Admin'}</span>
          </p>
        </div>
        
        <div className="flex items-center space-x-4">
          {/* Notifications */}
          <button className="relative p-2 text-gray-600 rounded-lg transition-colors"
            style={{ background: '#fef3e2' }}
            onMouseEnter={(e) => e.currentTarget.style.background = '#fde8c0'}
            onMouseLeave={(e) => e.currentTarget.style.background = '#fef3e2'}
          >
            <i className="fas fa-bell text-xl" style={{ color: 'var(--primary-gold)' }}></i>
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>

          {/* User Profile */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 text-white rounded-full flex items-center justify-center" style={{
              background: 'linear-gradient(135deg, var(--primary-gold), var(--dark-gold))'
            }}>
              <i className="fas fa-user"></i>
            </div>
            <div className="hidden md:block">
              <p className="text-sm font-medium text-gray-800">{user?.name || 'Admin'}</p>
              <p className="text-xs" style={{ color: 'var(--primary-gold)' }}>{user?.role || 'Administrator'}</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default TopHeader;
