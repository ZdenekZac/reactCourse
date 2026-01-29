import { useState } from "react";
import { BrowserRouter, Routes, Route, NavLink, Navigate } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Green from "./pages/Green";
import Red from "./pages/Red";
import styles from "./App.module.css";
import CountryList from "./components/CountryList";
import CityList from "./components/CityList";

import "./App.css";
import ColorDetail from "./components/ColorDetail";
import AppLayout from "./pages/AppLayout";

const tempCities = [
  { id: 1, cityName: "Praha", country: "Česko", emoji: "🇨🇿", date: "2023-10-01" },
  { id: 2, cityName: "Paříž", country: "Francie", emoji: "🇫🇷", date: "2023-12-15" },
];

function App() {
  return (
    <div>
      <p>APP</p>
      <BrowserRouter>
        <NavLink className={styles.link} to="/app/home">
          Home
        </NavLink>
        <NavLink className={styles.link} to="/app/red">
          Red
        </NavLink>
        <NavLink className={styles.link} to="/app/green">
          Green
        </NavLink>
        <NavLink className={styles.link} to="/app/color/orange">
          Orange
        </NavLink>
        <NavLink className={styles.link} to="/app/color/blue">
          Blue
        </NavLink>
        <Routes>
          <Route path="app" element={<AppLayout />}>
            <Route index element={<Navigate replace to="home" />} />
            <Route path="color/:colorName" element={<ColorDetail />} />
            <Route path="red" element={<Red />} />
            <Route path="green" element={<Green />} />
            <Route path="home" element={<Homepage />}>
              <Route index element={<Navigate replace to="cities" />} />
              <Route path="cities" element={<CityList />} />
              <Route path="countries" element={<CountryList />} />
            </Route>
            <Route path="cities" element={<CityList />} />
            <Route path="countries" element={<CountryList />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
