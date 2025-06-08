export default function Products() {
  const products = [
    {
      id: 1,
      name: "ZX9 SPEAKER",
      description:
        "Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.",
      image: "/images/image-category-thumbnail-speakers.png",
      featured: true,
      bgColor: "bg-[#D87D4A]",
    },
    {
      id: 2,
      name: "ZX7 SPEAKER",
      description:
        "Stream high quality sound wirelessly with minimal to no loss.",
      images: {
        desktop: "/images/image-speaker-zx7.jpg",
        tablet: "/images/image-speaker-zx7-tablet.jpg",
        mobile: "/images/Speaker-product-mobile.png",
      },
      featured: false,
      bgColor: "bg-[#F1F1F1]",
    },
    {
      id: 3,
      name: "YX1 EARPHONES",
      description:
        "Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones.",
      image: "/images/image-earphones-yx1-mobile.jpg",
      featured: false,
      bgColor: "bg-[#F1F1F1]",
    },
  ];

  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-[1110px] mx-auto px-6 space-y-8">
        {/* ZX9 Speaker Featured */}
        <div className="bg-[#D87D4A] w-full h-auto lg:h-[560px] rounded-lg px-8 lg:px-16 py-10 lg:py-0 text-white overflow-hidden relative">
          {/* Background Circles */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute w-[472px] h-[472px] rounded-full border border-white/20 -top-[50px] left-1/2 transform -translate-x-1/2 lg:left-0 lg:transform-none lg:-top-[50px]"></div>
            <div className="absolute w-[542px] h-[542px] rounded-full border border-white/10 -top-[85px] left-1/2 transform -translate-x-1/2 lg:left-0 lg:transform-none lg:-top-[85px]"></div>
            <div className="absolute w-[944px] h-[944px] rounded-full border border-white/5 -top-[300px] left-1/2 transform -translate-x-1/2 lg:transform-none lg:-top-[300px] lg:-left-[200px]"></div>
          </div>

          <div className="flex flex-col lg:flex-row items-center relative z-10 h-full gap-8 lg:gap-16">
            {/* Image */}
            <div className="flex-1 flex justify-center items-center lg:justify-start pt-8 lg:pt-0">
              <img
                src={products[0].image}
                alt={products[0].name}
                className="w-48 lg:w-[300px] xl:w-[400px]"
              />
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
              products[1].images?.desktop || "/images/zx7-desktop.jpg"
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-[#F1F1F1] rounded-lg flex items-center justify-center min-h-[320px] p-8">
            <img
              src={products[2].image}
              alt={products[2].name}
              className="w-64 h-64 object-cover rounded-lg"
            />
          </div>
          <div className="bg-[#F1F1F1] rounded-lg p-8 lg:p-16 flex flex-col justify-center">
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
