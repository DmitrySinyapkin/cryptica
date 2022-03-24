import produce from 'immer';
import { GET_TICKER_LIST } from '../constants/actions';

const initialState = {
    tickerList: []
}

const getTickerList = (draft, list) => {
    draft.tickerList = list;
    return draft;
}

const tickerListReducer = (state = initialState, action) => produce(state, (draft) => {
    switch (action.type) {
        case GET_TICKER_LIST:
            return getTickerList(draft, action.tickerList);
        default:
            return state;
    }
})

export default tickerListReducer;
