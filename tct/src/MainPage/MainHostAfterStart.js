import React from 'react';
import '../css/button.css'
import MainHeader from "./MainHeader";
import MainHostBeforeStart from "./MainHostBeforeStart";
import {useNavigateToNextPage} from "./nextMainPage";

function MainHostAfterStart() {
    const { showNextPage, handleNextPageClick } = useNavigateToNextPage();

    if (showNextPage) {
        return <MainHostBeforeStart />;
    }

    return (
    <div className="container_main">
        <MainHeader/>
        <div className="main_button-container">
            <button className="button_main blue">대관하기</button>
            <button className="button_main blue">참여하기</button>
            <button className="button_main red">관리하기</button>
            <button className="button_main red" onClick={handleNextPageClick}>다음 메인페이지</button>
        </div>
    </div>
    );
}

export default MainHostAfterStart;
