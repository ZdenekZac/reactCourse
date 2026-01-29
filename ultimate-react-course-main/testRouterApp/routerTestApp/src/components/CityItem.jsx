import styles from "./CityList.module.css";
import { Link } from "react-router-dom";

function CityItem({city}) {
  const {cityName, emoji, date, id, position} = city;
  return (
    <li>
      <Link className={styles.cityItem} to={`${id}?lat=${position.lat}&lng=${position.lng}`}>
      <span>{emoji}</span>
      <h3 className={styles.name}>{cityName}</h3>
      <time className={styles.date}>({date})</time>
      </Link>
    </li>
  );
}

export default CityItem;