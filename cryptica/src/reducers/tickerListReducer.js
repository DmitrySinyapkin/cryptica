import produce from 'immer';
import { ADD_TICKER, GET_TICKER_LIST } from '../constants/actions';

const initialState = {
    tickerList: [],
    trackedTickers: localStorage.getItem('cryptica-tracked') ? JSON.parse(localStorage.getItem('cryptica-tracked')) : []
}

const getTickerList = (draft, list) => {
    draft.tickerList = list;
    return draft;
}

const addTicker = (draft, ticker) => {
    draft.trackedTickers = [...draft.trackedTickers, ticker];
    localStorage.setItem('cryptica-tracked', JSON.stringify(draft.trackedTickers));
    return draft;
}

const tickerListReducer = (state = initialState, action) => produce(state, (draft) => {
    switch (action.type) {
        case GET_TICKER_LIST:
            return getTickerList(draft, action.tickerList);
        case ADD_TICKER:
            return addTicker(draft, action.ticker);
        default:
            return state;
    }
})

export default tickerListReducer;
