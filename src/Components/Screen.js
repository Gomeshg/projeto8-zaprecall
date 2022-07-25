import React from 'react';
import WelcomeScreen from './WelcomeScreen'
import GameScreen from './GameScreen';

export default function Screen(){

    const [layoutGame, setLayoutGame] = React.useState('invisible')
    const [layoutWelcome, setLayoutWelcome] = React.useState('welcomeScreen');

    const [deckValue, setDeckValue] = React.useState(0);

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

    deck = [...shuffle_list(deck[deckValue])]


    function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
    
    function shuffle_list(list_gifs){
    
        let final_list = [];
    
        let cont = list_gifs.length;
        while(true){
    
            let index = getRandomIntInclusive(0, list_gifs.length-1);
            final_list.push(list_gifs[index])
            list_gifs.splice(index, 1)
    
            if(cont === final_list.length){
                break;
            }
        }
    
        return final_list;
    }
    

    return (
        <>
            <WelcomeScreen layoutWelcome={layoutWelcome} setLayoutWelcome={setLayoutWelcome} setLayoutGame={setLayoutGame} setDeckValue={setDeckValue} />
            <GameScreen layoutGame={layoutGame} deck={deck} setLayoutWelcome={setLayoutWelcome} setLayoutGame={setLayoutGame}/>
        </>
    );
}