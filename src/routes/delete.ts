import { Router } from "express";
import { getUserById, deleteUser } from "../db/users.js";
import { validate as uuidValidate } from 'uuid';

export const deleteRouter = Router();

deleteRouter.delete('/:userId', async (request, response) => {
  try {
    const { userId } = request.params;

    if (!uuidValidate(userId)) { 
      return response.status(400).json({ message: 'userId is invalid (not uuid)' });
    }

    const user = await getUserById(userId);

    if (!user) {
      return response.status(404).json({ message: 'User doesn\'t exist' });
    }
    
    await deleteUser(userId);

    return response.status(204).send();
  } catch (error) {
    return response.status(500).json({ message: 'Server Error' });
  }
});
