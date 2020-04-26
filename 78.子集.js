/*
 * @lc app=leetcode.cn id=78 lang=javascript
 *
 * [78] 子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let result = [[]];

    for (let i = 0; i < nums.length; i++) {
        const cur = nums[i];

        result = [...result,...Array.from(result,x => [...x,cur])]
    }

    return result;
};
// @lc code=end

