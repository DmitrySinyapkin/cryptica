import { getCoinList } from "../api/httpsApi";
import { subscribeToTicker, unsubscribeFromTicker } from "../api/wsApi";
import { ADD_TICKER, DELETE_TICKER, GET_TICKER_LIST, UPDATE_TICKER } from "../constants/actions";

const getTickerListAction = (tickerList) => ({
    type: GET_TICKER_LIST,
    tickerList
})

const addTickerAction = (ticker) => ({
    type: ADD_TICKER,
    ticker
})

const deleteTickerAction = (ticker) => ({
    type: DELETE_TICKER,
    ticker
})

const updateTickerAction = (ticker) => ({
    type: UPDATE_TICKER,
    ticker
})

export const getTickerList = () => (dispatch) => {
    getCoinList().then(response => dispatch(getTickerListAction(Object.keys(response.Data))))
}

export const addTicker = (ticker) => (dispatch) => {
    dispatch(addTickerAction(ticker))
    subscribeToTicker(ticker)
}

export const deleteTicker = (ticker) => (dispatch) => {
    dispatch(deleteTickerAction(ticker))
    unsubscribeFromTicker(ticker)
}

export const updateTicker = (ticker) => (dispatch) => {
    dispatch(updateTickerAction(ticker))
}
