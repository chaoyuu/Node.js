const http = require('http');

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html;charset=utf-8');
    // res.setHeader('Access-Control-Allow-Origin', '*');
    // res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE');
    // res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Access-Control-Allow-Headers');
    // res.setHeader('Access-Control-Allow-Credentials', true);
    // res.setHeader('Access-Control-Max-Age', 3600);
    // res.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' });//设置响处理处理处理处理处理处理处理处理处理处理处理处理处理处理处理处理处理处理处理处理处理处理处理处理处理处理处理处理处理处理处理处理处理处理处理�
    res.end('你好');//设置响应体

});

server.listen(9000,() => {
   
    console.log('服务已启动了.....');
})