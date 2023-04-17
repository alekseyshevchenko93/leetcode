var isPalindrome = function (head) {
  const stack = [];

  let current = head;

  while (current) {
    stack.push(current.value);
    current = current.next;
  }

  current = head;

  while (current) {
    const v = stack.pop();
    if (current.value !== v) {
      return false;
    }

    current = current.next;
  }

  return true;
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