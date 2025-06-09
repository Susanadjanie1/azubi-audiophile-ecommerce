import Image from "next/image";

export default function Products() {
  const products = [
    {
      id: 1,
      name: "ZX9 SPEAKER",
      description:
        "Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.",
      Image: "/assets/home/desktop/image-speaker-zx9.png",
      featured: true,
      bgColor: "bg-[#D87D4A]",
    },
    {
      id: 2,
      name: "ZX7 SPEAKER",
      description:
        "Stream high quality sound wirelessly with minimal to no loss.",
      Images: {
        desktop: "/assets/home/desktop/image-speaker-zx7.jpg",
        tablet: "/assets/home/tablet/image-speaker-zx7.jpg",
        mobile: "/assets/home/mobile/image-speaker-zx7.jpg",
      },
      featured: false,
      bgColor: "bg-[#F1F1F1]",
    },
    {
      id: 3,
      name: "YX1 EARPHONES",
      description:
        "Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones.",
      Image: "/assets/home/desktop/image-earphones-yx1.jpg",
      featured: false,
      bgColor: "bg-[#F1F1F1]",
    },
  ];

  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-[1110px] mx-auto px-6 space-y-8">
        {/* ZX9 Speaker Featured */}
        <div className="bg-[#D87D4A] w-full h-auto lg:h-[560px] rounded-lg px-8 lg:px-16 py-10 lg:py-0 text-white overflow-hidden relative">
          {/* Background Pattern */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="relative w-full h-full">
              <Image
                src="/assets/home/desktop/pattern-circles.svg"
                alt=""
                width={944}
                height={944}
                className="absolute w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] -top-20 -left-20 lg:top-1/2 lg:-translate-y-1/2 lg:-left-32"
                aria-hidden="true"
                priority
              />
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-center relative z-10 h-full gap-8 lg:gap-16">
            {/* Image */}
            <div className="relative w-48 lg:w-[300px] xl:w-[400px] h-auto aspect-square">
              {products[0]?.Image ? (
                <Image
                  src={products[0].Image}
                  alt={products[0].name}
                  fill
                  className="object-contain"
                />
              ) : (
                // Optional: fallback content if no image
                <div className="w-48 lg:w-[300px] xl:w-[400px] bg-gray-200 flex items-center justify-center">
                  No image available
                </div>
              )}
            </div>

            {/* Text Content */}
            <div className="flex-1 text-center lg:text-left flex flex-col justify-center">
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight tracking-wider">
                ZX9
                <br />
                SPEAKER
              </h2>
              <p className="text-base lg:text-lg opacity-90 mb-8 leading-relaxed max-w-md mx-auto lg:mx-0">
                {products[0].description}
              </p>
              <button className="bg-black hover:bg-[#4C4C4C] text-white px-8 py-4 font-bold transition-colors duration-300 uppercase tracking-wider text-sm w-fit mx-auto lg:mx-0">
                See Product
              </button>
            </div>
          </div>
        </div>

        {/* ZX7 Speaker */}
        <div
          className="rounded-lg relative overflow-hidden min-h-[320px] flex items-center bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${
              products[1].Images?.desktop || "/images/zx7-desktop.jpg"
            })`,
          }}
        >
          <div className="absolute inset-0 bg-black/20"></div>

          <div className="relative z-10 max-w-md p-8 lg:p-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-black tracking-wider">
              {products[1].name}
            </h2>
            <button className="border-2 border-black bg-transparent text-black px-8 py-4 font-bold hover:bg-black hover:text-white transition-all duration-300 uppercase tracking-wider text-sm">
              See Product
            </button>
          </div>
        </div>

        {/* YX1 Earphones */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products[2]?.Image ? (
            <div className="bg-[#F1F1F1] rounded-lg flex items-center justify-center min-h-[320px] p-8 relative w-full h-full md:h-[320px]">
              <Image
                src={products[2].Image}
                alt={products[2].name}
                fill
                className="object-cover rounded-lg"
              />
            </div>
          ) : (
            <div className="bg-[#F1F1F1] rounded-lg flex items-center justify-center min-h-[320px] p-8 w-full h-[320px]">
              <p>No image available</p>
            </div>
          )}

          <div className="bg-[#F1F1F1] rounded-lg p-8 md:p-12 lg:p-16 flex flex-col justify-center h-full">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 tracking-wider">
              {products[2].name}
            </h2>
            <button className="border-2 border-black bg-transparent text-black px-8 py-4 font-bold hover:bg-black hover:text-white transition-all duration-300 uppercase tracking-wider text-sm w-fit">
              See Product
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
