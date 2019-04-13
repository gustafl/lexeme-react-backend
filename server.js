let express = require('express');

let app = express();

app.get('/', function (req, res) {
    res.send('Hello world!');
});

let server = app.listen(3001, function () {
    console.log('Server running at http://127.0.0.1:3001');
});
