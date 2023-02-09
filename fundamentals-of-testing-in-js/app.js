//Function to sum, sub the numbers
const sum = (a, b) => a + b;
const sub = (a, b) => a - b;

//function to expect the result with expected value
function expect(actual) {
  return {
    toBe(expected) {
      if (actual !== expected) {
        throw new Error(`${actual} is not equal to ${expected}`);
      }
    },
  };
}

//function to display the information related to tests
function test(title, callback) {
  try {
    callback();
    console.log(`✓ ${title}`);
  } catch (error) {
    console.error(`✕ ${title}`);
    console.error(error);
  }
}

//performing the tests
test("sum add the numbers", () => {
  const result = sum(7, 3);
  const expected = 10;

  expect(result).toBe(expected);
});

test("sub minus the numbers", () => {
  const result = sub(7, 3);
  const expected = 4;

  expect(result).toBe(expected);
});
