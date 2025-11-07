import React from 'react'
import { CartProvider } from './context/CartContext'
import LandingPage from './Pages/Public/LandingPage/index.jsx'
import AboutPage from './Pages/Public/AboutPage/index.jsx'
import ContactPage from './Pages/Public/ContactPage/index.jsx'
import ProductPage from './Pages/Public/ProductPage/index.jsx'
import CartPage from './Pages/Public/Cart/index.jsx'
import WishlistPage from './Pages/Public/Wishlist/index.jsx'
import BackToTop from './components/BackToTop'
import ScrollToTop from './components/ScrollToTop'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

export default function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/wishlist" element={<WishlistPage />} />
          <Route path="*" element={<LandingPage />} />
        </Routes>
        <BackToTop />
      </BrowserRouter>
    </CartProvider>
  )
}
