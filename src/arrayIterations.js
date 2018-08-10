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
const reverseList = function (list) {
  return list.reduce(pushInList, []);
};

/*
  reverseFibo
  This function provides the first n terms of a fibonacci series in reverse order
  This function accepts a single number, n as its only argument.
*/
const reverseFibo = function (nth) {
  let currentNum = 1;
  let preNum = 0;
  let nextNum = 0;
  let reverseFiboList = [];
  if (nth == 0 || nth < 0) {
    return reverseFiboList;
  }
  reverseFiboList.unshift(0);
  if (nth == 1) {
    return reverseFiboList;
  }
  reverseFiboList.unshift(1);
  if (nth != 2) {
    for (let counter = 3; counter <= nth; counter++) {
      reverseFiboList.unshift(currentNum + preNum);
      nextNum = currentNum + preNum;
      preNum = currentNum;
      currentNum = nextNum;
    }
  }
  return reverseFiboList;
};
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
};
const leastInList = function (list) {
  if (list === []) {
    return undefined;
  }
  return list.reduce(least, list[0]);
};

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
const pushInList = function (newList, element) {
  newList.push(element);
  return newList;
};
const extractDigits = function (number) {
  let list = number.toString().split("");
  return list.reduce(pushInList, []);
};


/*
  countBelowThreshold
  This function provides the count of numbers below given threshold
*/
const isAboveThreshold = function (threshold) {
  return function (num) {
    return num > threshold;
  };
};
const countAboveThreshold = function (list, threshold) {
  return list.filter(isAboveThreshold(threshold)).length;
};

/*
  countAboveThreshold
  This function provides the count of numbers above given threshold
*/
const isBelowThreshold = function (threshold) {
  return function (num) {
    return num < threshold;
  }
};
const countBelowThreshold = function (list, threshold) {
  return list.filter(isBelowThreshold(threshold)).length;
};


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
