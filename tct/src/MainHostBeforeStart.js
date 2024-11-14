import React from 'react';
import './MainHostBeforeStart.css';

function App() {
  return (
    <div className="container">
      <header className="header">
        <h1 className="logo">TCT</h1>
        <div className="profile-icon">👤</div>
      </header>
      <main className="button-container">
        <button className="custom-button">대관하기</button>
        <button className="custom-button">참여하기</button>
        <button className="custom-button">시작하기</button>
      </main>
    </div>
  );
}

export default App;
