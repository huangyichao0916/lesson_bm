// const url = require('url');

const urlString = 'http://baidu.com:8080/test/h?query=js&a=1#node';
// console.log(url.parse(urlString));


function getQueryString(urlStr){
    let obj = new Object();
    if (urlStr.indexOf('?') != -1) {
        let queryStr = urlStr.split('?')[1];
        // console.log(str);
        if (queryStr.indexOf('#') != -1) {
            queryStr = queryStr.split('#')[0];
        }
        // console.log(queryStr);
        let strs = queryStr.split('&');
        // console.log(strs);
        for (const item of strs) {
            let buffer = item.split('=');
            obj[buffer[0]] = buffer[1];
        }
        console.log(obj);
    }

    return obj;
}

getQueryString(urlString);