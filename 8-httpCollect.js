/**
 * Created by tranthanhtrung on 12/22/2016.
 */
var http = require('http');
var concat = require('concat-stream');
var body = '';
http.get(process.argv[2], (res) => {
    res.setEncoding('utf8');
    /*    res.on('data', (chunk) => {
     body += chunk.toString();
     })
     res.on('end', () => {
     console.log(body.length);
     console.log(body);
     })*/
    res.on('error', console.error)
    res.pipe(concat((data) => {
        console.log(data.toString().length);
        console.log(data.toString());
    }))

}).on('error', console.error)