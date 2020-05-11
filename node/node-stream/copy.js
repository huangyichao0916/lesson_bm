const fs = require('fs');

var copy = function(sourceURL,desURL){
    // fs.readFile(sourceURL,(err,info) => {
    //     if (!err) {
    //         fs.writeFile(desURL,info,(err) => {
    //             if (!err) {
    //                 console.log('拷贝完毕');
    //             }
    //         });
    //     }
    // })
    const readStream = fs.createReadStream(sourceURL);
    const writeStream = fs.createWriteStream(desURL);
    readStream.pipe(writeStream);
}
copy('readme.md','copy.md');