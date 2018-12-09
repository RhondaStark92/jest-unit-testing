const leapYear = require('./leapYear');

test('2018 should return false', ()=> {
  expect( leapYear(2018)).toBe(false);
})

test('0 should return false', ()=> {
  expect( leapYear(0)).toBe(false);
})

test('2008 should return true', ()=> {
  expect( leapYear(2008)).toBe(true);
})
