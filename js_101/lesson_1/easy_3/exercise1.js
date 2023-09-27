// Problem:

// Write a function that takes a string argument and returns a new string that contains the value of the original string with all consecutive duplicate characters collapsed into a single character.

// Examples:

console.log(crunch('ddaaiillyy ddoouubbllee')); // "daily double"
console.log(crunch('4444abcabccba')); // "4abcabcba"
console.log(crunch('ggggggggggggggg')); // "g"
console.log(crunch('a')); // "a"
console.log(crunch('')); // ""

// Solution:

function crunch(string) {
  return string
    .split('')
    .filter((character, index) => character !== string[index - 1])
    .join('');
}

// Further exploration:

// It's also possible to solve this using regular expressions. For a nice challenge, give this a try with regular expressions.

// Solution:

function crunchRegex(string) {
  let regex = /(.)(?=\1)/gi;
  return string.replace(regex, '');
}

console.log(crunchRegex('ddaaiillyy ddoouubbllee')); // "daily double"
console.log(crunchRegex('4444abcabccba')); // "4abcabcba"
console.log(crunchRegex('ggggggggggggggg')); // "g"
console.log(crunchRegex('a')); // "a"
console.log(crunchRegex('')); // ""
