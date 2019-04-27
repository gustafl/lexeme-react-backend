let fs = require('fs');
let path = require('path');
let _ = require('lodash');

module.exports = function(app) {

    // Get a list of available languages
    app.get('/language', function (req, res) {
        let directory = './languages';
        let output = [];
        fs.readdir(directory, function (err, files) {
            files.forEach(function (file) {
                let regex = /\.(\w+)\.json/i;
                let match = file.match(regex);
                if (match.length > 0) {
                    output.push(match[1]);
                }
            });
            res.json(output);
        });
    });

    // Get grammar for the given language code
    app.get('/language/:code', function (req, res) {
        let code = req.params.code;
        let file = './languages/lang.' + code + '.json';
        fs.readFile(file, 'utf8', function (err, data) {
            if (!err && data) {
                let obj = JSON.parse(data);
                res.json(obj);
            }
        });
    });
}

