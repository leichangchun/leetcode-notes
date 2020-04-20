/*
 * @lc app=leetcode.cn id=39 lang=javascript
 *
 * [39] 组合总和
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    candidates = candidates.sort((a,b) => a - b)

    const result = [],
          path = [];

    // 传入索引i是为了去重，不准取之前的数字，因为之前包含之前数字的组合在之前的遍历中已经全部收集
    let backtrack = (path,i) => {
        const sum = path.reduce((a,b) => a + b,0);

        if (sum >= target) {
            if (sum === target) {result.push(path)}
            return;
        }

        for (i; i < candidates.length; i++) {
            const cur = candidates[i];
            
            path.push(cur)
            backtrack(path.slice(),i)
            path.pop()
        }
    }

    backtrack(path,0)

    return result;
};
// @lc code=end

