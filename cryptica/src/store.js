import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'
import tickerListReducer from './reducers/tickerListReducer';

const store = createStore(
    combineReducers({
        tickerList: tickerListReducer,
    }),
    composeWithDevTools(applyMiddleware(thunk))
);

export default store;
