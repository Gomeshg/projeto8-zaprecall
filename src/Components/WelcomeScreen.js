import React from 'react';

export default function WelcomeScreen({layoutWelcome, setLayoutWelcome, setLayoutGame}){

    function changeLayout(){
        setLayoutWelcome('invisible')
        setLayoutGame('gameScreen')
    }


    return (
        <div className={layoutWelcome}>
            <img src="./image/logo-grande.png" alt="Zap Logo" />
            <h1>ZapRecall</h1>
            <button onClick={changeLayout} className="btn-init-recall">Iniciar Recall!</button>
        </div>
    );
}