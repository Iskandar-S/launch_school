// Identify all of the variables, object property names, primitive values, and objects in the following code. This problem is even more challenging than the previous one.

function bar(arg1, arg2) {
	let foo = 'Hello';
	const qux = {
		abc: [1, 2, 3, [4, 5, 6]],
		def: null,
		ghi: NaN,
		jkl: foo,
		mno: arg1,
		pqr: arg2,
	};

	return qux;
}

let result = bar('Victor', 'Antonina');

// Note that some items in this program may appear in multiple categories.

// Solution:

// Variables: bar, arg1, arg2, foo, qux, result

// Object property names: abc, indexes of abc property value array and of nested array of that value, def, ghi, jkl, mno, pqr

// Primitive values: 'Hello', 'abc', 1, 2, 3, 4, 5, 6, indexes of arrays,'def', null, 'ghi', NaN, 'jkl', 'mno', 'pqr', 'Victor', 'Antonina'

// Objects: bar function, qux, abc property value array and nested array
