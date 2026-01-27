import styles from "./Red.module.css";
import BackButton from "../components/BackButton";

function Red() {
  return (
    <div className={styles.red}>
      <p>RED</p>
      <BackButton />
    </div>
  );
}

export default Red;
