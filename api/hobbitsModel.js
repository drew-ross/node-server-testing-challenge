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

function insert(hobbit) {
  return db('hobbits')
    .insert(hobbit)
    .then(id => id)
    .catch(err => console.log(err.message));
}

function remove(id) {
  return null;
}

function update(id) {
  return null;
}