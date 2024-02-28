const http = require('http');
const fs = require('fs');

const app = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');

    if (req.url === '/') {
        res.write('Hello Holberton School!');
        res.end();
    }

    if (req.url === '/students') {
        const pathToDatabase = process.argv[2];

        fs.readFile(pathToDatabase, 'utf-8', (err, data) => {
            if (err) {
                res.statusCode = 500; // Internal Server Error
                res.end('Cannot load the database');
                return;
            }

            const lines = data.trim().split('\n');

            if (lines.length <= 1) {
                res.statusCode = 500; // Internal Server Error
                res.end('Cannot load the database');
                return;
            }

            const countByField = {};

            for (let i = 1; i < lines.length; i++) {
                const line = lines[i];
                const fields = line.split(',');
                const field = fields[fields.length - 1].trim();

                if (field !== '') {
                    if (countByField.hasOwnProperty(field)) {
                        countByField[field].count++;
                        countByField[field].students.push(fields[0].trim());
                    } else {
                        countByField[field] = { count: 1, students: [fields[0].trim()] };
                    }
                }
            }

            console.log(`Number of students: ${lines.length - 1}`);
            for (const field in countByField) {
                if (countByField.hasOwnProperty(field)) {
                    const count = countByField[field].count;
                    const list = countByField[field].students.join(', ');
                    console.log(`Number of students in ${field}: ${count}. List: ${list}`);
                }
            }

            const outputString = Object.entries(countByField)
                .map(([field, { count, students }]) =>
                    `Number of students in ${field}: ${count}. List: ${students.join(', ')}`
                )
                .join('\n');

            res.write(`This is the list of our students\n${outputString}`);
            res.end();
        });
    }
});

const PORT = 1245;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = app;
