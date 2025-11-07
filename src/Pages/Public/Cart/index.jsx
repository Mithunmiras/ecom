import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../../context/CartContext';
import CartItems from './Components/CartItems';
import CartSummary from './Components/CartSummary';
import EmptyCart from './Components/EmptyCart';

export default function CartPage() {
  const navigate = useNavigate();
  const { cartItems } = useContext(CartContext);

  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb">
        <div className="container mx-auto max-w-7xl px-6">
          <a href="/">Home</a>
          <i className="fas fa-chevron-right"></i>
          <span>Shopping Cart</span>
        </div>
      </div>

      {/* Cart Section */}
      <section className="cart-section">
        <div className="container mx-auto max-w-7xl px-6">
          <h1 className="page-title">Shopping Cart</h1>

          {cartItems.length === 0 ? (
            <EmptyCart />
          ) : (
            <div className="cart-layout">
              <CartItems />
              <CartSummary />
            </div>
          )}
        </div>
      </section>
    </>
  );
}
