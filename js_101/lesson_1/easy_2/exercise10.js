// Problem:

// Build a program that logs when the user will retire and how many more years the user has to work until retirement.

// Example:

// What is your age? 30
// At what age would you like to retire? 70

// It's 2017. You will retire in 2057.
// You have only 40 years of work to go!

// Solution:

let readlineSync = require('readline-sync');

let currentAge = Number(readlineSync.question('What is your age? '));
let retirementAge = Number(
  readlineSync.question('At what age would you like to retire? ')
);

let today = new Date();

let currentYear = today.getFullYear();

let yearsToRetire = retirementAge - currentAge;
let retirementYear = currentYear + yearsToRetire;

console.log(`It's ${currentYear}. You will retire in ${retirementYear}.`);
console.log(`You have only ${yearsToRetire} years of work to go!`);

// Further Exploration:

// What would happen if the new keyword wasn't used in defining the today variable on line 8?

let date = Date();

console.log(date);

// When called as a function, returns a string representation of the current date and time.

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
