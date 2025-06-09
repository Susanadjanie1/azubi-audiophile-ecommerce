import CategoryHeader from "../components/CategoryHeader";
import ProductGrid from "../components/ProductGrid";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Footer from "../components/Footer";
import FeaturedProducts from "../components/FeaturedProduct";

const speakers = [
  {
    id: 1,
    name:"ZX9 Speaker",
    new: true,
    description:
      "Upgrade your sound system with the all new ZX9 active speaker. It&apros;s a bookshelf speaker system that offers truly wireless connectivity — creating new possibilities for more pleasing and practical audio setups.",
    image: "/assets/product-zx9-speaker/desktop/image-product.jpg",
  },
  {
    id: 2,
    name: "ZX7 Speaker",
    new: false,
    description:
      "Stream high-quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represent the top of the line powered speakers for home or studio use.",
    image: "/assets/product-zx7-speaker/desktop/image-product.jpg",
  },
];

export default function SpeakersPage() {
  return (
    <main className="font-[Manrope]">
      <Navbar />
      <CategoryHeader title="SPEAKERS" />
      <ProductGrid products={speakers} />
      <FeaturedProducts />
      <About />
      <Footer />
    </main>
  );
}
