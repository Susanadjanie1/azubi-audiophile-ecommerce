'use client';

import Image from 'next/image';

export default function About() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Text Content */}
          <div className="flex-1 order-2 lg:order-1 text-center lg:text-left">
            <h2 className="text-3xl lg:text-4xl font-bold mb-8 leading-tight">
              BRINGING YOU THE <span className="text-[#D87D4A]">BEST</span> AUDIO GEAR
            </h2>
            <p className="text-base lg:text-lg text-gray-600 leading-relaxed">
              Located at the heart of New York City, Audiophile is the premier
              store for high end headphones, earphones, speakers, and audio
              accessories. We have a large showroom and luxury demonstration
              rooms available for you to browse and experience a wide range of
              our products. Stop by our store to meet some of the fantastic
              people who make Audiophile the best place to buy your portable
              audio equipment.
            </p>
          </div>

          {/* Image - Responsive */}
          <div className="w-full lg:flex-1 order-1 lg:order-2">
            <div className="relative w-full h-[300px] md:h-[300px] lg:h-[588px] rounded-lg overflow-hidden">
              {/* Mobile Image */}
              <div className="md:hidden w-full h-full">
                <Image
                  src="/assets/shared/mobile/image-best-gear.jpg"
                  alt="Person listening to headphones"
                  fill
                  className="object-cover rounded-lg"
                  priority
                  sizes="(max-width: 767px) 100vw, 50vw"
                />
              </div>
              
              {/* Tablet Image */}
              <div className="hidden md:block lg:hidden w-full h-full">
                <Image
                  src="/assets/shared/tablet/image-best-gear.jpg"
                  alt="Person listening to headphones"
                  fill
                  className="object-cover rounded-lg"
                  priority
                  sizes="(min-width: 768px) 100vw, 50vw"
                />
              </div>
              
              {/* Desktop Image */}
              <div className="hidden lg:block w-full h-full">
                <Image
                  src="/assets/shared/desktop/image-best-gear.jpg"
                  alt="Person listening to headphones"
                  fill
                  className="object-cover rounded-lg"
                  priority
                  sizes="50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
