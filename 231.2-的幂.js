/*
 * @lc app=leetcode.cn id=231 lang=javascript
 *
 * [231] 2的幂
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    // 1、符合2的n次幂条件的数，其二进制有且仅有一个1  eg: 16 -> 00010000
    // 2、n-1的二进制 就只是 00001111 
    // 3、& 之后肯定为 0 
    return n > 0 && !(n & (n - 1));
};
// @lc code=end

