// Problem:

// Write a function that takes a year as input and returns the century. The return value should be a string that begins with the century number, and ends with 'st', 'nd', 'rd', or 'th' as appropriate for that number.

// New centuries begin in years that end with 01. So, the years 1901 - 2000 comprise the 20th century.

// Examples:

console.log(century(2000)); // "20th"
console.log(century(2001)); // "21st"
console.log(century(1965)); // "20th"
console.log(century(256)); // "3rd"
console.log(century(5)); // "1st"
console.log(century(10103)); // "102nd"
console.log(century(1052)); // "11th"
console.log(century(1127)); // "12th"
console.log(century(11201)); // "113th"

// Solution:

function century(year) {
  let century = String(Math.ceil(year / 100));

  if (century.endsWith("1") && !century.endsWith("11")) {
    return century + "st";
  } else if (century.endsWith("2") && !century.endsWith("12")) {
    return century + "nd";
  } else if (century.endsWith("3") && !century.endsWith("13")) {
    return century + "rd";
  } else {
    return century + "th";
  }
}
