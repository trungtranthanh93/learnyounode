/**
 * Created by tranthanhtrung on 12/22/2016.
 */
var http = require('http');

http.get(process.argv[2], (res) => {
    res.setEncoding('utf8');
    res.on('data', console.log);
    res.on('error', console.error);

}).on('error', console.error);