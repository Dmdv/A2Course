var express = require('express');
var app = express();
var path = require('path');


// express.static - откуда грузятся статические файлы
app.use(express.static(path.join(__dirname, 'public')));


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
