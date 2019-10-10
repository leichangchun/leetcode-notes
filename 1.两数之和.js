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
    let temp = [];
    
    nums.forEach((item,index) => {
        let i = nums.findIndex(j => j === target - item);

        if (i > -1 && index !== i && !temp.includes(i) && !temp.includes(index)) {
            temp = [...temp,index,i]
        }
    })

    return temp;
};
// @lc code=end