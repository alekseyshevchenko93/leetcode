const areSimilar = function(mat, k) {
  const n = mat[0].length;
  const c = k % n;
  
  if (!k || !(k % n)) {
    return true;
  }

  for (let i = 0; i < mat.length; i++) {
    const cpy = mat[i].toString();

    if (i & 1) {
      mat[i] = mat[i].slice(-c).concat(mat[i].slice(0, -c));
    } else {
      mat[i] = mat[i].slice(c).concat(mat[i].slice(0, c));
    }

    if (cpy !== mat[i].toString()) {
      return false;
    }
  }

  return true;
};

console.log(areSimilar([[1,2,3],[4,5,6],[7,8,9]], 4));
console.log(areSimilar([[1,2,1,2],[5,5,5,5],[6,3,6,3]], 2));
console.log(areSimilar([[2,2],[2,2]], 3));
console.log(areSimilar([[1,2]], 1));

