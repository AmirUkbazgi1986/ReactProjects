import styles from "./Button.module.css";

function Button({ children, onClick, type }) {
  return (
    //type = "primary"
    // styles[type] === styles["primary"]
    //styles.type → Looks for a class called .type

    // styles[type] → Looks for a class with the name stored in the type variable

    <button onClick={onClick} className={`${styles.btn} ${styles[type]}`}>
      {children}
    </button>
  );
}

export default Button;
