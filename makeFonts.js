'use strict'

const fs = require('fs');
const path = './fonts';
fs.readdir(path, (err, files) => {
    let fontList = [];
    let length = files.length - 1;
    files.forEach((file, index) => {
        fontList.push(`jsPDFAPI.addFileToVFS('${file}','${new Buffer(fs.readFileSync(path + '/' + file)).toString('base64')}');`);
        if (length === index) {
            fs.writeFileSync('./dist/default_vfs.js', `(function (jsPDFAPI) { \n"use strict";\n${fontList.join('\n')}\n})(jsPDF.API);`);
        }
    });
})