

// var findTheDifference = function(s, t) {
//   const codes1 = s.split('').map(item => item.charCodeAt(0));
//   const codes2 = t.split('').map(item => item.charCodeAt(0));

//   let res = 0;

//   codes1.forEach(code => {
//     res = res ^ code;
//   });

//   codes2.forEach(code => {
//     res = res ^ code;
//   });

//   console.log(codes1, codes2);
//   console.log('res', String.fromCharCode(res));

//   return String.fromCharCode(res);
// };


var findTheDifference = function(s, t) {
  let res = 0;

  for (let c of s) {
    res ^= c.charCodeAt(0);
  }

    for (let c of t) {
    res ^= c.charCodeAt(0);
  }

  return String.fromCharCode(res);
};

findTheDifference('abcd', 'aebcd');