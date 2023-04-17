const getSum = function (a, b) {
  let num1 = a.toString(2);
  let num2 = b.toString(2);


  const maxLen = Math.max(num1.length, num2.length);

  if (num1.length < maxLen) {
    num1 = new Array(maxLen - num1.length).fill('0').join('') + num1;
  }

  if (num2.length < maxLen) {
    num2 = new Array(maxLen - num2.length).fill('0').join('') + num2;
  }
  console.log('nums', num1, num2);

  let carry = 0;
  let result = '';

  for (let i = maxLen - 1; i >= 0; i--) {
    const bit1 = num1[i];
    const bit2 = num2[i];

    result += bit1 ^ bit2 ^ carry;
    carry = (bit1 & bit2) | (bit2 & carry) | (bit1 & carry);
    console.log(bit1, bit2, 'result', result, 'carry', carry);
  }

  if (carry) {
    result += '1';
  }


  const r = parseInt(result.split('').reverse().join(''), 2);
  console.log(r);
  return r;
};

getSum(1,2);