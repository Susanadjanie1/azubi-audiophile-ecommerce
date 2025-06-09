'use client';

import { useCart } from '../context/CartContext';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

export default function CartModal() {
  const {
    cart,
    isOpen,
    closeCart,
    updateQuantity,
    getCartTotal,
    totalItems,
    clearCart,
  } = useCart();

  const modalRef = useRef(null);
  const closeButtonRef = useRef(null);

  // Close modal when clicking outside or pressing Escape
  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeCart();
      }
    }

    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        closeCart();
      }
    }

    if (isOpen) {
      document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
      closeButtonRef.current?.focus();
    } else {
      document.body.style.overflow = 'unset'; // Re-enable scrolling when modal is closed
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, closeCart]);

  if (!isOpen) return null;

  const handleRemoveAll = () => {
    if (confirm('Are you sure you want to remove all items from your cart?')) {
      clearCart();
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex justify-end"
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="cart-title"
    >
      <div 
        ref={modalRef}
        className="bg-white w-full max-w-md h-full md:h-auto md:max-h-[90vh] md:rounded-lg overflow-hidden flex flex-col"
      >
        <div className="p-6 md:p-8">
          <div className="flex justify-between items-center mb-8">
            <h2 id="cart-title" className="text-lg font-bold uppercase tracking-wider">
              Cart ({totalItems})
            </h2>
            {cart.length > 0 && (
              <button 
                onClick={handleRemoveAll}
                className="text-gray-500 hover:text-black text-sm underline focus:outline-none focus:ring-2 focus:ring-[#D87D4A] focus:ring-offset-2 rounded"
              >
                Remove all
              </button>
            )}
          </div>

          {cart.length === 0 ? (
            <p className="text-center py-8">Your cart is empty</p>
          ) : (
            <div className="space-y-6">
              <div className="space-y-4 max-h-[300px] overflow-y-auto pr-2 -mr-2">
                {cart.map((item) => (
                  <div key={item.id} className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={64}
                        height={64}
                        className="rounded-lg"
                      />
                      <div className="ml-4">
                        <p className="font-bold text-sm">{item.shortName || item.name}</p>
                        <p className="text-sm text-gray-500">
                          ${item.price.toLocaleString()}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="flex items-center bg-gray-100">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            updateQuantity(item.id, item.quantity - 1);
                          }}
                          className="px-3 py-1 text-gray-500 hover:text-black focus:outline-none focus:ring-1 focus:ring-[#D87D4A]"
                          aria-label={`Decrease quantity of ${item.name}`}
                        >
                          -
                        </button>
                        <span className="px-2 w-6 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            updateQuantity(item.id, item.quantity + 1);
                          }}
                          className="px-3 py-1 text-gray-500 hover:text-black focus:outline-none focus:ring-1 focus:ring-[#D87D4A]"
                          aria-label={`Increase quantity of ${item.name}`}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-gray-500 uppercase text-sm">Total</span>
                  <span className="font-bold text-lg">
                    ${getCartTotal().toLocaleString()}
                  </span>
                </div>
                <button
                  className="w-full bg-[#D87D4A] hover:bg-[#fbaf85] text-white py-3 px-4 uppercase text-sm font-bold tracking-wider transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#D87D4A]"
                  onClick={() => {
                    window.location.href = '/checkout';
                  }}
                >
                  Checkout
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
