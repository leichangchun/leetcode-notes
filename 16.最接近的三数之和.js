/*
 * @lc app=leetcode.cn id=16 lang=javascript
 *
 * [16] 最接近的三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    const l = nums.length;
    
    if (l < 3) {return}

    let gap = Number.MAX_SAFE_INTEGER,
        sum;

    nums = nums.sort((a,b) => a - b);

    for (let i = 0; i < l - 2; i++) {
        let j = i + 1,
            k = l - 1;

        while(j < k) {
            let _sum = nums[i] + nums[j] + nums[k],
                _gap = _sum - target;
      
            if (_gap === 0) {
                return target
            } else if(_gap > 0) {
                k--;
            } else {
                _gap = 0 - _gap;
                j++;
            }

            if (_gap < gap) {
                gap = _gap;
                sum = _sum;
            }
        }
    }

    return sum
};
// @lc code=end

