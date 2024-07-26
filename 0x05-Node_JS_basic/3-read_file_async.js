const fs = require('fs');

/**
 * Counts the students in a CSV data file
 * @param {String} path The path to the CSV data file. 
 */
const countStudents = (path) => new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
        if (err) {
            reject(new Error('Cannot load the database'))
        }
        if (data) {
            const lines = data.trim().split('\n').filter(line => line.trim());

            const header = lines[0].split(',').map(field => field.trim());
            const students = lines.slice(1);

            const fieldMap = {};

            students.forEach(student => {
                const fields = student.split(',').map(field => field.trim());

                header.forEach((field, idx) => {
                    const fieldName = field;
                    const fieldValue = fields[idx];

                    if (fieldName === 'field' && fieldValue) {
                        if (!fieldMap[fieldValue]) {
                            fieldMap[fieldValue] = [];
                        }
                        fieldMap[fieldValue].push(fields[0])
                    }
                });
            });
            const reportParts = [];
            const totalStudents = students.length;
            const num_students = `Number of students: ${totalStudents}`
            console.log(num_students);
            reportParts.push(num_students)

            Object.keys(fieldMap).forEach(field => {
                const stat = `Number of students in ${field}: ${fieldMap[field].length}. List: ${fieldMap[field].join(', ')}`
                console.log(stat);
                reportParts.push(stat);
            });
            resolve(reportParts.join('\n'));
        }
    });
});

module.exports = countStudents;
