/**
 * Created by tranthanhtrung on 12/22/2016.
 */
var urls = process.argv.slice(2);
var http = require('http');
var arr = [];
j = 0;
urls.forEach((element, index)=> {
    http.get(element, (response) => {
        var body = '';
        response.setEncoding('utf8');
        response.on('error', console.error);
        response.on('data', (chunk) => {
            body += chunk;
        });
        response.on('end', ()=> {arr[index]= body;
            j++;
            if(j==3){
                arr.forEach((element)=>(console.log(element)));
            }
        });
    }).on('error', console.error);
})


