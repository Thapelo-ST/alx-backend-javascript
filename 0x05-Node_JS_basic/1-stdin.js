const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin
});

console.log("Welcome to Holberton School, what is your name?\n");

rl.on('line', (input) => {
    console.log('Your name is: ' + input);

    process.on('exit', () => {
        console.log('This important software is now closing');
    });

    rl.close();
});
