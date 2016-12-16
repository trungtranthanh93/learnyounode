/**
 * Created by tranthanhtrung on 12/16/2016.
 */
var fs = require('fs');
fs.readFile(process.argv[2],'utf8',function (err,data) {
    if(err)throw err;
    var numberOfNewLines = data.toString().split('\n').length-1;
    console.log(numberOfNewLines);
})