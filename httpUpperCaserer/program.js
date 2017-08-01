const http = require('http');
const map = require('through2-map');
const port = Number(process.argv[2]);

let server = http.createServer((req,res)=>{

    if (req.method === "POST"){
        res.writeHead(200, {"Content-Type": "text/plain"});
        req.pipe(map((chunk) =>{
         return chunk.toString().toUpperCase();
     })).pipe(res)
    }else{
        res.statusCode = 404;
        res.end('send me a POST');
    }

}).on('error', (err)=> console.error(err))
  .listen(port);