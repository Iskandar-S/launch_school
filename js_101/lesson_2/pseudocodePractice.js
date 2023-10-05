/*

Pseudocode for a function that determines which number in a collection has the greatest value.

Casual pseudocode:

Given a collection of numbers.

Iterate through the collection one by one.
  - save the first value as the starting value.
  - for each iteration, compare the saved value with the current value.
  - if the current number is greater
    - reassign the saved value as the current value
  - otherwise, if the current value smaller or equal
    - move to the next value in the collection

After iterating through the collection, return the saved value.

Formal Pseudocode:

  START

# Given a collection of integers called "numbers"

SET iterator = 1
SET savedNumber = value within numbers collection at space 1

WHILE iterator <= length of numbers
  SET currentNumber = value within numbers collection at space "iterator"
  IF currentNumber > savedNumber
    savedNumber = currentNumber
  ELSE
    skip to the next iteration

  iterator = iterator + 1

PRINT savedNumber

END
*/

function findGreatest(numbers) {
  let savedNumber = numbers[0];

  numbers.forEach(number => {
    if (number > savedNumber) {
      savedNumber = number;
    }
  });

  return savedNumber;
}

/*

PRACTICE:

Write out pseudocode (both casual and formal) that does the following:

a function that returns the sum of two numbers

a function that takes an array of strings, and returns a string that is all those strings concatenated together

a function that takes an array of integers, and returns a new array with every other element from the original array, starting with the first element. For instance:

everyOther([1,4,7,2,5]); // => [1,7,5]

a function that determines the index of the 3rd occurrence of a given character in a string. For instance, if the given character is 'x' and the string is 'axbxcdxex', the function should return 6 (the index of the 3rd 'x'). If the given character does not occur at least 3 times, return null.

a function that takes two arrays of numbers and returns the result of merging the arrays. The elements of the first array should become the elements at the even indexes of the returned array, while the elements of the second array should become the elements at the odd indexes. For instance:

merge([1, 2, 3], [4, 5, 6]); // => [1, 4, 2, 5, 3, 6]

You may assume that both array arguments have the same number of elements.

You don't need to write any JavaScript code here; just practice writing the logic in English.

PRACTICE:

a function that returns the sum of two numbers

Casual pseudocode:

Given two numbers.
Return the result of adding two numbers.

Formal pseudocode:

START

# Given 2 numbers called "number1" and "number2"

PRINT number1 + number2

END

***

a function that takes an array of strings, and returns a string that is all those strings concatenated together

Casual Pseudocode:

Given an array of strings.

Iterate through the array one by one.
  - save the first string as the starting string.
  - for each iteration, concatenate the saved string with the current string.

After iterating through the array, return the saved string.

Formal Pseudocode:

START

# Given an array of strings named "strings"

SET iterator = 1
SET savedString = value within strings array at space 1

WHILE iterator <= length of strings
  SET currentString = value within strings array at space "iterator"
  savedString = savedString + currentString

PRINT savedString

END

***

a function that takes an array of integers, and returns a new array with every other element from the original array, starting with the first element. For instance:

everyOther([1,4,7,2,5]); // => [1,7,5]

Casual Pseudocode:

Given an array of integers.

Iterate through every other element of the original array.
  - for each iteration save the current element in a new array.

After iterating through the array, return a new array.

Formal Pseudocode:

START

#Given an array of integers called "integers"

SET iterator = 0
SET everyOtherElement = [];

WHILE iterator < length of integers
  SET currentElement = value within integers array at space "iterator"
  add currentElement to the end of everyOtherElement
  iterator = iterator + 2;

PRINT everyOtherElement

END

***

a function that determines the index of the 3rd occurrence of a given character in a string. For instance, if the given character is 'x' and the string is 'axbxcdxex', the function should return 6 (the index of the 3rd 'x'). If the given character does not occur at least 3 times, return null.

Casual Pseudocode:

Given a character and a string

Iterate through string characters one by one.
  - for each iteration, compare the given character with the current character.
  - if the current character is equal to the given character
    - increment ocurrence by one
    - if occurence equals three, return current character's index
  - otherwise, if the current character is not equal to the given character
    - move to the next character in the given string

After iterating through the collection, return null

Formal Pseudocode:

START

#Given a character called "char" and a string called "string"

SET iterator = 0
SET ocurrence = 0

WHILE iterator < length of string
  SET currentChar = character within string at space "iterator"
  IF currentChar === char
    ocurrence = ocurrence + 1
    IF ocurrence === 3
      PRINT iterator
  ELSE
    skip to the next iteration

  iterator = iterator + 1

PRINT null

END

***

a function that takes two arrays of numbers and returns the result of merging the arrays. The elements of the first array should become the elements at the even indexes of the returned array, while the elements of the second array should become the elements at the odd indexes. For instance:

merge([1, 2, 3], [4, 5, 6]); // => [1, 4, 2, 5, 3, 6]

You may assume that both array arguments have the same number of elements.

Casual Pseudocode:

Given two arrays of numbers

Iterate through the first array one by one.
  - save the current value of the first array in the new array
  - save the current value of the second array in the new array

After iterating through the array, return the new array.

Formal Pseudocode:

START

#Given two arrays called "array1" and "array2"

SET iterator = 0
SET mergedArray = []

WHILE iterator < length of array1
  SET currentValue1 = value within array1 at space "iterator"
  add currentValue1 to the end of mergedArray
  SET currentValue2 = value within array2 at space "iterator"
  add currentValue2 to the end of mergedArray

  iterator = iterator + 1

PRINT mergedArray

END
*/