import http from 'node:http';

export const passJson = (response: http.ServerResponse, status: number, data: unknown) => {
  response.writeHead(status, { 'Content-Type': 'application/json' });
  response.end(JSON.stringify(data));
}
