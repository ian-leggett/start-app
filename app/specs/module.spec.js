const add = require('../src/js/module.js');

describe('Module', () => {
  it('should add up both arguments and return value', () => {
    let result = add(1, 2);
    expect(result).toEqual(3);
  });
});