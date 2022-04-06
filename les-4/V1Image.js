const http = require('http');
const fs = require('fs');

http.createServer(
    function (request, response) {
        response.writeHead(200, {'Content-Type':'image/webp'});
        fs.readFile('mario.webp', function (error, data) {
            if (error) throw error;
            response.end(data, 'binary');
        })
        
    }
).listen(8080, function (error) {
    console.log("Hello world");
})