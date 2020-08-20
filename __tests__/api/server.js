const db = require('../../data/dbConnection');
const server = require('../../api/server');
const Hobbits = require('../../api/hobbitsModel');

describe('api/hobbits', () => {

  describe('GET hobbits', () => {

    it.todo('should return a list of hobbits', () => {

    });
  });

  describe('POST hobbits', () => {

    it.todo('should add a hobbit to the database', () => {

    });
  });

  describe('PUT hobbits', () => {

    it.todo('should update a hobbit', () => {

    });
  });
  
  describe('DELETE hobbits', () => {

    it.todo('should remove a hobbit from the database', () => {

    });
  });

  // beforeEach(() => {
  //   return db('hobbits').truncate();
  // });

  // afterAll(() => {
  //   return db('hobbits').truncate();
  // });

  // it('should add hobbits', async () => {
  //   await Hobbits.insert({
  //     name: 'Gaffer',
  //   });

  //   const hobbits = await db('hobbits');

  //   expect(hobbits).toHaveLength(1);
  // });
});