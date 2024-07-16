const express = require('express');
const helmet = require('helmet');
const app = express();

app.use(helmet());

app.get('/', (req, res) => {
    res.send('Secure Hello World!');
});

app.listen(3000, () => console.log('Secure server running on port 3000'));