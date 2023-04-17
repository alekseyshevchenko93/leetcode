'use strict';

const bluebird = require('bluebird');

function promiseAll(promises) {
  return new Promise((resolve, reject) => {
    const results = new Array(promises.length).fill();
    let counter = 0;

    promises.forEach(async (promise, index) => {
      try {
        const result = await promise;
        results[index] = result;
        counter++;

        if (counter === promises.length) {
          return resolve(results);
        }
      } catch (error) {
        return reject(error);
      }
    });
  });
}

function randomIntFromInterval(min, max) { // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min)
}

const promises = new Array(3).fill().map(async (_, i) => {
  // return () => {
  const r = randomIntFromInterval(0, 4);
  await bluebird.delay(r * 1000);
  // console.log('resolve', i);

    if (i === 1) {
      return Promise.reject('shit');
    }
  return 'resolve' + i;
});

// console.log(promises);

(async () => {
  console.log('start');
  try {
    const results = await promiseAll(promises);
    console.log('end', results);
  } catch (error) {
    console.log('error', error);
  }
})();
