// Problem:

// Log all even numbers from 1 to 99, inclusive, to the console, with each number on a separate line.

// Solution:

for (let i = 1; i <= 99; i += 1) {
	if (i % 2 === 0) {
		console.log(i);
		i += 1;
	}
}
