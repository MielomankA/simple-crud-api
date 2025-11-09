import { Router } from 'express';
import { createUser } from '../db/users.js';

export const postRouter = Router();

postRouter.post('/', async (request, response) => {
  try {
  const { username, age, hobbies } = request.body;

  if (!username || !age || !hobbies) {
    return response.status(400).json({
      error: "Missing required fields: username, age or hobbies"
    });
  }

    const user = await createUser({ username, age, hobbies });
    
    response.status(201).json(user);
  } catch (error) {
    response.status(500).json({ message: 'Server Error' });
  }
});
