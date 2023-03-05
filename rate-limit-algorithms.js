'use strict';

class TooManyRequestsError extends Error {
  constructor() {
    super();
    this.message = 'too many requests';
  }
}

function fixedWindow({ count, rateSeconds }) {
  const cache = {};

  return (fn) => {
    const currentWindow = Math.floor(+new Date / 1000 / rateSeconds);

    if (cache[currentWindow] > count) {
      throw new TooManyRequestsError;
    }

    if (!cache[currentWindow]) {
      cache[currentWindow] = 1;
    } else {
      cache[currentWindow]++;
    }

    fn();
  }
}

function slidingWindowCloudflare({ count, rateSeconds }) {
  const cache = {};

  return (fn) => {
    const currentWindow = Math.floor(+new Date / 1000 / rateSeconds);
    cache[currentWindow] = cache[currentWindow] || 0;

    const currentSecond = +new Date() / 1000 % rateSeconds;
    const lastWindow = cache[currentWindow - 1] || 0;

    const rate = lastWindow * ((rateSeconds - currentSecond) / rateSeconds) + cache[currentWindow];
    console.log(rate, lastWindow, rateSeconds, currentSecond, cache[currentWindow]);

    if (rate >= count) {
      throw new TooManyRequestsError;
    }
    
    cache[currentWindow]++;

    fn();
  }
}

const fn = fixedWindow({ count: 5, rateSeconds: 5 });
const fn2 = slidingWindowCloudflare({ count: 2, rateSeconds: 5 });

let i = 0;
setInterval(() => {
  try {
    fn2(() => {
      console.log('success request', i++);
    })
  } catch (error) {
    const { message } = error;
    console.log(message, i++);
  }
}, 200);