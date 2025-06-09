// app/product/[slug]/page.js
import { notFound } from "next/navigation";
import { getProductBySlug } from "../../data/products";
import ClientProductDetail from "./ClientProductDetail";

// This function runs at build time to generate all possible paths
export async function generateStaticParams() {
  const products = [
    'xx99-mark-ii-headphones',
    'xx99-mark-i-headphones',
    'xx59-headphones',
    'zx9-speaker',
    'zx7-speaker',
    'yx1-wireless-earphones',
  ];
  
  return products.map((slug) => ({
    slug,
  }));
}

export default function ProductPage({ params }) {
  const { slug } = params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return <ClientProductDetail product={product} />;
}
