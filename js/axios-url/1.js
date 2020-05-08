function encode(str) {
    return encodeURIComponent(str)
        .replace('%5B', '[').replace('%5D', ']')  // 数组 合法
        ;
}
function buildUrl(url, params) {
    let parts = [];
    Object.keys(params).forEach(function (key) {
        let value = params[key]
        if (value === null || typeof value === 'undefined') {
            return;
        }
        if (Array.isArray(value)) {
            key += '[]';
        } else {
            value = [value];
        }
        value.forEach(val => {
            let part = `${encode(key)}=${encode(val)}`
            parts.push(part);
        })

    })
    // 
    url += '?' + parts.join('&')
    return url;
}
let url = buildUrl('http://neteasecloudmusicapi.zhaoboy.com/search', {
    keywords: '海阔天空',
    type: 'all',
    query: 'js',
    a: null,
    b: undefined,
    c: [1, 2, 3]
})
console.log(url);