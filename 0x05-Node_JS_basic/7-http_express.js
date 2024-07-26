const express = require('express');

const app = express();

app.listen(1245);
const fs = require('fs').promises;
const filePath = process.argv[2];

const countStudents = (path) => {
    new Promise((resolve, reject) => {
        try {
            const data = fs.readFile(path, 'utf-8');
    
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
            const report = [];
            report.push(`Number of students: ${totalStudents}`);
    
            Object.keys(fieldMap).forEach(field => {
                report.push(`Number of students in ${field}: ${fieldMap[field].length}. List: ${fieldMap[field].join(', ')}`);
            });
            resolve(report.join('\n'))
        } catch (error) {
            throw new Error('Cannot load the database')
        }
    })
}


app.get('/', (req, res) => {
    res.send('Hello Holberton School!');
})

app.get('/students', (req, res) => {
    try {
        const resp = ['This is the list of our students']
        console.log(resp)
        const studentData = countStudents(filePath)
            .then((report) => {
                resp.push(report);
                console.log(resp)
                const responseText = resp.join('\n');
                res.setHeader('Content-Type', 'text/plain');
                res.statusCode = 200;
                res.write(Buffer.from(responseText));
            })  
    } catch (error) {
        console.log(error);
    }
    
})

module.exports = app;