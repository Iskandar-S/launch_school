// Ask the user for the first number.
// Ask the user for the second number.
// Ask the user for an operation to perform.
// Perform the operation on the two numbers.
// Print the result to the terminal.

const readline = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

function getNumbers() {
  prompt("What's the first number?");
  let number1 = readline.question();

  while (invalidNumber(number1)) {
    prompt("Hmm... that doesn't look like a valid number.");
    number1 = readline.question();
  }

  prompt("What's the second number?");
  let number2 = readline.question();

  while (invalidNumber(number2)) {
    prompt("Hmm... that doesn't look like a valid number.");
    number2 = readline.question();
  }

  return [Number(number1), Number(number2)];
}

function getOperation() {
  prompt('What operation would you like to perform?\n1) Add 2) Subtract 3) Multiply 4) Divide');
  let operation = readline.question();

  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt('Must choose 1, 2, 3 or 4');
    operation = readline.question();
  }

  return operation;
}

function calculate (number1, number2, operation) {
  let output;

  switch (operation) {
    case '1':
      output = number1 + number2;
      break;
    case '2':
      output = number1 - number2;
      break;
    case '3':
      output = number1 * number2;
      break;
    case '4':
      output = number1 / number2;
      break;
  }

  return output;
}

function anotherCalculation() {
  prompt('Would you like to perform another calculation? Y/N');
  let input = readline.question().toLowerCase();

  while (input !== 'y' && input !== 'n') {
    prompt('Invalid input. Would you like to perform another calculation? Y/N');
    input = readline.question().toLowerCase();
  }

  return input === 'y';
}


function runCalculator() {
  let [number1, number2] = getNumbers();
  let operation = getOperation();
  let output = calculate(number1, number2, operation);

  prompt(`The result is: ${output}\n`);

  if (anotherCalculation()) {
    console.clear();
    runCalculator();
  } else {
    prompt('Thank you for using Calculator! Goodbye!');
  }
}

prompt('Welcome to Calculator!');
runCalculator();