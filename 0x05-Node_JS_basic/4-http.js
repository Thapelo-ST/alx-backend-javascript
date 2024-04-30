const app = require('http');

const server = app.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello Holberton School!');
});

server.listen(1245, () => {
    console.log('Server running at localhost:1245');
});