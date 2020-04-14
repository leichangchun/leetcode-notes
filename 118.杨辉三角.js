/*
 * @lc app=leetcode.cn id=118 lang=javascript
 *
 * [118] 杨辉三角
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    const result = []

    for (let i = 0; i < numRows; i++) {
        if(i === 0) {result.push([1]);continue}        
        if(i === 1) {result.push([1,1]);continue}
        
        let temp = [1],
            pre = result[i-1];
        // 注意此时的i为索引，而不是长度
        for(let j = 1; j < i;j++) {
            temp.push(pre[j-1] + pre[j])
        }
        temp.push(1)
        
        result.push(temp)
    }

    return result;
};
// @lc code=end

