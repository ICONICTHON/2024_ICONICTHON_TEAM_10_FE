import React from 'react';
import '../css/Main.css';
import MainHeader from "./MainHeader";
import MainGeneral from "./MainGeneral";
import { useNavigateToNextPage } from './nextMainPage';

function MainParticipating() {
    const { showNextPage, handleNextPageClick } = useNavigateToNextPage();

    if (showNextPage) {
        return <MainGeneral />;
    }
    return (
        <div className="container_main">
        <MainHeader />
            <main className="main_button-container">
                <button className="button_main blue">대관하기</button>
                <button className="button_main blue">참여하기</button>
                <button className="button_main red">퇴실하기</button>
                <button className="button_main red" onClick={handleNextPageClick}>다음 메인페이지</button>
            </main>
        </div>
    );
}

export default MainParticipating;
