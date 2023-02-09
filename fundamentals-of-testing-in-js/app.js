const sum = (a, b) => a + b;
const sub = (a, b) => a - b;

const result = sum(7, 3);
const expected = 9;

function expect(actual) {
  return {
    toBe(expected) {
      if (actual !== expected) {
        throw new Error(`${result} is not equal to ${expected}`);
      }
    },
  };
}

expect(result).toBe(expected);
