const express = require("express");
const app = express();
const countStudents = require("./3-read_file_async");

app.get("/", (req, res) => {
  res.status(200).send("Hello Holberton School!");
});

app.get("/students", (req, res) => {
  countStudents(process.argv[2])
    .then((students) => {
      res
        .status(200)
        .send(`This is the list of our students\n${students.trim()}`);
    })
    .catch((error) => {
      res.status(500).send(`Error: ${error.message}`);
    });
});

app.listen(1245, () => {
  console.log("Server running at localhost:1245");
});

module.exports = app;
