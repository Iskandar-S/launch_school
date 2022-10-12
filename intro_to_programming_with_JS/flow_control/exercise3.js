function evenOrOdd(number) {
	if (typeof number === 'number') {
		if (number % 2 === 0) {
			console.log('even');
		} else {
			console.log('odd');
		}
	} else {
		console.log('input is not an integer');
		return;
	}
}

evenOrOdd(2);
evenOrOdd(3);
evenOrOdd('2')
