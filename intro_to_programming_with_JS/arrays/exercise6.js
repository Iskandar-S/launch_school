function oddLengths(array) {
	return array
		.map((element) => element.length)
		.filter((length) => length % 2 !== 0);
}

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]
