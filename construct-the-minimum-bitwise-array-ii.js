function minBitwiseArray(nums) {
  const ans = new Array(nums.length).fill(-1);

  for (let i = 0; i < ans.length; i++) {
    let b = 0;
    while (true) {
      const res = ~(~nums[i] ^ (1 << b));

      if (res >= nums[i]) {
        break;
      }

      if (res | res + 1 === nums[i] && (ans[i] === -1 || ans[i] > res)) {
        ans[i] = res;
      }

      b++;
    }
  }

  return ans;
}

minBitwiseArray([11,13,31]) // 9,12,15
minBitwiseArray([2,3,5,7]) // 9,12,15

// const invert = ~31;
// const res = invert ^ (1 << 4)
// console.log('res', ~res);

// x | x + 1 = 884532611

/*
> (11).toString(2) // -> 10
'1011'

1010 -> 10

> (13).toString(2) -> 12
'1101'

> (31).toString(2) -> 30
'11111'

> (884532611).toString(2)
'110100101110001110010110000011'

9 -> 1001
10 -> 1010

11 -> 1011
*/