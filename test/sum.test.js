const sum = require('../index.js').sum;

test('should return -1 when the value is not present', function () {
  expect([1, 2, 3].indexOf(4)).toBe(-1);
});

test('should add two arguments', function () {
  expect(sum(1,2)).toBe(3);
});
