import React, { useState } from 'react';
import './Join.css';

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

  const handleSearch = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setIsChecked(false); // Reset checkbox
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

  return (
    <div className="container">
      <header className="header">
        <h1 className="logo">TCT</h1>
        <div className="profile-icon">👤</div>
      </header>
      <main className="main-content">
        <h2 className="title">참여하기</h2>

        <div className="form-group">
          <div className="form-row">
            <label>
              건물
              <select disabled>
                <option>신공학관</option>
              </select>
            </label>
            <label>
              강의실
              <select value={selectedRoom} onChange={(e) => setSelectedRoom(e.target.value)}>
                <option value="">선택하세요</option>
                {rooms.map((room) => (
                  <option key={room.id} value={room.id}>
                    {room.name}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <div className="form-row">
            <label>
              태그₁
              <select value={selectedTag1} onChange={(e) => setSelectedTag1(e.target.value)}>
                <option value="">선택하세요</option>
                {tags1.map((tag, index) => (
                  <option key={index} value={tag}>
                    {tag}
                  </option>
                ))}
              </select>
            </label>
            <label>
              태그₂
              <select value={selectedTag2} onChange={(e) => setSelectedTag2(e.target.value)}>
                <option value="">선택하세요</option>
                {tags2.map((tag, index) => (
                  <option key={index} value={tag}>
                    {tag}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <label className="full-width">
            대관명
            <input type="text" placeholder="여기에 입력하세요" />
          </label>
        </div>

        <button className="search-button" onClick={handleSearch}>검색</button>

        <h3 className="subtitle">목록</h3>

        <table className="data-table">
          <thead>
            <tr>
              <th>건물</th>
              <th>강의실</th>
              <th>대관명</th>
              <th>시간</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>신공학관</td>
              <td>6119</td>
              <td>컴공모여라</td>
              <td>11/15 9시~</td>
            </tr>
          </tbody>
        </table>
      </main>

      {isModalOpen && (
        <>
          <div className="overlay" onClick={handleCloseModal}></div>
          <div className="modal">
            <div className="modal-header">선택 정보</div>
            <div className="modal-content">
              <p>신공학관 6119 컴공모여라</p>
              <div className="modal-content">
                <strong>유의사항</strong>
                <div style={{ border: '1px solid #ddd', padding: '10px', marginTop: '5px', overflowY: 'auto', maxHeight: '100px' }}>
                  승주는 개꿀초입니다 승주는 개꿀초입니다...
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <div className="checkbox">
                <input type="checkbox" id="agree" checked={isChecked} onChange={handleCheckboxChange} />
                <label htmlFor="agree" style={{ marginLeft: '5px' }}>위 내용에 동의합니다</label>
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
        </>
      )}

      {isNotificationOpen && (
        <div className="modal">
          <p>참여되었습니다</p>
          <button className="modal-button" onClick={closeNotification}>확인</button>
        </div>
      )}
    </div>
  );
}

export default Join;