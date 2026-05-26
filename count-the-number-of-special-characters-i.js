const numberOfSpecialChars = (w, s = new Set(w), m = String.fromCharCode) => 
  new Array(26).fill().reduce((c,_,i) => c += s.has(m(65 + i)) && s.has(m(97 + i)), 0);

console.log(numberOfSpecialChars('zZ'));