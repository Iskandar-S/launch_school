'12' < '9';

console.log('12' < '9');

// I thought it evaluates to false (implicit type coercion). Turns out it evaluates to true because JavaScript performs a character-by-character comparison going from left to right and starts with '1' < '9'. Good to know