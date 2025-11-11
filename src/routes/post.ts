import http from 'node:http';
import {createUser} from '../db/users.js';
import {v4 as uuidv4} from "uuid";

export const postReq = (request: http.IncomingMessage, response: http.ServerResponse) => {
    let body = '';
    request.on('data', chunk => (body += chunk));
    request.on('end', () => {
        try {
            const data = JSON.parse(body);
            console.log(data, 'data');
            const {username, age, hobbies} = data;

            if (!username || typeof age !== 'number' || !Array.isArray(hobbies)) {
                response.statusCode = 400;
                response.end(JSON.stringify({message: 'Missing or invalid required fields: username: string, age: number, hobbies: string[]'}));
                return;
            }

            const newUser = {id: uuidv4(), username, age, hobbies};

            createUser(newUser);

            response.statusCode = 201;
            response.end(JSON.stringify(newUser));
        } catch (error) {
            response.statusCode = 500;
            response.end(JSON.stringify({message: 'Server Error'}));
        }
    });
    return;
}
