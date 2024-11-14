import React, { useState } from 'react';
import './Main.css';
import MainGeneral from "./MainGeneral";
import MainHeader from "./MainHeader";
import { useNavigateToNextPage } from './nextMainPage';

function MainParticipating() {
    const { showNextPage, handleNextPageClick } = useNavigateToNextPage();
    const [isFirstModalOpen, setFirstModalOpen] = useState(false);
    const [isSecondModalOpen, setSecondModalOpen] = useState(false);

    const handleFirstModalOpen = () => setFirstModalOpen(true);
    const handleFirstModalClose = () => setFirstModalOpen(false);

    const handleSecondModalOpen = () => {
        setFirstModalOpen(false); // 첫 번째 모달 닫기
        setSecondModalOpen(true); // 두 번째 모달 열기
    };

    const handleSecondModalClose = () => setSecondModalOpen(false);

    if (showNextPage) {
        return <MainGeneral />;
    }

    return (
        <div className="container">
            <MainHeader />
            <main className="button-container">
                <button className="button_main blue">대관하기</button>
                <button className="button_main blue">참여하기</button>
                <button className="button_main red" onClick={handleFirstModalOpen}>퇴실하기</button>
                <button className="button_main red" onClick={handleNextPageClick}>다음 메인페이지</button>
            </main>

            {/* 첫 번째 모달 */}
            {isFirstModalOpen && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <h2>사진</h2>
                        <div className="photo-grid">
                            <div className="photo-box">
                                <img src="SP.jpg" alt="예약 이미지" />
                            </div>  
                            <div className="photo-box">
                                <img src="SJ.jpg" alt="예약 이미지" />
                            </div>
                            <div className="photo-box"></div>
                            <div className="photo-box"></div>
                        </div>
                        <button className="button_main_disabled" onClick={handleSecondModalOpen}>퇴실</button>
                        <button className="modal-close" onClick={handleFirstModalClose}>닫기</button>
                    </div>
                </div>
            )}

            {/* 두 번째 모달 */}
            {isSecondModalOpen && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <h2>퇴실되었습니다</h2>
                        <button className="modal-confirm" onClick={handleSecondModalClose}>확인</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default MainParticipating;
