import styles from "./Error.module.css";
import errorIcon from "../images/error-icon.png";

function Error({ message }) {
  return (
    <div className={styles.error_layout}>
      <h3 className={styles.heading_3}>{message}</h3>
      <img className={styles.error_image} src={errorIcon} alt="error icon" />
    </div>
  );
}

export default Error;
