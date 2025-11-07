import React from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import Header from './layouts/headers/Index.jsx'
import Footer from './Pages/Public/LandingPage/components/Footer'
import LandingPage from './Pages/Public/LandingPage/index.jsx'
import AboutPage from './Pages/Public/AboutPage/index.jsx'
import ContactPage from './Pages/Public/ContactPage/index.jsx'
import ProductPage from './Pages/Public/ProductPage/index.jsx'
import CartPage from './Pages/Public/Cart/index.jsx'
import WishlistPage from './Pages/Public/Wishlist/index.jsx'
import BackToTop from './components/BackToTop'
import ScrollToTop from './components/ScrollToTop'

function AppContent() {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/wishlist" element={<WishlistPage />} />
          <Route path="*" element={<LandingPage />} />
        </Routes>
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}

export default function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <ScrollToTop />
        <AppContent />
      </BrowserRouter>
    </CartProvider>
  )
}
