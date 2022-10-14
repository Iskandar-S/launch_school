let myArray = [
	[1, 3, 6, 11],
	[4, 2, 4],
	[9, 17, 16, 0],
];

function logEven(array) {
	array.forEach((element) => {
		if (Array.isArray(element)) {
			logEven(element);
		} else if (element % 2 === 0) {
			console.log(element);
		}
	});
}

logEven(myArray);
