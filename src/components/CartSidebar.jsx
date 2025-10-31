import React from 'react';
import { useCart } from '../context/CartContext';

export default function CartSidebar() {
  const {
    cartItems,
    removeFromCart,
    updateQuantity,
    clearCart,
    getTotalPrice,
    getTotalItems,
    isCartOpen,
    setIsCartOpen,
  } = useCart();

  const formatPrice = (price) => {
    return `₦${getTotalPrice().toLocaleString()}`;
  };

  return (
    <>
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          isCartOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsCartOpen(false)}
      ></div>

      <div
        className={`fixed right-0 top-0 h-full w-full sm:w-96 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out flex flex-col ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
  <div className="bg-gradient-to-r from-purple-600 to-violet-600 text-white p-6 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold">Your Cart</h2>
            <p className="text-purple-100 text-sm">{getTotalItems()} items</p>
          </div>
          <button
            onClick={() => setIsCartOpen(false)}
            className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 transition-colors duration-300 flex items-center justify-center"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <div className="text-8xl mb-4">🛒</div>
              <h3 className="text-xl font-bold text-slate-700 mb-2">Your cart is empty</h3>
              <p className="text-slate-500 mb-6">Add some delicious items to get started!</p>
              <button
                onClick={() => setIsCartOpen(false)}
                className="px-6 py-3 bg-gradient-to-r from-purple-600 to-violet-600 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300"
              >
                Browse Menu
              </button>
            </div>
          ) : (
            <>
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-slate-50 rounded-xl p-4 flex gap-4 hover:bg-slate-100 transition-colors duration-300"
                >
                  <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 bg-white">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-slate-900 mb-1 truncate">{item.name}</h3>
                    <p className="text-sm font-bold text-purple-600 mb-2">{item.price}</p>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-7 h-7 rounded-full bg-white border-2 border-slate-200 flex items-center justify-center hover:border-purple-600 hover:text-purple-600 transition-colors duration-300 font-bold"
                      >
                        −
                      </button>
                      <span className="w-8 text-center font-bold text-slate-700">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-7 h-7 rounded-full bg-white border-2 border-slate-200 flex items-center justify-center hover:border-purple-600 hover:text-purple-600 transition-colors duration-300 font-bold"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-slate-400 hover:text-purple-600 transition-colors duration-300"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </div>
              ))}

              <button
                onClick={clearCart}
                className="w-full py-2 text-sm text-red-600 hover:text-red-700 font-semibold transition-colors duration-300"
              >
                Clear Cart
              </button>
            </>
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="border-t border-slate-200 p-6 bg-slate-50">
            <div className="space-y-3 mb-4">
              <div className="flex justify-between text-slate-600">
                <span>Subtotal</span>
                <span className="font-semibold">{formatPrice()}</span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>Delivery Fee</span>
                <span className="font-semibold text-green-600">Free</span>
              </div>
                <div className="flex justify-between text-lg font-bold text-slate-900 pt-3 border-t border-slate-300">
                <span>Total</span>
                <span className="text-purple-600">{formatPrice()}</span>
              </div>
            </div>

            <button className="w-full py-4 bg-gradient-to-r from-purple-600 to-violet-600 text-white rounded-full font-bold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
              Proceed to Checkout
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>

            <p className="text-xs text-center text-slate-500 mt-3">
              Secure checkout with multiple payment options
            </p>
          </div>
        )}
      </div>
    </>
  );
}
