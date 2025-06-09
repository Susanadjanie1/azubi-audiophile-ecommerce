import CategoryHeader from "../components/CategoryHeader";
import ProductGrid from "../components/ProductGrid";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Footer from "../components/Footer";
import FeaturedProducts from "../components/FeaturedProduct";

const earphones = [
  {
    id: 1,
    name: "YX1 Wireless Earphones",
    new: true,
    description:
      "Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.",
    image: "/assets/product-yx1-earphones/desktop/image-product.jpg",
  },
];

export default function EarphonesPage() {
  return (
    <main className="font-[Manrope]">
      <Navbar />
      <CategoryHeader title="EARPHONES" />
      <ProductGrid products={earphones} />
      {/* <CategoryFooter /> */}
      <FeaturedProducts />
      <About />
      <Footer />
    </main>
  );
}
