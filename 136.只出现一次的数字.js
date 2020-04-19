/*
 * @lc app=leetcode.cn id=136 lang=javascript
 *
 * [136] 只出现一次的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    // 此处使用的时异或操作的特性
    // a^a = 0
    // a^b^a = a^a^b = b 符合交换律
    // 所以依次异或操作，最后返回唯一为单数的那个元素
    return nums.reduce((a,b) => a^b)
};
// @lc code=end

