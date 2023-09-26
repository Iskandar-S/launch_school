// Problem:

// Build a program that randomly generates Teddy's age, and logs it to the console. Have the age be a random number between 20 and 120 (inclusive).

// Example Output:

// Teddy is 69 years old!

// Solution:

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let age = randomNumber(20, 120);
console.log(`Teddy is ${age} years old!`);

// Further Exploration:

// The randomBetween function used the Math.floor() method. Would it make a difference if the Math.round() method was used instead?

// Also, how can we make the function more robust? What if the user inadvertently gave the inputs in reverse order (i.e., the value passed to min was greater than max)?

function randomNumberRobust(number1, number2) {
  let max = Math.max(number1, number2);
  let min = Math.min(number1, number2);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let ageRobust = randomNumberRobust(120, 20);
console.log(`Teddy is ${ageRobust} years old!`);
