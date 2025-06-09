import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import About from "./components/About";
import FeaturedProducts from "./components/FeaturedProduct";
import Products from "./components/Products";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <FeaturedProducts />
      <Products />
      <About />
      <Footer />
    </>
  );
}
