/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices = []) {
    let minPrice = Infinity,
        profit = 0;
    
    for (let i = 0; i < prices.length; i++) {
        const temp = prices[i];
        // 更新最低的买入价格
        minPrice = Math.min(minPrice,temp);
        // 更新最高的利润
        profit = Math.max(profit,temp - minPrice);
    }

    return profit;
};
// @lc code=end

