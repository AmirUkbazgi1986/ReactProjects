import styles from "./CountryItem.module.css";

function CountryItem({ countryEl }) {
  // console.log(countryEl);
  if (!countryEl) return null;
  const { emoji, country } = countryEl;
  return (
    <div className={styles.countryItem}>
      <img src={emoji} alt="" className={styles.emoji} />
      <h3 className={styles.name}>{country}</h3>
    </div>
  );
}

export default CountryItem;
