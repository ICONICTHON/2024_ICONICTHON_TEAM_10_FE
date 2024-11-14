// App.js
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainGeneral from './MainPage/MainGeneral';
import Reservation1 from './Reservation1';
import Join from "./Join";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainGeneral />} />
        <Route path="/reservation1" element={<Reservation1 />} />
        <Route path="/Join" element={<Join />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
