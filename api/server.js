const express = require('express');
const helmet = require('helmet');

const hobbitsDb = require('./hobbitsModel');

const server = express();

server.use(helmet());
server.use(express.json());

server.get('/', (req, res) => res.status(200).json({ message: "server up." }));
server.get('/api', (req, res) => res.status(200).json({ message: "api up." }));

server.get('/api/hobbits', (req, res) => {
  hobbitsDb.find()
    .then(hobbits => res.status(200).json(hobbits))
    .catch(err => res.status(500).json({ message: 'Server error', error: err.message }));
});

server.post('/api/hobbits', (req, res) => {
  const hobbit = req.body;
  hobbitsDb.insert(hobbit)
    .then(id => res.status(201).json(id))
    .catch(err => res.status(500).json({ message: 'Server error', error: err.message }));
});

server.put('/api/hobbits/:id', (req, res) => {
  const hobbit = req.body;
  const id = req.params.id;
  hobbitsDb.update(id, hobbit)
    .then(id => res.status(204).json(id))
    .catch(err => res.status(500).json({ message: 'Server error', error: err.message }));
});

server.delete('/api/hobbits', (req, res) => {
  res.send(200);
});

module.exports = server;