import Link from 'next/link';
import Image from 'next/image';
import styles from './YouMayAlsoLike.module.css';

export default function YouMayAlsoLike({ products }) {
  if (!products || products.length === 0) return null;

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>YOU MAY ALSO LIKE</h2>
      <div className={styles.productsGrid}>
        {products.map((product, index) => (
          <div key={index} className={styles.productCard}>
            <div className={styles.imageContainer}>
              <Image
                src={product.image}
                alt={product.name}
                width={350}
                height={350}
                className={styles.productImage}
                priority={index < 3} // Only load first 3 images eagerly
              />
            </div>
            <h3 className={styles.productName}>{product.name.toUpperCase()}</h3>
            <Link 
              href={`/product/${product.slug}`}
              className={styles.seeProduct}
            >
              SEE PRODUCT
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
