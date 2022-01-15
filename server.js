'use strict';
var http = require('http');
var port = process.env.PORT || 1337;

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Privet mir\n');
}).listen(port);

server.listen(port, function () {
    console.log('Listening on port: %s', port);
});
