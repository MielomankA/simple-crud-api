import http from "node:http";
import { getAllUsers } from "../db/users.js";

export const getReq = (response: http.ServerResponse) => {
    response.statusCode = 200;

    const users = getAllUsers()

    response.end(JSON.stringify(users));
    return;
}
