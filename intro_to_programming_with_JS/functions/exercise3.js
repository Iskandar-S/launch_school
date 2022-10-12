function getNumber(prompt) {
	let rlSync = require('readline-sync');
	let number = rlSync.question(prompt);
	return number;
}

let firstNumber = Number(getNumber('Enter the first number: '));
let secondNumber = Number(getNumber('Enter the second number: '));
let result = firstNumber * secondNumber;

console.log(`${firstNumber} * ${secondNumber} = ${result}`);
