import styles from "../pages/Homepage.module.css";
import { NavLink, Outlet } from "react-router-dom";

function Sidebar() {
  return (
    <div className={styles.sidebar}>
        <nav>
          <NavLink to="cities">Cities</NavLink>
          <NavLink to="countries">Countries</NavLink>
        </nav>
        <Outlet /> {/* Tady se zobrazí "Seznam měst/zemí" */}
    </div>
  );
}

export default Sidebar;