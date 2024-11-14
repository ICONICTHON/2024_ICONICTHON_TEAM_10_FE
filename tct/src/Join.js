import React, { useState } from 'react';
import './Reservation1.css';
import Header from "./MainPage/MainHeader";
import './css/layout.css';
import './css/fonts.css';

function Join() {
  const [selectedRoom, setSelectedRoom] = useState('');
  const [tag_1, setTag1] = useState('');
  const [tag_2, setTag2] = useState('');

  const rooms = [
    { id: '2158', name: '일반생물학실험실' },
    { id: '2166', name: '강의실' },
    { id: '2170', name: '반도체설계실습실' },
    { id: '2171', name: '반도체소자/공정실습실' },
    { id: '3101', name: '강의실' },
    { id: '3106', name: '강의실_스마트' },
    { id: '3107', name: '강의실' },
    { id: '3114', name: '융합에너지신소재공학과 학부실습실' },
    { id: '3115', name: 'AI융합대학 컴퓨터실습실' },
    { id: '3133', name: '전자회로실험실' },
    { id: '3155', name: '디지털실험실' },
    { id: '3157', name: '기초전자실험실 1' },
    { id: '3163', name: '정보통신공학실습실1' },
    { id: '3165', name: '정보통신공학실습실2' },
    { id: '3182', name: '컴퓨터공학 실습실3' },
    { id: '3183', name: '컴퓨터공학 실습실2' },
    { id: '3189', name: '캡스톤디자인실' },
    { id: '3193', name: '설계시뮬레이션강의실' },
    { id: '4105', name: '멀티미디어공학과 실습실' },
    { id: '4127', name: '전기기계실험실' },
    { id: '4137', name: '멀티미디어공학과 학부실습실1' },
    { id: '4142', name: '신공학관 강당_스마트' },
    { id: '4147', name: '강의실_스마트' },
    { id: '4161', name: '종합설계실습실' },
    { id: '5141', name: '강의실_스마트' },
    { id: '5143', name: '강의실_스마트' },
    { id: '5145', name: '강의실' },
    { id: '5147', name: '강의실' },
    { id: '6119', name: '컴퓨터공학 실습실1(ESC4)' },
    { id: '6122', name: '정보통신공학 실습실' },
    { id: '6141', name: '강의실' },
    { id: '6144', name: '강의실' },
    { id: '6147', name: '강의실' },
  ];

  // 예시로 사용할 예약 데이터
  const reservationList1 = [
    {
      building: '신공학관',
      custom_tag: '컴공모여라',
      room: '6119',
      start_time: '11:00',
      end_time:'15:00',
      tag1: '회의',
      tag2: '정숙',
    },
  ];
  
  const handleRoomChange = (event) => {
    setSelectedRoom(event.target.value);
  };

  const handleTag1Select = (tag) => {
    setTag1(tag);
  };

  const handleTag2Select = (tag) => {
    setTag2(tag);
  };

  return (
    <div className="reservation-container">
      <Header />
      <label className="h4Font">참여하기</label>
      
      <div className="form-group">
        <div className="form">
          <label className="NormalFont">건물</label>
          <select value="신공학관" disabled>
            <option value="신공학관">신공학관(기숙사)</option>
          </select>
        </div>

        <div className="form">
          <label className="NormalFont">강의실</label>
          <select value={selectedRoom} onChange={handleRoomChange}>
            <option value="">강의실 선택</option>
            {rooms.map((room) => (
                <option key={room.id} value={room.id}>
                  {room.id} ({room.name})
                </option>
            ))}
          </select>
        </div>
      </div>

      <div className="group">
        <div className="form-group">
          <label className="NormalFont">목적</label>
          <div className="tag-options">
            {["회의", "공부", "강의", "시험"].map(tag => (
              <button
              key={tag}
              className={tag_1 === tag ? 'tag-button selected' : 'tag-button'}
              onClick={() => handleTag1Select(tag)}
              >
                {tag}
                </button>
              ))}
          </div>
        </div>
              
        <div className="form-group">
          <label className="NormalFont">분위기</label>
          <div className="tag-options">
            {["잡담 가능", "정숙"].map(tag => (
              <button
              key={tag}
              className={tag_2 === tag ? 'tag-button selected' : 'tag-button'}
              onClick={() => handleTag2Select(tag)}
              >
                {tag}
                </button>
              ))}
          </div>
        </div>

        {reservationList1.map((reservation, index) => (
        <div key={index} className="reservation-card">
          <div className="card-header">
            <img src='/building.png' alt="Building" className="building-icon" />
            <span className="building-name">{reservation.building}</span>
          </div>
          <h3 className="reservation-name">{reservation.custom_tag}</h3>
          <h3 className="room-info">401-{reservation.room}(컴퓨터공학 실습실1(ESC4))</h3>

          <div className="time-info">
            <img src='/clock.png' alt="Clock" className="clock-icon" />
            <span>{reservation.start_time} ~ {reservation.end_time}</span>
          </div>

          <div className="tag-list">
            <span className="tag">{reservation.tag1}</span>
            <span className="tag">{reservation.tag2}</span>
          </div>
        </div>
      ))}

      </div>
    </div>
  );
}

export default Join;