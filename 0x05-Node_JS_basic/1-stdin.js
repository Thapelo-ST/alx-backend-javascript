const readline = require('readline')

const  rl = readline.createInterface({
    input: process.stdin
});

console.log("Welcome to Holberton School, what is your name?")

rl.on('line', (input) => {
    if (input.trim() === 'exit'){
        console.log("This important sofware is now closing");
        process.exit(0);
        } else {
            console.log('Your name is: ' + input);
            console.log("This important sofware is now closing");
            process.exit(0);
        }
});
