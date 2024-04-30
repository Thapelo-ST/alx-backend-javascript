const fs = require("fs");

function readDatabase(path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, "utf8", (err, data) => {
            if (err) {
                reject(new Error("Cannot load the database"));
                return;
            }

            const counter = {};
            const lines = data.split("\n").filter((line) => line.trim() !== "");
            const numberOfStudents = lines.slice(1);
            let output = `\n`;
            for (const record of numberOfStudents) {
                const [firstName, lastName, age, fieldOfStudy] = record.split(",");
                counter[fieldOfStudy] = (counter[fieldOfStudy] || 0) + 1;
            }
            for (const field of Object.keys(counter)) {
                if (field) {
                    output += `Number of students in ${field}: ${counter[field]
                        }. List: ${numberOfStudents
                            .filter((line) => line.split(",")[3] === field)
                            .map((line) => line.split(",")[0])
                            .join(", ")}\n`;
                }
            }
            console.log(output.trim());
            resolve(output);
        });
    });
}

module.exports = readDatabase;
