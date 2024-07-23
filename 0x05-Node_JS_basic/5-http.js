const http = require('http');
const path = require('path');
const { countStudents } = require('./3-read_file_async');

const app = http.createServer(async (req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Hello Holberton School!');
    }
    if (req.url === '/students') {
        const filePath = path.join(__dirname, 'database.csv')
        try {
            const studentData = await countStudents(filePath);
            res.writeHead(200,  { 'Content-Type': 'text/plain' });
            res.end(studentData + '\n');
        } catch (error) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end(error.message + '\n');
        }
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found');
    }
});

app.listen(1245, () => {
    process.stdout.write('');
});