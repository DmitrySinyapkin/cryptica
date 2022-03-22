import React, {useState} from "react";
import './TickerInput.scss';

const TickerInput = () => {
    const [text, setText] = useState('');

    return (
        <div className="ticker-input">
            <div>
                <input type="text" className="ticker-input__input" placeholder="Название монеты" onChange={e => setText(e.target.value)} />
            </div>
            <div>
                <button type="button" className="ticker-input__add-btn">Добавить</button>
            </div>
        </div>
    );
}

export default TickerInput;
