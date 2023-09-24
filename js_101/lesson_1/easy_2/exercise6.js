// Problem:

// Write a function that returns the next to last word in the String passed to it as an argument.

// Words are any sequence of non-blank characters.

// You may assume that the input String will always contain at least two words.

// Examples:

// console.log(penultimate('last word') === 'last'); // logs true
// console.log(penultimate('Launch School is great!') === 'is'); // logs true

// Solution:

// function penultimate(string) {
//   let words = string.split(' ');
//   return words[words.length - 2];
// }

// Further exploration:

//Our solution ignored a couple of edge cases because we explicitly stated that you didn't have to handle them: strings that contain just one word, and strings that contain no words.

// Suppose we need a function that retrieves the middle word of a phrase/sentence. What edge cases need to be considered? How would you handle those edge cases without ignoring them? Write a function that returns the middle word of a phrase or sentence. It should handle all of the edge cases you thought of.

// Solution:

function middleWord(string) {
  if (typeof string === 'string') {
    let words = string.split(' ').filter((word) => word !== '');
    let wordCount = words.length;
    let middleIndex = Math.floor(wordCount / 2);
    if (wordCount === 0) {
      return null;
    } else if (wordCount % 2 !== 0) {
      return words[middleIndex];
    } else {
      return [words[middleIndex - 1], words[middleIndex]];
    }
  }
  return null;
}

console.log(middleWord(''));
console.log(middleWord('    '));
console.log(middleWord('one'));
console.log(middleWord('last word'));
console.log(middleWord('LS is great!'));
console.log(middleWord('Launch School is great!'));
console.log(middleWord('multiple spaces                   count'));
console.log(middleWord(1, 2, 3, 4, 5));
console.log(middleWord(undefined));
console.log(middleWord(['one']));
