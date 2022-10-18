function isNotANumber(value) {
	if (typeof value === 'number' && !(value + 1)) {
		return true;
	}
	return false;
}

console.log(isNotANumber(NaN));
console.log(isNotANumber(1));
console.log(isNotANumber('a'));
console.log(isNotANumber(undefined));
console.log(isNotANumber(null));
console.log(isNotANumber(true));

// Launch School solution:

// function isNotANumber(value) {
// 	return value !== value;
// }

// Genius is simple. https://tenor.com/view/the-simpsons-why-didnt-i-think-of-that-hank-scorpio-homer-simpson-you-only-move-twice-gif-20385109
