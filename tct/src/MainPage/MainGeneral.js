import React from 'react';
import '../css/Main.css';
import '../css/layout.css';
import MainHeader from "./MainHeader";
import MainHostAfterStart from "./MainHostAfterStart";
import { useNavigateToNextPage } from './nextMainPage';

function MainGeneral() {
    const { showNextPage, handleNextPageClick } = useNavigateToNextPage();

    if (showNextPage) {
        return <MainHostAfterStart />;
    }

    return (
        <div className="container_main">
            <MainHeader />
            <main className="main_button-container">
                <button className="button_main blue">대관하기</button>
                <button className="button_main blue">참여하기</button>
                <button className="button_main_disabled" disabled>시작하기</button>
                <button className="button_main red" onClick={handleNextPageClick}>다음 메인페이지</button>
            </main>
        </div>
    );
}

export default MainGeneral;
