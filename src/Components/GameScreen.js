import Header from './Header';
import Cards from './Cards';
import FeedbackGame from './FeedbackGame';

import React from 'react';

export default function GameScreen({layoutGame, deckValue, setLayoutWelcome, setLayoutGame}){
    
    let deck = [
        [
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
        ],
        [
            {
                question:'Qual uchiha possui o genjutsu mais forte?',
                answer:'Shisui'
            },
            {
                question:'Qual uchiha foi responsável por exterminar o próprio clã?',
                answer:'Itachi'
            },
            {
                question:'Qual uchiha é o vilão mais icônico na obra naruto?',
                answer:'Madara'
            },
            {
                question:'Qual uchiha que consegue se tornar imaterial?',
                answer:'Obito'
            },
            {
                question:'Qual o nome do uchiha morto por tobirama?',
                answer:'Izuna, irmão de madara'
            },
            {
                question:'Qual o nome da versão mais poderosa do sharigan?',
                answer:'Mangekyou Sharigan'
            },
            {
                question:'Quais os únicos uchihas capazes de utilizar o Amaterasu?',
                answer:'Itachi e Sasuke'
            },
            {
                question:'Qual uchiha matou danzou?',
                answer:'Sasuke'
            }
        ],
        [
            {
                question: 'I love the way that you make me feel',
                answer: 'Eu amo o jeito que você me faz sentir'
            },
            {
                question: 'Learn to programming was the best thing that I chose to do',
                answer: 'Aprender a programar foi a melhor coisa que eu escolhi fazer'
            },
            {
                question: 'When I was young, I liked to play guitar',
                answer: 'Quando eu era jovem, eu gostava de tocar violão'
            },
            {
                question: 'When I went out last night, I saw my friends having fun without me',
                answer: 'Quando eu saí ontem à noite, eu vi meus amigos se divertindo sem mim'
            },
            {
                question: 'I like to live in a big city, rural life is very boring to me',
                answer: 'Eu gosto de viver em uma cidade grande, a vida rural é muito chata para mim'
            },
            {
                question: 'Read books everyday is the best habit that I create last year',
                answer: 'Ler livros todo dia é o melhor hábito que eu criei ano passado'
            },
            {
                question: "Your thoughts don't define who you are",
                answer: 'Seus pensamentos não definem quem você é'
            },
            {
                question: "Don't be mad with me, wasn't my fault",
                answer: 'Não fique bravo comigo, não foi minha culpa'
            }
        ]
    ]

    deck = [...shuffleArray(deck[deckValue])]

    const [feedbackList, setFeedbackList] = React.useState([]);
    const [classFeedbackGame, setClassFeedbackGame] = React.useState('feedbackGame');
    const [isWinner, setIsWinner] = React.useState(true);

        
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
            <FeedbackGame feedbackList={feedbackList} deck={deck} classFeedbackGame={classFeedbackGame} isWinner={isWinner} setLayoutWelcome={setLayoutWelcome} setLayoutGame={setLayoutGame}/>        
        </div>
    );
}