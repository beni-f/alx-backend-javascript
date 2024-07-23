const { count } = require('console');
const fs = require('fs');

const countStudents = (path) => {
    try {
        const data = fs.readFileSync(path, 'utf-8');

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
        const totalStudents = students.length;
        console.log(`Number of students: ${totalStudents}`);

        Object.keys(fieldMap).forEach(field => {
            console.log(`Number of students in ${field}: ${fieldMap[field].length}. List: ${fieldMap[field].join(', ')}`); 
        });
    } catch (error) {
        throw new Error('Cannot load the database')
    }
}

module.exports = countStudents;
