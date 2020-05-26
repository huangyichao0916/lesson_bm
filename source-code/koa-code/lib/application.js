const http = require('http');

class MyKoa {
    constructor(){
        
    }
    use(fnc){
        
    }
    listen(...args){
        let server = http.createServer((req,res) => {
            res.end('hello world');
        })
        server.listen(...args);
    }
}


module.exports = MyKoa;