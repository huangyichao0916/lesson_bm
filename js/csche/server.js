const express = require('express');

const app = express();

app.get('big/js',(req,res) => {
    const fs = require('fs');
    const jsContent = fs.readFileSync('./big.js','utf-8');
    res.setHeader('Cache-Control','max-age=20')
    res.end(jsContent);
})

app.listen(9099,() => {
    console.log(9099);
})