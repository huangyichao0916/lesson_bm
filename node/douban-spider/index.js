const http = require('https');
const cheerio = require('cheerio');
const fs = require('fs');
//请求一个URL
http.get('https://movie.douban.com/top250', (res) => {
    // console.log(res);
    let html = '';
    //有数据产生的时候
    res.on('data', (chunk) => {
        html += chunk;//因为数据是分段返回的，所以要将其拼接起来
    })
    let allFilms = [];
    res.on('end', () => {
        // console.log(html);
        const $ = cheerio.load(html);
        $('li .item').each(function () {
            const title = $('.title', this).text();
            const pic = $('.pic img', this).attr('src');
            console.log(title, pic);
            allFilms.push({ 'title': title, 'picture': pic });
            fs.writeFile('./films.json', JSON.stringify(allFilms), function (err) {
                if (!err) {
                    console.log('完成写入操作');
                }
            })
            downLoadImage(allFilms);
        })
    })
});
function downLoadImage(af) {
    for (let i = 0; i < af.length; i++) {
        const picURL = af[i].picture;
        http.get(picURL, function (res) {
            // console.log(res);
            res.setEncoding('binary');
            let str = '';
            res.on('data', function (chunk) {
                str += chunk;
            })
            res.on('end', function () {
                fs.writeFile(`./images/${i}.png`, str, 'binary', function (err) {
                    if (!err) {
                        console.log('success');
                    }
                });
            })
        })
    }
}