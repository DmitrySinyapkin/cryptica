import { getCoinList } from "../api/httpsApi";
import { ADD_TICKER, GET_TICKER_LIST } from "../constants/actions";

const getTickerListAction = (tickerList) => ({
    type: GET_TICKER_LIST,
    tickerList
})

const addTickerAction = (ticker) => ({
    type: ADD_TICKER,
    ticker
})

export const getTickerList = () => (dispatch) => {
    getCoinList().then(response => dispatch(getTickerListAction(Object.keys(response.Data))))
}

export const addTicker = (ticker) => (dispatch) => {
    dispatch(addTickerAction(ticker))
}
