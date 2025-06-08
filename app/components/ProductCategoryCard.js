import Image from 'next/image';
import Link from 'next/link';

const ProductCategoryCard = ({ title, imageUrl, linkUrl }) => {
  return (
    <div className="bg-gray-100 rounded-lg flex flex-col items-center justify-center text-center w-[327px] h-[683px] md:w-[639px] md:h-[217px] lg:w-[1110px] lg:h-[284px]">
      <div className="relative w-40 h-40 md:w-32 md:h-32 lg:w-48 lg:h-48 mb-4 md:mb-0">
        <Image
          src={imageUrl}
          alt={title}
          layout="fill"
          objectFit="contain"
        />
      </div>

      <div className="mt-6 md:mt-0 md:ml-6 flex flex-col items-center md:items-start">
        <h3 className="text-xl font-bold uppercase mb-2">{title}</h3>
        <Link href={linkUrl} passHref>
          <span className="flex items-center text-sm font-bold uppercase text-orange-500 hover:text-orange-400 cursor-pointer">
            Shop
            <svg
              className="ml-2 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </Link>
      </div>
    </div>
  );
};

export default ProductCategoryCard;
