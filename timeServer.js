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