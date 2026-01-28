import { useNavigate, NavLink } from "react-router-dom";
import styles from "../App.module.css";
import Button from "./Button";

function BackButton() {
  const navigate = useNavigate();
  return (
    // <Button
    //   type="back"
    //   onClick={(e) => {
    //     e.preventDefault;
    //     navigate(-1);
    //   }}>
    //   &larr; Back
    // </Button>
    <NavLink className={styles.link} to="../home">Home</NavLink>
  );
}

export default BackButton;
