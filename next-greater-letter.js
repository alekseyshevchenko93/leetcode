var nextGreatestLetter = function (letters, target) {
  let smallest;

  for (let i = 0; i < letters.length; i++) {
    const letter = letters[i];

    if (letter <= target) {
      continue;
    }

    if (!smallest) {
      smallest = letter;
      continue;
    }

    if (letter < smallest) {
      smallest = letter;
    }
  }

  console.log(smallest);

  return smallest;
};

console.log(nextGreatestLetter(["c", "f", "j"], 'c'));
