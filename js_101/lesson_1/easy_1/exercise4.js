// Problem:

// Build a program that asks the user to enter the length and width of a room in meters, and then logs the area of the room to the console in both square meters and square feet.

// Note: 1 square meter == 10.7639 square feet

// Do not worry about validating the input at this time. Use the readlineSync.prompt method to collect user input.

// Example:

// Enter the length of the room in meters:
// 10
// Enter the width of the room in meters:
// 7
// The area of the room is 70.00 square meters (753.47 square feet).

// Solution:

// let readlineSync = require('readline-sync');

// const SQMETERS_TO_SQFEET = 10.7639;

// console.log('Enter the length of the room in meters:');
// let length = Number(readlineSync.prompt());

// console.log('Enter the width of the room in meters:');
// let width = Number(readlineSync.prompt());

// let areaMetric = length * width;
// let areaImperial = areaMetric * SQMETERS_TO_SQFEET;

// console.log(
//   `The area of the room is ${areaMetric.toFixed(2)} square meters (${areaImperial.toFixed(2)} square feet).`
// );

// Further Exploration

// Modify the program so that it asks the user for the input type (meters or feet). Compute for the area accordingly, and log it and its conversion in parentheses.

let readlineSync = require('readline-sync');

let inputTypes = ['Feet', 'Meters'];
let CONVERSION_RATES = [0.0929, 10.7639];

let index = readlineSync.keyInSelect(inputTypes, 'Choose input type:');

let inputTypeSelected = inputTypes[index].toLowerCase();
let inputTypeConverted = inputTypes[1 - index].toLowerCase();

const CONVERSION_RATE_SELECTED = CONVERSION_RATES[index];

console.log(`Enter the length of the room in ${inputTypeSelected}:`);
let length = Number(readlineSync.prompt());

console.log(`Enter the width of the room in ${inputTypeSelected}:`);
let width = Number(readlineSync.prompt());

let area = length * width;
let areaConverted = area * CONVERSION_RATE_SELECTED;

console.log(
  `The area of the room is ${area.toFixed(2)} square ${inputTypeSelected} (${areaConverted.toFixed(2)} square ${inputTypeConverted}).`
);
