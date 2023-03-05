/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function (head) {
  let oddHead = new ListNode(0),
    evenHead = new ListNode(0),
    i = 1,
    current = head;

  let currentOdd = oddHead, currentEven = evenHead;

  while (current) {
    if (i % 2) {
      currentOdd.next = current;
      currentOdd = current;
    } else {
      currentEven.next = current;
      currentEven = current;
    }

    current = current.next;
    i++;
  }

  currentEven.next = null;
  currentOdd.next = evenHead.next;

  return oddHead.next;
};