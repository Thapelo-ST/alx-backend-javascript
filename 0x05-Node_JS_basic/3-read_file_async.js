const { readFile } = require('fs');
const { promisify } = require('util');

const readFileAsync = promisify(readFile);

async function countStudents(fileName) {
    try {
        const data = await readFileAsync(fileName, 'utf-8');
        const lines = data.trim().split('\n');

        const students = {};
        const fields = {};

        lines.forEach((line, index) => {
        if (index !== 0) {
            const [name, age, gender, field] = line.split(',').map(item => item.trim());
            if (!students[field]) {
                students[field] = [];
            }
            students[field].push(name);

            fields[field] = (fields[field] || 0) + 1;
        }
        });

        const totalStudents = lines.length - 1;
        console.log(`Number of students: ${totalStudents}`);

        for (const [key, value] of Object.entries(fields)) {
            console.log(`Number of students in ${key}: ${value}. List: ${students[key].join(', ')}`);
        }

        return data;
    } catch (error) {
        throw new Error('Cannot load the database');
    }
}

module.exports = countStudents;
