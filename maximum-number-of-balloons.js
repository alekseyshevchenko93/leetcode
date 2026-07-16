const maxNumberOfBalloons = function(text) {
  const m = {};

  for (let c of text) {
    if (c in m) {
      m[c]++;
    } else {
      m[c] = 1;
    }
  }

  let count = 0;

  l:
  while (true) {
    for (let c of 'balloon') {
      if (!(c in m) || m[c] <= 0) {
        break l;
      }

      m[c]--;
    }

    count++;
  }

  console.log('count', count);
  return count;
};

// maxNumberOfBalloons('loonbalxballpoon')
maxNumberOfBalloons('lloo')