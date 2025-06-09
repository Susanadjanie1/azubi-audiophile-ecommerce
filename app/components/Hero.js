'use client';

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-black text-white relative overflow-hidden min-h-[600px] lg:min-h-[600px] flex items-center">
      {/* Background images with responsive sources */}
      <div className="absolute inset-0">
        {/* Mobile: Show mobile background image */}
        <div className="md:hidden w-full h-full relative">
          <Image
            src="/assets/home/mobile/image-header.jpg"
            alt=""
            fill
            className="object-cover object-center"
            priority
            quality={100}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/30"></div>
        </div>
        
        {/* Tablet: Show tablet background image */}
        <div className="hidden md:block lg:hidden w-full h-full relative">
          <Image
            src="/assets/home/tablet/image-header.jpg"
            alt=""
            fill
            className="object-cover object-center"
            priority
            quality={100}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/30"></div>
        </div>
        
        {/* Desktop: Show desktop background image */}
        <div className="hidden lg:block w-full h-full relative">
          <Image
            src="/assets/home/desktop/image-hero.jpg"
            alt=""
            fill
            className="object-cover object-center"
            priority
            quality={100}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>
        </div>
      </div>

      <div className="container mx-auto px-6 sm:px-8 md:px-10 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Content with proper spacing */}
          <div className="w-full lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
            <div className="max-w-[400px] mx-auto lg:mx-0">
              <p className="font-manrope text-sm text-gray-300 uppercase tracking-[10px] mb-4 lg:mb-6">
                New Product
              </p>
              <h1 className="font-manrope font-bold text-4xl md:text-[56px] tracking-[1.5px] mb-6 lg:mb-8 leading-tight">
                XX99 MARK II<br />
                <span className="font-bold">HEADPHONES</span>
              </h1>
              <p className="text-gray-300 mb-8 text-sm md:text-base font-medium leading-relaxed">
                Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.
              </p>
              <Link href="/products/xx99-mark-two-headphones" className="inline-block">
                <button className="bg-[#D87D4A] hover:bg-[#FBAF85] text-white font-bold py-3 px-6 md:py-4 md:px-8 text-sm md:text-base transition-colors duration-200">
                  SEE PRODUCT
                </button>
              </Link>
            </div>
          </div>
          
          {/* Empty div for spacing on desktop */}
          <div className="hidden lg:block lg:w-1/2"></div>
        </div>
      </div>
    </section>
  );
}
