var mergeTwoLists = function (l1, l2) {
  let p1 = l1;
  let p2 = l2;
  let mergedListPointer;
  let mergedListHead;

  if (!p1 || !p2) {
    return p1 || p2
  }

  while (p1 && p2) {
    const min = p1.value <= p2.value ? p1 : p2;

    if (!mergedListHead) {
      mergedListHead = min;
      mergedListPointer = min;
    }

    if (p1 === min) {
      p1 = p1.next;
    } else {
      p2 = p2.next;
    }

    mergedListPointer.next = min;
    mergedListPointer = min;
  }

  if (p1 || p2) {
    mergedListPointer.next = p1 || p2;
  }

  return mergedListHead;
};

const node1 = { value: 1 };
const node2 = { value: 2 };
const node3 = { value: 4 };

node1.next = node2;
node2.next = node3;

const node4 = { value: 1 };
const node5 = { value: 3 };
const node6 = { value: 4 };

node4.next = node5;
node5.next = node6;

console.log(JSON.stringify(mergeTwoLists(node1, null), null, 2));