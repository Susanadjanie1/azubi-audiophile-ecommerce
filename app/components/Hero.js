import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-black text-white relative overflow-hidden">
      {/* Background image for mobile and tablet */}
      <div className="absolute inset-0 lg:hidden">
        <Image
          src="/images/Bitmap-hero.png"
          alt=""
          fill
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center min-h-[500px] lg:min-h-[600px] py-12 lg:py-0">
          {/* Content */}
          <div className="flex-1 text-center lg:text-left lg:pr-12 mb-8 lg:mb-0 lg:pt-8">
            <p className="font-manrope text-[14px] leading-[10px] text-gray-300 uppercase tracking-[0.5em] mb-4 lg:mb-6">
              New Product
            </p>
            <h1 className="font-manrope font-bold text-[56px] tracking-[2px] mb-6 lg:mb-8 leading-tight">
              XX99 MARK II
              <br />
              HEADPHONES
            </h1>
            <p className="font-manrope font-medium text-[15px] text-gray-300 mb-8 lg:mb-10 max-w-md mx-auto lg:mx-0 leading-relaxed">
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>
            <Link href="/product/xx99-mark-two">
              <button className="bg-[#D87D4A] hover:bg-[#fbaf85] text-white px-6 py-3 uppercase tracking-wider text-sm">
                See Product
              </button>
            </Link>
          </div>

          {/* Hero Image - Only visible on desktop */}
          <div className="hidden lg:flex flex-1 justify-center lg:justify-end">
            <div className="relative w-64 h-64 lg:w-96 lg:h-96">
              <Image
                src="/images/Bitmap-hero.png"
                alt="XX99 Mark II Headphones"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
