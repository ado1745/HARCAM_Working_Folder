const http = require('http');
const fs = require('fs');

const PORT = 8080;

const server = http.createServer(handleRequest);

function handleRequest(req, res) {

    fs.readFile(`${__dirname}/index.html`, function (err, data) {
        if (err) {
            throw err;
        }

        res.writeHead(200, { "Content-Type": "text/html" });
    })
}

server.listen(PORT, function () {
    console.log(`listening on ${PORT}`);
});