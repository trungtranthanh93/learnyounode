/**
 * Created by tranthanhtrung on 12/23/2016.
 */
var http = require('http');
var server = http.createServer( (req,res) => {
    var body = '';
    req.on('data',(chunk)=> {body += chunk})
    req.on('end',()=> {res.end(body.toUpperCase())})
});
server.listen(process.argv[2]);