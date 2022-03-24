const fs = require('fs');

const data = fs.readFileSync('songtext.txt', 'utf-8');

function readFileCallback(error, data) {
    if (error) {
        console.log(error);
        return;
    }
    console.log(data);
}

fs.readFile('songtext.txt', 'utf-8', readFileCallback);