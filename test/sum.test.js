const assert = require('assert');
const sum = require('../index.js').sum;

describe('Array', function () {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});

describe('Index.js', function () {
  describe('sum()', function () {
    it('should add two arguments', function () {
      assert.equal(sum(1,2), 3);
    });
  });
});