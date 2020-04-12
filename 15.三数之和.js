/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const result = [],
          temp = {},
          length = nums.length;

    for (let i = 0; i < length; i++) {
        const r1 = nums[i];
        
        for (let j = i+1; j < length; j++) {
            const r2 = nums[j],
                  r3 = 0 - r1 - r2;
            
            if (temp[r2]) {
                result.push([...temp[r2],r2])
            } else {
                temp[r3] = [r1,r2]
            }
        }
    }
    return result;
};
// @lc code=end

