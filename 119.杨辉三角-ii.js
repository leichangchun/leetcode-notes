/*
 * @lc app=leetcode.cn id=119 lang=javascript
 *
 * [119] 杨辉三角 II
 */

// @lc code=start
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    if(rowIndex ===0) {return [1]}
    if(rowIndex ===1) {return [1,1]}

    const r = [1,1]

    for(let i = 2;i < rowIndex + 1; i++) {
        // 要从后向前更新数据，否则会导致数据被覆盖
        for(j = i - 1 ; j > 0;j--) {
            r[j] = r[j-1] + r[j]
        }
        r.push(1)
    }

    return r;
};
// @lc code=end