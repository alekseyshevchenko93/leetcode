const mergeSimilarItems = function(items1, items2) {
  const h = {};

  for (let [k, w] of items1) {
    if (k in h) {
      h[k] += w;
    } else {
      h[k] = w;
    }
  }

  for (let [k, w] of items2) {
    if (k in h) {
      h[k] += w;
    } else {
      h[k] = w;
    }
  }

  return Object.entries(h).sort((a, b) => a[0] - b[0]);
};

console.log(mergeSimilarItems(
  [[1,1],[4,5],[3,8]],
  [[3,1],[1,5]]
));