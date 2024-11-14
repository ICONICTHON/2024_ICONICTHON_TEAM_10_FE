import React, { useState } from 'react';
import Header from "./MainPage/MainHeader";

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

const tags1 = ['회의', '공부', '강의', '시험'];
const tags2 = ['잡담 가능', '정숙'];

function Join() {
  const [selectedRoom, setSelectedRoom] = useState('');
  const [selectedTag1, setSelectedTag1] = useState('');
  const [selectedTag2, setSelectedTag2] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [selectedReservation, setSelectedReservation] = useState(null);

  const handleSearch = () => {
    // 검색 로직을 추가하거나 필요한 경우 상태를 업데이트하세요.
    // setIsModalOpen(true); // 이 부분을 제거하여 '검색' 버튼 클릭 시 모달이 뜨지 않도록 합니다.
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setIsChecked(false); // 체크박스 초기화
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleParticipation = () => {
    setIsModalOpen(false);
    setIsNotificationOpen(true);
  };

  const closeNotification = () => {
    setIsNotificationOpen(false);
  };

  // 목록에서 '참여' 버튼을 클릭했을 때 호출되는 함수
  const handleOpenModal = (reservation) => {
    setSelectedReservation(reservation);
    setIsModalOpen(true);
  };

  // 예시로 사용할 예약 데이터
  const reservationList = [
    {
      building: '신공학관',
      room: '6119',
      name: '컴공모여라',
      time: '11/15 9시~',
      notice: '강의실 사용 시 정숙해 주시기 바랍니다.',
    },
    // 필요한 경우 더 많은 예약 데이터를 추가하세요.
  ];

  return (
    <div className="container_main">
      <Header/>
      <main className="reservation-container">
        <label className="h4Font">참여하기</label>
        <div className="form-group">
          <div className="form-row">
            <div className="form">
              <label className="NormalFont">건물</label>
              <select disabled>
                <option>신공학관</option>
              </select>
            </div>
            <div className="form">
              <label className="NormalFont">강의실</label>
              <select value={selectedRoom} onChange={(e) => setSelectedRoom(e.target.value)}>
                <option value="">선택하세요</option>
                {rooms.map((room) => (
                <option key={room.id} value={room.id}>
                  {room.id} ({room.name})
                </option>
                ))}
              </select>
            </div>
          </div>
          <div className="form-row">
            <div className="form">
              <label className="NormalFont">태그1</label>
              <select value={selectedTag1} onChange={(e) => setSelectedTag1(e.target.value)}>
                <option value="">선택하세요</option>
                {tags1.map((tag, index) => (
                  <option key={index} value={tag}>
                    {tag}
                  </option>
                ))}
              </select>
            </div>
            <div className="form">
              <label className="NormalFont">태그2</label>
              <select value={selectedTag2} onChange={(e) => setSelectedTag2(e.target.value)}>
                <option value="">선택하세요</option>
                {tags2.map((tag, index) => (
                  <option key={index} value={tag}>
                    {tag}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="form">
            <label className="NormalFont">대관명</label>
            <input className="SmallFont" type="text" placeholder="여기에 입력하세요"/>
          </div>
        </div>

        <button className="mini-button yellow" onClick={handleSearch}>검색</button>

        <div className="reservation-container top bottom">
          <label className="h4Font">목록</label>
          <table className="data-table">
            <thead>
              <tr>
                <th>건물</th>
                <th>강의실</th>
                <th>대관명</th>
                <th>시간</th>
                <th>참여</th>
              </tr>
            </thead>
            <tbody>
              {reservationList.map((reservation, index) => (
                <tr key={index}>
                  <td>{reservation.building}</td>
                  <td>{reservation.room}</td>
                  <td>{reservation.name}</td>
                  <td>{reservation.time}</td>
                  <td>
                    <button
                      className="mini-button yellow"
                      onClick={() => handleOpenModal(reservation)}
                    >
                      참여
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>

      {/* 참여 모달 */}
      {isModalOpen && selectedReservation && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content-big" onClick={(e) => e.stopPropagation()}>
            <h2>선택 정보</h2>
            <p>
              {selectedReservation.building} {selectedReservation.room} {selectedReservation.name}
            </p>
            <div>
              <strong>유의사항</strong>
              <div style={{
                border: '1px solid #ddd',
                padding: '10px',
                marginTop: '5px',
                overflowY: 'auto',
                maxHeight: '100px'
              }}>
                {selectedReservation.notice}
              </div>
            </div>
            <div className="modal-footer">
              <div className="checkbox">
                <input type="checkbox" id="agree" checked={isChecked} onChange={handleCheckboxChange}/>
                <label htmlFor="agree" style={{marginLeft: '5px'}}>위 내용에 동의합니다</label>
              </div>
              <button
                className={`modal-button ${isChecked ? '' : 'disabled'}`}
                disabled={!isChecked}
                onClick={handleParticipation}
              >
                참여
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 참여 완료 모달 */}
      {isNotificationOpen && (
        <div className="modal-overlay" onClick={closeNotification}>
          <div className="modal-content-small" onClick={(e) => e.stopPropagation()}>
            <p>참여되었습니다</p>
            <button className="modal-button" onClick={closeNotification}>확인</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Join;