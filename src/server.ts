import http from 'node:http';
import { getReq, postReq, putReq, deleteReq, getReqById } from "./routes/index.js";
import { passJson } from "./utils/passJson.js";

const baseUrl = '/api/users';

export const server = http.createServer(async (req, res) => {
    const url = req.url || '';
    const method = req.method || '';

    res.setHeader('Content-Type', 'application/json');

    if (method === 'GET' && url === baseUrl) {
        getReq(res);
    }

    if (method === 'GET' && url.startsWith(`${baseUrl}/`)) {
        getReqById(res, url);
    }

    if (method === 'POST' && url === baseUrl) {
        postReq(req, res);
    }

    if (method === 'PUT' && url.startsWith(`${baseUrl}/`)) {
        putReq(req, res, url);
    }

    if (method === 'DELETE' && url.startsWith(`${baseUrl}/`)) {
        deleteReq(res, url);
    }

    passJson(res, 404, { message: 'Endpoint not found' });
});
