export default function FeaturedProducts() {
  const categories = [
    {
      id: "headphones",
      title: "HEADPHONES",
      image: "/images/image-category-thumbnail-headphones.png",
    },
    {
      id: "speakers",
      title: "SPEAKERS",
      image: "/images/image-category-thumbnail-speakers.png",
    },
    {
      id: "earphones",
      title: "EARPHONES",
      image: "/images/image-category-thumbnail-earphones.png",
    },
  ];

  return (
    <section className="py-16 px-6 md:px-8 lg:px-12 xl:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 pt-10">
          {categories.map((category) => (
            <div
              key={category.id}
              className="group rounded-lg text-center hover:shadow-lg transition-all duration-300 cursor-pointer relative overflow-visible"
              style={{
                width: "350px",
                height: "204px",
                backgroundColor: "#F1F1F1",
                margin: "0 auto",
              }}
            >
              <div
                className="relative pt-2 pb-6 flex justify-center items-center"
                style={{ height: "100px" }}
              >
                <img
                  src={category.image}
                  alt={category.title}
                  className="max-w-[140px] max-h-[140px] object-contain group-hover:scale-110 transition-all duration-300 relative z-10 filter drop-shadow-lg"
                  style={{
                    transform: "translateY(-20px)",
                    filter: "drop-shadow(0 10px 20px rgba(0,0,0,0.15))",
                  }}
                />
              </div>

              <div className="mb-6">
                <h3 className="text-base font-bold text-black tracking-wide">
                  {category.title}
                </h3>
              </div>

              <div className="flex items-center justify-center gap-2 transition-colors duration-300">
                <span className="text-sm font-semibold tracking-wide uppercase opacity-60 group-hover:text-[#fbaf85]">
                  SHOP
                </span>
                <svg
                  className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300 opacity-60 text-[#D87D4A]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
