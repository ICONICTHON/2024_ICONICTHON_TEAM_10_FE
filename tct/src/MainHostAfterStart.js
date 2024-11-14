import React from 'react';
import './MainHostAfterStart.css';

function MainScreen() {
  return (
    <div className="main-container">
      <header className="header">
        <h1 className="title">TCT</h1>
        <div className="profile-icon">👤</div>
      </header>
      <div className="button-container">
        <button className="btn btn-blue">대관하기</button>
        <button className="btn btn-blue">참여하기</button>
        <button className="btn btn-red">관리하기</button>
      </div>
    </div>
  );
}

export default MainScreen;
