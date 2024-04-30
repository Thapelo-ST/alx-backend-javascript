const fs = require("fs");

function countStudents(path) {
    return new Promise((resolve, reject) => {
        if (!fs.existsSync(path)) {
            reject(new Error("Cannot load the database"));
        }
        fs.readFile(path, "utf8", (err, data) => {
            const counter = {};
            const numberOfStudents = fs
                .readFileSync(path, "utf8")
                .split("\n")
                .filter((line) => line)
                .slice(1);
            let output = `Number of students: ${numberOfStudents.length}\n`;
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

module.exports = countStudents;
