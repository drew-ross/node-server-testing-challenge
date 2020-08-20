const db = require('../data/dbConnection');

module.exports = {
  find,
  findBy,
  insert,
  remove,
  update
};

function find() {
  return db('hobbits')
    .then(hobbits => hobbits)
    .catch(err => console.log(err.message));
}

function findBy() {
  return null;
}

function insert() {
  return null;
}

function remove() {
  return null;
}

function update() {
  return null;
}