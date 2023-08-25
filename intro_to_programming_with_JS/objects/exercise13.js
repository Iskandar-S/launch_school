// Consider the following code:

function foo(bar) {
	console.log(bar());
}

foo(); // Should print 'Welcome'
foo(); // Should print 3.1415
foo(); // Should print [1, 2, 3]

// As written, this code will raise an error on line 5. Without modifying foo, update this code to print the desired text.

// Solution:

foo(function () {
	return 'Welcome';
});
foo(function () {
	return 3.1415;
});
foo(function () {
	return [1, 2, 3];
});
