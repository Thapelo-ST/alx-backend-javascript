const readline = require('readline');

function Greetings() {
  const line = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  line.question('Welcome to Holberton School, what is your name? \n', (name) => {
    console.log(`Your name is: ${name}`);
    line.close();
  });
}

if (!process.stdin.isTTY) {
  console.log(`Welcome to Holberton School, what is your name?`);
  let inputName = '';
  process.stdin.on('data', function (chunk) {
    inputName += chunk.toString();
  });
  process.stdin.on('end', function () {
    console.log(`Your name is: ${inputName.trim()}`);
    console.log(`This important software is now closing`);
  });
} else {
  Greetings();
}
