import styles from "./Homepage.module.css";
import Sidebar from "../components/Sidebar";
import AppMap from "../components/AppMap";

function Homepage() {
  return (
    <div className={styles.homepage}>
      <Sidebar/>
      <AppMap/>
    </div>

  );
}

export default Homepage;
