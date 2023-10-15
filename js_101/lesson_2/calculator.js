const readline = require('readline-sync');
let message = require('./calculatorMessages.json');

function prompt(message) {
  console.log(`=> ${message}`);
}

function greet() {
  message.languages.forEach(language => prompt(language.messages.greeting + ' ' + language.messages.request.language));
}

// Language Setup

function getLanguageOptions() {
  let languageOptions = '';

  message.languages.forEach((language, index) => {
    languageOptions += `${index + 1}) ${language.messages.nativeName} `;
  });

  return languageOptions;
}

function setLanguage() {
  greet();

  let languageOptions = getLanguageOptions();

  prompt(languageOptions);
  let languageSelected = readline.question();

  while (invalidLanguage(languageSelected)) {
    prompt(languageOptions);
    languageSelected = readline.question();
  }

  message = message.languages[languageSelected - 1].messages;
}

// Validation

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

function invalidLanguage(language) {
  let outOfRange = language < 1 || language > message.languages.length;
  return invalidNumber(language) || outOfRange;
}

function divisionByZero(divisor, operation) {
  return divisor === 0 && operation === '4';
}

// Calculation

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
  let input = readline.question();

  while (input !== '1' && input !== '2') {
    console.clear();
    prompt(message.error.invalidYesOrNo);
    prompt(message.request.anotherCalculation);
    input = readline.question().toLowerCase();
  }

  return input === '1';
}


function runCalculator() {
  console.clear();
  let [number1, number2] = getNumbers();
  let operation = getOperation();

  if (divisionByZero(number2, operation)) {
    prompt(message.error.divisionByZero);
  } else {
    let result = calculate(number1, number2, operation);

    prompt(message.result + result + '\n');
  }

  if (anotherCalculation()) {
    runCalculator();
  } else {
    console.clear();
    prompt(message.farewell);
  }
}

setLanguage();
runCalculator();