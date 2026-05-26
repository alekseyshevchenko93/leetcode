const checkStrings = function (s1, s2) {
  const even1 = [];
  const odd1 = [];

  for (let i = 0; i < s1.length; i++) {
    if (!(i & 1)) {
      even1.push(s1[i]);
    } else {
      odd1.push(s1[i]);
    }
  }

  const even2 = [];
  const odd2 = [];

  for (let i = 0; i < s2.length; i++) {
    if (!(i & 1)) {
      even2.push(s2[i]);
    } else {
      odd2.push(s2[i]);
    }
  }

  const result =
    even1.sort().join("") === even2.sort().join("") &&
    odd1.sort().join("") === odd2.sort().join("");

  return result;
};

checkStrings("abcdba", "cabdab");

/*
0 1 2 3 4 5
a b c d b a
c a b d a b

even chars: a,c,b
odd chars: b,d,a

odd chars: c,b,a
odd chars: a,d,b
*/
