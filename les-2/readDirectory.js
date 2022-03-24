const fs = require('fs');

function readDirCallback(error, data) {
    if (error) {
        console.log(error);
        return;
    }
    console.log(data);
}

fs.readdir('./', readDirCallback);