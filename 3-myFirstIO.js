/**
 * Created by tranthanhtrung on 12/16/2016.
 */
var fs =require('fs');
var data = fs.readFileSync(process.argv[2]);
var numberOfNewLines = data.toString().split('\n').length -1;
console.log(numberOfNewLines);