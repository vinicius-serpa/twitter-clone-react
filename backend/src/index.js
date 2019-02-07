const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// extrai o servidor do express e habilita o protocolo ws (websocket)
const server = require('http').Server(app);
const io = require('socket.io')(server);

mongoose.connect('mongodb://omni:omni123@ds125385.mlab.com:25385/omnistack-backend-db', { 
    useNewUrlParser: true
});

// cria variável para acesso pelos controllers - next não interrompe o processamento
app.use((req, res, next) => {
    req.io = io;
    return next();
});

app.use(cors());
app.use(express.json());
app.use(require('./routes'));

server.listen(3000, () => {
    console.log('Server started on port 3000 :) ');
});