'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function CheckoutSuccessModal({ isOpen, onClose, orderDetails }) {
  if (!isOpen) return null;

  const { items, grandTotal } = orderDetails || {
    items: [],
    grandTotal: 0
  };

  const firstItem = items[0] || {};
  const remainingItems = items.length - 1;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
      <div className="bg-white rounded-lg max-w-md w-full p-8 max-h-[90vh] overflow-y-auto">
        {/* Checkmark Icon */}
        <div className="w-16 h-16 bg-[#D87D4A] rounded-full flex items-center justify-center mb-6">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 11L7 17L19 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>

        {/* Thank You Message */}
        <h2 className="text-2xl font-bold mb-4">THANK YOU FOR YOUR ORDER</h2>
        <p className="text-gray-500 mb-6">You will receive an email confirmation shortly.</p>

        {/* Order Summary */}
        <div className="bg-gray-50 rounded-lg overflow-hidden mb-6">
          {/* First Item */}
          {items.length > 0 && (
            <div className="p-4 flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-200 rounded mr-4 overflow-hidden">
                  {firstItem.image && (
                    <Image 
                      src={firstItem.image} 
                      alt={firstItem.name}
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  )}
                </div>
                <div>
                  <p className="font-bold text-sm">{firstItem.name}</p>
                  <p className="text-gray-500 text-sm">${firstItem.price?.toLocaleString()}</p>
                </div>
              </div>
              <p className="text-gray-500 text-sm">x{firstItem.quantity}</p>
            </div>
          )}

          {/* Other Items */}
          {remainingItems > 0 && (
            <div className="border-t border-gray-200 p-4">
              <p className="text-center text-sm text-gray-500">
                and {remainingItems} other item{remainingItems > 1 ? 's' : ''}
              </p>
            </div>
          )}

          {/* Grand Total */}
          <div className="bg-black p-4 text-white">
            <p className="text-gray-400 text-sm uppercase mb-1">Grand Total</p>
            <p className="font-bold">${grandTotal?.toLocaleString()}</p>
          </div>
        </div>

        {/* Back to Home Button */}
        <Link 
          href="/" 
          className="block w-full bg-[#D87D4A] hover:bg-[#FBAF85] text-white text-center py-3 px-6 font-bold uppercase text-sm tracking-wider transition-colors"
          onClick={onClose}
        >
          Back to home
        </Link>
      </div>
    </div>
  );
}
