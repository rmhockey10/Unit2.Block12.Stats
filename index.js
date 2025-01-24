/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the length of the array
 */
function getLength(numbers) {
  const getLength = numbers.length;
  return getLength;
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the sum of the numbers
 */
function getSum(numbers) {
  let i = 0;
  let j = 0;
  let k = 0;
  while (i < numbers.length) {
    let j = numbers[i];
    k = j + k;
    i = i + 1;
  }
  const getSum = k;
  return getSum;
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the mean of the numbers
 */
function getMean(numbers) {
  const getMean = getSum(numbers) / numbers.length;
  return getMean;
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the smallest of the numbers
 */
function getMin(numbers) {
  // const getMin = Math.min(...numbers);
  // return getMin;
  let i = 0;
  let getMin = numbers[0];
  while (i < numbers.length) {
    if (numbers[i] < getMin) {
      let getMin = numbers[i];
      i = i + 1;
    } else {
      i = i + 1;
    }
  }
  return getMin;
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the largest of the numbers
 */
function getMax(numbers) {
  const getMax = Math.max(...numbers);
  return getMax;
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the range of the numbers (max - min)
 */
function getRange(numbers) {
  const getRange = getMax(numbers) - getMin(numbers);
  return getRange;
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number[]} the even numbers in the array
 */
function getEvens(numbers) {
  const getEvens = [];
  let i = 0;
  while (i < numbers.length) {
    if (numbers[i] % 2 === 0) {
      getEvens.push(numbers[i]);
      i = i + 1;
    } else {
      i = i + 1;
    }
  }
  return getEvens;
}
/**
 * @param {number[]} numbers an array of integers
 * @returns {number[]} the odd numbers in the array
 */
function getOdds(numbers) {
  const getOdds = [];
  let i = 0;
  while (i < numbers.length) {
    if (numbers[i] % 2 !== 0) {
      getOdds.push(numbers[i]);
      i = i + 1;
    } else {
      i = i + 1;
    }
  }
  return getOdds;
}

// === READ BUT DO NOT EDIT THE CODE BELOW ===

/**
 * @param {string} commaSeparatedNumbers
 * @returns {number[]} the string converted into an array of numbers
 */
function convertStringToNumbers(commaSeparatedNumbers) {
  // Split the string of numbers into an array of strings.
  const strings = commaSeparatedNumbers.split(",");

  // Convert the array of strings into an array of numbers
  const numbers = [];
  for (const s of strings) {
    const number = parseInt(s);
    numbers.push(number);
  }
  return numbers;
}

/**
 * Prints some descriptive statistics about the provided numbers.
 * @param {number[]} numbers
 */
function describeNumbers(numbers) {
  console.log(numbers);
  console.log(`You have given ${getLength(numbers)} numbers.`);
  console.log(`The sum of your numbers is ${getSum(numbers)}.`);
  console.log(`The mean of your numbers is ${getMean(numbers)}.`);
  console.log(`The smallest of your numbers is ${getMin(numbers)}.`);
  console.log(`The largest of your numbers is ${getMax(numbers)}.`);
  console.log(`The range of your numbers is ${getRange(numbers)}.`);
  console.log(`The even numbers you gave are ${getEvens(numbers)}.`);
  console.log(`The odd numbers you gave are ${getOdds(numbers)}.`);
}

const userInputString = prompt(
  "Please enter some integers separated by commas.",
  "1,2,3,4,5"
);
const numbers = convertStringToNumbers(userInputString);
describeNumbers(numbers);
