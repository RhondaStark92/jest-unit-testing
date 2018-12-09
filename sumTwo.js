const sumTwo = function (value1, value2) {
  if (value2 == undefined) {
    return value1;
  }
  let num1 = parseFloat(value1);
  let num2 = parseFloat(value2);
  return num1 + num2;
}

module.exports = sumTwo;