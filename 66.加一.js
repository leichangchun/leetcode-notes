/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let l = digits.length;

    digits[l - 1]++;

    if (digits[l - 1] < 10) {
        return digits
    }

    digits = digits.reverse();

    let x = 0,
        temp = Array.from(digits,i => {
                let j = x + i;
                if(j > 9) {
                    x = 1
                    j = 0
                } else {
                    x = 0
                }
                
                return j
            });

    x && temp.push(x);

    return temp.reverse();
};
// @lc code=end