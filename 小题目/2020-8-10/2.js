function resolve(baseUrl,moduled) {
    let simplifyPath = function(path) {
        path = path.replace(/\/{2,}/g,'/').replace(/\/$/,'');
        if (path[0] !== '/') {
            path = '/' + path;
        }
        path = path.split('/');
        let stack = ['/'];
        path.forEach(item => {
            switch (item) {
                case '..':
                    if (stack.length > 1) {
                        stack.pop();
                    }else{
                        return '/';
                    }
                    break;
                case '.':
                    break;
                case '':
                    break;
                default:
                    stack.push(item);
                    break;
            }
        });
        return stack.join('/').replace(/\/{2,}/g,'/');
    };
    moduled = simplifyPath(moduled);
    return baseUrl + moduled;
}
console.log(resolve('http://www.baidu.com', 'a/../c'))