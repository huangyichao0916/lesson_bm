let url:string = 'https://www.cnblogs.com:8080/yalong/p/10534858.html'
interface URLObject{
    protocol?:string;
    domainName?:string;
    port?:number;
    path?:string;
}
function parseURL(url:string):URLObject {
    const reg:RegExp = /(https?):\/\/(w{3}\.\w+\.(?:com|cn|org|edu))\:(\d+)\/(.+)/;
    const str:Array<string> = url.match(reg);
    const resObj:URLObject = {};
    resObj.protocol = str[1];
    resObj.domainName = str[2];
    resObj.port = parseInt(str[3]);
    resObj.path = str[4]
    return resObj
}

console.log(parseURL(url))