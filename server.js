const express = require('express');
const server = express();
server.use(express.json());
const cors = require('cors');
server.use(cors());
server.use(require('helmet')());

server.get('/', (req, res) => { res.status(200).json({ message: "server online!" }) });


module.exports = server;