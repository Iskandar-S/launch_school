// Problem:

// Write a program that asks the user to enter an integer greater than 0, then asks whether the user wants to determine the sum or the product of all numbers between 1 and the entered integer, inclusive.

// Examples:

// Please enter an integer greater than 0: 5
// Enter "s" to compute the sum, or "p" to compute the product. s

// The sum of the integers between 1 and 5 is 15.

// Please enter an integer greater than 0: 6
// Enter "s" to compute the sum, or "p" to compute the product. p

// The product of the integers between 1 and 6 is 720.

// Solution:

let readlineSync = require('readline-sync');

function getInteger() {
  let input = Number(
    readlineSync.question('Please enter an integer greater than 0: ')
  );
  if (input > 0 && input !== Infinity) {
    return input;
  }
  console.log('Invalid entry.');
  return getInteger();
}

function getOperation() {
  let input = readlineSync
    .question('Enter "s" to compute the sum, or "p" to compute the product. ')
    .toLowerCase();
  if (input === 's' || input === 'p') {
    return input;
  }
  console.log('Invalid entry.');
  return getOperation();
}

function computeSum(integer) {
  let sum = 0;
  for (let i = 1; i <= integer; i += 1) {
    sum += i;
  }
  return sum;
}

function computeProduct(integer) {
  let product = 1;
  for (let i = 1; i <= integer; i += 1) {
    product *= i;
  }
  return product;
}

let integer = getInteger();
let operation = getOperation();

if (operation === 's') {
  let sum = computeSum(integer);
  console.log(`The sum of the integers between 1 and ${integer} is ${sum}.`);
} else if (operation === 'p') {
  let product = computeProduct(integer);
  console.log(
    `The product of the integers between 1 and ${integer} is ${product}.`
  );
}
