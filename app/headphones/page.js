import CategoryHeader from "../components/CategoryHeader";
import ProductGrid from "../components/ProductGrid";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Footer from "../components/Footer";
import FeaturedProduct from "../components/FeaturedProduct";

const headphones = [
  {
    id: 1,
    name: "XX99 Mark II Headphones",
    new: true,
    description:
      "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
    image: "/assets/product-xx99-mark-two-headphones/desktop/image-product.jpg",
  },
  {
    id: 2,
    name: "XX99 Mark I Headphones",
    new: false,
    description:
      "As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.",
    image: "/assets/product-xx99-mark-one-headphones/desktop/image-product.jpg",
  },
  {
    id: 3,
    name: "XX59 Headphones",
    new: false,
    description:
      "Enjoy your audio almost anywhere and rediscover listening. Crafted for the listeners who want to go further, the XX59 headphones are a sleek-fit companion for your digital lifestyle.",
    image: "/assets/product-xx59-headphones/desktop/image-product.jpg",
  },
];

export default function HeadphonesPage() {
  return (
    <main className="font-[Manrope]">
      <Navbar />
      <CategoryHeader title="HEADPHONES" />
      <ProductGrid products={headphones} />
      {/* <CategoryFooter /> */}
      <FeaturedProduct />
      <About />
      <Footer />
    </main>
  );
}
