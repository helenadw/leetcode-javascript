/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let profit = 0;
    let buyPrice = Number.MAX_VALUE;
    
    for (let i = 0; i < prices.length; i++) {
        
        if(buyPrice > prices[i]) {
            buyPrice = prices[i]
        } else if (prices[i] - buyPrice > profit) {
            profit = prices[i] - buyPrice
            }
    }
    return profit;
    
};