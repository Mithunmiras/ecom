import React from 'react'
import { CartProvider } from './context/CartContext'
import LandingPage from './Pages/Public/LandingPage/index.jsx'
import AboutPage from './Pages/Public/About/index.jsx'
import ContactPage from './Pages/Public/Contact/index.jsx'
import ServicesPage from './Pages/Public/services/index.jsx'
import AnimatedBackground from './components/AnimatedBackground'
import ParticleCanvas from './components/ParticleCanvas'
import BackToTop from './components/BackToTop'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

export default function App() {
  return (
    <CartProvider>
      <AnimatedBackground />
      <ParticleCanvas />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<LandingPage />} />
        </Routes>
      </BrowserRouter>
      <BackToTop />
    </CartProvider>
  )
}
