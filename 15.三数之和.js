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
var threeSum = function(nums=[]) {
    const result = [],
          length = nums.length;

    nums = nums.sort((a,b) => a - b);

    for (let i = 0; i < length; i++) {

        if (i >=1 && nums[i] === nums[i - 1]) {
            continue;
        }

        let j = i + 1,
            k = length - 1;

        while(j < k) {
            const sum = nums[i] + nums[j] + nums[k];

            if (sum > 0) {
                k--;
                while(nums[k] === nums[k+1] && k > j){
                    k--;
                }
            } else if (sum === 0) {
                result.push([nums[i],nums[j],nums[k]]);

                k--;
                while(nums[k] === nums[k+1] && k > j){
                    k--;
                }
                
                j++;
                while(nums[j-1] === nums[j] && j < k){
                    j++;
                }
            } else {
                j++
                while(nums[j-1] === nums[j] && j < k){
                    j++;
                }
            }
        }
    }
    return result;
};
// @lc code=end
