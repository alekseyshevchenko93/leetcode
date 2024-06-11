const simplifyPath = function(path) {
  const stack = [];

  for (let item of path.split('/').filter(Boolean)) {
    if (item === '..') {
      stack.pop();
      continue;
    }

    if (item === '.') {
      continue;
    }

    stack.push(item);
  }

  return '/' + stack.join('/');
};

console.log(simplifyPath('/home/user//Documents/../Pictures'));
console.log(simplifyPath('/'));
console.log(simplifyPath('/home//foo/'));
console.log(simplifyPath('/home/'));
console.log(simplifyPath('/.../a/../b/c/../d/./'));
