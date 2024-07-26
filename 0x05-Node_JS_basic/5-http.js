const http = require('http');
const path = require('path');
const countStudents = require('./3-read_file_async');
const FILE_PATH = process.argv.length > 2 ? process.argv[2] : ''

const app = http.createServer(async (req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Hello Holberton School!');
    }
    if (req.url === '/students') {
        const responseParts = ['This is the list of our students']
        
        countStudents(FILE_PATH)
            .then((report) => {
                responseParts.push(report)
                const responseText = responseParts.join('\n')
                res.setHeader('Content-Type', 'text/plain')
                res.setHeader('Content-Length', responseText.length)
                res.statusCode = 200
                res.write(Buffer.from(responseText))
            })
            .catch(err => {
                responseParts.push(err instanceof Error ? err.message : err.toString());
                const responseText = responseParts.join('\n');
                res.setHeader('Content-Type', 'text/plain')
                res.setHeader('Content-Length', responseText.length)
                res.statusCode = 200
                res.write(Buffer.from(responseText))
            })
    }
});

app.listen(1245, () => {
    process.stdout.write('');
});

module.exports = app;
