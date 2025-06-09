import Image from 'next/image';
import styles from './Gallery.module.css';

export default function Gallery({ gallery, productName }) {
  if (!gallery) return null;

  return (
    <section className={styles.gallery}>
      <div className={styles.galleryGrid}>
        {/* First small image */}
        <div className={styles.smallImageContainer}>
          <Image
            src={gallery.first}
            alt={`${productName} gallery 1`}
            width={445}
            height={280}
            className={styles.image}
            priority
          />
        </div>
        
        {/* Large image on the right */}
        <div className={styles.largeImageContainer}>
          <Image
            src={gallery.third}
            alt={`${productName} gallery 3`}
            width={635}
            height={592}
            className={styles.image}
            priority
          />
        </div>
        
        {/* Second small image */}
        <div className={styles.smallImageContainer}>
          <Image
            src={gallery.second}
            alt={`${productName} gallery 2`}
            width={445}
            height={280}
            className={styles.image}
            priority
          />
        </div>
      </div>
    </section>
  );
}
