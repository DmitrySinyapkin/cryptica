export const makeCoinList = response => {
    const list = []
    Object.entries(response.Data.pairs).forEach(ticker => {
        if (Object.keys(ticker[1].tsyms).includes('USD')) {
            list.push(ticker[0])
        }
    })
    return list
}
