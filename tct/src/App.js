// App.js
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainGeneral from './MainPage/MainGeneral';
import Reservation1 from './Reservation1';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainGeneral />} />
        <Route path="/reservation1" element={<Reservation1 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
