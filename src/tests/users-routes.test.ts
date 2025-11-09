import request from 'supertest';
import express from 'express';
import { usersRouter } from '../routes/index';

jest.mock('uuid', () => ({
  v4: jest.fn(() => 'test-uuid-1'),
}));

const app = express();
app.use(express.json());
app.use('/api/users', usersRouter);

describe('Users API', () => {
    it('Get all records with a GET api/users request (an empty array is expected)', async () => {
        const response = await request(app).get('/api/users');
        expect(response.status).toBe(200);
        expect(response.body).toEqual([]);
    });
});
