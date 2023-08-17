// Using the code from Exercise 9, are the left and right variables on lines 1 and 2 the same as the left and right variables on lines 10-12? Explain your reasoning.

function multiply(left, right) {
	let product = left * right;
	return product;
}

function getNumber(prompt) {
	return parseFloat(question(prompt));
}

let left = getNumber('Enter the first number: ');
let right = getNumber('Enter the second number: ');
console.log(`${left} * ${right} = ${multiply(left, right)}`);

// left and right variables on lines 1 and 2 are function parameters. They are local variables for the 'multiply' function.

// left and right variables on lines 10-12 are global variables and used as arguments in 'multiply' function call on line 12
