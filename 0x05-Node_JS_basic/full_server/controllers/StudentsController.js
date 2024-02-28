import { readDatabase } from '../utils';

class StudentsController {
    static async getAllStudents(req, res) {
        try {
        const studentsByField = await readDatabase(req.app.locals.databasePath);

        res.status(200).send('This is the list of our students\n');
        for (const field in studentsByField) {
            if (studentsByField.hasOwnProperty(field)) {
            const count = studentsByField[field].length;
            const list = studentsByField[field].join(', ');
            res.write(`Number of students in ${field}: ${count}. List: ${list}\n`);
            }
        }
        res.end();
        } catch (error) {
        res.status(500).send('Cannot load the database');
        }
    }

    static async getAllStudentsByMajor(req, res) {
        const major = req.params.major.toUpperCase();

        if (major !== 'CS' && major !== 'SWE') {
        res.status(500).send('Major parameter must be CS or SWE');
        return;
        }

        try {
        const studentsByField = await readDatabase(req.app.locals.databasePath);

        res.status(200).send(`List of students in ${major}:\n`);
        if (studentsByField[major]) {
            const list = studentsByField[major].join(', ');
            res.write(`List: ${list}\n`);
        } else {
            res.write(`No students found in ${major}\n`);
        }
        res.end();
        } catch (error) {
        res.status(500).send('Cannot load the database');
        }
    }
}

export default StudentsController;
