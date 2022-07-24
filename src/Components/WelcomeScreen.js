import React from 'react';

export default function WelcomeScreen({layoutWelcome, setLayoutWelcome, setLayoutGame, setDeckValue}){

    function changeLayout(){
        setLayoutWelcome('invisible')
        setLayoutGame('gameScreen')        
    }

    const [btnDisabled, setBtnDisabled] = React.useState(true);

    function setValueOnChange(e){
        setDeckValue(parseInt(e.target.value))
        setBtnDisabled(false)
    }
    return (
        <div className={layoutWelcome}>
            <img src="./image/logo-grande.png" alt="Zap Logo" />
            <h1>ZapRecall</h1>
            <select name="selected" id="selected" onChange={ e => setValueOnChange(e) }>
                <option disabled selected>Escolha o seu deck</option>
                <option value="0">React</option>
                <option value="1">Clã Uchiha</option>
                <option value="2">Inglês</option>
            </select>
            <button disabled={btnDisabled} onClick={changeLayout} className="btn-init-recall">Iniciar Recall!</button>
        </div>
    );
}