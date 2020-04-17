/*
 * @lc app=leetcode.cn id=48 lang=javascript
 *
 * [48] 旋转图像
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    let l = matrix.length;

    // 斜角反转，主要是注意j的范围
    for (let i = 0; i < l - 1; i++) {
        for (let j = 0; j < l - 1 - i; j++) {
            let temp = matrix[i][j]
            matrix[i][j] = matrix[l-1-j][l-1-i]
            matrix[l-1-j][l-1-i] = temp;
        }
    }

    for (let i = 0; i < l; i++) {
        for (let j = 0; j < Math.floor(l / 2); j++) {
            let temp = matrix[j][i]
            matrix[j][i] = matrix[l-1-j][i]
            matrix[l-1-j][i] = temp;
        }
    }
};
// @lc code=end