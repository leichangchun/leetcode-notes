/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let List = new ListNode('head'),
        temp = 0,
        nextNode = List;

    while( l1 !== null || l2 !== null || temp) {

        let _sum = (l1 ? l1.val : 0) +  (l2 ? l2.val : 0) + temp;

        // 进位归0
        temp = 0;

        if (_sum >= 10) {
            _sum -= 10;
            temp = 1;
        }

        nextNode.next = new ListNode(_sum);
        nextNode = nextNode.next; // 指向下一位
        
        l1 && (l1 = l1.next);
        l2 && (l2 = l2.next);
    }
    
    return List.next;
};
// @lc code=end

