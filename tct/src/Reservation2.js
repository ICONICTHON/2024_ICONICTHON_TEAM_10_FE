// Reservation2.js
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './Reservation2.css';

function Reservation2() {
  const { state } = useLocation(); // Reservation1에서 전달된 데이터
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => setIsChecked(!isChecked);

  return (
    <div className="reservation-summary-container">
      <header>
        <h1 className="logo">TCT</h1>
        <span className="profile-icon">👤</span>
      </header>

      <h2 className="title">요약정보</h2>
      <p>{state.building_name} {state.room_id}</p>
      <p>{state.reservation_date} {state.start_time} - {state.end_time}</p>

      <h3 className="subtitle">유의사항</h3>
      <div className="notice-box">
        <p>승주는 개꿀초입니다... (유의사항 텍스트를 여기에 표시)</p>
      </div>

      <label className="checkbox-container">
        위 내용에 동의합니다
        <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
      </label>

      <button className="complete-button" disabled={!isChecked}>완료</button>
    </div>
  );
}

export default Reservation2;
