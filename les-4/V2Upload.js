const http = require('http');
const fs = require('fs');
const formidable = require('formidable');

http.createServer(
    function (request, response) {
        if (request.url == '/fileupload') {
            let form = new formidable.IncomingForm();

            form.parse(request, function (error, field, files) {
                fs.rename(files.filetoupload.filepath, "mario2.jpg", function (error) {
                    response.write("File uploaded and saved!");
                    response.end();
                });
            });
        }
        else {
            response.writeHead(200, {'Content-Type':'text/html'})
            response.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
            response.write('<input type="file" name="filetoupload"><br>');
            response.write('<input type="submit">');
            response.write('</form>');
            response.end();
        }
        
    }
).listen(8080, function (error) {
    if (error) throw error;
    console.log("Listening at localhost:8080")
})