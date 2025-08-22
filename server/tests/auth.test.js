const request = require('supertest');
const { MongoMemoryServer } = require('mongodb-memory-server');
const mongoose = require('mongoose');
const app = require('../server');
const User = require('../models/User');

let mongo;

beforeAll(async () => {
  mongo = await MongoMemoryServer.create();
  const uri = mongo.getUri();
  await mongoose.connect(uri);
});

afterAll(async () => {
  await mongoose.connection.close();
  await mongo.stop();
});

describe('Auth', () => {
  it('registers and logs in a user', async () => {
    await request(app).post('/api/auth/register').send({ username: 'a', email: 'a@test.com', password: 'pass' }).expect(201);
    const res = await request(app).post('/api/auth/login').send({ email: 'a@test.com', password: 'pass' });
    expect(res.status).toBe(200);
    expect(res.body.token).toBeDefined();
  });
});
