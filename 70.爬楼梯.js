/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
/* 递归的方式会超时，所以要增加缓存 */
const obj = {}
var climbStairs = function(n) {

    if(n <= 2) {
        return n
    }
    
    // 第n层只能从n-1层或者n-2层爬上来的
    if (obj[n]) {
        return obj[n]
    } else {
        let temp = climbStairs(n-1) + climbStairs(n-2);
        obj[n] = temp;
        return  temp;
    }

    // 可以直接使用斐波那契数列的方式
    // let arr = [1,1];
    // for(let i = 2;i<=n;i++){
    //     arr[i] = arr[i-1]+arr[i-2];
    // }
    // return arr[n];
};

// @lc code=end

