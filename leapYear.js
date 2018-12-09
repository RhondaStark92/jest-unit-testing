const leapYear = function (value1) {

  if (value1 === 0) {
      return false;
  } else if (typeof value1 == 'string') {
      return false;
  } else if (value1 % 400 === 0) {
      return true;
  } else if (value1 % 100 === 0) {
      return false
  } else if (value1 % 4 === 0) {
      return true;
  } else {
      return false;
  }
}

module.exports = leapYear;