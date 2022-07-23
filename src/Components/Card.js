import React from 'react';

export default function Card(){

    // LOGIC


    const [text, setText] = React.useState('Pergunta 1'); 
    const [image, setImage] = React.useState('./image/arrow.png')
    const [classCard, setClassCard] = React.useState('card')
    const [classImage, setClassImage] = React.useState('arrow')


    const[frontFace, rotateFrontFace] = React.useState('cardHidden face')
    const[backFace, rotateBackFace] = React.useState('cardAnswer back-face face')

    const [styleText, setStyleText] = React.useState('');


    function openCard(){
        
        if(classImage === 'arrow'){
            setText('O que é JSX?')
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
    }

    function almostForgot(){
        rotateFrontFace('cardHidden face')
        rotateBackFace('cardAnswer back-face face')

        setText('Pergunta 1')
        setImage('./image/almostForgot.png')
        setClassImage('iconFeedback')
        setClassCard('card')

        setStyleText('styleTextAlmostForgot')
    }

    function forgot(){
        rotateFrontFace('cardHidden face')
        rotateBackFace('cardAnswer back-face face')

        setText('Pergunta 1')
        setImage('./image/forgot.png')
        setClassImage('iconFeedback')
        setClassCard('card')

        setStyleText('styleTextForgot')
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
                    <p>O JSX é uma sintaxe para escrever HTML dentro do JS</p>
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
        