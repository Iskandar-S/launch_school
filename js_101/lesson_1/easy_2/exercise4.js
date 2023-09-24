// Problem:

// Using the multiply() function from the "Multiplying Two Numbers" problem, write a function that computes the square of its argument (the square is the result of multiplying a number by itself).

// Example:

console.log(square(5) === 25); // logs true
console.log(square(-8) === 64); // logs true

// Solution:

function multiply(number1, number2) {
  return number1 * number2;
}

function square(number) {
  return multiply(number, number);
}
