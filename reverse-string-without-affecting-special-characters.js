const reverse = (str) => {
  const arr = new Array(str.length).fill();

  for (let i = 0; i < str.length; i++) {
    if (str[i].match(/[a-zA-z]/)) {
      arr[str.length - 1 - i] = str[i];
    } else {
      arr[i] = str[i];
    }
  }

  return str;
};

const reverse2 = (str) => {
  let i = 0, j = str.length - 1;

  while (i < j) {
    if (!str[i].match(/[a-zA-z]/)) {
      i++;
      continue;
    }

    if (!str[j].match(/[a-zA-z]/)) {
      j--;
      continue;
    }

    const temp = str[i];
    str[i] = str[j];
    str[j] = temp;

    i++;
    j--;
  }

  console.log(str);
};

// console.log(reverse2('a,b$c'.split('')));
console.log(reverse2('ed,c,bA!$'));
