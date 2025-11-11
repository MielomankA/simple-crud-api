import http from 'node:http';
import {createUser} from '../db/users.js';
import {v4 as uuidv4} from "uuid";
import { passJson } from "../utils/passJson.js";

export const postReq = (request: http.IncomingMessage, response: http.ServerResponse) => {
    let body = '';
    request.on('data', chunk => (body += chunk));
    request.on('end', async () => {
        try {
            const data = JSON.parse(body);
            const {username, age, hobbies} = data;

            if (!username || typeof age !== 'number' || !Array.isArray(hobbies)) {
                passJson(response, 400, { message: 'Missing or invalid required fields: username: string, age: number, hobbies: string[]' });
                return;
            }

            const newUser = {id: uuidv4(), username, age, hobbies};

            await createUser(newUser);

            passJson(response, 201, newUser);
        } catch (error) {
            passJson(response, 500, { message: 'Server Error' });
        }
    });
    return;
}
