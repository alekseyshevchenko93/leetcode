'use strict';

// time complexity: o(nk), space: o(nk)
function mergeKSortedLists(...lists) {
  let head = null;
  let current = head;

  while (true) {
    let min = null;
    let listIdx = -1;

    for (let i = 0; i < lists.length; i++) {
      const elem = lists[i];

      if (!elem) {
        continue;
      }

      if (min === null || elem.value <= min) {
        min = elem.value;
        listIdx = i;
      }
    }

    if (min === null) {
      return head;
    }

    if (!head) {
      head = lists[listIdx];
      current = head;
      lists[listIdx] = lists[listIdx].next;
    } else {
      current.next = lists[listIdx];
      lists[listIdx] = lists[listIdx].next;
      current = current.next;
    }
  }
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