import React from "react";
import { Routes, Route } from "react-router-dom";
import PageNotFound from "../PageNotFound/Index";
import AdminLayout from "./layouts/Index";

const Index = () => {
  return (
    <AdminLayout>
      <Routes>
        <Route path="/" element={
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold mb-4" style={{ color: 'var(--primary-gold)' }}>
              <i className="fas fa-tachometer-alt mr-3"></i>
              Admin Dashboard
            </h2>
            <p className="text-gray-600 mb-6">Welcome to the admin panel. Use the sidebar to navigate through different sections.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              {/* Stats Cards */}
              <div className="text-white rounded-lg p-6" style={{
                background: 'linear-gradient(135deg, var(--primary-gold), var(--dark-gold))'
              }}>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm opacity-90">Total Products</p>
                    <p className="text-3xl font-bold mt-2">248</p>
                  </div>
                  <i className="fas fa-box text-4xl opacity-50"></i>
                </div>
              </div>

              <div className="text-white rounded-lg p-6" style={{
                background: 'linear-gradient(135deg, #DAA520, #B8860B)'
              }}>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm opacity-90">Total Orders</p>
                    <p className="text-3xl font-bold mt-2">1,234</p>
                  </div>
                  <i className="fas fa-shopping-cart text-4xl opacity-50"></i>
                </div>
              </div>

              <div className="text-white rounded-lg p-6" style={{
                background: 'linear-gradient(135deg, #C77D3C, #8B4513)'
              }}>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm opacity-90">Total Customers</p>
                    <p className="text-3xl font-bold mt-2">5,678</p>
                  </div>
                  <i className="fas fa-users text-4xl opacity-50"></i>
                </div>
              </div>
            </div>
          </div>
        } />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </AdminLayout>
  );
};

export default Index;
