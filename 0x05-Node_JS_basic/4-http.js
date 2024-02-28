const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello Holberton School!');
});

app = server;

app.listen(1245, 'localhost', () => {
    console.log('Server running at http://localhost:1245/');
});

module.exports = app;
