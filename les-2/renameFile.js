const fs = require('fs');

fs.readdir('./', function (error, data) {
    if (error) {
        console.log(error);
        return;
    }
    for (let i = 0; i < data.length; i++) {
        fs.rename(data[i], "bestand" + i, function () {
            if (error) {
                console.log(error);
                return;
            }
            console.log("renamed " + data[i] + ".txt");
        })
    }
})