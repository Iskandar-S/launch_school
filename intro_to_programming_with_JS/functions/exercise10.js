// Using the code from Exercise 9, classify each variable name as either global or local. For our purposes here, you may assume that the code from Exercise 9 is the entire program.

function multiply(left, right) {
	// Global: multiply; Local: left, right
	let product = left * right; // Local: product
	return product;
}

function getNumber(prompt) {
	// Global: getNumber; Local: prompt
	return parseFloat(question(prompt)); //Global: parseFloat, question
}

let left = getNumber('Enter the first number: '); // Global: left
let right = getNumber('Enter the second number: '); //Global: right
console.log(`${left} * ${right} = ${multiply(left, right)}`); //Global: console
