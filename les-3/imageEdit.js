const sharp = require('sharp');

sharp('afbeelding1.jpg')
.blur(9)
.rotate(45)
.sharpen(90)
.toFile('afbeelding2.jpg', function (error, info) {
    if (error) {
        console.log(error);
    }
});
