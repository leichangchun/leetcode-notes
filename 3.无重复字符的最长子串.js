/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s = '') {
    let length = s.length,
        start = 0,
        end = 0,
        max = 0,
        subString = [];

    while(start < length && end < length) {
        let cur = s.charAt(end),
            index = subString.indexOf(cur);

        if(index === -1) {
            subString.push(cur)
            end++;
        } else {
            start += index;
            subString = subString.slice(index + 1)
        }

        max = Math.max(max,subString.length)
    }

    return max;
};

// lengthOfLongestSubstring('pwwkew')
// @lc code=end

