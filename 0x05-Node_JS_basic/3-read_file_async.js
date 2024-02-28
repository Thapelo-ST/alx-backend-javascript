const fs = require('fs');

function countStudents(path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, 'utf-8', (err, data) => {
            if (err) {
                reject(new Error('Cannot load the database'));
                return;
            }

            const lines = data.trim().split('\n');

            if (lines.length <= 1) {
                reject(new Error('Cannot load the database'));
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

            resolve();
        });
    });
}

module.exports = countStudents;
