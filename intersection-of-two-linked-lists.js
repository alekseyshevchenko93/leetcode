var getIntersectionNode = function (headA, headB) {
  const set = new Set();

  let current = headA;

  while (current) {
    set.add(current);
    current = current.next;
  }

  current = headB;

  while (current) {
    if (set.has(current)) {
      return current;
    }

    set.add(current);
    current = current.next;
  }
};

const node1 = { value: 1 };
const node2 = { value: 2 };
const node3 = { value: 2 };
const node4 = { value: 1 };

node1.next = node2;
node2.next = node3;
node3.next = node4;
node3.next = node4;

console.log(isPalindrome(node1));