const assert = require('assert');

const licenseKeyFormatting = function (s, k) {
  const fs = s.replaceAll('-', '');
  const remainder = fs.length % k;
  const arr = [];

  if (remainder) {
    arr.push(fs.slice(0, remainder));
  }

  for (let i = remainder; i < fs.length; i += k) {
    arr.push(fs.slice(i, i + k))
  }

  return arr.map((item) => item.toUpperCase()).join('-');
};

assert.equal(licenseKeyFormatting('5F3Z-2e-9-w', 4), '5F3Z-2E9W');
assert.equal(licenseKeyFormatting('2-5g-3-J', 2), '2-5G-3J');
