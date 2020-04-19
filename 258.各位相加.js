/*
 * @lc app=leetcode.cn id=258 lang=javascript
 *
 * [258] 各位相加
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    num += '';

    if (num.length === 1) { return num}
    
    return addDigits(num.split('').reduce((a,b) => +a + +b));
};
// @lc code=end

