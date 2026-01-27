import styles from "./Green.module.css";
import BackButton from "../components/BackButton";

function Green() {
  return (
    <div className={styles.green}>
      <p>GREEN</p>
      <BackButton />
    </div>
  );
}

export default Green;
