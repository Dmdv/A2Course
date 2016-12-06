var path = require('path');
var express = require('express');

var app = express();

// express.static - откуда грузятся статические файлы
app.use(express.static(path.join(__dirname, 'public')));

app.get("/notes", function(req,res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    var notes = [
        {text: "First note"},
        {text: "Second note"},
        {text: "Third note"}
    ]
    res.send(notes);
});


app.listen(3000);

// Project structure
/*
root
    app
    server
        server.js
        package.json
    index.html
*/
