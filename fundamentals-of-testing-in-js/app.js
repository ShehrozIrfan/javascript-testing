//Throw an error with a simple test

const sum = (a, b) => a + b;
const sub = (a, b) => a - b;

const result = sum(7, 3);
const expected = 9;

if (result !== expected) {
  throw new Error(`${result} is not equal to ${expected}`);
}
