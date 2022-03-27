import React, {useState} from "react";
import './TickerInput.scss';
import { useDispatch, useSelector } from "react-redux";
import { addTicker } from "../../actions/tickerList";

const TickerInput = () => {
    const [text, setText] = useState('');
    const [list, setList] = useState([]);

    const dispatch = useDispatch();
    const tickers = useSelector(state => state.tickerList.tickerList);
    const trackedTickers = useSelector(state => state.tickerList.trackedTickers);

    const handleChahge = (e) => {
        const value = e.target.value;
        if (value) {
            setText(value);
            setList(tickers.filter(ticker => ticker.toLowerCase().startsWith(value.toLowerCase())));
        } else {
            setList([]);
        }
    }

    const handleListClick = (value) => {
        setText(value);
        setList([]);
    }

    const handleAddButtonClick = () => {
        if (text !== '') {
            if (trackedTickers.some(ticker => ticker.name === text)) {
                alert('Тикер уже отслеживается!')
            } else {
                dispatch(addTicker(text));
                setText('');
            }   
        }
    }

    return (


        <div className="ticker-input">
            <div>
                <input type="text" className="ticker-input__input" placeholder="Название монеты" value={text} onChange={handleChahge} />
            </div>
            <div className={`ticker-input__list ${list.length > 0 && 'ticker-input__list_visible'}`}>
                <ul>
                    {list.map((ticker, index) => <li onClick={e => handleListClick(e.target.innerHTML)} key={index}>{ticker}</li>)}
                </ul>
            </div>
            <div>
                <button type="button" className="ticker-input__add-btn" onClick={handleAddButtonClick}>Добавить</button>
            </div>
        </div>
    );
}

export default TickerInput;
