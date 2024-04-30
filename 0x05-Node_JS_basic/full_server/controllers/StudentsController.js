const utils = require("../utils");

class StudentsController {
    static getAllStudents(request, response) {
        response.statusCode = 200;
        response.setHeader("Content-Type", "text/plain");
        utils("../database.csv").then((students) => {
            response.status(200).send(`This is the list of our students \n${students.trim()}`);
        }).catch((error) => {
            response.status(500).send(`Error: ${error.message}`);
        });
    }

    static async getStudentsByMajor(request, response) {
        const { field } = request.query;
        
        if (!field || (field !== 'CS' && field !== 'SWE')) {
            return response.status(500).send("Major parameter must be CS or SWE");
        }

        try {
            const stdData = await utils(`../database.csv`);

            response.status(200).send(`List: ${stdData}`)
        } catch (error){
            response.status(500).send(`Error: ${error.message}`);
        }
    }
}

module.exports = StudentsController;
