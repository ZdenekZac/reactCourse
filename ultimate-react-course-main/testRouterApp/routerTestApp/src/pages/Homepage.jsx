import styles from "./Homepage.module.css";
import { NavLink } from "react-router-dom";
import Red from "./Red";

function Homepage() {
  return (
    <div className={styles.homepage}>
      <p>HOMEPAGE</p>

         <NavLink to="red">Red</NavLink>
         <NavLink to="green">Green</NavLink>
    </div>
  );
}

export default Homepage;