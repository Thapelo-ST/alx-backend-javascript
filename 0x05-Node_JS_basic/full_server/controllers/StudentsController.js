const readDatabase = require("../utils");

class StudentsController {
    static async getAllStudents(req, res) {
        try {

            const StudentsByField = await readDatabase('../database.csv');
            let response = 'This is the list of our students\n';
            const fields = Object.keys(StudentsByField).sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }));
            for (const field of fields) {
                const students = StudentsByField[field];
                response += `Number of students in ${field}: ${students.length}. List: ${students.join(', ')}\n`;
            }
            res.status(200).send(response);
        } catch (error) {
            console.error("Error loading database:", error);
            res.status(500).send(`Error: Cannot load the database`);
        }
    }

    static async getStudentsByMajor(req, res) {
        const { major } = req.params;

        if ((major !== 'CS' && major !== 'SWE')) {
            return res.status(500).send("Major parameter must be CS or SWE");
        }

        try {
            const StudentsByField = await readDatabase('../database.csv');
            const students = StudentsByField[major] || [];
            const response = `List: ${students.join(', ')}`;
            res.status(200).send(response);
        } catch (error) {
            res.status(500).send(`Error: Cannot load the database`);
        }
    }
}

module.exports = StudentsController;
