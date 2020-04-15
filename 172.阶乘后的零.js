/*
 * @lc app=leetcode.cn id=172 lang=javascript
 *
 * [172] 阶乘后的零
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
    let five = 0;

    if (n < 5) {return 0}

    n = n - n%5;

    for (let i = n; i >= 5; i = i - 5) { 
        let j = i;
        while(j > 0 && j%5 === 0) {
            five++
            j = j / 5
        }
    }

    return five;
};
// @lc code=end

