
//const pricesBtc = [18, 15, 12, 11, 9, 7];
const pricesBtc = [39, 18, 29, 34, 5, 32];

function maxProfit(prices) {


    const index = prices.length;
    const purchase = prices.slice(0, index / 2);
    const sale = prices.slice(index / 2, index);
    const min = Math.min(...purchase);
    const max = Math.max(...sale)

    return max <= min ? -1 : max - min;

}

const res = maxProfit(pricesBtc);

console.log(res)