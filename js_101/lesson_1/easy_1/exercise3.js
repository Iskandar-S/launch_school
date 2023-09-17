// Problem:

// Log all even numbers from 1 to 99, inclusive, to the console, with each number on a separate line.

// Solution:

for (let i = 1; i <= 99; i += 1) {
	if (i % 2 === 0) {
		console.log(i);
		i += 1;
	}
}

// When an even number is found, this solution increments i on line 10 to skip iteration over odd numbers and move to the next even number.
