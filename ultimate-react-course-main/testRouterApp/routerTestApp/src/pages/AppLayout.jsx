import styles from "./AppLayout.module.css";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <div className={styles.app}>
      <Outlet />
      <Footer/>
    </div>
  );
}

export default AppLayout;
