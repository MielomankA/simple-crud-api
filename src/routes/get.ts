import http from "node:http";
import { getAllUsers, getUserById } from "../db/users.js";
import { passJson } from "../utils/passJson.js";
import { validate as uuidValidate } from 'uuid';

export const getReq = async (response: http.ServerResponse) => {
    response.statusCode = 200;

    const users = await getAllUsers()

    response.end(JSON.stringify(users));
    return;
}

export const getReqById = async (response: http.ServerResponse, url: string) => {
    const id = url.split('/').pop();

    if (!id || !uuidValidate(id)) {
      return passJson(response, 400, { message: 'Invalid userId' });
    }

    const user = await getUserById(id);
    if (!user) {
      return passJson(response, 404, { message: 'User doesn\'t exist' });
    }

    return passJson(response, 200, user);
}
