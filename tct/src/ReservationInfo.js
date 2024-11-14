import React, { useEffect, useState } from 'react';
import './css/fonts.css'
import './css/layout.css'
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
    <div>
      <MainHeader />
      <main className="reservation-container">
        <label className="h4Font">대관 정보</label>
        <div className="form-group">
          <div className="form">
            <label className="NormalFont">대관명</label>
            <input className="SmallFont" type="text" value={data.custom_tag} readOnly/>
          </div>
          <div className="form-row">
            <div className="form">
              <label className="NormalFont">건물</label>
              <input className="SmallFont" type="text" value={data.building_name} readOnly/>
            </div>
            <div className="form">
              <label className="NormalFont">강의실</label>
              <input className="SmallFont" type="text" value={data.room_number} readOnly/>
            </div>
          </div>
          <div className="form-row">
            <div className="form">
              <label className="NormalFont">태그1</label>
              <input className="SmallFont" type="text" value={data.tag_1} readOnly/>
            </div>
            <div className="form">
              <label className="NormalFont">태그2</label>
              <input className="SmallFont" type="text" value={data.tag_2} readOnly/>
            </div>
          </div>
        </div>

        <button className="button_main yellow"
                onClick={handleUnlock}
                disabled={isUnlocked}>
          잠금해제
        </button>

        {/*{isModalOpen && (*/}
        {/*  <div className="modal">*/}
        {/*    <div className="modal-content">*/}
        {/*      <h2>IoT 원격 조정</h2>*/}
        {/*      <div className="toggle-group">*/}
        {/*        <label>*/}
        {/*          조명*/}
        {/*          <input type="checkbox" className="toggle-switch" />*/}
        {/*        </label>*/}
        {/*        <label>*/}
        {/*          냉방*/}
        {/*          <input type="checkbox" className="toggle-switch" />*/}
        {/*        </label>*/}
        {/*      </div>*/}
        {/*      <button className="next-button" onClick={closeModal}>*/}
        {/*        계속*/}
        {/*      </button>*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*)}*/}

        <div className="section">
          <div className="form">
            <label className="h4Font">사진</label>
            <img className="image" src="SP.jpg" alt="예약 이미지" />
          </div>
          <div className="form">
            <label className="h4Font">유의사항</label>
            <label className="SmallFont box">승주는 개꼴초입니다 승주는 개꼴초입니다 승주는 개꼴초입니다 승주는 개꼴초입니다 승주는 개꼴초입니다 승주는 개꼴초입니다 승주는 개꼴초입니다</label>
          </div>
        </div>

        <button className="button_main yellow"  >
          처음으로
        </button>
      </main>
    </div>
  );
}

export default ReservationInfo;
