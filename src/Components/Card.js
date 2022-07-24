import React from 'react';

export default function Card({feedbackList, setFeedbackList, card, index, tamanhoDeck, setClassFeedbackGame, setIsWinner}){

    // LOGIC
    const [text, setText] = React.useState(`Pergunta ${index}`); 
    const [styleText, setStyleText] = React.useState('');
    const [image, setImage] = React.useState('./image/arrow.png')
    const [classCard, setClassCard] = React.useState('card')
    const [classImage, setClassImage] = React.useState('arrow')

    const[frontFace, rotateFrontFace] = React.useState('cardHidden face')
    const[backFace, rotateBackFace] = React.useState('cardAnswer back-face face')

     
    function openCard(){
        
        if(classImage === 'arrow'){
            setText(card.question)
            setImage('./image/arrowSpin.png')
            setClassImage('arrowSpin')
            setClassCard('card-update')
            rotateFrontFace('cardQuestion face')
        }
    }
    function openZap(){
        
        rotateFrontFace('cardQuestion rotate-front-face face')
        rotateBackFace('cardAnswer rotate-back-face face')
    }
    function zap(){
        rotateFrontFace('cardHidden face')
        rotateBackFace('cardAnswer back-face face')

        setText('Pergunta 1')
        setImage('./image/zap.png')
        setClassImage('iconFeedback')
        setClassCard('card')

        setStyleText('styleTextZap')

        const newFeedback = [...feedbackList, './image/zap.png']
        setFeedbackList(newFeedback)

        completionCondition(feedbackList, tamanhoDeck)
    }
    function almostForgot(){
        rotateFrontFace('cardHidden face')
        rotateBackFace('cardAnswer back-face face')

        setText('Pergunta 1')
        setImage('./image/almostForgot.png')
        setClassImage('iconFeedback')
        setClassCard('card')

        setStyleText('styleTextAlmostForgot')

        const newFeedback = [...feedbackList, './image/almostForgot.png']
        setFeedbackList(newFeedback)

        completionCondition(feedbackList, tamanhoDeck)

    }
    function forgot(){
        rotateFrontFace('cardHidden face')
        rotateBackFace('cardAnswer back-face face')

        setText('Pergunta 1')
        setImage('./image/forgot.png')
        setClassImage('iconFeedback')
        setClassCard('card')

        setStyleText('styleTextForgot')

        const newFeedback = [...feedbackList, './image/forgot.png']
        setFeedbackList(newFeedback)
        setIsWinner(false)

        completionCondition(feedbackList, tamanhoDeck)
    }

    function completionCondition(feedbackList, tamanhoDeck){

        if(feedbackList.length === tamanhoDeck-1){
            setClassFeedbackGame('feedbackGame endGame')
        }
    }

    // LAYOUT

    return (
        <div className="container-card">

            <div className={classCard}>

                <div className={frontFace}>
                    <p className={styleText}>{text}</p>
                    <img className={classImage} onClick={classImage === 'arrow' || classImage === 'arrowSpin' ? classImage === 'arrow' ? openCard:openZap : ''} src={image} alt="Seta" />
                </div>  

                <div className={backFace}>
                    <p>{card.answer}</p>
                    <div className="btn-container">
                        <button onClick={forgot} className="btn btn-forgot">Não lembrei</button>
                        <button onClick={almostForgot} className="btn btn-almostForgot">Quase não lembrei</button>
                        <button onClick={zap} className="btn btn-zap">Zap!</button>
                    </div>
                </div>
            </div>

        </div>
    );
}
        