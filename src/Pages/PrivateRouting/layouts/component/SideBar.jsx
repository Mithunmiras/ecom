import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../../../context/AuthContext";

function SideBar() {
  const navigate = useNavigate();
  const location = useLocation();
  const { logout, user } = useAuth();
  const [isCollapsed, setIsCollapsed] = useState(false);

  const menuItems = [
    { key: "dashboard", label: "Dashboard", icon: "fa-home", path: "/admin" },
    { key: "products", label: "Products", icon: "fa-box", path: "/admin/products" },
    { key: "orders", label: "Orders", icon: "fa-shopping-cart", path: "/admin/orders" },
    { key: "customers", label: "Customers", icon: "fa-users", path: "/admin/customers" },
    { key: "reviews", label: "Reviews", icon: "fa-star", path: "/admin/reviews" },
    { key: "settings", label: "Settings", icon: "fa-cog", path: "/admin/settings" },
  ];

  const isActive = (path) => {
    return location.pathname === path;
  };

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className={`${isCollapsed ? 'w-20' : 'w-64'} text-white flex flex-col transition-all duration-300`} style={{
      background: 'linear-gradient(180deg, var(--dark-gold), #5a2d0c)'
    }}>
      {/* Sidebar Header */}
      <div className="p-4 border-b" style={{ borderColor: 'rgba(184, 134, 11, 0.3)' }}>
        <div className="flex items-center justify-between">
          {!isCollapsed && (
            <h2 className="text-xl font-bold" style={{ color: 'var(--accent-gold)' }}>Admin Panel</h2>
          )}
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="p-2 rounded-lg transition-colors"
            style={{ background: 'rgba(184, 134, 11, 0.2)' }}
            onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(184, 134, 11, 0.3)'}
            onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(184, 134, 11, 0.2)'}
          >
            <i className={`fas fa-${isCollapsed ? 'angle-right' : 'angle-left'}`}></i>
          </button>
        </div>
      </div>

      {/* Menu Items */}
      <nav className="flex-1 py-4">
        {menuItems.map((item) => (
          <button
            key={item.key}
            onClick={() => navigate(item.path)}
            className={`w-full px-4 py-3 flex items-center space-x-3 transition-colors ${
              isActive(item.path) ? 'border-l-4' : ''
            }`}
            style={isActive(item.path) ? {
              background: 'rgba(184, 134, 11, 0.3)',
              borderColor: 'var(--accent-gold)'
            } : {}}
            onMouseEnter={(e) => !isActive(item.path) && (e.currentTarget.style.background = 'rgba(184, 134, 11, 0.2)')}
            onMouseLeave={(e) => !isActive(item.path) && (e.currentTarget.style.background = 'transparent')}
            title={isCollapsed ? item.label : ''}
          >
            <i className={`fas ${item.icon} text-lg ${isCollapsed ? 'mx-auto' : ''}`}></i>
            {!isCollapsed && <span className="font-medium">{item.label}</span>}
          </button>
        ))}
      </nav>

      {/* User Section */}
      <div className="p-4" style={{ borderTop: '1px solid rgba(184, 134, 11, 0.3)' }}>
        {!isCollapsed && (
          <div className="mb-3 pb-3" style={{ borderBottom: '1px solid rgba(184, 134, 11, 0.3)' }}>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{
                background: 'var(--primary-gold)'
              }}>
                <i className="fas fa-user"></i>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium truncate">{user?.name || 'Admin'}</p>
                <p className="text-xs truncate" style={{ color: 'var(--accent-gold)' }}>{user?.email || ''}</p>
              </div>
            </div>
          </div>
        )}
        <button
          onClick={handleLogout}
          className="w-full px-4 py-3 flex items-center space-x-3 transition-colors rounded-lg"
          style={{ background: 'rgba(220, 38, 38, 0.2)' }}
          onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(220, 38, 38, 0.3)'}
          onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(220, 38, 38, 0.2)'}
          title={isCollapsed ? 'Logout' : ''}
        >
          <i className={`fas fa-sign-out-alt text-lg ${isCollapsed ? 'mx-auto' : ''}`}></i>
          {!isCollapsed && <span className="font-medium">Logout</span>}
        </button>
      </div>
    </div>
  );
}

export default SideBar;
