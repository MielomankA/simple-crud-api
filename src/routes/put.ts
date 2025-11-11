import { getUserById, updateUser } from "../db/users.js";
import { validate as uuidValidate } from 'uuid';
import http from "node:http";
import { passJson } from "../utils/passJson.js";

export const putReq = (request: http.IncomingMessage, response: http.ServerResponse, url: string) => {
  const id = url.split('/').pop();

  if (!id || !uuidValidate(id)) {
    return passJson(response, 400, { message: 'Invalid userId' });
  }

  const user = getUserById(id);

  if (!user) {
    return passJson(response, 404, { message: 'User doesn\'t exist' });
  }

  let body = '';
  request.on('data', chunk => (body += chunk));
  request.on('end', async () => {
    try {
      const { username, age, hobbies } = JSON.parse(body);

      if (!username || typeof age !== 'number' || !Array.isArray(hobbies)) {
        return passJson(response, 400, { message: 'Missing or invalid required fields: username: string, age: number, hobbies: string[]' });
      }

      const updatedUser = await updateUser({ id, username, age, hobbies });

      passJson(response, 200, updatedUser);
    } catch {
      passJson(response, 500, { message: 'Server Error' });
    }
  });

  return;
}
