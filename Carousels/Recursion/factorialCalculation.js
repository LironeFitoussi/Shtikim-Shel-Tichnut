import readline from 'node:readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function factorial(n) {
    if (n === 0 || n === 1) {
        return 1; // Base case
    }
    return n * factorial(n - 1); // Recursive case
}

function calculateFactorial() {
    rl.question(`What's your name? `, name => {
        console.log(`Hi ${name}!, Welcome to the factorial calculator!`);
        
        setTimeout(() => {
            console.log(`Let's calculate the factorial of a number.`);
            askForNumber();
        }, 2000);
    });
}

function askForNumber() {
    rl.question(`Enter a non-negative integer to calculate its factorial: `, number => {
        const parsedNumber = parseInt(number, 10);
        if (isNaN(parsedNumber) || parsedNumber < 0) {
            console.log(`Please enter a valid non-negative integer.`);
            askForNumber(); // Prompt again for valid input
        } else {
            console.log(`The factorial of ${parsedNumber} is ${factorial(parsedNumber)}`);
            rl.close();
        }
    });
}

calculateFactorial();