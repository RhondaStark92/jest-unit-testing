const fizzBuzz = function (value1) {

  if (value1 === 0) {
    return value1;
  } else if (typeof value1 == 'string') {
    return NaN;
  } else if (value1 % 15 === 0) {
    return 'FizzBuzz';
  } else if (value1 % 3 === 0) {
    return 'Fizz';
  } else if (value1 % 5 === 0) {
    return 'Buzz';
  } else {
    return value1;
  }

}

module.exports = fizzBuzz;