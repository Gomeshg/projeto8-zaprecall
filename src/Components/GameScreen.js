import Header from './Header';
import Cards from './Cards';
import FeedbackGame from './FeedbackGame';

import React from 'react';

export default function GameScreen({layoutGame, deck, setLayoutWelcome, setLayoutGame}){
    
    

    const [feedbackList, setFeedbackList] = React.useState([]);
    const [classFeedbackGame, setClassFeedbackGame] = React.useState('feedbackGame');
    const [isWinner, setIsWinner] = React.useState(true);

        
    return (
        <div className={layoutGame}>
            <Header/>
            <Cards feedbackList={feedbackList} setFeedbackList={setFeedbackList} deck={deck} setClassFeedbackGame={setClassFeedbackGame} setIsWinner={setIsWinner}/>
            <FeedbackGame feedbackList={feedbackList} deck={deck} classFeedbackGame={classFeedbackGame} isWinner={isWinner} setLayoutWelcome={setLayoutWelcome} setLayoutGame={setLayoutGame}/>        
        </div>
    );
}