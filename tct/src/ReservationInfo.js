// ReservationInfo.js
import React, { useEffect, useState } from 'react';
import './css/fonts.css';
import './css/layout.css';
import './css/modal.css'; // 모달 스타일 추가
import IoTControlModal from './IoTControlModal'; // IoTControlModal 컴포넌트 임포트
import MainHeader from "./MainPage/MainHeader";

function ReservationInfo() {
  const [data, setData] = useState({
    custom_tag: '우히히!',
    building_name: '우히히!',
    room_number: '우히히!',
    tag_1: '우히히!',
    tag_2: '우히히!',
  });

  const [isUnlocked, setIsUnlocked] = useState(false);
  const [showUnlockModal, setShowUnlockModal] = useState(false);
  const [showIoTModal, setShowIoTModal] = useState(false); // IoT 모달 상태 관리

  // 서버에서 데이터 가져오기 (현재는 주석 처리되어 있음)
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

  // 잠금 해제 버튼 클릭 시 호출되는 함수
  const handleUnlock = () => {
    setIsUnlocked(true);
    setShowUnlockModal(true);
  };

  // 잠금 해제 모달 닫기
  const closeUnlockModal = () => {
    setShowUnlockModal(false);
  };

  // 다음으로 버튼 클릭 시 IoT 모달 표시
  const handleNext = () => {
    setShowIoTModal(true);
  };

  // IoT 모달 닫기
  const closeIoTModal = () => {
    setShowIoTModal(false);
  };

  return (
    <div>
      <MainHeader />
      <main className="reservation-container">
        <label className="h4Font">대관 정보</label>
        <div className="form-group">
          <div className="form">
            <label className="NormalFont">대관명</label>
            <input className="SmallFont" type="text" value={data.custom_tag} readOnly />
          </div>
          <div className="form-row">
            <div className="form">
              <label className="NormalFont">건물</label>
              <input className="SmallFont" type="text" value={data.building_name} readOnly />
            </div>
            <div className="form">
              <label className="NormalFont">강의실</label>
              <input className="SmallFont" type="text" value={data.room_number} readOnly />
            </div>
          </div>
          <div className="form-row">
            <div className="form">
              <label className="NormalFont">태그1</label>
              <input className="SmallFont" type="text" value={data.tag_1} readOnly />
            </div>
            <div className="form">
              <label className="NormalFont">태그2</label>
              <input className="SmallFont" type="text" value={data.tag_2} readOnly />
            </div>
          </div>
        </div>

        <button className="button_main yellow" onClick={handleUnlock} disabled={isUnlocked}>
          잠금해제
        </button>

        {showUnlockModal && (
          <div className="modal-overlay">
            <div className="modal-content-small">
              <h2>잠금해제되었습니다!</h2>
              <button className="modal-close" onClick={closeUnlockModal}>닫기</button>
            </div>
          </div>
        )}

        <div className="section">
          <div className="form">
            <label className="h4Font">사진</label>
            <img className="image" src="SP.jpg" alt="예약 이미지" />
          </div>
          <div className="form">
            <label className="h4Font">유의사항</label> 
            <label className="SmallFont box"> &nbsp;  - 이용시간 08:00-22:00 (1회 4시간 제한)
              <br></br> &nbsp; - 학생수업/실습/연구에 지장이 없는 경우만 승인
              <br></br> &nbsp; - 소음 발생 행사는 학림관 소강당만 가능
              <br></br> &nbsp; - 승인 후에도 학교 공식행사 발생 시 취소될 수 있음
              <br></br> &nbsp; - 대여 전후 강의실 상태 확인을 위한 사진 촬영 필수
              </label>
          </div>
        </div>

        <button className="button_main yellow" onClick={handleNext}>
          다음으로
        </button>
      </main>

      {/* IoT 제어 모달 */}
      <IoTControlModal isOpen={showIoTModal} onClose={closeIoTModal} />
    </div>
  );
}

export default ReservationInfo;
