import React from 'react';
import Image from 'next/image';

export default function About() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Content */}
          <div className="flex-1 order-2 lg:order-1 text-center lg:text-left">
            <h2 className="text-3xl lg:text-4xl font-bold mb-8 leading-tight">
              BRINGING YOU THE{' '}
              <span className="text-[#D87D4A]">BEST</span>{' '}
              AUDIO GEAR
            </h2>
            <p className="text-base lg:text-lg text-gray-600 leading-relaxed">
              Located at the heart of New York City, Audiophile is the premier store for high end 
              headphones, earphones, speakers, and audio accessories. We have a large showroom and 
              luxury demonstration rooms available for you to browse and experience a wide range of our 
              products. Stop by our store to meet some of the fantastic people who make Audiophile the 
              best place to buy your portable audio equipment.
            </p>
          </div>

          {/* Image */}
          <div className="flex-1 order-1 lg:order-2">
            <Image
              src="/images/Bitmap-About.png"
              alt="Person listening to headphones"
              className="w-full h-64 lg:h-80 object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
