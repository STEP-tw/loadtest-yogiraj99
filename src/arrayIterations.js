/*
  selectOdd
  This function selects all the odd numbers from a given list of numbers
*/
const isOdd = require('./basic').isOdd;
const selectOdd = function (list) {
  return list.filter(isOdd);
};
/*
  selectEven
  This function selects all the even numbers from a given list of numbers
*/
const isEven = require('./basic').isEven;
const selectEven = function (list) {
  return list.filter(isEven);
};

/*
  sumUp
  This function sums up all the numbers of a given list
*/
const addNum = function (num1, num2) {
  return num1 + num2;
};
const sumUp = function (list, initialValue) {
  initialValue = (initialValue) ? initialValue : 0;
  return list.reduce(addNum, initialValue);
};

/*
  reverseList
  This function reverses the elements of a given list and provides a new list
*/


/*
  reverseFibo
  This function provides the first n terms of a fibonacci series in reverse order
  This function accepts a single number, n as its only argument.
*/

/*
  greatestInList
  This function provides the greatest number in a list, given a list of numbers
*/
const giveGreater = function (num1, num2) {
  if (num1 > num2) {
    return num1;
  }
  return num2;
};
const greatestInList = function (list) {
  if (list === []) {
    return undefined;
  }
  return list.reduce(giveGreater, list[0]);
};

/*
  leastInList
  This function provides the lowest number in a list, given a list of numbers
*/
const least = function (num1, num2) {
  if (num1 < num2) {
    return num1;
  }
  return num2;
}
const leastInList = function (list) {
  if (list === []) {
    return undefined;
  }
  return list.reduce(least, list[0]);
}

/*
  mapLengths
  This function provides a list of lengths corresponding to the list of strings
  given as an argument
*/
const giveLength = function (element) {
  return element.length;
};
const mapLengths = function (list) {
  return list.map(giveLength);
};

/*
  isAscendingOrder
  This function checks if a given list is in ascending order or not
*/
const isAscendingOrder = function (list) {
  return list[list.length - 1] == list.reduce(giveGreater, list[0]);
};

/*
  isDescendingOrder
  This function checks if a given list is in descending order or not
*/
const giveLesser = function (num1, num2) {
  if (num1 < num2) {
    return num1;
  }
  return num2;
};
const isDescendingOrder = function (list) {
  return list[list.length - 1] == list.reduce(giveLesser, list[0]);
};


/*
  extractDigits
  This function extracts the digits of a given number and returns a list of digits
*/


/*
  countBelowThreshold
  This function provides the count of numbers below given threshold
*/


/*
  countAboveThreshold
  This function provides the count of numbers above given threshold
*/


exports.selectOdd = selectOdd;
exports.selectEven = selectEven;
exports.sumUp = sumUp;
exports.reverseList = reverseList;
exports.reverseFibo = reverseFibo;
exports.greatestInList = greatestInList;
exports.leastInList = leastInList;
exports.mapLengths = mapLengths;
exports.isAscendingOrder = isAscendingOrder;
exports.isDescendingOrder = isDescendingOrder;
exports.extractDigits = extractDigits;
exports.countBelowThreshold = countBelowThreshold;
exports.countAboveThreshold = countAboveThreshold;
