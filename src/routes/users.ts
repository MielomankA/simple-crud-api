import { Router } from 'express';
import { getAllUsers, getUserById } from '../db/users.js';
import { validate as uuidValidate } from 'uuid';
export const router = Router();

router.get('/', async (request, response) => {
  try {
    const users = await getAllUsers();
    response.status(200).json(users);
  } catch (error) {
    response.status(500).json({ message: 'Server Error' });
  }
});

router.get('/:userId', async (request, response) => {
    try {
        const { userId } = request.params;

         if (!uuidValidate(userId)) { 
          return response.status(400).json({ message: 'userId is invalid (not uuid)' });
        }

        const user = await getUserById(userId);

        if (!user) {
          return response.status(404).json({ message: 'userId (user) doesn\'t exist' });
        } 

        return response.status(200).json(user);
    } catch (error) {
      return response.status(500).json({ message: 'Server Error' });
    }
});
