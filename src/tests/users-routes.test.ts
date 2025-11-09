import request from 'supertest';
import express from 'express';
import { usersRouter } from '../routes/index';

jest.mock('uuid', () => ({
  v4: jest.fn(() => '123e4567-e89b-12d3-a456-426614174000'),
}));

const app = express();
app.use(express.json());
app.use('/api/users', usersRouter);

describe('Users API', () => {
  const newUser = {
    username: 'Alice',
    age: 30,
    hobbies: ['reading', 'gaming'],
  };

  it('get all records with a GET api/users request (an empty array is expected)', async () => {
      const response = await request(app).get('/api/users');
      expect(response.status).toBe(200);
      expect(response.body).toEqual([]);
  });

  it('should create a new user and assign an id on the server', async () => {
      const response = await request(app)
      .post('/api/users')
      .send(newUser)
      .expect(201);

    expect(response.body).toEqual({
      id: '123e4567-e89b-12d3-a456-426614174000',
      ...newUser
    });
  });
});
