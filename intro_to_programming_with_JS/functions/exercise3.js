function multiply(firstNumber, secondNumber) {
	return firstNumber * secondNumber;
}

function getNumber(prompt) {
	let rlSync = require('readline-sync');
	return Number(rlSync.question(prompt));
}

let firstNumber = getNumber('Enter the first number: ');
let secondNumber = getNumber('Enter the second number: ');

console.log(
	`${firstNumber} * ${secondNumber} = ${multiply(
		firstNumber,
		secondNumber,
	)}`,
);
