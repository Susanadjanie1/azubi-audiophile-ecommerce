import CategoryProductCard from "./CategoryProductCard";

const ProductGrid = ({ products }) => (
  <div className="px-6 lg:px-20">
    {products.map((product, index) => (
      <CategoryProductCard
        key={product.id}
        product={product}
        reverse={index % 2 !== 0}
      />
    ))}
  </div>
);

export default ProductGrid;
