
const evalRPN = function (tokens) {
  const s = [];

  for (let token of tokens) {
    if (['+', '-', '/', '*'].includes(token)) {
      const op2 = +s.pop();
      const op1 = +s.pop();

      const value = (() => {
        switch (token) {
          case '+':
            return op1 + op2;
          case '-':
            return op1 - op2;
          case '*':
            return op1 * op2;
          case '/':
            const v = op1 / op2;
            return Math.trunc(v);
        }
      })();

      // console.log('value', value);
      s.push(value);
      continue;
    }

    s.push(token);
  }

  const [result] = s;
  return result;
};

// ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]
// ["10","6","12","-11","*","/","*","17","+","5","+"]
// ["17,"5","+"]
console.log(evalRPN(["2", "1", "+", "3", "*"]));
console.log(evalRPN(["4", "13", "5", "/", "+"]));
console.log(evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]))