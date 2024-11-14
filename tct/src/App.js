// App.js
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainGeneral from './MainPage/MainGeneral';
import MainHostBeforeStart from './MainPage/MainHostBeforeStart';
import Reservation1 from './Reservation1';
import Reservation2 from './Reservation2';
import Join from './Join';
import ReservationInfo from './ReservationInfo';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainGeneral />} />
        <Route path="/mainHostBeforeStart" element={<MainHostBeforeStart />} />
        <Route path="/reservation1" element={<Reservation1 />} />
        <Route path="/reservation2" element={<Reservation2 />} />
        <Route path="/Join" element={<Join />} />
        <Route path="/ReservationInfo" element={<ReservationInfo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
