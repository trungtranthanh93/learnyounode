/**
 * Created by tranthanhtrung on 12/23/2016.
 */
var http = require('http');
var fs = require('fs');

var server = http.createServer((request, response)=> {
    response.writeHead(200, {'content-type': 'text/plain'})
    fs.createReadStream(process.argv[3]).pipe(response)
})
server.listen(process.argv[2]);