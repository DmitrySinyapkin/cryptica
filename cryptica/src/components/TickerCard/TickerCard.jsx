import React from "react";
import './TickerCard.scss';

const TickerCard = ({ ticker, price }) => {
    return (
        <div className="card">
            <div className="card__title">
                <span>{ticker} - USD</span>
            </div>
            <div className="card__price">
                <span>{price}</span>
            </div>
            <div>
                <button type="button" className="card__del-btn">Удалить</button>
            </div>
        </div>
    );
}

export default TickerCard;
