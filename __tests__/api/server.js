const supertest = require('supertest');
const db = require('../../data/dbConnection');
const server = require('../../api/server');
const Hobbits = require('../../api/hobbitsModel');

describe('server', () => {

  it('should return 200', () => {
    return supertest(server)
      .get('/')
      .then(res => {
        expect(res.status).toBe(200);
      });
  });
});

describe('api/hobbits', () => {

  beforeEach(async () => {
    await db('hobbits').truncate();
    await db('hobbits').insert({ name: "Samwise" });
  });

  describe('GET hobbits', () => {

    it('should return a list of hobbits', () => {
      return supertest(server)
        .get('/api/hobbits')
        .then(res => {
          console.log('HOBBITS', res.body);
          expect(res.body).toHaveLength(1);
        })
        .catch(err => console.log(err));
    });
  });

  describe('POST hobbits', () => {

    it.todo('should add a hobbit to the database');
  });

  describe('PUT hobbits', () => {

    it.todo('should update a hobbit');
  });

  describe('DELETE hobbits', () => {

    it.todo('should remove a hobbit from the database');
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