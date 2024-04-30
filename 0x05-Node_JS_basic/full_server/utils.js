const fs = require("fs");

function readDatabase(path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, "utf8", (err, data) => {
            if (err) {
                reject(new Error("Cannot load the database"));
                return;
            }

            const studentsByField = {};
            const lines = data.trim().split("\n").filter(line => line.trim() !== "");

            lines.slice(1).forEach(line => {
                const [firstName, lastName, age, fieldOfStudy] = line.split(",");
                if (!studentsByField[fieldOfStudy]){
                    studentsByField[fieldOfStudy] = [];
                }
                studentsByField[fieldOfStudy].push(firstName.trim());
            });
            resolve(studentsByField);
        });
    });
}

module.exports = readDatabase;
