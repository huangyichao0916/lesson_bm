const express = require('express');
const data = require('./db.json');
const app = express();


app.get('/', function(req, res) {
  res.json(data);
})

app.get('/po/:id', function(req, res) {
    // console.log(req);
    console.log(req.params.id);
//   let id = req.params.id;
//   let post = data.posts.filter(post => post.id == id);
//   res.json(post)
})


app.listen(8081);