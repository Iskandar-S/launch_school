// Problem:

// Write a program that will ask for user's name. The program will then greet the user. If the user writes "name!" then the computer yells back to the user.

// Examples:

// What is your name? Bob
// Hello Bob.

// What is your name? Bob!
// HELLO BOB. WHY ARE WE SCREAMING?

// Solution:

let readlineSync = require('readline-sync');

let name = readlineSync.question('What is your name? ');

let nameUpperCase = name.replace('!', '.').toUpperCase();

console.log(
  name.endsWith('!')
    ? `HELLO ${nameUpperCase} WHY ARE WE SCREAMING?`
    : `Hello ${name}.`
);

// Launch School Solution:

// let readlineSync = require("readline-sync");

// let name = readlineSync.question("What is your name? ");

// if (name[name.length - 1] === "!") {
//   name = name.slice(0, -1);
//   console.log(`HELLO ${name.toUpperCase()}. WHY ARE YOU SCREAMING?`);
// } else {
//   console.log(`Hello ${name}.`);
// }
