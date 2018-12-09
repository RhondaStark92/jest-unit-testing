const sumTwo = require('./sumTwo');

test('sum of 1 and 1 should give 2', ()=> {
  expect( sumTwo(1,1)).toBe(2);
})

test('sum of 1 and -3 should give -2', ()=> {
  expect( sumTwo(1,-3)).toBe(-2);
})

test('sum of 1.5 and -3 should give -1.5', ()=> {
  expect( sumTwo(1.5,-3)).toBe(-1.5);
})

test('sum of only one input and should return that input value ', ()=> {
  expect( sumTwo(1.5)).toBe(1.5);
})

test('sum of 2 string and convert to int and sum ', ()=> {
  expect( sumTwo('1', '1')).toBe(2);
})

test('sum of only string that cannot convert and num return NaN ', ()=> {
  expect( sumTwo('Hello', '1')).toBe(NaN);
})