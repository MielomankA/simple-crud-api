import http from "node:http";
import { getUserById, deleteUser } from "../db/users.js";
import { validate as uuidValidate } from 'uuid';
import { passJson } from "../utils/passJson.js";

export const deleteReq = async (response: http.ServerResponse, url: string) => {
    try {
      const id = url.split('/').pop();

      if (!id || !uuidValidate(id)) {
        return passJson(response, 400, { message: 'Invalid userId' });
      }

      const user = await getUserById(id);

      if (!user) {
        return passJson(response, 404, { message: 'User doesn\'t exist' });
      }

      await deleteUser(user.id);
      return passJson(response, 204, {});
    } catch {
      return passJson(response, 500, { message: 'Server Error' });
    }
};
