import React from 'react'
import { CartProvider } from './context/CartContext'
import LandingPage from './Pages/Public/LandingPage/index.jsx'
import BackToTop from './components/BackToTop'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

export default function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="*" element={<LandingPage />} />
        </Routes>
      </BrowserRouter>
      <BackToTop />
    </CartProvider>
  )
}
