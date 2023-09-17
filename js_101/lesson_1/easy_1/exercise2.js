// Problem:

// Log all odd numbers from 1 to 99, inclusive, to the console, with each number on a separate line.

// Solution:

// for (let i = 1; i <= 99; i += 2) {
// 	console.log(i);
// }

// or

// for (let i = 1; i <= 99; i++) {
// 	if (i % 2 === 1) {
// 		console.log(i);
// 	}
// }

// Further Exploration

// Repeat this exercise with a technique different from the one that you used, and different from the one provided. Also consider adding a way for the user to specify the limits of the odd numbers logged to the console.

// Solution:

let rlSync = require('readline-sync');

let lowerLimit = Number(
	rlSync.question('Please set the lower limit (default limit: 0): '),
);
let upperLimit = Number(
	rlSync.question('Please set the upper limit (default limit: 0): '),
);

if (!isNaN(lowerLimit) && !isNaN(upperLimit) && lowerLimit < upperLimit) {
	while (lowerLimit <= upperLimit) {
		if (Math.abs(lowerLimit % 2) === 1) {
			console.log(lowerLimit);
			lowerLimit += 2;
			continue;
		}
		lowerLimit += 1;
	}
} else {
	console.log('Stop being silly.');
}
