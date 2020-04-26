/*
 * @lc app=leetcode.cn id=51 lang=javascript
 *
 * [51] N皇后
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    let   result = [],
          path = [],
          usedcolumns = {}, //使用过的列 每列只会出现一次
          usedGap1 = {}, //  / 斜线
          usedGap2 = {}; //  \ 斜线

    var backtrack = (row) => {

        for(let column = 0;column < n; column++) {

            if (!isUnderAttack(row,column)) {
                placeQueen(row,column)

                if(row + 1 >= n) { // 找到结果
                    result.push(path);
                } else { // 接着向下一步找
                    backtrack(row + 1)
                }

                // 返回上一步
                removeQueen(row,column)
            }
        }
    }

    var placeQueen = (row,column) => {
        usedcolumns[column] = 1
        usedGap1[row-column] = 1
        usedGap2[row+column] = 1
        path.push([row,column])
    }

    var removeQueen = (row,column) => {
        path = path.filter(item => item[0] !== row);
        usedcolumns[column] = undefined
        usedGap1[row-column] = undefined
        usedGap2[row+column] = undefined
    }

    var isUnderAttack = (row,column) => {
        return usedcolumns[column] ||
               usedGap1[row-column] ||
               usedGap2[row+column]
    }

    var dealResult = () => {
        return result.map(_path => {
            return _path.map(item => {
                let [row,column] = item,
                    temp = '.'.repeat(n).split('');

                temp[column] = 'Q';
                return temp.join('')
            })
        })
    }

    backtrack(0)

    return dealResult()
};
// @lc code=end

