import React from 'react'
import { CartProvider } from './context/CartContext'
import LandingPage from './Pages/Public/LandingPage/index.jsx'
import AboutPage from './Pages/Public/About/index.jsx'
import ContactPage from './Pages/Public/Contact/index.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

export default function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<LandingPage />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  )
}
