/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // 利用对象缓存计算结果，减少空间复杂度
    let temp = {};

    for(let i = 0;i< nums.length;i++) {
        let j = target - nums[i];
        if ((temp[j] !== undefined )&& (temp[j] !== i)) {
            return [temp[j],i]
        }
        temp[nums[i]] = i
    }
};
// @lc code=end