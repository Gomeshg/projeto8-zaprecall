import React from 'react';
import WelcomeScreen from './WelcomeScreen'
import GameScreen from './GameScreen';

export default function Screen(){

    const [layoutGame, setLayoutGame] = React.useState('invisible')
    const [layoutWelcome, setLayoutWelcome] = React.useState('welcomeScreen');


    return (
        <>
            <WelcomeScreen layoutWelcome={layoutWelcome} setLayoutWelcome={setLayoutWelcome} setLayoutGame={setLayoutGame} />
            <GameScreen layoutGame={layoutGame}/>
        </>
    );
}