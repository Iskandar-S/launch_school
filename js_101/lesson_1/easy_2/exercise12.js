// Problem:

// Write a function that takes a number as an argument. If the argument is a positive number, return the negative of that number. If the argument is a negative number, return it as-is.

// Examples:

console.log(negative(5)); // -5
console.log(negative(-3)); // -3
console.log(negative(0)); // -0
console.log(negative(-0)); // -0
console.log(negative('0')); // null
console.log(negative(NaN)); // null

// Solution:

function negative(number) {
  if (typeof number !== 'number' || isNaN(number)) {
    return null;
  }

  return Math.abs(number) * -1;
}

// Further Exploration:

// An alternative solution would be to use the ternary operator (e.g., a ? b : c). If you haven't already used it, try refactoring the solution using the ternary operator.

// Solution:

function negativeTernary(number) {
  if (typeof number !== 'number' || isNaN(number)) {
    return null;
  }

  return number < 0 ? number : Math.abs(number) * -1;
}

console.log(negativeTernary(5)); // -5
console.log(negativeTernary(-3)); // -3
console.log(negativeTernary(0)); // -0
console.log(negativeTernary(-0)); // -0
console.log(negativeTernary('0')); // null
console.log(negativeTernary(NaN)); // null
