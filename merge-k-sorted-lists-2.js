'use strict';

const Heap = require('heap');

// time complexity: o(nlogk)
function mergeKSortedLists(...lists) {
  const heap = new Heap((a, b) => {
    return a.value - b.value;
  });

  let head = null;
  let current = head;

  lists.forEach((node) => heap.push(node));

  while (!heap.empty()) {
    const node = heap.pop();

    if (!head) {
      head = node;
      current = head;
    } else {
      current.next = node;
      current = node;
    }

    if (node.next) {
      heap.push(node.next);
    }
  }

  return head;
}

const list1 = { value: 1, next: { value: 1, next: { value: 5 } } };
const list2 = { value: 1, next: { value: 3, next: { value: 4 } } };
const list3 = { value: 1, next: { value: 6 } };

const resultList = mergeKSortedLists(list1, list2, list3);

function traverse(node) {
  while (node) {
    console.log(node.value);
    node = node.next;
  }
}

traverse(resultList);