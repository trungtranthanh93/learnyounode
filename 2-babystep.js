/**
 * Created by tranthanhtrung on 12/16/2016.
 */
var arr = process.argv.slice(2);
var sum = arr.map(x=> Number(x)).reduce((x,y)=> x+y);
console.log(sum);