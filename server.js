const express = require('express');

const projectRouter = require('./projects/project-router');

const server = express();

server.use(express.json());

server.use('/api/projects', projectRouter)

server.get('/', (req, res) => {
    res.send(`<h1>You are connected to the server!!</h1>`)
})

module.exports = server;