/**
 * Created by tranthanhtrung on 12/22/2016.
 */
var myModule = require('./myModule.js');
var dir = process.argv[2];
var ext = process.argv[3];
myModule(dir,ext,function (err, data) {
    if(err) throw  err;
    data.forEach(file => console.log(file));
})