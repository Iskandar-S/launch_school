console.log('5' + 10); // logs '510' because of implicit type coercion where Number type 10 is coerced to String type '10' and concatenated with String '5'

// Solution:

// The code logs 510 since every + expression that has a string operand produces a string result no matter what the other operand is.In other words, the Number 10 gets coerced to a String and then gets concatenated to the String '5', which produces '510'.