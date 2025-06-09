import Image from 'next/image';
import Link from 'next/link';

const CategoryProductCard = ({ product, reverse }) => (
  <section
    className={`flex flex-col lg:flex-row items-center justify-between gap-10 my-20 ${
      reverse ? 'lg:flex-row-reverse' : ''
    }`}
  >
    <div className="bg-[#f1f1f1] rounded-lg p-5 w-full lg:w-1/2 flex justify-center">
      <Image src={product.image} alt={product.name} width={300} height={300} />
    </div>
    <div className="text-center lg:text-left w-full lg:w-1/2 space-y-4">
      {product.new && (
        <p className="text-sm tracking-[10px] text-[#D87D4A] uppercase">New Product</p>
      )}
      <h2 className="text-2xl font-bold uppercase">{product.name}</h2>
      <p className="text-gray-600">{product.description}</p>
      <Link href={`/product/${product.name.toLowerCase().replace(/\s+/g, '-')}`}>
        <button className="bg-[#D87D4A] text-white px-6 py-2 mt-4 hover:bg-[#FBAF85] transition">
          See Product
        </button>
      </Link>
    </div>
  </section>
);

export default CategoryProductCard;
