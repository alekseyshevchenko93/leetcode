const partitionLabels = function (s) {
  const hash = {};

  for (let i = 0; i < s.length; i++) {
    const c = s[i];

    if (c in hash) {
      hash[c] = [hash[c][0], i]
    } else {
      hash[c] = [i, i]
    }
  }

  console.log(hash);

  const values = Object.values(hash);
  const cur = values[0];
  let min = cur[0];
  let max = cur[1];
  let results = [];

  console.log(values);

  for (let i = 1; i < values.length; i++) {
    const item = values[i];

    if (item[0] > max) {
      results.push([min, max]);
      min = item[0];
      max = item[1];
      continue;
    }

    max = Math.max(max, item[1]);
  }

  results.push([min, max])

  return results.map((item) => item[1] - item[0] + 1);
};

// [0, 8], [9, 15], [16, 23] =
partitionLabels('ababcbacadefegdehijhklij');
// partitionLabels('eccbbbbdec');