import readline from 'node:readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function calcDelek() {
    rl.question('אנא הכנס את המחיר לליטר: ', (price) => {
        const parsedPrice = parseFloat(price);
        if (isNaN(parsedPrice) || parsedPrice < 0) {
            console.log('לא הכנסת מחיר תקין');
            calcDelek(); // Prompt again for valid input
        } else {
            rl.question('כמה שילמת בסך הכל: ', (total) => {
                const parsedTotal = parseFloat(total);
                if (isNaN(parsedTotal) || parsedTotal < 0) {
                    console.log('לא הכנסת סכום תקין');
                    calcDelek(); // Prompt again for valid input
                } else {
                    const totalFilled = parsedTotal / parsedPrice;
                    console.log(`מילאת סה״כ ${totalFilled.toFixed(2)} ליטרים`);
                    rl.close();
                }
            });
        }
    });
}

calcDelek();
