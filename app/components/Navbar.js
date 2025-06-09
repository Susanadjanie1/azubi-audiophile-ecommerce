"use client";
import { useState } from "react";
import { Menu, X, ShoppingCart } from "lucide-react";
import Link from "next/link";
import clsx from "clsx";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { totalItems, openCart } = useCart();

  return (
    <header className="bg-black text-white relative z-50">
      <div className="container mx-auto px-4 lg:px-8 flex items-center justify-between h-16 lg:h-20">
        <nav
          className="mx-auto flex items-center justify-between
          h-[25px] w-[327px] px-4
          md:h-[25px] md:w-[689px]
          lg:h-[28px] lg:w-[1110.33px]"
        >
          {/* Left: Hamburger (mobile/tablet only) */}
          <div className="flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="block md:block lg:hidden mr-3"
            >
              {mobileMenuOpen ? (
                <X className="w-[16px] h-[15px]" />
              ) : (
                <Menu className="w-[16px] h-[15px]" />
              )}
            </button>
          </div>

          {/* Center: Logo */}
          <div className="flex-1 flex justify-center md:justify-start md:ml-0">
            <Link
              href="/"
              className="block w-[143px] h-[25px] text-xl font-bold tracking-widest "
            >
              audiophile
            </Link>
          </div>

          {/* Right: Nav Links (desktop/tablet) */}

          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2">
            <ul className="hidden lg:flex gap-[34px] uppercase text-sm tracking-widest w-[429px] h-[25px] items-center justify-center">
              <li className="hover:text-[#D87D4A]">
                <Link href="/">Home</Link>
              </li>
              <li className="hover:text-[#D87D4A]">
                <Link href="/headphones">Headphones</Link>
              </li>
              <li className="hover:text-[#D87D4A]">
                <Link href="/speakers">Speakers</Link>
              </li>
              <li className="hover:text-[#D87D4A]">
                <Link href="/earphones">Earphones</Link>
              </li>
            </ul>
          </div>

          {/* Right: Cart */}
          <div className="relative">
            <button 
              onClick={openCart}
              className="relative"
              aria-label="Cart"
            >
              <ShoppingCart className="w-6 h-6" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#D87D4A] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </nav>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-16 left-0 w-full bg-white text-black py-8 px-6">
          <ul className="space-y-6 uppercase text-sm tracking-widest">
            <li>
              <Link href="/" className="block py-2 font-bold">
                Home
              </Link>
            </li>
            <li>
              <Link href="/headphones" className="block py-2 font-bold">
                Headphones
              </Link>
            </li>
            <li>
              <Link href="/speakers" className="block py-2 font-bold">
                Speakers
              </Link>
            </li>
            <li>
              <Link href="/earphones" className="block py-2 font-bold">
                Earphones
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
