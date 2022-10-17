// What does the following function do?

function doSomething(string) {
	return string
		.split(' ')
		.reverse()
		.map((value) => value.length);
}

// The function above splits string input by space (by words) to array of substrings; reverses the order of substrings and returns an array of numbers equal to length of substrings(words)
