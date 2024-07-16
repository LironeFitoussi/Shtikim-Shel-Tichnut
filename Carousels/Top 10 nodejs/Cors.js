const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/', (req, res) => {
    res.json({ message: 'This can be accessed from any origin!' });
});

app.listen(3000, () => console.log('CORS-enabled server running on port 3000'));