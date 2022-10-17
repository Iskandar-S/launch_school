let words = [
	'laboratory',
	'experiment',
	'flab',
	'Pans Labyrinth',
	'elaborate',
	'polar bear',
];

console.log(allMatches(words, /lab/)); // => ['laboratory', 'flab', 'elaborate']

function allMatches(array, regex) {
	return array.filter((string) => regex.test(string));
}
