import fs from 'fs';

function readDatabase(filePath) {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf-8', (err, data) => {
            if (err) {
                reject(new Error('Cannot load the database'));
                return;
            }

            const lines = data.trim().split('\n');
            const studentsByField = {};

            for (let i = 1; i < lines.length; i++) {
                const fields = lines[i].split(',');
                const field = fields[fields.length - 1].trim();

                if (!studentsByField[field]) {
                    studentsByField[field] = [];
                }

                studentsByField[field].push(fields[0].trim());
            }

            resolve(studentsByField);
        });
    });
}

module.exports = readDatabase;
