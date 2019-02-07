const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://omni:omni123@ds125385.mlab.com:25385/omnistack-backend-db', { 
    useNewUrlParser: true
});

app.get('/', (req, res) => {
    return res.send('Hello World NodeJS!');
});

app.listen(3000, () => {
    console.log(':) Server started on port 3000');
});