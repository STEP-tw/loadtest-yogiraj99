/*
  isEven
  This function takes a number and returns true or false
  based on whether the number is even or not
*/
const isEven = function (number) {
  return number % 2 === 0;
};
/*
  isOdd
  This function takes a number and returns true or false
  based on whether the number is odd or not
*/

const isOdd = function (number) {
  return number % 2 === 1;
};
/*
  square
  This function takes a number and returns the mathematical square
  of that number
*/

const square = function (number) {
  return number * number;
};
/*
  cube
  This function takes a number and returns the mathematical cube
  of that number
*/
const cube = function (number) {
  return number * number * number;
};


/*
  gcd
  This function returns the greatest common divisor of any two numbers
*/
const gcd = function (firstNumber, secondNumber) {
  for (let divisor = firstNumber; divisor >= 1; divisor--) {
    if (firstNumber % divisor == 0 && secondNumber % divisor == 0) {
      return divisor;
    }
  }
};


/*
  lcm
  This function returns the least common multiple of any two numbers
*/


/*
  simpleInterest
  This function returns the simple interest calculated when given
  principle, period and rate of interest(in that order)
*/
const simpleInterest = function (p, n, r) {
  return p * r * n / 100
};

/*
  compoundInterest
  This function returns the simple interest calculated when given
  principle, period and rate of interest annually(in that order)
*/

const compoundInterest = function (principle, noOfYears, rate, compFreq) {
  compFreq = (compFreq) ? compFreq : 1;
  let comp = Math.floor(noOfYears * compFreq);
  return principle * Math.pow(((100 + rate / compFreq) / 100), comp) - principle;
};

/*
  greatestOf
  This function returns the greatest of three numbers
*/
const greatestOf = function (num1, num2, num3) {
  if (num1 > num2 && num1 > num3) return num1;
  if (num2 > num3) return num2;
  return num3;
};

/*
  averageOf
  This function returns the average of three numbers
*/
const averageOf = function (num1, num2, num3) {
  return (num1 + num2 + num3) / 3;
};


exports.isEven = isEven;
exports.isOdd = isOdd;
exports.square = square;
exports.cube = cube;
exports.gcd = gcd;
exports.lcm = lcm;
exports.simpleInterest = simpleInterest;
exports.compoundInterest = compoundInterest;
exports.greatestOf = greatestOf;
exports.averageOf = averageOf;
