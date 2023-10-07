import styles from "./Button.module.css";
function Button({ children, onClick, type = "primary" }) {
  return (
    <button
      className={
        type === "primary"
          ? styles.btn
          : type === "secondary"
          ? styles.btn_secondary
          : styles.btn_danger
      }
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
