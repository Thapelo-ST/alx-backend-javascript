const fs = require('fs');

function countStudents(path) {
    try {
        if (!fs.existsSync(path)) throw new Error('Cannot load the database');

        const data = fs.readFileSync(path, 'utf-8');
        const lines = data.trim().split('\n');

        if (lines.length === 0) {
            throw new Error('Cannot load the database');
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
    } catch (error) {
        console.error(error.message);
    }
}

module.exports = countStudents;
