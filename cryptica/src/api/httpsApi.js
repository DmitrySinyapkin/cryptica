import { COIN_LIST_URL } from "../constants/api";

export const getCoinList = async () => {
    const f = await fetch(COIN_LIST_URL);
    return await f.json();
}
