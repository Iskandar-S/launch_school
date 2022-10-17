// What does this code log to the console? Why?

let array1 = [1, 2, 3];
let array2 = array1;
array1[1] = 4;
console.log(array2);

// This code will log [1, 4, 3] since we are reassigning the value of array element at index 1. Variable array2, as variable 1, is still referencing the same array
