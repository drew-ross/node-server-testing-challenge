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

    it('should return 200', () => {
      return supertest(server)
        .get('/api/hobbits')
        .then(res => {
          expect(res.status).toBe(200);
        })
        .catch(err => console.log(err));
    });
  });

  describe('POST hobbits', () => {

    it('should add a hobbit to the database', async () => {
      let hobbits = await db('hobbits');
      expect(hobbits).toHaveLength(1);

      await supertest(server)
        .post('/api/hobbits')
        .send({ name: 'Frodo' })
        .then()
        .catch(err => console.log(err));

      hobbits = await db('hobbits');
      expect(hobbits).toHaveLength(2);
      expect(hobbits[1]).toHaveProperty('name', 'Frodo');
    });

    it('should return 201', async () => {

      await supertest(server)
        .post('/api/hobbits')
        .send({ name: 'Frodo' })
        .then(res => expect(res.status).toBe(201))
        .catch(err => console.log(err));
    });
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