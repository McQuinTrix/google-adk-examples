import http from 'http';

const server = http.createServer((req, res) => {
  res.end('Hello from Vite-powered Node app 🚀');
});

server.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});