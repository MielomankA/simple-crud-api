import http from 'node:http';
import { getReq } from "./routes/get.js";
import { postReq } from "./routes/post.js";

export const server = http.createServer(async (req, res) => {
    const url = req.url || '';
    const method = req.method || '';

    res.setHeader('Content-Type', 'application/json');

    if (method === 'GET' && url === '/api/users') {
        getReq(res);
    }

    if (method === 'POST' && url === '/api/users') {
        postReq(req, res);
    }
});
