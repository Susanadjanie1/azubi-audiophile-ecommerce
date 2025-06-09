import React from 'react';
import { Facebook, Twitter, Instagram } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      {/* Orange accent line */}
      <div className="h-1 bg-[#D87D4A] w-24 mx-6 md:mx-8 lg:mx-12 xl:mx-24"></div>
      
      <div className="px-6 md:px-8 lg:px-12 xl:px-24 py-12">
        <div className="max-w-7xl mx-auto">
          {/* Mobile Navigation */}
          <div className="md:hidden">
            <div className="flex justify-center mb-8">
              <div className="relative w-[143px] h-[25px]">
                <Image 
                  src="/assets/shared/desktop/logo.svg" 
                  alt="Audiophile" 
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            
            <nav className="flex flex-col items-center gap-4 mb-12">
              <Link href="/" className="uppercase text-sm font-bold tracking-wider hover:text-[#D87D4A] transition-colors">
                Home
              </Link>
              <Link href="/headphones" className="uppercase text-sm font-bold tracking-wider hover:text-[#D87D4A] transition-colors">
                Headphones
              </Link>
              <Link href="/speakers" className="uppercase text-sm font-bold tracking-wider hover:text-[#D87D4A] transition-colors">
                Speakers
              </Link>
              <Link href="/earphones" className="uppercase text-sm font-bold tracking-wider hover:text-[#D87D4A] transition-colors">
                Earphones
              </Link>
            </nav>
          </div>

          {/* Tablet/Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex flex-col lg:flex-row justify-between items-center mb-12">
              <div className="relative w-[143px] h-[25px] mb-8 lg:mb-0">
                <Image 
                  src="/assets/shared/desktop/logo.svg" 
                  alt="Audiophile" 
                  fill
                  className="object-contain"
                />
              </div>
              
              <nav className="flex gap-8">
                <Link href="/" className="uppercase text-sm font-bold tracking-wider hover:text-[#D87D4A] transition-colors">
                  Home
                </Link>
                <Link href="/headphones" className="uppercase text-sm font-bold tracking-wider hover:text-[#D87D4A] transition-colors">
                  Headphones
                </Link>
                <Link href="/speakers" className="uppercase text-sm font-bold tracking-wider hover:text-[#D87D4A] transition-colors">
                  Speakers
                </Link>
                <Link href="/earphones" className="uppercase text-sm font-bold tracking-wider hover:text-[#D87D4A] transition-colors">
                  Earphones
                </Link>
              </nav>
            </div>
          </div>

          {/* Description */}
          <div className="mb-12">
            <p className="text-gray-500 text-center md:text-left text-sm leading-6 max-w-xl md:max-w-2xl">
              Audiophile is an all in one stop to fulfill your audio needs. We&apos;re a small team of music lovers 
              and sound specialists who are devoted to helping you get the most out of personal audio. 
              Come and visit our demo facility - we&apos;re open 7 days a week.
            </p>
          </div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-8 md:mb-0">
              Copyright 2021. All Rights Reserved
            </p>
            
            {/* Social Icons */}
            <div className="flex gap-4">
              <Link 
                href="#" 
                className="text-white hover:text-[#D87D4A] transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </Link>
              <Link 
                href="#" 
                className="text-white hover:text-[#D87D4A] transition-colors duration-300"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </Link>
              <Link 
                href="#" 
                className="text-white hover:text-[#D87D4A] transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}