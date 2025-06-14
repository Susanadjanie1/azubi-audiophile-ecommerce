"use client";

import { useCart } from "../context/CartContext";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import CheckoutSuccessModal from "../components/CheckoutSuccessModal";

export default function CheckoutPage() {
  const { cart, getCartTotal, clearCart } = useCart();
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    zip: "",
    city: "",
    country: "",
    paymentMethod: "e-money",
    eMoneyNumber: "",
    eMoneyPin: "",
  });
  const [errors, setErrors] = useState({});
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [orderDetails, setOrderDetails] = useState(null);
  const [orderComplete, setOrderComplete] = useState(false);
  const [orderNumber, setOrderNumber] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    const requiredFields = [
      "name",
      "email",
      "phone",
      "address",
      "zip",
      "city",
      "country",
    ];

    requiredFields.forEach((field) => {
      if (!formData[field]) {
        newErrors[field] = "Required";
      }
    });

    if (formData.paymentMethod === "e-money" && !formData.eMoneyNumber) {
      newErrors.eMoneyNumber = "Required";
    }
    if (formData.paymentMethod === "e-money" && !formData.eMoneyPin) {
      newErrors.eMoneyPin = "Required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Process the order (you would typically send this to your backend)
      const orderNum =
        "#" + Math.random().toString(36).substr(2, 9).toUpperCase();
      setOrderNumber(orderNum);
      setOrderComplete(true);
      // Set order details for the success modal
      setOrderDetails({
        orderNumber: orderNum,
        items: cart.map((item) => ({
          id: item.id,
          name: item.name,
          price: item.price,
          quantity: item.quantity,
          image: item.image,
        })),
        grandTotal: getCartTotal(),
      });

      // Show success modal
      setIsSuccessModalOpen(true);

      // Clear the cart
      clearCart();
    }
  };

  const handleCloseModal = () => {
    setIsSuccessModalOpen(false);
    router.push("/");
  };

  if (cart.length === 0 && !orderComplete) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <Link
          href="/"
          className="bg-[#D87D4A] hover:bg-[#fbaf85] text-white px-6 py-3 inline-block"
        >
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-16 max-w-6xl">
      <Link
        href="/"
        className="text-gray-500 hover:text-black inline-block mb-8"
      >
        Go Back
      </Link>

      <form onSubmit={handleSubmit} className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold mb-8">CHECKOUT</h1>

          {/* Billing Details */}
          <div className="mb-12">
            <h2 className="text-sm font-bold text-[#D87D4A] uppercase mb-4">
              Billing Details
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded ${
                    errors.name ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Alexei Ward"
                />
                {errors.name && (
                  <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                )}
              </div>

              <div className="mb-4">
                <label className="block text-sm font-bold mb-2" htmlFor="email">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="alexei@mail.com"
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                )}
              </div>

              <div className="mb-4">
                <label className="block text-sm font-bold mb-2" htmlFor="phone">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded ${
                    errors.phone ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="+1 202-555-0136"
                />
                {errors.phone && (
                  <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                )}
              </div>
            </div>
          </div>

          {/* Shipping Info */}
          <div className="mb-12">
            <h2 className="text-sm font-bold text-[#D87D4A] uppercase mb-4">
              Shipping Info
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="md:col-span-2">
                <label
                  className="block text-sm font-bold mb-2"
                  htmlFor="address"
                >
                  Your Address
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded ${
                    errors.address ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="1137 Williams Avenue"
                />
                {errors.address && (
                  <p className="text-red-500 text-xs mt-1">{errors.address}</p>
                )}
              </div>

              <div className="mb-4">
                <label className="block text-sm font-bold mb-2" htmlFor="zip">
                  ZIP Code
                </label>
                <input
                  type="text"
                  id="zip"
                  name="zip"
                  value={formData.zip}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded ${
                    errors.zip ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="10001"
                />
                {errors.zip && (
                  <p className="text-red-500 text-xs mt-1">{errors.zip}</p>
                )}
              </div>

              <div className="mb-4">
                <label className="block text-sm font-bold mb-2" htmlFor="city">
                  City
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded ${
                    errors.city ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="New York"
                />
                {errors.city && (
                  <p className="text-red-500 text-xs mt-1">{errors.city}</p>
                )}
              </div>

              <div className="mb-4">
                <label
                  className="block text-sm font-bold mb-2"
                  htmlFor="country"
                >
                  Country
                </label>
                <input
                  type="text"
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded ${
                    errors.country ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="United States"
                />
                {errors.country && (
                  <p className="text-red-500 text-xs mt-1">{errors.country}</p>
                )}
              </div>
            </div>
          </div>

          {/* Payment Details */}
          <div>
            <h2 className="text-sm font-bold text-[#D87D4A] uppercase mb-4">
              Payment Details
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2">
                  Payment Method
                </label>
              </div>

              <div className="mb-6 space-y-4">
                <label
                  className={`block border rounded p-4 cursor-pointer ${
                    formData.paymentMethod === "e-money"
                      ? "border-[#D87D4A]"
                      : "border-gray-300"
                  }`}
                >
                  <div className="flex items-center">
                    <div
                      className={`w-4 h-4 rounded-full border-2 ${
                        formData.paymentMethod === "e-money"
                          ? "border-[#D87D4A]"
                          : "border-gray-300"
                      } flex items-center justify-center`}
                    >
                      {formData.paymentMethod === "e-money" && (
                        <div className="w-2 h-2 rounded-full bg-[#D87D4A]"></div>
                      )}
                    </div>
                    <span className="text-sm font-medium text-gray-900 ml-3">
                      e-Money
                    </span>
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="e-money"
                      checked={formData.paymentMethod === "e-money"}
                      onChange={handleChange}
                      className="sr-only"
                    />
                  </div>
                </label>

                <label
                  className={`block border rounded p-4 cursor-pointer ${
                    formData.paymentMethod === "cash"
                      ? "border-[#D87D4A]"
                      : "border-gray-300"
                  }`}
                >
                  <div className="flex items-center">
                    <div
                      className={`w-4 h-4 rounded-full border-2 ${
                        formData.paymentMethod === "cash"
                          ? "border-[#D87D4A]"
                          : "border-gray-300"
                      } flex items-center justify-center`}
                    >
                      {formData.paymentMethod === "cash" && (
                        <div className="w-2 h-2 rounded-full bg-[#D87D4A]"></div>
                      )}
                    </div>
                    <span className="text-sm font-medium text-gray-900 ml-3">
                      Cash on Delivery
                    </span>
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="cash"
                      checked={formData.paymentMethod === "cash"}
                      onChange={handleChange}
                      className="sr-only"
                    />
                  </div>
                </label>
              </div>
            </div>

            {formData.paymentMethod === "e-money" && (
              <div className="grid md:grid-cols-2 gap-4 mt-4">
                <div className="mb-4">
                  <label
                    className="block text-sm font-bold mb-2"
                    htmlFor="eMoneyNumber"
                  >
                    e-Money Number
                  </label>
                  <input
                    type="text"
                    id="eMoneyNumber"
                    name="eMoneyNumber"
                    value={formData.eMoneyNumber}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded ${
                      errors.eMoneyNumber ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="238521993"
                  />
                  {errors.eMoneyNumber && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.eMoneyNumber}
                    </p>
                  )}
                </div>

                <div className="mb-4">
                  <label
                    className="block text-sm font-bold mb-2"
                    htmlFor="eMoneyPin"
                  >
                    e-Money PIN
                  </label>
                  <input
                    type="password"
                    id="eMoneyPin"
                    name="eMoneyPin"
                    value={formData.eMoneyPin}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded ${
                      errors.eMoneyPin ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="6891"
                  />
                  {errors.eMoneyPin && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.eMoneyPin}
                    </p>
                  )}
                </div>
              </div>
            )}

            {formData.paymentMethod === "cash" && (
              <div className="flex items-start mt-4 p-4 bg-gray-50 rounded">
                <div className="mr-4">
                  <Image
                    src="/assets/checkout/icon-cash-on-delivery.svg"
                    alt="Cash on Delivery"
                    width={48}
                    height={48}
                    className="w-12 h-12"
                  />
                </div>
                <p className="text-sm text-gray-600">
                  The &apos;Cash on Delivery&apos; option enables you to pay in cash when
                  our delivery courier arrives at your residence. Just make sure
                  your address is correct so that your order will not be
                  cancelled.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Order Summary */}
        <div className="md:col-span-1">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-bold mb-6">SUMMARY</h2>

            <div className="space-y-4 mb-8">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between"
                >
                  <div className="flex items-center">
                    <div className="w-16 h-16 bg-gray-100 rounded-lg mr-4 overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={64}
                        height={64}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-bold">
                        {item.shortName || item.name}
                      </div>
                      <div className="text-sm text-gray-500">
                        ${item.price.toLocaleString()}
                      </div>
                    </div>
                  </div>
                  <div className="text-gray-500">x{item.quantity}</div>
                </div>
              ))}
            </div>

            <div className="space-y-2 mb-6">
              <div className="flex justify-between">
                <span className="text-gray-500 uppercase">Total</span>
                <span className="font-bold">
                  ${getCartTotal().toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500 uppercase">Shipping</span>
                <span className="font-bold">$50.00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500 uppercase">VAT (Included)</span>
                <span className="font-bold">
                  $
                  {(getCartTotal() * 0.2).toLocaleString(undefined, {
                    maximumFractionDigits: 2,
                  })}
                </span>
              </div>
              <div className="flex justify-between mt-4 pt-4 border-t border-gray-200">
                <span className="text-gray-500 uppercase">Grand Total</span>
                <span className="font-bold text-[#D87D4A]">
                  ${(getCartTotal() + 50).toLocaleString()}
                </span>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-[#D87D4A] hover:bg-[#fbaf85] text-white py-3 px-4 uppercase text-sm font-bold tracking-wider transition-colors"
              disabled={cart.length === 0}
            >
              Continue & Pay
            </button>
          </div>
        </div>
      </form>

      {/* Success Modal */}
      <CheckoutSuccessModal
        isOpen={isSuccessModalOpen}
        onClose={handleCloseModal}
        orderDetails={orderDetails}
      />
    </div>
  );
}
