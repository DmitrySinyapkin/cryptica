import { getCoinList } from "../api/httpsApi";
import { GET_TICKER_LIST } from "../constants/actions";

const getTickerListAction = (tickerList) => ({
    type: GET_TICKER_LIST,
    tickerList,
})

export const getTickerList = () => (dispatch) => {
    getCoinList().then(response => dispatch(getTickerListAction(Object.keys(response.Data))))
}
