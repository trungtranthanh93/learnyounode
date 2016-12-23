/**
 * Created by tranthanhtrung on 12/23/2016.
 */
var net = require('net');
var date = new Date();
function zeroFill(i) {
    return (i < 10 ? '0' : '') + i;
}
var strDate = `${date.getFullYear()}-${zeroFill(date.getMonth() + 1)}-${zeroFill(date.getDate())} ${zeroFill(date.getHours())}:${zeroFill(date.getMinutes())}\n`;
var server = net.createServer(function (socket) {
    socket.write(strDate);
    socket.end();
}).on('error', console.error);
server.listen(process.argv[2] || 8000);
