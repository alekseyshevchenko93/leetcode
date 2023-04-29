
const assert = require('assert');

const ONE_BYTE = 0b0;
const TWO_BYTES = 0b110;
const THREE_BYTES = 0b1110;
const FOUR_BYTES = 0b11110;

const SEQUENCE_BYTE = 0b10;

function getBytesCount(byte) {
  if (byte >> 7 === ONE_BYTE) {
    return 1;
  }

  if (byte >> 5 === TWO_BYTES) {
    return 2;
  }

  if (byte >> 4 === THREE_BYTES) {
    return 3;
  }

  if (byte >> 3 === FOUR_BYTES) {
    return 4;
  }
}

function validateSequence(seq) {
  return seq.every((byte) => byte >> 6 === SEQUENCE_BYTE);
}

const validUtf8 = function(data) {
  let i = 0;

  while (i < data.length) {
    const header = data[i];
    const countBytes = getBytesCount(header);

    if (!countBytes) {
      return false;
    }

    const seq = data.slice(i + 1, i + countBytes);

    if (seq.length + 1 < countBytes) {
      return false;
    }

    const validSequence = validateSequence(seq);

    if (!validSequence) {
      return false;
    }

    i += countBytes;
  }

  return true;
};

assert(validUtf8([197, 130, 1]));
assert.equal(validUtf8([235, 140, 4]), false);
assert.equal(validUtf8([255]), false);