/**
 * Created by tranthanhtrung on 12/22/2016.
 */
var fs = require('fs');
var path = require('path');
module.exports = function (dir, ext, callback) {
    var exts = `.${ext}`;
    fs.readdir(dir, function (err, list) {
        if (err) return callback(err);
        var arr = list.toString().split(',');
        var arrFile = arr.filter((file)=>
            (path.extname(file) == exts)
        );
        callback(null, arrFile);
    })
}