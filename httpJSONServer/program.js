/*
Write an HTTP server that serves JSON data when it receives a GET request
  to the path '/api/parsetime'. Expect the request to contain a query string
  with a key 'iso' and an ISO-format time as the value.

  For example:

  /api/parsetime?iso=2013-08-10T12:10:15.474Z

  The JSON response should contain only 'hour', 'minute' and 'second'
  properties. For example:

     {
       "hour": 14,
       "minute": 23,
       "second": 15
     }

  Add second endpoint for the path '/api/unixtime' which accepts the same
  query string but returns UNIX epoch time in milliseconds (the number of
  milliseconds since 1 Jan 1970 00:00:00 UTC) under the property 'unixtime'.
  For example:

     { "unixtime": 1376136615474 }

  Your server should listen on the port provided by the first argument to
  your program.


*/
const http = require('http');
const urlParser = require('url');
const port = Number(process.argv[2]);



let server = http.createServer((req,res)=>{
    const url = urlParser.parse(req.url, true);
    if (req.method === "GET" && url.pathname === '/api/parsetime'){
        res.writeHead(200, { 'Content-Type': 'application/json' });
        const time = url.query.iso;
        const match = time.match(/[^T]+$/g)
        const timearr = match[0].split('.').slice(0,1)[0].split(':')
        const hour = Number(timearr[0])-7;
        const minute = Number(timearr[1]);
        const second = Number(timearr[2]);
        res.end(JSON.stringify({"hour":hour,"minute":minute,"second":second}))

    }else if (req.method === "GET" && url.pathname === '/api/unixtime'){
        res.writeHead(200, { 'Content-Type': 'application/json' });
        let date = new Date(url.query.iso)
        let unixTime = date.getTime()
        res.end(JSON.stringify({"unixtime": unixTime}));


    }else{
        res.statusCode = 404;
        res.end('send me a GET request');
    }
}).on('error',(err)=> console.error(err))
  .listen(port);