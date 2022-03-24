import { API_KEY, WS_BASE_URL } from "../constants/api";

const url = new URL(WS_BASE_URL);
url.searchParams.set('api_key', API_KEY);

export const socket = new WebSocket(url);

const sendToWS = (message) => {
    if (socket.readyState === socket.OPEN) {
        socket.send(JSON.stringify(message))
    }
}

export const subscribeToTicker = (ticker) => {
    sendToWS({
        action: "SubAdd",
        subs: [`5~CCCAGG~${ticker}~USD`]

    })
}

export const unsubscribeFromTicker = (ticker) => {
    sendToWS({
        action: "SubRemove",
        subs: [`5~CCCAGG~${ticker}~USD`]
    })
}
