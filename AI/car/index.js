var fs = require('fs');  //node  file system       node自己的模块，不需要再install
var path = require('path');

// fs.readFile('textdd.txt',function(err,data){
//     if (err) {
//         console.log(err);
//         return;
//     }
//     console.log(data.toString());
// });

function getDirFiles(startPath){
    let result = [];
    let files = fs.readdirSync(
        path.join(process.cwd(),startPath)
        );
    for (let file of files) {
        let stats = fs.statSync(
            path.join(process.cwd(),startPath,file)
            );
        if (stats.isFile()) {
            result.push(file);
        }
        if (stats.isDirectory()) {
            
        }
    }
    return result;
}
console.log(getDirFiles('src')); 