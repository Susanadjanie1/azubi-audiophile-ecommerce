import styles from './Product.module.css';

export default function InTheBox() {
  return (
    <section className={styles.inTheBox}>
      <h2>In the Box</h2>
      <ul>
        <li><span>1x</span> Headphone Unit</li>
        <li><span>2x</span> Replacement Earcups</li>
        <li><span>1x</span> User Manual</li>
        <li><span>1x</span> 3.5mm Audio Cable</li>
        <li><span>1x</span> Travel Bag</li>
      </ul>
    </section>
  );
}
