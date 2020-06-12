let cache1 = {};
function add10(x) {
  if (cache1[x] !== undefined) {
    console.log('取出缓存')
    return cache1[x];
  }
  let res = x + 10;
  // k - v
  console.log('经过计算了')
  cache1[x] = res;
  return res;
}
console.log(add10(10))
console.log(add10(10))
console.log(add10(10))



let cache2 = {};
function buildurl(url, obj) {
  let k = url + JSON.stringify(obj)
  console.log(k);
  if (cache2[k] !== undefined) {
    console.log(1);
    return cache2[k];
  }
  let parts = []
  for (let key of Object.keys(obj)) {
    parts.push(`${key}=${obj[key]}`)
  }
  let res = `${url}?${parts.join('&')}`
  cache2[k] = res;
  console.log(2);
  return res;
}
console.log(buildurl('api.com', {a: 1, b: 2}))
console.log(buildurl('api.com', {a: 1, b: 2}))
console.log(buildurl('api.com', {a: 1, b: 2, c: 3}))





