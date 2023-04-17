function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

const node1 = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 4
    }
  }
};

const node2 = {
  val: 1,
  next: {
    val: 3,
    next: {
      val: 4
    }
  }
};

function mergeTwoLists(node1, node2) {
  let head = new ListNode(0);
  let current = head;

  while (node1 && node2) {
    if (node1.val < node2.val) {
      current.next = node1;
      current = node1;
      node1 = node1.next;
    } else {
      current.next = node2;
      current = node2;
      node2 = node2.next;
    }
  }

  while (node1) {
    current.next = node1;
    current = node1;
    node1 = node1.next;
  }

  while (node2) {
    current.next = node2;
    current = node2;
    node2 = node2.next;
  }

  console.log('elft', node1, node2);

  traverse(head);
  return head.next;
}


function traverse(node) {
  while (node) {
    const next = node.next;
    console.log(node.val);
    node = next;
  }
}


mergeTwoLists(node1, node2);