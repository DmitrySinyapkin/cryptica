import React from "react";
import TickerCard from "../../components/TickerCard/TickerCard";
import './TickerList.scss';
import { useDispatch, useSelector } from "react-redux";
import { deleteTicker } from "../../actions/tickerList";

const TickerList = () => {
    const tickers = useSelector(state => state.tickerList.trackedTickers);
    const dispatch = useDispatch();

    const handleDeleteButtonClick = (ticker) => {
        dispatch(deleteTicker(ticker))
    }

    return (
        <div className="ticker-list">
            {tickers.map((ticker, index) => <TickerCard ticker={ticker.name} price={ticker.price} handler={() => handleDeleteButtonClick(ticker.name)} key={index} />)}
        </div>
    );
}

export default TickerList;
