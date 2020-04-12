/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除排序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// 额外空间复杂度 O(1)：额外变量的个数是固定的，不随着目标数组的长度而变化，比如此题中使用了两个额外变量
var removeDuplicates = function(nums) {
    let temp = nums[0],
        index = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > temp) {
            nums[++index] = temp = nums[i]
        }
    }

    return index+1
};
// @lc code=end

