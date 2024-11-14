// App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Reservation1 from './Reservation1';
import Reservation2 from './Reservation2';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Reservation1 />} />
        <Route path="/reservation-summary" element={<Reservation2 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
