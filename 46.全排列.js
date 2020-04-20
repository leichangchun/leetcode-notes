/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {

    const result = [],
          tempPath = [],
          l = nums.length;

    var backtrack = function(tempPath) {
        debugger
        if(tempPath.length === l) { // 根据长度判断是否符合条件
            result.push(tempPath);
            return;
        }

        for (let i = 0; i < l; i++) {
            const cur = nums[i];
            if(!tempPath.includes(cur)) {
                tempPath.push(cur); // 新的路径 
                backtrack(tempPath.slice())
                tempPath.pop() // 恢复
            }
        }
    }

    backtrack(tempPath)
    return result;
};

console.log(permute([1,2,3]))

// @lc code=end

