import React from 'react';
import WelcomeScreen from './WelcomeScreen'
import GameScreen from './GameScreen';

export default function Screen(){

    const [layoutGame, setLayoutGame] = React.useState('invisible')
    const [layoutWelcome, setLayoutWelcome] = React.useState('welcomeScreen');

    const [deckValue, setDeckValue] = React.useState(0);

    return (
        <>
            <WelcomeScreen layoutWelcome={layoutWelcome} setLayoutWelcome={setLayoutWelcome} setLayoutGame={setLayoutGame} setDeckValue={setDeckValue} />
            <GameScreen layoutGame={layoutGame} deckValue={deckValue} setLayoutWelcome={setLayoutWelcome} setLayoutGame={setLayoutGame}/>
        </>
    );
}