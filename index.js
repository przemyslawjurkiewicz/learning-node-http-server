var http = require('http');
var fs = require('fs');

var server = http.createServer();
server.on('request', function (request, response) {

    if (request.method === 'GET' && request.url === '/') {
        response.setHeader('Content-Type', 'text/html; charset=utf-8');
        fs.readFile('./index.html', function (err, data) {
            response.write(data);
            response.end();
        });
    } else {
        response.setHeader('Content-Type', 'image/jpeg');
        response.statusCode = 404;
        fs.readFile('./404.jpg', function (err, data) {
            response.write(data);
            response.end();
        });
    }
});

server.listen(8080);
