'use client';

import styles from './Product.module.css';
import FeaturesSection from './FeaturesSection';
import Gallery from './Gallery';
import YouMayAlsoLike from './YouMayAlsoLike';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { useCart } from '../../context/CartContext';

export default function ProductDetail({ product }) {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  if (!product) {
    return <div className={styles.notFound}>Product not found</div>;
  }

  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
  }).format(product.price);

  // Get the category path
  const categoryPath = `/${product.category}`;

  const handleAddToCart = () => {
    addToCart(product, quantity);
    // Reset quantity after adding to cart
    setQuantity(1);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.navigation}>
        <Link href={categoryPath} className={styles.backLink}>
          Go Back
        </Link>
      </div>

      <section className={styles.topSection}>
        <div className={styles.productImageContainer}>
          <Image 
            src={product.image}
            alt={product.name}
            width={540}
            height={560}
            className={styles.productImage}
            priority
          />
        </div>
        
        <div className={styles.productInfo}>
          {product.new && <span className={styles.new}>New Product</span>}
          <div className={styles.titleContainer}>
            <h1 className={styles.mainTitle}>
              {product.name}
              {product.type && (
                <span className={styles.typeTitle}>
                  {product.type}
                </span>
              )}
            </h1>
          </div>
          <p className={styles.description}>{product.description}</p>
          <p className={styles.price}>{formattedPrice}</p>
          
          <div className={styles.ctaContainer}>
            <div className={styles.cta}>
              <div className={styles.quantitySelector}>
                <button 
                  className={styles.quantityBtn}
                  onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                >
                  -
                </button>
                <span className={styles.quantity}>{quantity}</span>
                <button 
                  className={styles.quantityBtn}
                  onClick={() => setQuantity(prev => prev + 1)}
                >
                  +
                </button>
              </div>
              <button 
                className={styles.addToCart}
                onClick={handleAddToCart}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </section>

      <FeaturesSection features={product.features} includes={product.includes} />
      <Gallery gallery={product.gallery} productName={product.name} />
      <YouMayAlsoLike products={product.others} />
    </div>
  );
}
