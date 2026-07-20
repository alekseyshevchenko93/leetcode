const assert = require('assert');

const isPossibleDivide = function(hand, groupSize) {
  if (hand.length % groupSize) {
    return false;
  }

  const freq = {};

  for (let c of hand) {
    if (c in freq) {
      freq[c]++;
    } else {
      freq[c] = 1;
    }
  }
  
  const keys = Object.keys(freq).map(Number).sort((a, b) => a - b);

  const result = [];
  let i = 0;

  while (i < keys.length) {
    let item = keys[i];

    if (!freq[item]) {
      i++;
      continue;
    }
    
    const subGroup = [];

    for (let j = 0; j < groupSize; j++) {
      const k = i + j;
      const subItem = keys[k];

      if (!j) {
        subGroup.push(keys[k]);
        freq[subItem]--;
        continue;
      } 

      if (!(keys[k - 1] + 1 === keys[k])) {
        return false;
      }

      if (!freq[subItem]) {
        return false;
      }

      subGroup.push(subItem);
      freq[subItem]--;
    }
    
    result.push(subGroup);
  }

  return true;
};


// isNStraightHand([1,2,3,4,5,6], 2)
// isNStraightHand([1,1,2,2,3,3], 3)
// isNStraightHand( [1,1,2,2,2,3], 3)
// isNStraightHand([8,10,12], 3)
// isNStraightHand([0, 1], 2)

assert.equal(isNStraightHand([1,2,3,6,2,3,4,7,8], 3), true);
// isNStraightHand([8,8,9,7,7,7,6,7,10,6], 2)


