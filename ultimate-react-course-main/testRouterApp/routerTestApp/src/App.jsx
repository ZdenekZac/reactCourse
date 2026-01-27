import { useState } from 'react'
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"
import Homepage from './pages/Homepage';

import './App.css'

function App(){

return(
  <div>
    <p>APP</p>
    <BrowserRouter>
    <Routes>

    <Route index element={ <Homepage />}/>
    </Routes>
    </BrowserRouter>
   
  </div>
)
}

export default App;