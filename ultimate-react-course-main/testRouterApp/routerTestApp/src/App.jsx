import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Green from "./pages/Green";
import Red from "./pages/Red";

import "./App.css";

function App() {
  return (
    <div>
      <p>APP</p>
      <BrowserRouter>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="red" element={<Red />} />
          <Route path="green" element={<Green />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
