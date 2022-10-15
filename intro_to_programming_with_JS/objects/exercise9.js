// What does the following program log to the console? Why?

let foo = {
	a: 'hello',
	b: 'world',
};

let qux = 'hello';

function bar(argument1, argument2) {
	argument1.a = 'hi';
	argument2 = 'hi';
}

bar(foo, qux);

console.log(foo.a);
console.log(qux);

// The program log 'hi' and 'hello' because first reassignment in function bar, on line 11, is to the objects property, and objects are mutable. The second reassignment, on line 12, doesn't mutate the string since primitives are not mutable.
