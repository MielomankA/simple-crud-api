import { Router } from "express";
import { getUserById, updateUser } from "../db/users.js";
import { validate as uuidValidate } from 'uuid';

export const putRouter = Router();

putRouter.put('/:userId', async (request, response) => {
  try {
      const { userId } = request.params;
      const { username, age, hobbies } = request.body;

    if (!uuidValidate(userId)) { 
      return response.status(400).json({ message: 'userId is invalid (not uuid)' });
    }

    if (!username || typeof age !== 'number' || !Array.isArray(hobbies)) {
      return response.status(400).json({
        error: "Missing or invalid required fields: username: string, age: number, hobbies: string[]"
      });
    }

    const user = await getUserById(userId);

    if (!user) {
      return response.status(404).json({ message: 'User doesn\'t exist' });
    }
    
    const updatedUser = await updateUser({ id: userId, username, age, hobbies });

    return response.status(200).json(updatedUser);
  } catch (error) {
    return response.status(500).json({ message: 'Server Error' });
  }
});
    