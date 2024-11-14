import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Main.css'
import MainHeader from "./MainHeader";
import MainHostBeforeStart from "./MainHostBeforeStart";
import {useNavigateToNextPage} from "./nextMainPage";

function MainHostAfterStart() {
    const { showNextPage, handleNextPageClick } = useNavigateToNextPage();
    const navigate = useNavigate();

    if (showNextPage) {
        return <MainHostBeforeStart />;
    }

    const handleReservationClick = () => {
        navigate('/reservation1');
    };

    const handleJoinClick = () => {
        navigate('Join');
    }

    return (
    <div className="container_main">
        <MainHeader/>
        <div className="main_button-container">
            <button className="button_main blue" onClick={handleReservationClick}>대관하기</button>
            <button className="button_main blue" onClick={handleJoinClick}>참여하기</button>
            <button className="button_main red">관리하기</button>
            <button className="button_main red" onClick={handleNextPageClick}>다음 메인페이지</button>
        </div>
    </div>
    );
}

export default MainHostAfterStart;
