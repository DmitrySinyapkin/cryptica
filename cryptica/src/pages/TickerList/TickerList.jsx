import React from "react";
import TickerCard from "../../components/TickerCard/TickerCard";
import './TickerList.scss';

const TickerList = () => {
    const tickers = [
        {ticker: 'BTC', price: 42062.22},
        {ticker: 'BTC', price: 42062.22},
        {ticker: 'BTC', price: 42062.22},
        {ticker: 'BTC', price: 42062.22},
        {ticker: 'BTC', price: 42062.22},
        {ticker: 'BTC', price: 42062.22},
        {ticker: 'BTC', price: 42062.22},
        {ticker: 'BTC', price: 42062.22},
        {ticker: 'BTC', price: 42062.22},
        {ticker: 'BTC', price: 42062.22},
        {ticker: 'BTC', price: 42062.22},
    ];

    return (
        <div className="ticker-list">
            {tickers.map((item, index) => <TickerCard ticker={item.ticker} price={item.price} key={index} />)}
        </div>
    );
}

export default TickerList;
