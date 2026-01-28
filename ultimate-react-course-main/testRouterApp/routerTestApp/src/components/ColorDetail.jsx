// components/ColorDetail.jsx
import { useParams } from "react-router-dom";

function ColorDetail() {
  const { colorName } = useParams(); // Vytáhne "orange" z URL

  return (
    <div style={{ 
      backgroundColor: colorName, // Tady se stane ta magie (barva z URL)
      width: "100%", 
      height: "70vh",
    }}>
      <h1> {colorName}</h1>
    </div>
  );
}

export default ColorDetail;