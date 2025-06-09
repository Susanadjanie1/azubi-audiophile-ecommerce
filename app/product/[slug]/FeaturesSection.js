import styles from './Product.module.css';

export default function FeaturesSection({ features, includes }) {
  return (
    <div className={styles.featuresContainer}>
      <div className={styles.featuresContent}>
        <div className={styles.featuresText}>
          <h2 className={styles.sectionTitle}>Features</h2>
          <div className={styles.featuresParagraphs}>
            {features.split('\n\n').map((paragraph, index) => (
              <p key={index} className={styles.paragraph}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>
        
        <div className={styles.inTheBox}>
          <h2 className={styles.sectionTitle}>In the Box</h2>
          <ul className={styles.includesList}>
            {includes && includes.map((item, index) => (
              <li key={index} className={styles.includeItem}>
                <span className={styles.quantity}>{item.quantity}x</span>
                <span className={styles.itemName}>{item.item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
