const fs = require('fs');

function countStudents(path) {
    if (!fs.existsSync(path)) {
        throw new Error('Cannot load the database');
    }

    const counter = {};
    const numberOfStudents = fs.readFileSync(path, 'utf8').split('\n').filter((line) => line).slice(1);
    console.log(`Number of students: ${numberOfStudents.length}`);
    for (const record of numberOfStudents) {
        const [firstName, lastName, age, fieldOfStudy] = record.split(',');
        counter[fieldOfStudy] = (counter[fieldOfStudy] || 0) + 1;
        //console.log(`Student: ${firstName} ${lastName}, age: ${age}, field: ${fieldOfStudy}`);
    }

    for (const field of Object.keys(counter)) {
        if (field) {
            console.log(`Number of students in ${field}: ${counter[field]}. List: ${numberOfStudents.filter((line) => line.split(',')[3] === field).map((line) => line.split(',')[0]).join(', ')}`);
        }
    }
}

module.exports = countStudents;