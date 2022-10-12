function capitalize11(string) {
	if (string.length > 10) {
		return string.toUpperCase();
	} else {
		return string;
	}
}

console.log(capitalize11('hello world'));
console.log(capitalize11('goodbye'));
