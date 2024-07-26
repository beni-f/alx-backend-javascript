const express = require('express');
const countStudents = require('./3-read_file_async')

const app = express();

app.listen(1245);
const fs = require('fs');
const FILE_PATH = process.argv.length > 2 ? process.argv[2] : '';

app.get('/', (req, res) => {
    res.send('Hello Holberton School!');
})

app.get('/students', (req, res) => {
    const resp = ['This is the list of our students']
    countStudents(FILE_PATH)
        .then((report) => { 
            resp.push(report);
            const responseText = resp.join('\n');
            res.setHeader('Content-Type', 'text/plain');
            res.setHeader('Content-Length', responseText.length);
            res.statusCode = 200;
            res.write(Buffer.from(responseText));
        })
        .catch (error => {
            console.log(error);
        })
    
})

module.exports = app;