import readline from 'node:readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function fibonacci(n) {
    if (n <= 1) {
        return n; // Base case: Fibonacci of 0 or 1 is the number itself
    }
    return fibonacci(n - 1) + fibonacci(n - 2); // Recursive case
}

function calculateFibonacci() {
    rl.question(`What's your name? `, name => {
        console.log(`Hi ${name}!, Welcome to the Fibonacci calculator!`);
        
        setTimeout(() => {
            console.log(`Let's calculate the Fibonacci of a number.`);
            askForNumber();
        }, 2000);
    });
}

function askForNumber() {
    rl.question(`Enter a non-negative integer to calculate its Fibonacci: `, number => {
        const parsedNumber = parseInt(number, 10);
        if (isNaN(parsedNumber) || parsedNumber < 0) {
            console.log(`Please enter a valid non-negative integer.`);
            askForNumber(); // Prompt again for valid input
        } else {
            console.log(`The Fibonacci of ${parsedNumber} is ${fibonacci(parsedNumber)}`);
            rl.close();
        }
    });
}

calculateFibonacci();