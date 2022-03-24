const fs = require('fs');

function Write() {
    fs.appendFile('text.txt', 'Silvan is een fijne docent. \n', 'utf-8', function (error) {
        if (error) {
            console.log(error);
            return;
        }
    });
} 

for (let i = 0; i < 50000; i++) {
    Write();
}