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
  afterAll(async () => {
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
    it('should update a hobbit', async () => {
      let hobbits = await db('hobbits');
      expect(hobbits).toHaveLength(1);
      expect(hobbits[0]).toHaveProperty('name', 'Samwise');

      await supertest(server)
        .put('/api/hobbits/1')
        .send({ name: 'Pippin' })
        .then()
        .catch(err => console.log(err));
      hobbits = await db('hobbits');

      expect(hobbits).toHaveLength(1);
      expect(hobbits[0]).toHaveProperty('name', 'Pippin');
    });

    it('should return 204', async () => {
      await supertest(server)
        .put('/api/hobbits/1')
        .send({ name: 'Pippin' })
        .then(res => expect(res.status).toBe(204))
        .catch(err => console.log(err));
    });
  });

  describe('DELETE hobbits', () => {
    it('should remove a hobbit from the database', async () => {
      let hobbits = await db('hobbits');
      expect(hobbits).toHaveLength(1);

      await supertest(server)
        .delete('/api/hobbits/1')
        .then()
        .catch(err => console.log(err));
      hobbits = await db('hobbits');

      expect(hobbits).toHaveLength(0);
    });

    it('should return 204', async () => {
      await supertest(server)
        .delete('/api/hobbits/1')
        .then(res => expect(res.status).toBe(204))
        .catch(err => console.log(err));
    });
  });
});