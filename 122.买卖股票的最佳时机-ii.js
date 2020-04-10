/*
 * @lc app=leetcode.cn id=122 lang=javascript
 *
 * [122] 买卖股票的最佳时机 II
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices = []) {
    let buy = Infinity,
        profit = 0,
        maxPrice = 0;
    
    for (let i = 0; i < prices.length; i++) {
        const temp = prices[i];
        
        if ((temp < buy )&& (maxPrice === 0)) { // 更新买入点
            buy = temp
        } else if (temp > maxPrice) { // 更新卖出点
            maxPrice = temp
        } else if (temp < maxPrice) { // 价格下跌，在卖出点卖出，并重新买入，清空卖出点
            profit += maxPrice - buy;
            buy = temp;
            maxPrice = 0;
        }
    }

    if (maxPrice > buy) { // 最后清仓卖出
        profit += maxPrice - buy;
    }

    return profit;
};

console.log(maxProfit([2,4,1]));
// @lc code=end

