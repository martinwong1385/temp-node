const http = require('http');

const server = http.createServer((req, res) =>{
    console.log(req);
    res.write('<h1>Hello World</h1>');
    res.end();
}).listen(8080);