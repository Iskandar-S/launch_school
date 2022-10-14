function sumOfSquares(array) {
	return array.reduce((prev, curr) => {
		return prev + curr * curr;
	}, 0);
}

let array = [3, 5, 7];
console.log(sumOfSquares(array)); // => 83
