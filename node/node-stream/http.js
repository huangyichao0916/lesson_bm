const https = require('https');
const fs = require('fs');


https.get('https://movie.douban.com/top250', function(res) {
  console.log(res); 
  const writeStream = fs.createWriteStream('douban.html');
  res.pipe(writeStream);
});

// https.get('https://movie.douban.com/top250', function(res) {
//   console.log(res);
//   let html = '';
//   //数据并不是一次性交给我们，而是一段一段拼接起来
//   res.on('data', function(chunk) {
//     html = html + chunk;
//   })
//   console.log(123456789);
//   res.on('end', function() {
//     console.log(html);
//   });
// });