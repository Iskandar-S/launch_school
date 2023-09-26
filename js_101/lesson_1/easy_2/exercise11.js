// Problem:

// Write a function that takes a non-empty string argument and returns the middle character(s) of the string. If the string has an odd length, you should return exactly one character. If the string has an even length, you should return exactly two characters.

// Examples:

console.log(centerOf('I Love JavaScript')); // "a"
console.log(centerOf('Launch School')); // " "
console.log(centerOf('Launch')); // "un"
console.log(centerOf('Launchschool')); // "hs"
console.log(centerOf('x')); // "x"
console.log(centerOf('')); // null
console.log(centerOf(123)); // null

// Solution:

function centerOf(string) {
  if (typeof string !== 'string' || string.length === 0) {
    return null;
  }

  let middleIndex = Math.floor(string.length / 2);
  let isOdd = string.length % 2 !== 0;

  if (isOdd) {
    return string[middleIndex];
  } else {
    return string.slice(middleIndex - 1, middleIndex + 1);
  }
}
