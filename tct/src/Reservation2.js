import React, { useState, useEffect } from 'react';
import './Reservation2.css';

function Reservation2() {
  const [reservationData, setReservationData] = useState(null);
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    fetchReservationData();
  }, []);

  const fetchReservationData = () => {
    fetch('http://localhost:8000/api/get_latest_reservation/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(data => setReservationData(data))
      .catch(error => console.error('Error:', error));
  };

  const handleCheckboxChange = () => setIsChecked(!isChecked);

  return (
    <div className="reservation-summary-container">
      <header>
        <h1 className="logo">TCT</h1>
        <span className="profile-icon">👤</span>
      </header>

      <h2 className="title">요약정보</h2>
      {reservationData ? (
        <>
          <p>건물명: {reservationData.building_name}</p>
          <p>강의실 ID: {reservationData.room_id}</p>
          <p>예약 날짜: {reservationData.reservation_date}</p>
          <p>예약 시간: {reservationData.start_time} - {reservationData.end_time}</p>
          <p>대관명: {reservationData.custom_tag}</p>
          <p>태그1: {reservationData.tag_1}</p>
          <p>태그2: {reservationData.tag_2}</p>
        </>
      ) : (
        <p>로딩 중...</p>
      )}

      <h3 className="subtitle">유의사항</h3>
      <div className="notice-box">
        <p>유의사항을 잘 읽고 동의해주세요. (여기에 유의사항 텍스트 표시)</p>
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
