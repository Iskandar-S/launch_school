// Problem:

// Write a function that takes one integer argument, which may be positive, negative, or zero. This method returns true if the number's absolute value is odd. You may assume that the argument is a valid integer value.

// Examples:

console.log(isOdd(2)); // => false
console.log(isOdd(5)); // => true
console.log(isOdd(-17)); // => true
console.log(isOdd(-8)); // => false
console.log(isOdd(0)); // => false
console.log(isOdd(7)); // => true

// Solution:

function isOdd(int) {
	return Math.abs(int) % 2 === 1;
}

// I could've used an arrow function to keep it short, like this:

// let isOdd = (int) => Math.abs(int) % 2 === 1;

// However, arrow functions can't be called before their declaration.

// I will use a function declaration to maintain the structure/format of the exercise problem, followed by the exercise solution going forward.
