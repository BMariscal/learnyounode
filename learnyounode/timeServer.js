/*

  Write a TCP time server!

  Your server should listen to TCP connections on the port provided by the
  first argument to your program. For each connection you must write the
  current date & 24 hour time in the format:

     "YYYY-MM-DD hh:mm"

  followed by a newline character. Month, day, hour and minute must be
  zero-filled to 2 integers. For example:

     "2013-07-06 17:42"

  After sending the string, close the connection.

*/


const net = require('net');
const port = process.argv[2]
const server = net.createServer((socket) =>{
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() >= 10? (parseInt(date.getMonth())+1): '0' + (parseInt(date.getMonth())+1);
    const day = date.getDate() >= 10? date.getDate() : '0' + date.getDate();
    const hour = date.getHours() >= 10? date.getHours(): '0' + date.getHours();
    const minutes = date.getMinutes() >= 10? date.getMinutes() : '0' + date.getMinutes();
    socket.end(`${year}-${month}-${day} ${hour}:${minutes}\n`)

}).on('error', (err)=>{
    throw new Error('Whoops!')
});
server.listen(port)