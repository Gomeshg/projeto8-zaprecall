import Header from './Header';
import Cards from './Cards';
import FeedbackGame from './FeedbackGame';

import React from 'react';

export default function GameScreen({layoutGame}){
    
    let deck = [
        {
            question: 'O que é JSX?',
            answer: 'Uma extensão de linguagem do JavaScript'
        },
        {
            question: ' O React é...',
            answer: 'Uma biblioteca JavaScript para construção de interfaces'
        },
        {
            question: 'Componentes devem iniciar com...',
            answer: 'Letras maiúsculas'
        },
        {
            question: 'Podemos colocar.....dentro do JSX',
            answer: 'Expressões'
        },
        {
            question: 'O ReactDOM nos ajuda...',
            answer: 'interagindo com a DOM para colocar componentes React na mesma'
        },
        {
            question: 'Usamos o npm para...',
            answer: 'gerenciar os pacotes necessários e suas dependências'
        },
        {
            question: 'Usamos props para...',
            answer: 'passar diferentes informações para componentes'
        },
        {
            question: 'Usamos estado (state) para...',
            answer: 'dizer para o React quais informações quando atualizadas devem renderizar a tela novamente'
        }
    ]

    deck = [...shuffleArray(deck)]

    const [feedbackList, setFeedbackList] = React.useState([]);
    const [classFeedbackGame, setClassFeedbackGame] = React.useState('feedbackGame');
    const [isWinner, setIsWinner] = React.useState(true);
    // const [deck, shuffleDeck] = React.useState(deck__)

    

    // shuffleDeck([...shuffleArray(deck__)])

    
    function shuffleArray(arr) {
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    }
    
    

    return (
        <div className={layoutGame}>
            <Header/>
            <Cards feedbackList={feedbackList} setFeedbackList={setFeedbackList} deck={deck} setClassFeedbackGame={setClassFeedbackGame} setIsWinner={setIsWinner}/>
            <FeedbackGame feedbackList={feedbackList} deck={deck} classFeedbackGame={classFeedbackGame} isWinner={isWinner}/>        
        </div>
    );
}