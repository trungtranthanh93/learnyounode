/**
 * Created by tranthanhtrung on 12/23/2016.
 */
var http = require('http');
var url = require('url');
var server = http.createServer(function (req, res) {
    var urls = url.parse(req.url, true);
    if (urls.pathname == '/api/parsetime') {
        var isos = urls.query.iso;
        var date = new Date(isos);
        var obj = {
            "hour": date.getHours(),
            "minute": date.getMinutes(),
            "second": date.getSeconds()
        }
        res.end(JSON.stringify(obj));

    } else if (urls.pathname == '/api/unixtime') {
        var isos = urls.query.iso;
        var date = new Date(isos);
        var obj = {
            "unixtime": date.getTime()
        }
        res.end(JSON.stringify(obj));
    }else {
        res.end();
    }
})
server.listen(process.argv[2]);

