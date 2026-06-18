const fs = require('fs');
const pdfParse = require('pdf-parse');

const dataBuffer = fs.readFileSync('./src/data/cv.pdf');
pdfParse(dataBuffer).then(function(data) {
    console.log(data.text);
}).catch(function(error) {
    console.error('Error:', error);
});

