import { Router } from 'express';
import { getAllUsers } from '../db/users.js';

export const router = Router();

router.get('/', async (request, response) => {
  try {
    const users = await getAllUsers();
    response.status(200).json(users);
  } catch (error) {
    response.status(500).json({ message: 'Server Error' });
  }
});
