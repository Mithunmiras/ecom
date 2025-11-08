import React from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import { AuthProvider } from './context/AuthContext'
import Header from './layouts/headers/Index.jsx'
import Footer from './Pages/Public/LandingPage/components/Footer'
import LandingPage from './Pages/Public/LandingPage/index.jsx'
import AboutPage from './Pages/Public/AboutPage/index.jsx'
import ContactPage from './Pages/Public/ContactPage/index.jsx'
import ProductPage from './Pages/Public/ProductPage/index.jsx'
import CartPage from './Pages/Public/Cart/index.jsx'
import WishlistPage from './Pages/Public/Wishlist/index.jsx'
import AccountPage from './Pages/Public/Account/index.jsx'
import LoginPage from './Pages/PrivateRouting/login/Index.jsx'
import AdminRoutes from './Pages/PrivateRouting/Index.jsx'
import PrivateRouteValidation from './PrivateRouteValidation/Index.jsx'
import BackToTop from './components/BackToTop'
import ScrollToTop from './components/ScrollToTop'

function AppContent() {
  const location = useLocation();
  
  // Hide Header/Footer for login and admin pages
  const isAuthPage = location.pathname === '/login';
  const isAdminPage = location.pathname.startsWith('/admin');
  const showHeaderFooter = !isAuthPage && !isAdminPage;

  return (
    <div className="min-h-screen flex flex-col">
      {showHeaderFooter && <Header />}
      <main className={showHeaderFooter ? "flex-grow" : ""}>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/wishlist" element={<WishlistPage />} />
          <Route path="/account" element={<AccountPage />} />
          
          {/* Admin Login Route */}
          <Route path="/login" element={<LoginPage />} />
          
          {/* Protected Admin Routes */}
          <Route 
            path="/admin/*" 
            element={
              <PrivateRouteValidation>
                <AdminRoutes />
              </PrivateRouteValidation>
            } 
          />
          
          {/* Fallback */}
          <Route path="*" element={<LandingPage />} />
        </Routes>
      </main>
      {showHeaderFooter && <Footer />}
      {showHeaderFooter && <BackToTop />}
    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <BrowserRouter>
          <ScrollToTop />
          <AppContent />
        </BrowserRouter>
      </CartProvider>
    </AuthProvider>
  )
}
