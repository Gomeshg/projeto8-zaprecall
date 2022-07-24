import React from 'react';

export default function FeedbackGame({feedbackList, deck, classFeedbackGame, isWinner}){

    // const [result, setResult] = React.useState('');
    // const [iconResult, setIconResult] = React.useState('');
    // const [textResult, setTextResult] = React.useState('');

    const iconWinner = './image/party.png';
    const iconLoser = './image/sad.png';
    const titleResultWinner = 'Parabéns!'
    const titleResultLoser = 'Putz...'
    const textResultWinner = 'Você não esqueceu de nenhum flashcard!'
    const textResultLoser = 'Ainda faltam alguns...Mas não desanime!'

    return (
        <div className={classFeedbackGame}>

            {classFeedbackGame === 'feedbackGame' ? 
            
            <div className="feedbackGame-middle">
                <div>
                    <p>{feedbackList.length}/{deck.length} CONCLUÍDOS</p>
                </div>

                <div className="iconFeedbackGame">
                    {feedbackList.map(item => <img src={item}></img>)}
                </div>
            </div>
            :
            <div className="feedbackGame-end">
                <div>
                    <img src={isWinner ? iconWinner : iconLoser} alt="Icon result" />
                    <h3>{isWinner ? titleResultWinner : titleResultLoser}</h3>
                </div>
                <div>
                    <p>{isWinner ? textResultWinner : textResultLoser}</p>
                </div>
                <div>
                    <p>{feedbackList.length}/{deck.length} CONCLUÍDOS</p>
                </div>

                <div className="iconFeedbackGame">
                    {feedbackList.map(item => <img src={item}></img>)}
                </div>
            </div>
            }
           
        </div>
    );
}