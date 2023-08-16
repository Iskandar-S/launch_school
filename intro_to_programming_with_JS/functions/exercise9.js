// Identify all of the variables named on each line of the following code. You may assume that question is the name of a built-in function in JavaScript (it is not, so this code won't work as written).

function multiply(left, right) {
	//multiply, left, right
	let product = left * right; //product, left, right
	return product; //product
}

function getNumber(prompt) {
	//getNumber, prompt
	return parseFloat(question(prompt)); //parseFloat, question, prompt
}

let left = getNumber('Enter the first number: '); //left, getNumber
let right = getNumber('Enter the second number: '); //right, getNumber
console.log(`${left} * ${right} = ${multiply(left, right)}`); //console, left, right, multiply
