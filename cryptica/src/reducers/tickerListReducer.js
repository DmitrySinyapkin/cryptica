import produce from 'immer';
import { ADD_TICKER, DELETE_TICKER, GET_TICKER_LIST, UPDATE_TICKER } from '../constants/actions';

const initialState = {
    tickerList: [],
    trackedTickers: localStorage.getItem('cryptica-tracked') ? JSON.parse(localStorage.getItem('cryptica-tracked')) : []
}

const getTickerList = (draft, list) => {
    draft.tickerList = list;
    return draft;
}

const addTicker = (draft, ticker) => {
    draft.trackedTickers = [...draft.trackedTickers, {name: ticker, price: null}];
    localStorage.setItem('cryptica-tracked', JSON.stringify(draft.trackedTickers));
    return draft;
}

const deleteTicker = (draft, ticker) => {
    draft.trackedTickers = draft.trackedTickers.filter(item => item.name !== ticker);
    localStorage.setItem('cryptica-tracked', JSON.stringify(draft.trackedTickers));
    return draft;
}

const updateTicker = (draft, ticker) => {
    draft.trackedTickers = draft.trackedTickers.map(item => item.name === ticker.name ? {...item, price: ticker.price} : item);
    return draft;
}

const tickerListReducer = (state = initialState, action) => produce(state, (draft) => {
    switch (action.type) {
        case GET_TICKER_LIST:
            return getTickerList(draft, action.tickerList);
        case ADD_TICKER:
            return addTicker(draft, action.ticker);
        case DELETE_TICKER:
            return deleteTicker(draft, action.ticker);
        case UPDATE_TICKER:
            return updateTicker(draft, action.ticker);
        default:
            return state;
    }
})

export default tickerListReducer;
