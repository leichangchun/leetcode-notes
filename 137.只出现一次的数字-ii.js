/*
 * @lc app=leetcode.cn id=137 lang=javascript
 *
 * [137] 只出现一次的数字 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let obj = {};

    for (let i = 0; i < nums.length; i++) {
        const cur = nums[i];
        if(obj[cur]) {
            obj[cur]++
        } else {
            obj[cur] = 1;
        }
    }

    for (let j = 0; j <  Object.keys(obj).length; j++) {
        const key =  Object.keys(obj)[j];

        if(obj[key] === 1) {
            return key
        }
        
    }
};
// @lc code=end

