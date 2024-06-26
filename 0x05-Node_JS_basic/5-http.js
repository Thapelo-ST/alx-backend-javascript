const http = require('http');

const countStudents = require('./3-read_file_async');

const app = http.createServer((req, res) => {
  if (req.url === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    countStudents(process.argv[2])
      .then((students) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end(`This is the list of our students\n${students.trim()}`);
      })
      .catch(() => {
        res.statusCode = 500;
        res.setHeader('Content-Type', 'text/plain');
        res.end(`This is the list of our students
Cannot load the database`);
      });
  } else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Not Found');
  }
});

app.listen(1245, () => {
  console.log('Server running at localhost:1245');
});

module.exports = app;
