const fizzBuzz = require('./fizzBuzz');

test('21 should return Fizz', ()=> {
  expect( fizzBuzz(21)).toBe('Fizz');
})

test('30 should return FizzBuzz', ()=> {
  expect( fizzBuzz(30)).toBe('FizzBuzz');
})

test('16 should return 16', ()=> {
  expect( fizzBuzz(16)).toBe(16);
})

test('0 should return 0', ()=> {
  expect( fizzBuzz(0)).toBe(0);
})

test('10 should return Buzz', ()=> {
  expect( fizzBuzz(10)).toBe('Buzz');
})

test('String should return NaN', ()=> {
  expect( fizzBuzz('123')).toBe(NaN);
})