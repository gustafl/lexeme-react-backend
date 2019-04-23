let express = require('express');
let cors = require('cors');
let bodyParser = require('body-parser');

let app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

let cats = require('./language.js')(app);

let server = app.listen(3001, function () {
    console.log('Server running at http://127.0.0.1:3001');
});
