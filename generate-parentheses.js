function generateParenthesis(n) {
  const s = new Set;

  const dfs = (str = '', op = 0, cl = 0) => {
    if (str.length === n * 2) {
      s.add(str);
      return;
    }
    
    if (op < n) {
      dfs(str + '(', op + 1, cl)
    }

    if (op > 0 && cl < op) {
      dfs(str + ')', op, cl + 1)
    }
  };

  dfs()

  return [...s];
}

console.log(generateParenthesis(3));
// console.log(isValidParantheses('(()))'));