var http = require('http');
var url = require('url');
var fs = require('fs');
var port = 3002;

http.createServer(function(req, res) {
    var urlObj = url.parse(req.url, true, false);

    fs.readFile("client/" + urlObj.pathname, function(err, data) {
        if(err) {
            res.writeHead(404);
            res.end(JSON.stringify(err));
            return;
        }
        res.writeHead(200);
        res.end(data);
    });

}).listen(port);