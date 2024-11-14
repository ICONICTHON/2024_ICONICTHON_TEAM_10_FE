import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Main.css';
import '../css/layout.css'
import '../css/modal.css';
import MainGeneral from "./MainGeneral";
import MainHeader from "./MainHeader";
import { useNavigateToNextPage } from './nextMainPage';

function MainParticipating() {
    const { showNextPage, handleNextPageClick } = useNavigateToNextPage();
    const [isFirstModalOpen, setFirstModalOpen] = useState(false);
    const [isSecondModalOpen, setSecondModalOpen] = useState(false);
    const navigate = useNavigate();

    const handleFirstModalOpen = () => setFirstModalOpen(true);
    const handleFirstModalClose = () => setFirstModalOpen(false);

    const handleSecondModalOpen = () => {
        setFirstModalOpen(false); // 첫 번째 모달 닫기
        setSecondModalOpen(true); // 두 번째 모달 열기
    };

    const handleSecondModalClose = () => setSecondModalOpen(false);

    const handleReservationClick = () => {
        navigate('/reservation1');
    };

    const handleJoinClick = () => {
        navigate('Join');
    }

    if (showNextPage) {
        return <MainGeneral />;
    }

    return (
        <div className="container_main">
            <MainHeader />
            <main className="main_button-container">
                <button className="button_main blue" onClick={handleReservationClick} >대관하기</button>
                <button className="button_main blue" onClick={handleJoinClick}>참여하기</button>
                <button className="button_main red" onClick={handleFirstModalOpen}>퇴실하기</button>
                <button className="button_main red" onClick={handleNextPageClick}>다음 메인페이지</button>
            </main>

            {/* 퇴실 시 사진 요구 */}
            {isFirstModalOpen && (
                <div className="modal-overlay">
                    <div className="modal-content-big">
                        <label className="h4Font">사진</label>
                        <label className="NormalFont">
                            강의실 전체가
                        </label>
                        <label className="NormalFont">
                            잘 보이게 촬영해주세요!
                        </label>

                        <div className="photo-grid">
                            <div className="photo-box">
                                {/*Todo: 사진 요구 */}
                                <img src="SP.jpg" alt="예약 이미지"/>
                            </div>
                            <div className="photo-box">
                                {/*Todo: 사진 요구 */}
                                <img src="SJ.jpg" alt="예약 이미지"/>
                            </div>
                            <div className="photo-box"></div>
                            <div className="photo-box"></div>
                        </div>
                        <div className="form-row mid">
                            <button className="mini-button yellow" onClick={handleSecondModalOpen}>퇴실</button>
                            <button className="mini-button red" onClick={handleFirstModalClose}>닫기</button>
                        </div>
                    </div>
                </div>
            )}

            {/* 퇴실 완료 */}
            {isSecondModalOpen && (
                <div className="modal-overlay">
                    <div className="modal-content-small">
                        <label className="h4Font">퇴실되었습니다</label>
                        <button className="modal-close NormalFont" onClick={handleSecondModalClose}>확인</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default MainParticipating;
