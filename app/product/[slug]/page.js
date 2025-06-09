import { notFound } from 'next/navigation';
import { getProductBySlug } from '../../data/products';
import ProductDetail from './ProductDetail';
import Navbar from '../../components/Navbar';
import About from '../../components/About';
import Footer from '../../components/Footer';

export default function ProductPage({ params }) {
  const { slug } = params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow font-[Manrope] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <ProductDetail product={product} />
      </main>
      <About />
      <Footer />
    </div>
  );
}

// Generate static params for all products
export async function generateStaticParams() {
  // This would come from an API or database in a real app
  const products = [
    { slug: 'xx99-mark-ii-headphones' },
    { slug: 'xx99-mark-i-headphones' },
    { slug: 'xx59-headphones' },
    { slug: 'zx9-speaker' },
    { slug: 'zx7-speaker' },
    { slug: 'yx1-wireless-earphones' },
  ];
  
  return products.map((product) => ({
    slug: product.slug,
  }));
}
