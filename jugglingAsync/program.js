/*
  This problem is the same as the previous problem (HTTP COLLECT) in that
  you need to use http.get(). However, this time you will be provided with
  three URLs as the first three command-line arguments.

  You must collect the complete content provided to you by each of the URLs
  and print it to the console (stdout). You don't need to print out the
  length, just the data as a String; one line per URL. The catch is that you
  must print them out in the same order as the URLs are provided to you as
  command-line arguments.


*/



const http = require('http');
const concatSream = require('concat-stream');
const url = [process.argv[2],process.argv[3],process.argv[4]];
let dataObj = {};


for (let i = 0; i < url.length; i++){
    http.get(url[i],(res)=>{
        res.setEncoding('utf8');
        res.on("error",(err) => console.error(err))
           .pipe(concatSream((data)=> {
                            dataObj[i] = data;
                            if (Object.keys(dataObj).length === 3){
                                let keys = Object.keys(dataObj)
                                keys.forEach(item => console.log(dataObj[item]))}
    }))
  })
}



