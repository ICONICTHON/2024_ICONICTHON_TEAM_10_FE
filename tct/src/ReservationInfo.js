import React, { useEffect, useState } from 'react';
import './ReservationInfo.css';

function ReservationInfo() {
  const [data, setData] = useState({
    custom_tag: '우히히!',
    building_name: '우히히!',
    room_number: '우히히!',
    tag_1: '우히히!',
    tag_2: '우히히!',
  });

  const [isUnlocked, setIsUnlocked] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 서버 연동 시 데이터 가져오기
  useEffect(() => {
    /*
    fetch('https://your-api-endpoint.com/api/classroom/')
      .then(response => response.json())
      .then(data => {
        setData({
          custom_tag: data.Classroom.custom_tag,
          building_name: data.Classroom.building_name,
          room_number: data.Classroom.room_number,
          tag_1: data.Classroom.tag_1,
          tag_2: data.Classroom.tag_2,
        });
      })
      .catch(error => console.error('Error fetching data:', error));
    */
  }, []);

  const handleUnlock = () => {
    setIsUnlocked(true);
    setIsModalOpen(true); // 모달 창 열기
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="reservation-container">
      <header className="header">
        <h1 className="logo">TCT</h1>
        <div className="profile-icon">👤</div>
      </header>

      <main className="main-content">
        <h2 className="title">대관 정보</h2>

        <div className="form-group">
          <label className="full-width">
            대관명
            <input type="text" value={data.custom_tag} readOnly />
          </label>
          <div className="form-row">
            <label>
              건물
              <input type="text" value={data.building_name} readOnly />
            </label>
            <label>
              강의실
              <input type="text" value={data.room_number} readOnly />
            </label>
          </div>
          <div className="form-row">
            <label>
              태그₁
              <input type="text" value={data.tag_1} readOnly />
            </label>
            <label>
              태그₂
              <input type="text" value={data.tag_2} readOnly />
            </label>
          </div>
        </div>

        <button className="unlock-button" onClick={handleUnlock} disabled={isUnlocked}>
          잠금해제
        </button>

        {isModalOpen && (
          <div className="modal">
            <div className="modal-content">
              <h2>IoT 원격 조정</h2>
              <div className="toggle-group">
                <label>
                  조명
                  <input type="checkbox" className="toggle-switch" />
                </label>
                <label>
                  냉방
                  <input type="checkbox" className="toggle-switch" />
                </label>
              </div>
              <button className="next-button" onClick={closeModal}>
                계속
              </button>
            </div>
          </div>
        )}

        <div className="info-section">
          <div className="image-section">
            <h3>사진</h3>
            <img src="SP.jpg" alt="예약 이미지" />
          </div>
          <div className="terms-section">
            <h3>유의사항</h3>
            <div className="terms-text">
              승주는 개꼴초입니다 승주는 개꼴초입니다 승주는 개꼴초입니다 승주는 개꼴초입니다 승주는 개꼴초입니다 승주는 개꼴초입니다 승주는 개꼴초입니다 
            </div>
          </div>
        </div>

        <button className="next-button">처음으로</button>
      </main>
    </div>
  );
}

export default ReservationInfo;
