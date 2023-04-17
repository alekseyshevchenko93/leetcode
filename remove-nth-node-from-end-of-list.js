function ListNode(val, next) {
this.val = (val === undefined ? 0 : val)
this.next = (next === undefined ? null : next)
}

const node5 = new ListNode(5);
const node4 = new ListNode(4, node5);
const node3 = new ListNode(3, node4);
const node2 = new ListNode(2, node3);
const node1 = new ListNode(1, node2);

function traverse(node) {
  while (node) {
    const next = node.next;
    console.log(node.val);
    node = next;
  }
}

function removeNthFromEnd(head, n) {
  let pointer1 = head, pointer2 = head

  while (pointer1) {
    pointer1 = pointer1.next;
    if (!n) {
      pointer2 = pointer2.next;
    } else {
      n--;
    }
  }

  if (head === pointer2) {
    return pointer2.next;
  }

  pointer1 = head;

  while (pointer1) {
    const next = pointer1.next;

    if (next === pointer2) {
      pointer1.next = next.next;
      return head;
    }

    pointer1 = next;
  }
}


const h = removeNthFromEnd(node1, 5);
// console.log(h);
traverse(h);
