// Problem:

// Write a function that returns an Array that contains every other element of an Array that is passed in as an argument. The values in the returned list should be those values that are in the 1st, 3rd, 5th, and so on elements of the argument Array.

// Examples:

console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
console.log(oddities(['abc', 'def'])); // logs ['abc']
console.log(oddities([123])); // logs [123]
console.log(oddities([])); // logs []

// Solution:

function oddities(array) {
  return array.filter((element, index) => index % 2 === 0);
}

// Further Exploration
// Write a companion function that returns the 2nd, 4th, 6th, and so on elements of an array.

function normalities(array) {
  return array.filter((element, index) => index % 2 !== 0);
}

console.log(normalities([2, 3, 4, 5, 6])); // logs [3, 5]
console.log(normalities([1, 2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(normalities(['abc', 'def'])); // logs ['def']
console.log(normalities([123])); // logs []
console.log(normalities([])); // logs []
