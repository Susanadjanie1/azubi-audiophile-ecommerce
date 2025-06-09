import { Manrope } from "next/font/google";
import "./globals.css";
import { CartProvider } from "./context/CartContext";
import CartModal from "./components/CartModal";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata = {
  title: "audiophile ecommerce",
  description: "High-fidelity audio gear for audiophiles",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} antialiased`}>
        <CartProvider>
          {children}
          <CartModal />
        </CartProvider>
      </body>
    </html>
  );
}
