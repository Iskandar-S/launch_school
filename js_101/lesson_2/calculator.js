// Ask the user for the first number.
// Ask the user for the second number.
// Ask the user for an operation to perform.
// Perform the operation on the two numbers.
// Print the result to the terminal.

const readline = require('readline-sync');
let message = require('./calculatorMessages.json');

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

function getNumbers() {
  prompt(message.request.firstNumber);
  let number1 = readline.question();

  while (invalidNumber(number1)) {
    prompt(message.error.invalidNumber);
    number1 = readline.question();
  }

  prompt(message.request.secondNumber);
  let number2 = readline.question();

  while (invalidNumber(number2)) {
    prompt(message.error.invalidNumber);
    number2 = readline.question();
  }

  return [Number(number1), Number(number2)];
}

function getOperation() {
  prompt(message.request.operation);
  let operation = readline.question();

  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt(message.error.invalidOperation);
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
  prompt(message.request.anotherCalculation);
  let input = readline.question().toLowerCase();

  while (input !== 'y' && input !== 'n') {
    prompt(message.error.invalidInputAnotherCalculation);
    input = readline.question().toLowerCase();
  }

  return input === 'y';
}


function runCalculator() {
  let [number1, number2] = getNumbers();
  let operation = getOperation();
  let result = calculate(number1, number2, operation);

  prompt(message.result + result + '\n');

  if (anotherCalculation()) {
    console.clear();
    runCalculator();
  }
}

prompt(message.greeting);
runCalculator();
prompt(message.farewell);