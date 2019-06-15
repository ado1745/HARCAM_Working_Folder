const http = require("http");

let PORT = 8080;
let PORT2 = 8081
function handleRequest(request, res) {

    res.end("It's alive" + request.url);
}




let server = http.createServer(handleRequest);

server.listen(PORT, function () {
    console.log(`listening on ${PORT}`);
});

let server2 = http.createServer(handleRequest);

server2.listen(PORT2, function () {
    console.log(`${PORT2}`);
})