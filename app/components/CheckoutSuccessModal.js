"use client";

import Image from "next/image";
import Link from "next/link";

export default function CheckoutSuccessModal({
  isOpen,
  onClose,
  orderDetails,
}) {
  if (!isOpen) return null;

  const { items, grandTotal } = orderDetails || {
    items: [],
    grandTotal: 0,
  };

  const firstItem = items[0] || {};
  const remainingItems = items.length - 1;
  const shippingFee = 50; // Fixed shipping fee
  const vat = Math.floor(grandTotal * 0.2); // 20% VAT
  const grandTotalWithFees = grandTotal + shippingFee + vat;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-100 bg-opacity-75 p-4 backdrop-blur-sm">
      <div className="bg-white rounded-lg max-w-md w-full p-8 max-h-[90vh] overflow-y-auto">
        {/* Success Icon */}
        <div className="w-16 h-16 bg-[#D87D4A] rounded-full flex items-center justify-center mb-6 mx-auto">
          <Image
            src="/assets/checkout/icon-order-confirmation.svg"
            alt="Order Confirmed"
            width={24}
            height={24}
          />
        </div>

        {/* Thank You Message */}
        <h2 className="text-2xl font-bold text-center mb-4">
          THANK YOU
          <br />
          FOR YOUR ORDER
        </h2>
        <p className="text-gray-500 text-center mb-6">
          You will receive an email confirmation shortly.
        </p>

        {/* Order Summary */}
        <div className="mb-6 rounded-lg overflow-hidden md:grid md:grid-cols-2">
          <div className="bg-gray-50 p-6">
            {/* First Item */}
            {firstItem && (
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-200 rounded mr-4 overflow-hidden">
                    <Image
                      src={firstItem.image}
                      alt={firstItem.name}
                      width={48}
                      height={48}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm">{firstItem.shortName}</h4>
                    <p className="text-gray-500 text-sm">
                      ${firstItem.price?.toLocaleString()}
                    </p>
                  </div>
                </div>
                <div className="text-gray-500 text-sm">
                  x{firstItem.quantity}
                </div>
              </div>
            )}

            {/* Other Items */}
            {remainingItems > 0 && (
              <div className="pt-4 border-t border-gray-200">
                <p className="text-center text-xs text-gray-500">
                  and {remainingItems} other item{remainingItems > 1 ? "s" : ""}
                </p>
              </div>
            )}
          </div>

          {/* Grand Total */}
          <div className="bg-black text-white p-6 flex flex-col justify-end">
            <div className="mb-2">
              <p className="text-gray-400 text-sm">GRAND TOTAL</p>
              <p className="text-lg font-bold">
                ${grandTotalWithFees.toLocaleString()}
              </p>
            </div>
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
