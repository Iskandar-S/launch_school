// Identify all of the variables, object property names, primitive values, and objects shown in the following code (assume the code has not been executed). Don't panic if you miss a few items - this exercise is more challenging than it looks.

function hello(greeting, name) {
	return greeting + ' ' + name;
}

function xyzzy() {
	return { a: 1, b: 2, c: [3, 4, 5], d: {} };
}

const howdy = hello('Hi', 'Grace');
let foo = xyzzy();

// Solution:

// Variables: hello, greeting, name, xyzzy, howdy, foo

// Object property names: a, b, c, d

// Primitive values: ' ', 1, 2, 3, 4, 5, 'Hi', 'Grace'

// Objects: hello function, xyzzy function, { a: 1, b: 2, c: [3, 4, 5], d: {} }, [3, 4, 5], {}

// Missed:

// Object property names: Array indexes are property names, so 0, 1, and 2 are property names for the [3, 4, 5] array.

// Primitive values: Object property names are usually strings, and strings are primitive values. Thus, we should also include 'a', 'b', 'c', and 'd' in the list and 0, 1, and 2 for the array indexes of [3, 4, 5].
