import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useSearchParams } from "react-router-dom";
import styles from "./AppMap.module.css";

function AppMap() {
  const [searchParams] = useSearchParams();

  const mapLat = searchParams.get("lat") || 50;
  const mapLng = searchParams.get("lng") || 15;
  return (
    <div className={styles.mapContainer}>
      <MapContainer 
        center={[mapLat, mapLng]} 
        zoom={6} 
        scrollWheelZoom={true} 
        className={styles.map}
      >
        {/* <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        /> */}
        <TileLayer
  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
/>
        <Marker position={[mapLat, mapLng]}>
          <Popup>Tady jsi!</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default AppMap;