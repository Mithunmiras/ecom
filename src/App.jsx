import React from 'react'
import { CartProvider } from './context/CartContext'
import LandingPage from './Pages/Public/LandingPage/index.jsx'

export default function App() {
  return (
    <CartProvider>
      <LandingPage />
    </CartProvider>
  )
}
