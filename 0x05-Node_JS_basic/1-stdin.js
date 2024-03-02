const readline = require('readline');

if (process.send) {
    // Code for the child process
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question('Welcome to Holberton School, what is your name?\n', (name) => {
        process.send(name);
        rl.close();
        process.exit();
    });

    rl.on('close', () => {
        process.stdout.write('This important software is now closing\n');
    });
} else {
    // Code for the parent process
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question('Welcome to Holberton School, what is your name?\n', (name) => {
        process.stdout.write(`Your name is: ${name}\n`);
        rl.close();

        if (process.stdin.isTTY) {
            process.stdout.write('This important software is now closing\n');
        }
    });

    rl.on('close', () => {
        if (!process.stdin.isTTY) {
            process.stdout.write('This important software is now closing\n');
        }
    });
}
