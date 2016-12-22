var fs = require('fs');
var path = require('path');

var ext = `.${process.argv[3]}`;
fs.readdir(process.argv[2], function (err, list) {
    var arr = list.toString().split(',');
    arr.filter((file)=>
        (path.extname(file) == ext)
    ).forEach(file => console.log(file));
})