const http = require('http');

const server = http.createServer((request, response) => {
    // res.setHeader('Content-Type', 'text/html;charset=utf-8');
    // res.setHeader('Access-Control-Allow-Origin', '*');
    // res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE');
    // res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Access-Control-Allow-Headers');
    // res.setHeader('Access-Control-Allow-Credentials', true);
    // res.setHeader('Access-Control-Max-Age', 3600);
    // res.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' });//设置响处理处理处理处理处理处理处理处理处理处理处理处理处理处理处理处理处理处理处理处理处理处理处理处理处理处理处理处理处理处理处理处理处理处理处理�
    // http://127.0.0.1:9000/search?keyword=h5&num=1
    //获取请求的方法
    console.log(request.method);

    //  console.log(request.url);//只包含 url中的路径与查询字符串
     //获取HTTP的协议版本号
    //  console.log(request.httpVersion);
    
    //获取HTTP请求头
    // console.log(request.headers);
    //  console.log(request.headers.host);
    response.end('http');//设置响应体

});

server.listen(9000,() => {
   
    console.log('服务已启动了.....');
})