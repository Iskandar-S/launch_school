// Problem:

// Write a function that will take a short line of text, and write it to the console log within a box.

// Examples:

logInBox('To boldly go where no one has gone before.');

// will log on the console:

// +--------------------------------------------+
// |                                            |
// | To boldly go where no one has gone before. |
// |                                            |
// +--------------------------------------------+

logInBox('');

// +--+
// |  |
// |  |
// |  |
// +--+

// Solution:

function logInBox(string) {
  if (typeof string !== 'string') {
    return null;
  }

  let horizontalRule = `+${'-'.repeat(string.length + 2)}+`;
  let emptyLine = `|${' '.repeat(string.length + 2)}|`;

  console.log(
    `${horizontalRule}\n${emptyLine}\n| ${string} |\n${emptyLine}\n${horizontalRule}`
  );
}

// Further Exploration:

// Modify this function so that it truncates the message if it doesn't fit inside a maximum width provided as a second argument (the width is the width of the box itself). You may assume no maximum if the second argument is omitted.

// Solution:

function logInBoxFixed(string, width = string.length) {
  if (typeof string !== 'string') {
    return null;
  }

  let horizontalRule = `+${'-'.repeat(width + 2)}+`;
  let emptyLine = `|${' '.repeat(width + 2)}|`;

  if (string.length > width) {
    string = string.substring(0, width);
  }

  console.log(
    `${horizontalRule}\n${emptyLine}\n| ${string} |\n${emptyLine}\n${horizontalRule}`
  );
}

logInBoxFixed('To boldly go where no one has gone before.', 12);

// +--------------+
// |              |
// | To boldly go |
// |              |
// +--------------+

logInBoxFixed('To boldly go where no one has gone before.');

// +--------------------------------------------+
// |                                            |
// | To boldly go where no one has gone before. |
// |                                            |
// +--------------------------------------------+

// For a challenging but fun exercise, try word wrapping messages that are too long to fit, so that they appear on multiple lines but are still contained within the box. This isn't an easy problem, but it's doable with basic JavaScript.

// Solution:

function logInBoxChallenge(string, width = string.length) {
  if (typeof string !== 'string') {
    return null;
  }

  let horizontalRule = `+${'-'.repeat(width + 2)}+`;
  let emptyLine = `|${' '.repeat(width + 2)}|`;
  let message = '';

  while (string.length > width) {
    message += `| ${string.substring(0, width)} |\n`;
    let index = string.charAt(width) === ' ' && width > 1 ? width + 1 : width;
    string = string.substring(index);
  }
  message += `| ${string + ' '.repeat(width - string.length)} |`;

  console.log(
    `${horizontalRule}\n${emptyLine}\n${message}\n${emptyLine}\n${horizontalRule}`
  );
}

logInBoxChallenge('To boldly go where no one has gone before.', 12);

// +--------------+
// |              |
// | To boldly go |
// | where no one |
// | has gone bef |
// | ore.         |
// |              |
// +--------------+

logInBoxChallenge('To boldly go where no one has gone before.', 1);

// +---+
// |   |
// | T |
// | o |
// |   |
// | b |
// | o |
// | l |
// | d |
// | l |
// | y |
// |   |
// | g |
// | o |
// |   |
// | w |
// | h |
// | e |
// | r |
// | e |
// |   |
// | n |
// | o |
// |   |
// | o |
// | n |
// | e |
// |   |
// | h |
// | a |
// | s |
// |   |
// | g |
// | o |
// | n |
// | e |
// |   |
// | b |
// | e |
// | f |
// | o |
// | r |
// | e |
// | . |
// |   |
// +---+

logInBoxChallenge('To boldly go where no one has gone before.');

// +--------------------------------------------+
// |                                            |
// | To boldly go where no one has gone before. |
// |                                            |
// +--------------------------------------------+
