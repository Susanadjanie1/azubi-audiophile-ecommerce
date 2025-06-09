// ProductCard.js
import { ArrowRight } from "lucide-react";

/**
 * ProductCard Component
 * 
 * @param {Object} props - Component props
 * @param {string} props.name - The name of the product
 * @param {string} props.type - The type/category of the product
 * @param {string} props.description - Product description
 * @param {string} props.image - URL of the product image
 * @param {boolean} [isNew=false] - Whether to show "New Product" badge
 * @param {boolean} [featured=false] - Whether to use featured styling
 * @param {boolean} [reversed=false] - Whether to reverse the layout on larger screens
 * @returns {JSX.Element} The rendered ProductCard component
 */
export default function ProductCard({
  name,
  type,
  description,
  image,
  isNew = false,
  featured = false,
  reversed = false,
}) {
  return (
    <div
      className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
        reversed ? "lg:grid-flow-col-dense" : ""
      }`}
    >
      {/* Image */}
      <div
        className={`bg-[#F1F1F1] rounded-lg overflow-hidden flex items-center justify-center
        w-[327px] h-[352px]
        md:w-[689px] md:h-[352px]
        lg:w-[540px] lg:h-[560px]
        mx-auto
        ${reversed ? "lg:col-start-2" : ""}
        `}
      >
        <img src={image} alt={`${name} ${type}`} className="w-full h-full object-cover" />
      </div>

      {/* Content */}
      <div className={`space-y-8 ${reversed ? "lg:col-start-1" : ""}`}>
        {isNew && (
          <span className="text-[#D87D4A] text-sm font-normal tracking-[10px] uppercase">
            New Product
          </span>
        )}

        <h2 
          className={`font-bold tracking-wider uppercase ${
            featured ? "text-4xl md:text-5xl lg:text-6xl" : "text-3xl md:text-4xl"
          }`}
        >
          {name}
          <span className="block text-2xl md:text-3xl text-gray-500">{type}</span>
        </h2>


        <p className="text-gray-600 text-lg leading-relaxed max-w-md">
          {description}
        </p>
        <button className="btn-primary group">
          See Product
          <ArrowRight className="ml-2 w-4 h-4 inline transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </div>
  );
}
