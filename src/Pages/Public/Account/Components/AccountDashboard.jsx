import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../../context/AuthContext';
import { useCart } from '../../../../context/CartContext';

export default function AccountDashboard() {
  const { user, logout } = useAuth();
  const { showToast } = useCart();
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('overview');
  const [orders, setOrders] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]);

  useEffect(() => {
    // Load wishlist from localStorage
    const wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
    setWishlistItems(wishlist);

    // Mock orders data (in a real app, fetch from API)
    const mockOrders = [
      {
        id: 'ORD-001',
        date: '2025-11-05',
        status: 'Delivered',
        total: 1299.99,
        items: 2
      },
      {
        id: 'ORD-002',
        date: '2025-11-01',
        status: 'In Transit',
        total: 899.50,
        items: 1
      }
    ];
    setOrders(mockOrders);
  }, []);

  const handleLogout = () => {
    logout();
    showToast('Logged out successfully', 'success');
    navigate('/');
  };

  const menuItems = [
    { id: 'overview', label: 'Overview', icon: 'fa-home' },
    { id: 'orders', label: 'My Orders', icon: 'fa-shopping-bag' },
    { id: 'wishlist', label: 'Wishlist', icon: 'fa-heart' },
    { id: 'profile', label: 'Profile', icon: 'fa-user' },
    { id: 'settings', label: 'Settings', icon: 'fa-cog' },
  ];

  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb">
        <div className="container mx-auto max-w-7xl px-6">
          <a href="/" onClick={(e) => { e.preventDefault(); navigate('/'); }}>Home</a>
          <span className="separator">/</span>
          <span>My Account</span>
        </div>
      </div>

      {/* Dashboard Section */}
      <section className="py-12 bg-gray-50 min-h-screen">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
                {/* User Info */}
                <div className="text-center pb-6 border-b border-gray-200">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl text-white font-bold">
                      {user?.name?.charAt(0).toUpperCase() || 'U'}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-800">{user?.name || 'User'}</h3>
                  <p className="text-sm text-gray-600">{user?.email || ''}</p>
                </div>

                {/* Menu */}
                <nav className="mt-6 space-y-2">
                  {menuItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setActiveSection(item.id)}
                      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all ${
                        activeSection === item.id
                          ? 'bg-blue-600 text-white'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      <i className={`fas ${item.icon}`}></i>
                      <span className="font-medium">{item.label}</span>
                    </button>
                  ))}
                  
                  <button
                    onClick={handleLogout}
                    className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-red-600 hover:bg-red-50 transition-all mt-4"
                  >
                    <i className="fas fa-sign-out-alt"></i>
                    <span className="font-medium">Logout</span>
                  </button>
                </nav>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-lg shadow-md p-8">
                {/* Overview Section */}
                {activeSection === 'overview' && (
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">Account Overview</h2>
                    
                    {/* Stats Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                      <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-lg p-6">
                        <i className="fas fa-shopping-bag text-3xl mb-3 opacity-80"></i>
                        <p className="text-blue-100 text-sm">Total Orders</p>
                        <p className="text-3xl font-bold mt-2">{orders.length}</p>
                      </div>
                      <div className="bg-gradient-to-br from-pink-500 to-pink-600 text-white rounded-lg p-6">
                        <i className="fas fa-heart text-3xl mb-3 opacity-80"></i>
                        <p className="text-pink-100 text-sm">Wishlist Items</p>
                        <p className="text-3xl font-bold mt-2">{wishlistItems.length}</p>
                      </div>
                      <div className="bg-gradient-to-br from-green-500 to-green-600 text-white rounded-lg p-6">
                        <i className="fas fa-award text-3xl mb-3 opacity-80"></i>
                        <p className="text-green-100 text-sm">Reward Points</p>
                        <p className="text-3xl font-bold mt-2">450</p>
                      </div>
                    </div>

                    {/* Recent Orders */}
                    <div className="mb-8">
                      <h3 className="text-xl font-bold text-gray-800 mb-4">Recent Orders</h3>
                      {orders.length > 0 ? (
                        <div className="space-y-4">
                          {orders.map((order) => (
                            <div key={order.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                              <div className="flex justify-between items-center">
                                <div>
                                  <p className="font-bold text-gray-800">Order {order.id}</p>
                                  <p className="text-sm text-gray-600">Placed on {new Date(order.date).toLocaleDateString()}</p>
                                </div>
                                <div className="text-right">
                                  <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                                    order.status === 'Delivered' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                                  }`}>
                                    {order.status}
                                  </span>
                                  <p className="text-lg font-bold text-gray-800 mt-2">${order.total}</p>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <p className="text-gray-600">No orders yet</p>
                      )}
                    </div>

                    {/* Quick Actions */}
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-4">Quick Actions</h3>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <button
                          onClick={() => navigate('/products')}
                          className="p-4 border border-gray-200 rounded-lg hover:border-blue-500 hover:shadow-md transition-all text-center"
                        >
                          <i className="fas fa-shopping-bag text-2xl text-blue-600 mb-2"></i>
                          <p className="text-sm font-medium text-gray-800">Shop Now</p>
                        </button>
                        <button
                          onClick={() => navigate('/wishlist')}
                          className="p-4 border border-gray-200 rounded-lg hover:border-blue-500 hover:shadow-md transition-all text-center"
                        >
                          <i className="fas fa-heart text-2xl text-pink-600 mb-2"></i>
                          <p className="text-sm font-medium text-gray-800">Wishlist</p>
                        </button>
                        <button
                          onClick={() => setActiveSection('orders')}
                          className="p-4 border border-gray-200 rounded-lg hover:border-blue-500 hover:shadow-md transition-all text-center"
                        >
                          <i className="fas fa-box text-2xl text-green-600 mb-2"></i>
                          <p className="text-sm font-medium text-gray-800">Track Order</p>
                        </button>
                        <button
                          onClick={() => navigate('/contact')}
                          className="p-4 border border-gray-200 rounded-lg hover:border-blue-500 hover:shadow-md transition-all text-center"
                        >
                          <i className="fas fa-headset text-2xl text-purple-600 mb-2"></i>
                          <p className="text-sm font-medium text-gray-800">Support</p>
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {/* Orders Section */}
                {activeSection === 'orders' && (
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">My Orders</h2>
                    {orders.length > 0 ? (
                      <div className="space-y-6">
                        {orders.map((order) => (
                          <div key={order.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                            <div className="flex justify-between items-start mb-4">
                              <div>
                                <h3 className="text-lg font-bold text-gray-800">Order {order.id}</h3>
                                <p className="text-sm text-gray-600">Placed on {new Date(order.date).toLocaleDateString()}</p>
                                <p className="text-sm text-gray-600">{order.items} item(s)</p>
                              </div>
                              <div className="text-right">
                                <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                                  order.status === 'Delivered' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                                }`}>
                                  {order.status}
                                </span>
                                <p className="text-xl font-bold text-gray-800 mt-2">${order.total}</p>
                              </div>
                            </div>
                            <div className="flex space-x-4">
                              <button className="btn btn-primary">View Details</button>
                              <button className="btn btn-outline">Track Order</button>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-12">
                        <i className="fas fa-shopping-bag text-6xl text-gray-300 mb-4"></i>
                        <p className="text-gray-600 mb-4">You haven't placed any orders yet</p>
                        <button onClick={() => navigate('/products')} className="btn btn-primary">
                          Start Shopping
                        </button>
                      </div>
                    )}
                  </div>
                )}

                {/* Wishlist Section */}
                {activeSection === 'wishlist' && (
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">My Wishlist</h2>
                    {wishlistItems.length > 0 ? (
                      <p className="text-gray-600 mb-4">You have {wishlistItems.length} item(s) in your wishlist.</p>
                    ) : (
                      <div className="text-center py-12">
                        <i className="fas fa-heart text-6xl text-gray-300 mb-4"></i>
                        <p className="text-gray-600 mb-4">Your wishlist is empty</p>
                        <button onClick={() => navigate('/products')} className="btn btn-primary">
                          Browse Products
                        </button>
                      </div>
                    )}
                    <button onClick={() => navigate('/wishlist')} className="btn btn-primary">
                      View Full Wishlist
                    </button>
                  </div>
                )}

                {/* Profile Section */}
                {activeSection === 'profile' && (
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">My Profile</h2>
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                          <input
                            type="text"
                            value={user?.name || ''}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            readOnly
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                          <input
                            type="email"
                            value={user?.email || ''}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            readOnly
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                          <input
                            type="tel"
                            placeholder="Add phone number"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Date of Birth</label>
                          <input
                            type="date"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                        </div>
                      </div>
                      <button className="btn btn-primary">Save Changes</button>
                    </div>
                  </div>
                )}

                {/* Settings Section */}
                {activeSection === 'settings' && (
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">Settings</h2>
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-bold text-gray-800 mb-4">Change Password</h3>
                        <div className="space-y-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Current Password</label>
                            <input
                              type="password"
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">New Password</label>
                            <input
                              type="password"
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Confirm New Password</label>
                            <input
                              type="password"
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                          </div>
                          <button className="btn btn-primary">Update Password</button>
                        </div>
                      </div>

                      <div className="pt-6 border-t border-gray-200">
                        <h3 className="text-lg font-bold text-gray-800 mb-4">Email Preferences</h3>
                        <div className="space-y-3">
                          <div className="flex items-center">
                            <input type="checkbox" id="promo" className="h-4 w-4 text-blue-600" defaultChecked />
                            <label htmlFor="promo" className="ml-3 text-gray-700">Receive promotional emails</label>
                          </div>
                          <div className="flex items-center">
                            <input type="checkbox" id="order" className="h-4 w-4 text-blue-600" defaultChecked />
                            <label htmlFor="order" className="ml-3 text-gray-700">Order updates</label>
                          </div>
                          <div className="flex items-center">
                            <input type="checkbox" id="newsletter" className="h-4 w-4 text-blue-600" />
                            <label htmlFor="newsletter" className="ml-3 text-gray-700">Newsletter</label>
                          </div>
                        </div>
                      </div>

                      <div className="pt-6 border-t border-gray-200">
                        <h3 className="text-lg font-bold text-red-600 mb-4">Danger Zone</h3>
                        <button className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
                          Delete Account
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
