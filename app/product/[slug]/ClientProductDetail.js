// app/product/[slug]/ClientProductDetail.js
'use client';

import ProductDetail from "./ProductDetail";
import Navbar from "../../components/Navbar";
import About from "../../components/About";
import Footer from "../../components/Footer";

export default function ClientProductDetail({ product }) {
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
