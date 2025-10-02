const { add } = require('../src/stringCalculator');

test('empty string returns 0', () => {
  expect(add("")).toBe(0);
});

test('single number returns the number', () => {
  expect(add("1")).toBe(1);
});

test('two numbers comma separated return their sum', () => {
  expect(add("1,5")).toBe(6);
});

test('any amount of numbers comma separated return their sum', () => {
  expect(add("1,2,3,4,5")).toBe(15);
});

test('numbers can be separated by newlines as well as commas', () => {
  expect(add("1\n2,3")).toBe(6);
});

test('supports custom delimiter syntax //;\n', () => {
  expect(add("//;\n1;2")).toBe(3);
});

test('supports different custom delimiter like //|\n', () => {
  expect(add("//|\n2|3|4")).toBe(9);
});



