import http from 'node:http';
import { getReq } from "./routes/get.js";

export const server = http.createServer(async (req, res) => {
    const url = req.url || '';
    const method = req.method || '';

    res.setHeader('Content-Type', 'application/json');

    if (method === 'GET' && url === '/api/users') {
        getReq(res);
    }
});
